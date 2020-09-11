//The Yamaha Api was done by PSeitz on Github (https://github.com/PSeitz/yamaha-nodejs)
const Yamaha = require("./yamahaapi/yamaha.js");
var yamaha = new Yamaha("192.168.178.32");

checkstate();
checkvol();
checkinput();
checkbnt()

function checkstate() {
    yamaha.isOn().done(function (resultOn) {
        if (resultOn == true) {
            document.getElementById("isOn").innerHTML = "On";
        } else {
            document.getElementById("isOn").innerHTML = "Off";
        }
    });
    setTimeout(checkstate, 1000);
}

function checkvol() {
    yamaha.getBasicInfo().done(function(basicInfo){
        basicInfo.getVolume();
        document.getElementById("currentvol").innerHTML = basicInfo.getVolume();
    });
    setTimeout(checkvol, 100);
}

function checkbnt(){
    yamaha.getBasicInfo().done(function(basicInfo){
        basicInfo.getBass();
        document.getElementById("bass").innerHTML = basicInfo.getBass();
        basicInfo.getTreble();
        document.getElementById("treble").innerHTML = basicInfo.getTreble();
    });
    setTimeout(checkbnt, 1000);
}

function checkinput(){
    yamaha.getBasicInfo().done(function(basicInfo){
        basicInfo.getCurrentInput();
        document.getElementById("currentinput").innerHTML = basicInfo.getCurrentInput();
    });
    setTimeout(checkinput, 1000);
}

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

function setvolume() {
    yamaha.isOn().done(function (resultOn) {
        if (resultOn == true) {
            var volume = document.querySelector("#setvolume").value;
            if (volume >= -600 && volume <= -300) {
                yamaha.setVolumeTo(volume);
                console.log(volume);
            }
        } else {
            document.getElementById("status").innerHTML = "Your device is off";
        }
    });
}

function mutedevice() {
    yamaha.isOn().done(function (resultOn) {
        if (resultOn == true) {
            yamaha.muteOn();
            console.log("Device is Muted");
            document.getElementById("status").innerHTML = "Device is now muted";
        } else {
            document.getElementById("status").innerHTML = "Your device is off";
        }
    });    
}

function unmutedevice() {
    yamaha.isOn().done(function (resultOn) {
        if (resultOn == true) {
            yamaha.muteOff();
            console.log("Device is Unmuted");
            document.getElementById("status").innerHTML = "Device is now unmuted";
        } else {
            document.getElementById("status").innerHTML = "Your device is off";
        }
    });
}

function changesourcetoanalog() {
    yamaha.isOn().done(function (resultOn) {
        if (resultOn == true) {
            yamaha.setInputTo("AUDIO");
            console.log("Source is changed to Audio");
            document.getElementById("status").innerHTML = "Source was changed to Audio/Analog";
        } else {
            document.getElementById("status").innerHTML = "Your device is off";
        }
    });
}

function changesourcetonet() {
    yamaha.isOn().done(function (resultOn) {
        if (resultOn == true) {
            yamaha.setInputTo("NET");
            console.log("Source is changed to Spotify");
            document.getElementById("status").innerHTML = "Source was changed to NET/Spotify";
        } else {
            document.getElementById("status").innerHTML = "Your device is off";
        }
    });
}

function setbass() {
    yamaha.isOn().done(function (resultOn) {
        if (resultOn == true) {
            var bass = document.querySelector("#setbass").value;
            console.log(bass);
            yamaha.setBassTo(bass);
        } else {
            document.getElementById("status").innerHTML = "Your device is off";
        }
    });
}

function settreble() {
    yamaha.isOn().done(function (resultOn) {
        if (resultOn == true) {
            var treble = document.querySelector("#settreble").value;
            console.log(treble);
            yamaha.setTrebleTo(treble);
        } else {
            document.getElementById("status").innerHTML = "Your device is off";
        }
    });
}
