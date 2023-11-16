function convertTemp(element, cls) {
    if(element.value == 'Fahrenheit') {
        var oldTemp = document.querySelectorAll(cls);
        for(var i = 0; i <= oldTemp.length; i++) {
            var newTemp = Math.round((oldTemp[i].innerText * (9/5)) + 32);
            oldTemp[i].innerText = newTemp;
        } 
    } if (element.value == 'Celcius') {
        var oldTemp = document.querySelectorAll(cls);
        for(var j = 0; j <= oldTemp.length; j++) {
            var newTemp = Math.round((oldTemp[j].innerText - 32) * (5/9));
            oldTemp[j].innerText = newTemp;
        }
    }
}
