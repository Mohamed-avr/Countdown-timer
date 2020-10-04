// select div UTC
const ShowTimeUTC = document.querySelector(".text-2 button");
const Element = document.querySelector(".content-2");


ShowTimeUTC.addEventListener("click", function() {
    "use strict";

    Element.classList.toggle("showContent-2");

    console.log("hello")
    if (Element.classList.contains("showContent-2")) {
        ShowTimeUTC.textContent = "Hide UTC";
    } else {
        ShowTimeUTC.textContent = " Show UTC";
    }

});



// select divs
const ForHours = document.querySelector(".hour");
const ForMinutes = document.querySelector(".minute");
const ForSecond = document.querySelector(".second");



// function normal Time
function ShowTime() {
    "use strict";
    var ORDate = new Date(),
        Hour = ORDate.getHours(),
        Minute = ORDate.getMinutes(),
        Second = ORDate.getSeconds();


    if (Hour < 10) {
        Hour = "0" + Hour;
    }
    if (Minute < 10) {
        Minute = "0" + Minute;
    }
    if (Second < 10) {
        Second = "0" + Second;
    }

    ForHours.textContent = Hour;
    ForMinutes.textContent = Minute;
    ForSecond.textContent = Second;

}




// time utc


function ShowUTC() {
    "use strict";

    // select divs
    const HoursUTC = document.querySelector(".hT");
    const MinutesUTC = document.querySelector(".mT");
    const SecondUTC = document.querySelector(".sT");



    var UTCDate = new Date,
        HeeeUTC = UTCDate.getUTCHours(),
        MeeeUTC = UTCDate.getUTCMinutes(),
        SeeeUTC = UTCDate.getUTCSeconds();

    if (HeeeUTC < 10) {
        HeeeUTC = "0" + HeeeUTC;
    }
    if (MeeeUTC < 10) {
        MeeeUTC = "0" + MeeeUTC;
    }
    if (SeeeUTC < 10) {
        SeeeUTC = "0" + SeeeUTC;
    }


    HoursUTC.textContent = HeeeUTC;
    MinutesUTC.textContent = MeeeUTC;
    SecondUTC.textContent = SeeeUTC;



}
window.onload = function() {
    "use strict";
    setInterval(ShowTime, 1000);
    setInterval(ShowUTC, 1000);

}


// select item

const Heading = document.querySelector(".about-UTC h3");
const paragraph = document.querySelector(".about-UTC p");

const ToArabic = document.getElementById("AR");
const ToEnglish = document.getElementById("EN");

ToArabic.addEventListener("click", function() {
    Heading.textContent = " 'UTC' ماهو ال";
    paragraph.textContent = " يعني التوقيت العالمي المنسق وهو معيار يستخدم لضبط جميع المناطق الزمنية حول العالم";
});
ToEnglish.addEventListener("click", function() {
    Heading.textContent = "what's UTC !";
    paragraph.textContent = "UTC stands for coordinated universal time , a standard used to set all time zones around the world";
});