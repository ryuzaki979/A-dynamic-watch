let  hour = document.getElementById('hour');
let  minute = document.getElementById('minute');
let  second = document.getElementById('second');
let  progress = document.getElementById('progress');

function getTime(){
    let time = new Date;
    let hr = time.getHours();
    hour.innerText= hr;
    let min = time.getMinutes();
    minute.innerText= min;
    let sec = time.getSeconds();
    second.innerText= sec;
    progress.style.width = (sec/60)* 100 + '%';
}

setInterval(getTime,1000);