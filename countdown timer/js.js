// select item
var seconds = 30, // number of seconds
    Sound = document.getElementById("sound"),
    countDiv = document.getElementById("countdown"),
    text = document.getElementById("coo"),
    secondPass,
    countDown = setInterval(function() {
        "use strict";
        secondPass();
    }, 1000);


Sound.pause();

// get function here
function secondPass() {
    "use strict";
    var minutes = Math.floor(seconds / 60),
        remSeconds = seconds % 60;

    if (seconds < 10) {
        remSeconds = "0" + remSeconds;

    }
    if (seconds < 11) {

        Sound.play();
    }


    countDiv.textContent = minutes + ":" + remSeconds;
    if (seconds > 0) {
        seconds = seconds - 1; // here every millesecond 
    } else {
        clearInterval(countDown) // stop countdown timer
        countDiv.textContent = "00:00";
        text.textContent = "game over , back another time bro :/";
    }
}