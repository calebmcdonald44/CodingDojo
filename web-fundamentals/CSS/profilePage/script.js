
var bubbleYCNumber = 483

function hide(element, yesOrNo) {
    var userCR = document.querySelector(element);
    var amountCR = document.querySelector("#bubble-text1");
    var amountYC = document.querySelector("#bubble-text2");
    userCR.remove();
    amountCR.innerText -= 1;
    if(yesOrNo == 'yes') {
        bubbleYCNumber += 1;
        amountYC.innerText = bubbleYCNumber;
    }
}

function editName(element) {
    var name = document.querySelector("#user-name");
    name.innerText = "Stanley Yelnats V"
}