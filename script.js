setInterval(function () {
  let d = new Date().getDate();
  let m = new Date().getMonth() + 1;
  let y = new Date().getFullYear();

  if (m < 10) {
    m = "0" + m;
  }
  if (d < 10) {
    d = "0" + d;
  }
  document.querySelector(".nowDay").innerHTML = `${d}.${m}.${y}`;
  let h = new Date().getHours();
  let mi = new Date().getMinutes();
  let s = new Date().getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (mi < 10) {
    mi = "0" + mi;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.querySelector(".nowTime").innerHTML = `${h}:${mi}:${s}`;
}, 1000);



let intervalID;
let hours;
let minutes;
let second;
let millisecond;
let thisTime;
let thisTimeStop;
const stopwatchStartDisabled = document.querySelector(".stopwatch-start");
const stopwatchStopDisabled = document.querySelector(".stopwatch-stop");

document.querySelector(".stopwatch-start").addEventListener("click", function () {
    stopwatchStartDisabled.disabled = true;
    stopwatchStopDisabled.disabled = false;

   if(!thisTime){
    thisTime = new Date().getTime();
   }else{
    thisTime = new Date().getTime()-(thisTimeStop - thisTime)
   }
   
    function startStopwatchStart() {
      let newTime = new Date().getTime();
      let result = newTime - thisTime;
      hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
      second = Math.floor((result % (1000 * 60)) / 1000);
      millisecond = result.toString().slice(-3);

      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (second < 10) {
        second = "0" + second;
      }
      document.querySelector(
        ".stopwatchStart-time"
      ).innerHTML = `${hours}:${minutes}:${second}:${millisecond}`;
    }
    intervalID = setInterval(startStopwatchStart, 100);
  });



document.querySelector(".stopwatch-stop").addEventListener("click", function () {
    stopwatchStartDisabled.disabled = false;
    stopwatchStopDisabled.disabled = true;  
    clearInterval(intervalID);
    thisTimeStop = new Date().getTime();
  });

document.querySelector(".stopwatch-loop").addEventListener("click", function () {
    let time = `${hours}:${minutes}:${second}:${millisecond}`;
    document.querySelector(".stopwatch-save").append(time);
    let br = document.createElement("br");
    document.querySelector(".stopwatch-save").append(br);
  });

document.querySelector(".stopwatch-reset").addEventListener("click", function () {
    document.querySelector(".stopwatchStart-time").innerHTML = "00:00:00:000";
    document.querySelector(".stopwatch-save").innerHTML = "";
    thisTime = undefined;
  });

let countdownMinutes = document.querySelector(".countdown-text");
let counter = Number(countdownMinutes.innerText);
document.querySelector(".button-augmentation").addEventListener("click", function () {
  counter = counter + 1;
  countdownMinutes.innerText = counter;
  });
document.querySelector(".button-reduction").addEventListener("click", function () {
  counter = counter - 1;
  countdownMinutes.innerText = counter;
  });
 
let counterMinutes;
let counterSecond;
let timeLeft;
let countdownID;
  document.querySelector('.countdownBtn-start').addEventListener('click', function(){   
    if(!timeLeft){
      timeLeft = counter * 60;
    }
  
    countdownID = setInterval( function(){
        document.querySelector(".countdownBtn-start").disabled = true;
        document.querySelector(".countdownBtn-stop").disabled = false;
        timeLeft--; 
        counterMinutes = Math.floor((timeLeft / 60));
        counterSecond = Math.floor(timeLeft - counterMinutes* 60);
        if(counterSecond<10){
          counterSecond = '0'+ counterSecond;
        }
        if(counterMinutes<10){
          counterMinutes = '0'+ counterMinutes;
        }
        document.querySelector(".countdown-timer").innerHTML = `${counterMinutes}:${counterSecond}`;
      }, 1000)
  })

  document.querySelector('.countdownBtn-stop').addEventListener('click', function(){ 
    document.querySelector(".countdownBtn-start").disabled = false;
    document.querySelector(".countdownBtn-stop").disabled = true;
    clearInterval(countdownID);
  })

document.querySelector(".countdown-reset").addEventListener("click", function () {
    document.querySelector(".countdown-timer").innerText = "00:00";
    timeLeft = undefined;
  });


