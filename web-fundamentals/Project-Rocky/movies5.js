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
    location.href = "movies4.html"
}
function previousPage() {
    location.href = "movies6.html"
}