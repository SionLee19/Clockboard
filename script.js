let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
// var reset = document.getElementById('reset');
// let div = document.querySelector('div');

// let offsetX, offsetY;

// const move = (e) => {
//     div.style.left = `${e.clientX - offsetX}px`;
//     div.style.top = `${e.clientY - offsetY}px`;
// }

//     div.addEventListener("mousedown", (e) => {
//     offsetX = e.clientX - div.offsetLeft;
//     offsetY = e.clientY - div.offsetTop;
//     document.addEventListener("mousemove", move);
// });
// document.addEventListener("mouseup", () => 
// {document.removeEventListener("mousemove", move);
// });
// function move() {

// }  
function displayTime() {
    //declares date object
    let date = new Date();

    //declares hour, minute, seconds, and milliseconds
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
var memSec = 4;
var totalSec = memSec;
function timer() {
    if(totalSec == 0) {
        clearInterval(timerDisplayInteral);
    }
    var t_hr = Math.floor(totalSec/3600);
    var t_min = Math.floor(totalSec%3600/60);
    var t_sec = totalSec%3600%60;    
    t_hr = t_hr < 10 ? "0" + t_hr : t_hr;
    t_min = t_min < 10 ? "0" + t_min : t_min;
    t_sec = t_sec < 10 ? "0" + t_sec : t_sec;
    document.getElementById('t-hr').innerHTML = t_hr;
    document.getElementById('t-min').innerHTML = t_min;
    document.getElementById('t-sec').innerHTML = t_sec;
    totalSec--;
}
const displayInterval = setInterval(displayTime, 1);   
const timerDisplayInteral = setInterval(timer, 1000);
console.log(totalSec);
// if(totalSec == 0) {
//     clearInterval(timerDisplayInteral);
// }


