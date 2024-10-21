let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');  

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let ms = date.getMilliseconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm+1/10*ss;
    let sRotation = ss*6 + 6/1000*ms;
    
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
    var AM_PM =  hh > 11 ? "PM" : "AM";
    var hour = hh > 12 ? hh - 12 : hh;
    hour = hh = 0 ? hour + 12 : hour;
    hour = hh < 10 ? "0" + hour : hour;
    var minute = mm < 10 ? "0" + mm : mm;
    var second = ss < 10 ? "0" + ss: ss;

    document.getElementById('d-hr').innerHTML = hour;
    document.getElementById('d-min').innerHTML = minute;
    document.getElementById('d-sec').innerHTML = second;
    document.getElementById('pm-am').innerHTML = AM_PM;
}
const displayInterval = setInterval(displayTime, 1);   
let memSec = 400;
let totalSec = memSec;
let t_hr = Math.floor(totalSec/3600);
let t_min = Math.floor(totalSec%3600/60);
let t_sec = totalSec%3600%60; 
t_hr = t_hr < 10 ? "0" + t_hr : t_hr;
t_min = t_min < 10 ? "0" + t_min : t_min;
t_sec = t_sec < 10 ? "0" + t_sec : t_sec;
document.getElementById('t-hr').innerHTML = t_hr;
document.getElementById('t-min').innerHTML = t_min;
document.getElementById('t-sec').innerHTML = t_sec;
function timer() {
    if(totalSec == 0) {
        clearInterval(timerDisplayInteral);
    }
    t_hr = Math.floor(totalSec/3600);
    t_min = Math.floor(totalSec%3600/60);
    t_sec = totalSec%3600%60; 
    t_hr = t_hr < 10 ? "0" + t_hr : t_hr;
    t_min = t_min < 10 ? "0" + t_min : t_min;
    t_sec = t_sec < 10 ? "0" + t_sec : t_sec;
    document.getElementById('t-hr').innerHTML = t_hr;
    document.getElementById('t-min').innerHTML = t_min;
    document.getElementById('t-sec').innerHTML = t_sec;
    totalSec--;
}
let display_s = true;
let stopwatchInterval;
let HTotal = 0;
let MTotal = 0;
let STotal = 0;
let CSTotal = 0;
const startStopwatch = () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(stopwatch, 10);
    if(!display_s) {
        clearInterval(stopwatchInterval);
        display_s = true;
        document.getElementById("s-start").innerHTML = "Start";
    } else {
        display_s = false;
        document.getElementById("s-start").innerHTML = "Stop";
    } 
}
const resetStopwatch = () => {
    HTotal = 0;
    MTotal = 0;
    STotal = 0;
    CSTotal = 0;
    document.getElementById('s-hr').innerHTML = "00";
    document.getElementById('s-min').innerHTML = "00";
    document.getElementById('s-sec').innerHTML = "00";
    document.getElementById('s-csec').innerHTML = "00";
    clearInterval(stopwatchInterval);
    display_s = true;
    document.getElementById("s-start").innerHTML = "Start";
}
const stopwatch = () => {
    if(MTotal==60) {
        MTotal = 0;
        HTotal++;
    }
    if(STotal==60) {                                                                                            
        STotal = 0;
        MTotal++;
    }
    if(CSTotal==100) {
        CSTotal = 0;
        STotal++;
    }
    let s_hr = HTotal < 10 ? "0" + HTotal : HTotal;
    let s_min = MTotal < 10 ? "0" + MTotal : MTotal;
    let s_sec = STotal < 10 ? "0" + STotal : STotal;
    let s_csec = CSTotal < 10 ? "0" + CSTotal : CSTotal;
    document.getElementById('s-hr').innerHTML = s_hr;
    document.getElementById('s-min').innerHTML = s_min;
    document.getElementById('s-sec').innerHTML = s_sec;
    document.getElementById('s-csec').innerHTML = s_csec;
    CSTotal++;
}
let sw_start = document.getElementById("s-start");
let sw_reset = document.getElementById("s-reset");
sw_start.addEventListener("click", startStopwatch);
sw_reset.addEventListener("click", resetStopwatch);



