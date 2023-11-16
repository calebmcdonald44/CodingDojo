// BANNER AND BUTTONS

function buttonHover(element) {
    console.log(element.className);
    element.style.backgroundColor = "rgb(205, 205, 205)";
    element.style.color = "black";
}
function buttonLeave(element) {
    console.log(element.className);
    if(element.className != "active") {
        element.style.backgroundColor = "rgb(50, 50, 50)";
        element.style.color = "white";
    }
}
function buttonHover3(element) {
    console.log(element);
    element.style.backgroundColor = "white";
}
function buttonLeave3(element) {
    element.style.backgroundColor = "rgb(205, 205, 205)";
}
function highlightLink(element) {
    element.style.color = "rgb(220, 20, 20)";
    element.style.textDecoration = "none";
}
function undoHighlightLink(element) {
    element.style.color = "white";
    element.style.textDecoration = "underline";
}


function clickHome() {
    location.href = "home.html";
}
function clickMovies() {
    location.href = "movies9.html";
}
function clickOpponents() {
    location.href = "opponents8.html";
}
function clickAboutMe() {
    location.href = "about-me.html";
}
function nextPage() {
    location.href = "opponents1.html"
}
function previousPage() {
    location.href = "opponents3.html"
}

// STAT SLIDERS

var powerSlider = document.querySelector("#slider-power");
var staminaSlider = document.querySelector("#slider-stamina");
var agilitySlider = document.querySelector("#slider-agility");
var chinSlider = document.querySelector("#slider-chin");
var strategySlider = document.querySelector("#slider-strategy");
// var intimidationSlider = document.querySelector("#slider-intimidation");


function sliderLoad(element1, pct) {
    element1.style.width = `${pct}%`;
    if(pct > 0 && pct <= 20) {
        element1.style.backgroundColor = "#FFE9E9";
    } else if(pct > 21 && pct <= 40) {
        element1.style.backgroundColor = "#FFB2B2";
    } else if(pct > 41 && pct <= 60) {
        element1.style.backgroundColor = "#FF6666";
    } else if(pct > 61 && pct <= 80) {
        element1.style.backgroundColor = "#FF2F2F";
    } else {
        element1.style.backgroundColor = "#FF0000";
    }
}
setTimeout(()=>{sliderLoad(powerSlider, 94)}, 500);
setTimeout(()=>{sliderLoad(staminaSlider, 94)}, 500);
setTimeout(()=>{sliderLoad(agilitySlider, 94)}, 500);
setTimeout(()=>{sliderLoad(chinSlider, 94)}, 500);
setTimeout(()=>{sliderLoad(strategySlider, 94)}, 500);
// setTimeout(()=>{sliderLoad(intimidationSlider, 80)}, 500);