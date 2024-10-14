let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

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
function moveable() {

}
function displayTime() {
    let date = new Date();
    // Getting hour, mins, secs from date
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
    var AM_PM =  hh < 11 ? "PM" : "AM";
    var hour = hh > 12 ? hh - 12 : hh;
    hour = hh < 10 ? "0" + hour : hour;
    var minute = mm < 10 ? "0" + mm : mm;
    var second = ss < 10 ? "0" + ss: ss;

    document.getElementById('d-hr').innerHTML = hour;
    document.getElementById('d-min').innerHTML = minute;
    document.getElementById('d-sec').innerHTML = second;
    document.getElementById('pm-am').innerHTML = AM_PM;

}
setInterval(displayTime, 1);