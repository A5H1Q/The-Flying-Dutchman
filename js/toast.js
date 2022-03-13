// Toast Logic

const NAME_ITEM = "el-toast",
 ICONS = {
  SUCCESS: {
   CLASSES: ["fa", "fa-check-circle"],
  },
  DANGER: {
   CLASSES: ["fa", "fa-times-circle"],
  },
  INFO: {
   CLASSES: ["fa", "fa-exclamation-circle"],
  },
  TOWER: {
   CLASSES: ["fa", "fa-signal"],
  },
  LOCK: {
   CLASSES: ["fa", "fa-lock"],
  },
  UNLOCK: {
   CLASSES: ["fa", "fa-unlock-alt"],
  },
  ROBOT: {
   CLASSES: ["fa", "fa-robot"],
  },
 },
 MOBILE_RESOLUTION = 720;

let $templateItem = document.querySelector("#elToastItem");
$templateItem = $templateItem.cloneNode(true).content;

class ToastItem extends HTMLLIElement {
 constructor() {
  super();
  this._eventOnRemove = new CustomEvent("TOAST_REMOVED") || document.createEvent("TOAST_REMOVED");
  this.isVisible = false;
 }

 connectedCallback() {
  let type = this.getAttribute("type").toUpperCase(),
   description = this.getAttribute("description"),
   timeout = Number(this.getAttribute("timeout")),
   hideClose = Boolean(JSON.parse(this.getAttribute("hide-close")));

  if (!ICONS.hasOwnProperty(type)) {
   throw new Error(`[${NAME_ITEM}] Tipo inválido de toast`);
  }

  let $item = $templateItem.cloneNode(true),
   $itemDescription = $item.querySelector(`.${NAME_ITEM}__description`),
   $itemIcon = $item.querySelector(`.${NAME_ITEM}__icon`),
   $icon = document.createElement("i"),
   $itemProgress = $item.querySelector(`.${NAME_ITEM}__progress`),
   $itemProgressBar = $item.querySelector(`.${NAME_ITEM}__bar`),
   $itemClose = $item.querySelector(`.${NAME_ITEM}__close`),
   $itemCloseAction = $item.querySelector(`.${NAME_ITEM}__close button`),
   $container = this.parentElement.parentElement;

  this.addEventListener("TOAST_REMOVED", this.checkVisible, false);

  if (hideClose) {
   $itemClose.remove();
  } else {
   $itemCloseAction.addEventListener("click", (event) => $container.remove(this.id));
  }

  $icon.classList.add(...ICONS[type].CLASSES);
  $itemIcon.appendChild($icon);

  this.classList.add(`${NAME_ITEM}__item`);
  this.classList.add(`${NAME_ITEM}__item--${type.toLowerCase()}`);

  if (description.length > 100) {
   setShortDescription();
  } else {
   setFullDescription();
  }

  function setFullDescription(event) {
   $itemDescription.innerText = description;

   if (!event) return;

   let viewLess = document.createElement("button");
   viewLess.innerText = "View less";
   viewLess.addEventListener("click", setShortDescription);

   $itemDescription.appendChild(viewLess);
  }

  function setShortDescription() {
   let viewMore = document.createElement("button");
   viewMore.innerText = "View more";
   viewMore.addEventListener("click", setFullDescription);

   $itemDescription.innerText = description.slice(0, 99) + "...";
   $itemDescription.appendChild(viewMore);
  }

  this.appendChild($item);

  this.checkVisible();

  if (timeout === 0) {
   $itemProgress.classList.add(`${NAME_ITEM}__progress--hide`);
   return;
  }

  let countdownValue = 100,
   size = timeout - countdownValue;

  let checking = setInterval(() => {
   if (this.isVisible && !$container.isMouseOver()) {
    $itemProgressBar.style.width = (size * 100) / (timeout - countdownValue) + "%";

    size -= countdownValue;
   }

   if (size < -countdownValue) {
    $container.remove(this.id);

    clearInterval(checking);
   }
  }, countdownValue);
 }

 checkVisible() {
  if (this.parentNode) {
   let numCards = document.body.clientWidth > MOBILE_RESOLUTION ? 3 : 1;
   this.isVisible = Array.from(this.parentNode.children).indexOf(this) < numCards;
  }
 }

 remove() {
  let parent = this.parentElement;
  this.classList.add(`${NAME_ITEM}__item--removing`);
  if (!parent || parent.nodeType !== Node.ELEMENT_NODE || !this || this.nodeType !== Node.ELEMENT_NODE) return false;

  setTimeout(() => {
   if (parent.hasChildNodes() && parent.contains(this)) {
    parent.removeChild(this);

    parent.parentElement.dispatchEvent(this._eventOnRemove);

    return true;
   }
   return false;
  }, 300);
 }

 setOnClose(action) {
  let $itemCloseAction = this.querySelector(`.${NAME_ITEM}__close button`);

  $itemCloseAction.addEventListener("click", action);
 }

 setActions(actions) {
  if (!actions.length) {
   return;
  }

  let $itemActions = this.querySelector(`.${NAME_ITEM}__action`);

  actions.map((action) => {
   if (typeof action !== "object") {
    throw new Error(`[${NAME_ITEM}] Ação inválida`);
    return;
   }

   let $action = document.createElement("button");

   if (typeof action.title !== "string") {
    throw new Error(`[${NAME_ITEM}] Informe um título válido para a ação`);
   }

   $action.innerText = action.title;

   if (typeof action.onClick !== "function") {
    throw new Error(`[${NAME_ITEM}] Informe um função válida para a ação`);
   }

   $action.addEventListener("click", action.onClick);

   $itemActions.appendChild($action);
  });
 }

