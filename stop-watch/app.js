// selectors
let hours= document.getElementById('hour')
let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');
let start= document.getElementById('start');
let reset = document.getElementById('reset');
let pause = document.getElementById('pause');


/*
step1:
add event lisntener
*/
start.addEventListener('click', startWatch);
reset.addEventListener('click',resetWatch);
pause.addEventListener('click',pauseWatch);


/*
create nesesarry variables
*/
let min;
let hour;
let sec = 0;
let interval = null;
let isRunning = false;
/*
set functions
*/
function startWatch(){
    if(!isRunning){
        isRunning= true;
        interval = setInterval(function(){
            sec++
           let{min,second,hour}= getTime(sec)
                minutes.innerText= min<10?min='0'+min: min ;
                seconds.innerText= second<10?second="0"+second: second;
                hours.innerText= hour<10?hour="0"+hour: hour;
        },1000);
    }
}
function resetWatch(){
    isRunning= false;
    clearInterval(interval);
    min = 0;
    sec = 0;
    minutes.innerText= '00';
    seconds.innerText= '00'
}
function pauseWatch(){
    isRunning= true
    clearInterval(interval);
}

function getTime(sec){
    //convert seconds in minute, minute into hour
    min = parseInt(sec/60);
    let second = parseInt(sec%60);
    if(min>=60){
        hour = parseInt(min/60);
        min= parseInt(min%60);
    }else{
        hour= 0;
    }
    return{
        min,
        second,
        hour
    }
}