// Pomodoro
let time = document.querySelector('#id');
let timeout;
const pause = document.querySelector('.pause');
const play = document.querySelector('.play');
const workBtn = document.querySelector('.pom');
const shortBtn = document.querySelector('.short-brk');
const longBtn = document.querySelector('.long-brk');

workBtn.addEventListener('click', function() { startTimer(25)});
shortBtn.addEventListener('click', function() { startTimer(15)});
longBtn.addEventListener('click', function() { startTimer(30)});


function startTimer(time){
    let allowedTime = time * 60
    showTime(allowedTime)
    play.addEventListener('click', function(){
        clearInterval(timeout)
        // let allowedTime = time * 60
        console.log(showTime)
        showTime(allowedTime)
        timeout = setInterval(function() {
            if(allowedTime == 0){
                clearInterval(timeout)
                showTime(0)
            }else{
                allowedTime --
                showTime(allowedTime)

            }
        }, 10);
    });
    pause.addEventListener('click', function(){
        clearInterval(timeout)
    })
}

function showTime(allowedTime){
    let minutes = Math.floor(allowedTime/60)
    let seconds = allowedTime % 60 ? allowedTime % 60 : '00'
    document.getElementById('minutes').textContent = `${minutes}:${seconds}`
};

