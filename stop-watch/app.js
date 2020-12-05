// selectors

let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');
let start= document.getElementById('start');
let reset = document.getElementById('reset');
let pause = document.getElementById('pause');


/*
add event lisntener
*/
start.addEventListener('click', startWatch);
reset.addEventListener('click',resetWatch);
pause.addEventListener('click',pauseWatch);


/*
create nesesarry variables
*/
let min;
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
            getTime(sec)
                minutes.innerText= min<10?min='0'+min: min ;
                seconds.innerText= sec<10?sec="0"+sec: sec;
    
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
    isRunning= false;
    clearInterval(interval);
}

function getTime(sec){
    //convert seconds in minute
    min = parseInt(sec/60);
    sec = parseInt(sec%60);
    return{
        min,
        sec
    }
}