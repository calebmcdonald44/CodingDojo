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
function nextPage() {
    location.href = "opponents1.html"
}
function previousPage() {
    location.href = "opponents3.html"
}

// A TAGS

function highlightLink(element) {
    element.style.color = "rgb(220, 20, 20)";
    element.style.textDecoration = "none";
}
function undoHighlightLink(element) {
    element.style.color = "white";
    element.style.textDecoration = "underline";
}
function highlightLink2(element) {
    element.style.color = "rgb(220, 20, 20)";
    element.style.textDecoration = "none";
}
function undoHighlightLink2(element) {
    element.style.color = "black";
    element.style.textDecoration = "underline";
}