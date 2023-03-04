// console.log("Working !! ");

var time = document.querySelector(".time")
var start_button = document.getElementById("start");
var stop_button = document.getElementById("stop");
var reset_button = document.getElementById("reset");

var seconds = 0;
var t_interval = null;

start_button.addEventListener("click",start);
stop_button.addEventListener("click",stop);
reset_button.addEventListener("click",reset);

function start() {
    if (t_interval) {
      return;
    }
    t_interval = setInterval(caltime, 1000);
  }

 function stop() {
    clearInterval(t_interval);
    t_interval = null;
  }

function reset() {
    stop();
    seconds = 0;
    time.innerText = "00:00:00";
  }
 
  function caltime() {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - hrs * 3600) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;
    if (hrs < 10) hrs = "0" + hrs;
    time.innerText = `${hrs}:${mins}:${secs}`;
  }