 static is() {
  return `${NAME_ITEM}-item`;
 }
}

customElements.define(ToastItem.is(), ToastItem, {extends: "li"});

const NAME = "el-toast",
 TIMEOUT_REMOVE = 8000,
 DOM_LIMIT = 5;

let $template = document.querySelector("#elToast");
$template = $template.cloneNode(true).content.querySelector(`.${NAME}`);

class Toast extends HTMLElement {
 constructor() {
  super();
  this._eventOnRemove = new CustomEvent("TOAST_REMOVED") || document.createEvent("TOAST_REMOVED");
  this._mouseOver = false;
  this._list = {};
  this._listCache = {};
 }

 isMouseOver() {
  return this._mouseOver;
 }

 setMouseOver(value) {
  this._mouseOver = Boolean(value);
 }

 connectedCallback() {
  this.appendChild($template);

  this.addEventListener("TOAST_REMOVED", broadcastToastRemoved, false);
  this.addEventListener("mouseenter", handleMouseOver);
  this.addEventListener("touchstart", handleMouseOver);
  this.addEventListener("touchend", handleMouseOut);
  document.body.addEventListener("touchend", handleMouseOut);
  this.addEventListener("mouseleave", handleMouseOut);

  function handleMouseOver() {
   $template.classList.add(`${NAME}--paused`);
   this.setMouseOver(true);
  }

  function handleMouseOut() {
   $template.classList.remove(`${NAME}--paused`);
   this.setMouseOver(false);
  }

  function broadcastToastRemoved() {
   Object.values(this._list)
    .slice(0, 5)
    .map((toast) => {
     toast.dispatchEvent(this._eventOnRemove);
    });
  }
 }

 publish(config) {
  let type = String(config.type || "info"),
   description = String(config.description || ""),
   timeout = config.timeout < 0 || typeof config.timeout !== "number" ? TIMEOUT_REMOVE : config.timeout,
   onClose = typeof config.onClose === "function" ? config.onClose : function () {},
   hideClose = Boolean(config.hideClose),
   actions = typeof config.actions === "object" ? config.actions : [],
   $toast = document.createElement("li", {is: `${NAME}-item`}),
   id = "toast_" + generateId();

  if (!description) {
   throw new Error(`[${NAME}] No description`);
  }

  $toast.id = id;
  $toast.setAttribute("type", type);
  $toast.setAttribute("description", description);
  $toast.setAttribute("timeout", timeout);
  $toast.setAttribute("hide-close", hideClose);

  $toast = $toast.cloneNode(true);

  if (Object.values(this._list).length > DOM_LIMIT) {
   this._listCache[id] = {
    el: $toast,
    hideClose: hideClose,
    onClose: onClose,
    actions: actions,
   };
  } else {
   $toast = $template.appendChild($toast);

   if (!$toast) {
    return;
   }
   if (!hideClose) {
    $toast.setOnClose(onClose);
   }

   if (actions.length) {
    $toast.setActions(actions);
   }

   this._list[id] = $toast;
  }

  function generateId() {
   return Math.random().toString(36).substr(2, 9);
  }

  return id;
 }
 remove(id) {
  if (this._list.hasOwnProperty(id)) {
   this._list[id].remove();

   delete this._list[id];
  } else if (this._listCache.hasOwnProperty(id)) {
   delete this._listCache[id];
  } else {
   return;
  }

  if (Object.keys(this._listCache).length) {
   let keyCached = Object.keys(this._listCache)[0],
    valueCached = Object.values(this._listCache)[0];

   valueCached.el = $template.appendChild(valueCached.el);

   if (!valueCached.hideClose) {
    valueCached.el.setOnClose(valueCached.onClose);
   }

   if (valueCached.actions.length) {
    valueCached.el.setActions(valueCached.actions);
   }

   this._list[keyCached] = valueCached.el;

   delete this._listCache[keyCached];
  }
 }
 static is() {
  return NAME;
 }
}

customElements.define(Toast.is(), Toast);

let toast = document.querySelector("el-toast");
let idToast = undefined;
idToast = toast.publish({
 type: "info",
 hideClose: true,
 description: " By using this utility, you're agreeing to the Terms and conditions / license",
 timeout: 10000,
 actions: [
  {
   title: " READ MORE",
   onClick: function () {
    lawyer(1);
    toast.remove(idToast);
   },
  },
 ],
});

/*
Example Usage 
----------------------------------------------------------------

toast.publish({
 type: "danger",
 description: " orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
 timeout: 800000,
});

toast.publish({
 type: "tower",
 description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
 timeout: 8000,
});
toast.publish({
 type: "info",
 description: " Lorem Ipsum is simply.",
 timeout: 0,
 actions: [
  {
   title: "OK",
   onClick: function () {
    alert("OK");
   },
  },
 ],
});
let idToast6 = undefined;
idToast6 = toast.publish({
 type: "info",
 description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
 timeout: 0,
 hideClose: true,
 actions: [
  {
   title: "OK",
   onClick: function () {
    toast.remove(idToast6);
   },
  },
 ],
});
toast.publish({
 type: "robot",
 hideClose: true,
 description: " Lorem Ipsum is simply.",
 timeout: 100000,
});
toast.publish({
 type: "info",
 description: " Lorem Ipsum is simply.",
 timeout: 20000,
 actions: [
  {
   title: "Try again",
   onClick: function () {
    alert("Try again");
   },
  },
  {
   title: "Ignore",
   onClick: function () {
    alert("Ignore");
   },
  },
  {
   title: "Custom",
   onClick: function () {
    alert("Custom Button");
   },
  },
 ],
});
toast.publish({
 type: "lock",
 description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
});
toast.publish({
 type: "unlock",
 description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
});

*/
