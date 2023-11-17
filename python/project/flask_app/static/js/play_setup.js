var color = ''

function assignBoardColor(element) {
    console.log("CLICK")
    element.style.border = "red solid 3px"
    if(color.length > 0 && color !== element.id) {
        removeBorder(color)
    }
    color = element.id
    html_color_value = document.getElementById("board_color")
    html_color_value.value = color
    console.log(color)
    console.log(html_color_value.value)
}
function removeBorder(element) {
    unselected = document.getElementById(element)
    unselected.style.border = "transparent solid 3px"
}