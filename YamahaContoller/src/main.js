//The Yamaha Api was done by PSeitz on Github (https://github.com/PSeitz/yamaha-nodejs)

const electron = require('electron')
const Yamaha = require("./YamahaApi/yamaha.js.js");
var yamaha = new Yamaha();

//Buttons 
//const turnOn = document.getElementById("TurnOn");
//const turnOff = document.getElementById("Turnff");
//document.getElementById("TurnOff").onclick = function() {turnedOff()};

yamaha.isOn().done(function (resultOn) {
    console.log("Reciver is ON: " + resultOn);
});

function turnedOn(){
    console.log("device turned on");
    document.getElementById("isOn").innerHTML = "On";
    yamaha.powerOn();
}

function turnedOff(){
    console.log("device turned off");
    document.getElementById("isOn").innerHTML = "Off";
    yamaha.powerOff();
}

function volumeup(){
    yamaha.volumeUp(5)
    console.log("The Volume has been turned up");
}

function volumedown(){
    yamaha.volumeDown(5)
    console.log("The volume has been turned down")
}

function mutedevice() {
    yamaha.muteOn()
    console.log("Device is Muted")
}

function unmutedevice() {
    yamaha.muteOff()
    console.log("Device is Unmuted")
}