function turnOnRed() {
    document.getElementById("stopLight").style.backgroundColor = "#cf1124";
    document.getElementById("stopButton").style.backgroundColor = "#cf1124";
    document.getElementById("readyLight").style.backgroundColor = "#1f1d41";
    document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
    document.getElementById("goLight").style.backgroundColor = "#1f1d41";
    document.getElementById("goButton").style.backgroundColor = "#1f1d41";
}

function turnOnYellow() {
    document.getElementById("readyLight").style.backgroundColor = "#f7c948";
    document.getElementById("readyButton").style.backgroundColor = "#f7c948";
    document.getElementById("goLight").style.backgroundColor = "#1f1d41";
    document.getElementById("goButton").style.backgroundColor = "#1f1d41";
    document.getElementById("stopLight").style.backgroundColor = "#1f1d41";
    document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
}

function turnOnGreen() {
    document.getElementById("goLight").style.backgroundColor = "#199473";
    document.getElementById("goButton").style.backgroundColor = "#199473";
    document.getElementById("readyLight").style.backgroundColor = "#1f1d41";
    document.getElementById("readyButton").style.backgroundColor = "#1f1d41";
    document.getElementById("stopLight").style.backgroundColor = "#1f1d41";
    document.getElementById("stopButton").style.backgroundColor = "#1f1d41";
}