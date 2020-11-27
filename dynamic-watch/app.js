let  hour = document.getElementById('hour');
let  minute = document.getElementById('minute');
let  second = document.getElementById('second');
let  progress = document.getElementById('progress');
let  showDay = document.getElementById('showDay');
let  showMonth = document.getElementById('showMonth');
let  showYear = document.getElementById('showYear');

function getTime(){
    let time = new Date;
    let hr = time.getHours();
    hour.innerText= hr;
    let min = time.getMinutes();
    minute.innerText= min;
    let sec = time.getSeconds();
    second.innerText= sec;
    progress.style.width = (sec/60) * 100 + '%';
    let day= time.getDate();
    showDay.innerText = day;
    let month = time.getMonth();
    showMonth.innerText= month;
    let year = time.getFullYear();
    showYear.innerText = year;
}

setInterval(getTime,1000);