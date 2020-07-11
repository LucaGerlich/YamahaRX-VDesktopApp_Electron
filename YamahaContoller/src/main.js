//The Yamaha Api was done by PSeitz on Github (https://github.com/PSeitz/yamaha-nodejs)
const Yamaha = require("./yamahaapi/yamaha.js");
var yamaha = new Yamaha();

checkstate();
checkvol();

yamaha.getBasicInfo().done(function(basicInfo){
    basicInfo.getVolume();
    basicInfo.isMuted();
    basicInfo.isOn();
    basicInfo.getCurrentInput();
    basicInfo.getBass();
    basicInfo.getTreble();
    basicInfo.getZone();
    console.log(" Vol: ", basicInfo.getVolume(), ", Muted: ", basicInfo.isMuted(),", isOn: ", basicInfo.isOn(), ", Input: ", basicInfo.getCurrentInput(),", Bass: ", basicInfo.getBass(),", Treble: ", basicInfo.getTreble(),", Zone: ", basicInfo.getZone());
})

function checkstate() {
    yamaha.isOn().done(function (resultOn) {
        //console.log("Reciver is ON: " + resultOn);
        if (resultOn == true) {
            document.getElementById("isOn").innerHTML = "On";
        } else {
            document.getElementById("isOn").innerHTML = "Off";
        }
    });
    yamaha.getBasicInfo().done(function(basicInfo){
        basicInfo.isMuted();
        if (basicInfo.isMuted() == true) {
            //document.getElementById("currentvol").innerHTML = "Your device is muted!";
            //alert("Your Device is muted")
        }
    })
    setTimeout(checkstate, 1000);
}

function checkvol() {
    yamaha.getBasicInfo().done(function(basicInfo){
    basicInfo.getVolume();
    document.getElementById("currentvol").innerHTML = basicInfo.getVolume();
    setTimeout(checkvol, 100);
    })
}

/*function clearelementID(){
    document.getElementById("status").innerHTML = " "();
    setTimeout(clearelementID, 1000);
}*/

function turnedOn(){
    yamaha.powerOn();
    console.log("device turned on");
    document.getElementById("status").innerHTML = "Device was turned on";
    document.getElementById("isOn").innerHTML = "On";
}

function turnedOff(){
    yamaha.powerOff();
    console.log("device turned off");
    document.getElementById("status").innerHTML = "Device was turned off";
    document.getElementById("isOn").innerHTML = "Off";
}

function volumeup(){
    yamaha.volumeUp(5);
    console.log("The Volume has been turned up");
    document.getElementById("status").innerHTML = "Volume has been turned up by 0.5 DB";
}

function volumedown(){
    yamaha.volumeDown(5);
    console.log("The volume has been turned down");
    document.getElementById("status").innerHTML = "Volume has been turned down by 0.5 DB";
}

function mutedevice() {
    yamaha.muteOn();
    console.log("Device is Muted");
    document.getElementById("status").innerHTML = "Device is now muted";
}

function unmutedevice() {
    yamaha.muteOff();
    console.log("Device is Unmuted");
    document.getElementById("status").innerHTML = "Device is now unuted";
}

function changesourcetoanalog() {
    yamaha.setInputTo("AUDIO");
    console.log("Source is changed to Audio");
    document.getElementById("status").innerHTML = "Source was changed to Audio/Analog";
    clearelementID()
}