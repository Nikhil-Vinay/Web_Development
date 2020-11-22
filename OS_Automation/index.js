/* This script requires robot.js */
/* npm install robotjs */
/* var id = setInterval(func, time_in_mill_sec);  // it will keep on calling func after each time clock 
                                                till cleared
   clearInterval(id);

   SetTimeout(func, time_in_millisec);
*/ 

/* We can write function inside function as:
   SetTimeout(function(){
      // do something
   }, 1000);
   SetTimeout(()=>{ 
       // do something
   }, 1000);
*/

var robot = require("robotjs");
var fs = require('fs');

OpenVMBox();

function OpenVMBox() {
    robot.moveMouseSmooth(70, 693);
    robot.mouseClick();
    robot.typeString("Oracle VM VirtualBox");
    robot.keyTap("enter");
    setTimeout(function(){
        robot.moveMouseSmooth(190, 77);
        robot.mouseClick();
        setTimeout(loginVMBox, 36000);
    }, 5000);
}

async function loginVMBox() {
    robot.moveMouseSmooth(617, 407);
    robot.mouseClick();
    robot.moveMouseSmooth(519, 517);
    robot.mouseClick();
    robot.typeString("N-13&n-08");
    robot.keyTap("enter");

    setTimeout(function(){
        robot.moveMouseSmooth(232, 297);
        robot.mouseToggle("down", "right");
        robot.mouseToggle("up", "right");
        robot.moveMouseSmooth(237, 407);
        robot.mouseClick();
        setTimeout(openChrome, 2000);
    }, 5000);

   /* setTimeout(function(){
        robot.typeString("sw2");
        robot.keyTap("enter");
    }, 2000);

    setTimeout(function(){
        robot.typeString("Welcome123");
        robot.keyTap("enter");
    }, 1000);
    */
}

function openChrome(){
    robot.moveMouseSmooth(70, 693);
    robot.mouseClick();
    robot.typeString("chrome");
    robot.keyTap("enter");
    setTimeout(openTabs, 2000);
}

function openTabs() {
    var rdata = fs.readFileSync("./chrome.json");
    var tabs = JSON.parse(rdata);

    for(let i = 0; i < tabs.length; i++){
        for(let j = 0; j < tabs[i].length; j++){
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");
            if(j < tabs[i].length-1){
                robot.keyToggle("control", "down");
                robot.keyTap("t");
                robot.keyToggle("control", "up");
            } else if (i < tabs.length-1){
                robot.keyToggle("control", "down");
                robot.keyTap("n");
                robot.keyToggle("control", "up");
            }
        }
    }

    setTimeout(WriteHi, 2000);
}

function WriteHi() {
    robot.moveMouseSmooth(200, 200);
    let start_x = 285;
    let start_y = 275;
    let ht = 80;
    let wd = 50;
    let letter_gap = 30;
    let word_gap = 60;
    robot.moveMouseSmooth(70, 693);
    robot.mouseClick();
    robot.typeString("mspaint");
    robot.keyTap("enter");
    // H
    robot.moveMouseSmooth(start_x, start_y);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x, start_y + ht);
    robot.mouseToggle("up", "left");
    robot.moveMouseSmooth(start_x+wd, start_y);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x+wd, start_y + ht);
    robot.mouseToggle("up", "left");
    robot.moveMouseSmooth(start_x, start_y+ht/2);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x+wd, start_y + ht/2);
    robot.mouseToggle("up", "left");

    // I
    start_x += wd;
    start_x += letter_gap;
    robot.moveMouseSmooth(start_x, start_y);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x, start_y + ht);
    robot.mouseToggle("up", "left");

    // N
    start_x += word_gap;
    robot.moveMouseSmooth(start_x, start_y);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x, start_y + ht);
    robot.mouseToggle("up", "left");
    robot.moveMouseSmooth(start_x + wd, start_y);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x+wd, start_y + ht);
    robot.mouseToggle("up", "left");
    robot.moveMouseSmooth(start_x, start_y);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x+wd, start_y + ht);
    robot.mouseToggle("up", "left");

    // I
    start_x += wd;
    start_x += letter_gap;
    robot.moveMouseSmooth(start_x, start_y);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x, start_y + ht);
    robot.mouseToggle("up", "left");

    // K
    start_x += letter_gap;
    robot.moveMouseSmooth(start_x, start_y);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x, start_y + ht);
    robot.mouseToggle("up", "left");
    robot.moveMouseSmooth(start_x, start_y+ht/2);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x+wd, start_y);
    robot.mouseToggle("up", "left");
    robot.moveMouseSmooth(start_x, start_y+ht/2);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x+wd, start_y+ht);
    robot.mouseToggle("up", "left");

    // H
    start_x += wd;
    start_x += letter_gap;
    robot.moveMouseSmooth(start_x, start_y);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x, start_y + ht);
    robot.mouseToggle("up", "left");
    robot.moveMouseSmooth(start_x+wd, start_y);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x+wd, start_y + ht);
    robot.mouseToggle("up", "left");
    robot.moveMouseSmooth(start_x, start_y+ht/2);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x+wd, start_y + ht/2);
    robot.mouseToggle("up", "left");

    // I
    start_x += wd;
    start_x += letter_gap;
    robot.moveMouseSmooth(start_x, start_y);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x, start_y + ht);
    robot.mouseToggle("up", "left");

    // L
    start_x += letter_gap;
    robot.moveMouseSmooth(start_x, start_y);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x, start_y + ht);
    robot.mouseToggle("up", "left");
    robot.moveMouseSmooth(start_x, start_y+ht);
    robot.mouseToggle("down", "left");
    robot.dragMouse(start_x+wd, start_y + ht);
    robot.mouseToggle("up", "left");

}

/* used to get mouse click location */
/* console.log(robot.getMousePos()) */ 
