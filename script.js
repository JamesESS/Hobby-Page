/* maybe change countdownDisplay to create element instead of using preexsting */
/* select html elements we want to manipulate */
const dateDisplay = document.getElementById("footer2");
const advCountdownDisplay = document.getElementById("advCountdown");

let advDate = new Date(2023,03,11,10,0,0);      //set bike ride time

timeOutputs();      //initialise bothe dates on site
setInterval(timeOutputs,1000)       //outputs updated dates on 1 second cycle

/* function to get current time and work out time until advDate */
function timeOutputs() {
    let currentTime = new Date();     //get current date/time
  

    /* get current time and format*/
    var today = currentTime;
    const options = { weekday: 'long', year: '2-digit', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };       //set display format for date 
    today = today.toLocaleString(undefined, options);   //format date
  

    /* check if countdown is finished otherwise find time difference */
    var countdown = advDate - currentTime;        //find time diference in miliseconds
    if (countdown < 0) {        //clear timer when countdown finishes
        days = 0;
        hours = 0;
        minutes = 0;
    }
    else {
        var days = Math.floor(countdown / (1000 * 60 * 60 * 24));       //convert milliseconds to days, hours etc
        var hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    }
    let advString = days + " days " + hours + " hours & " + minutes + " minutes until my next adventure!!!";

    /* output current date and countdown timer to site */
    dateDisplay.innerText = today;
    advCountdownDisplay.innerText = advString;
}
