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
function buttonHover2(element) {
    var arrowLeft = document.querySelector('#arrow-left');
    var arrowRight = document.querySelector('#arrow-right');
    element.style.color = "black";
    element.style.backgroundColor = "rgb(205, 205, 205)";
    element.style.border = "5px solid black";
    console.log(element.className);
    if(element.className === "arrow-left") {
        arrowLeft.src = "images/arrow-left.png";
    }
    if(element.className === "arrow-right") {
        arrowRight.src = "images/arrow-right.png";
    }

}
function buttonLeave2(element) {
    var arrowLeft = document.querySelector('#arrow-left');
    var arrowRight = document.querySelector('#arrow-right');
    element.style.color = "white";
    element.style.backgroundColor = "rgb(50, 50, 50)";
    element.style.border = "5px solid white";
    if(element.className === "arrow-left") {
        arrowLeft.src = "images/arrow-left-white.png";
    }
    if(element.className === "arrow-right") {
        arrowRight.src = "images/arrow-right-white.png";
    }
}
function previousPage() {
    location.href = "opponents2.html"
}


// OPPONENTS
var powerSlider = document.querySelector("#slider-power");
var staminaSlider = document.querySelector("#slider-stamina");
var agilitySlider = document.querySelector("#slider-agility");
var chinSlider = document.querySelector("#slider-chin");
var strategySlider = document.querySelector("#slider-strategy");
var intimidationSlider = document.querySelector("#slider-intimidation");


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
setTimeout(()=>{sliderLoad(powerSlider, 70)}, 500);
setTimeout(()=>{sliderLoad(staminaSlider, 85)}, 500);
setTimeout(()=>{sliderLoad(agilitySlider, 94)}, 500);
setTimeout(()=>{sliderLoad(chinSlider, 80)}, 500);
setTimeout(()=>{sliderLoad(strategySlider, 80)}, 500);
setTimeout(()=>{sliderLoad(intimidationSlider, 80)}, 500);