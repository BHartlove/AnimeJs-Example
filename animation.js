let buttonOne = document.getElementById("buttonOne");
buttonOne.addEventListener("click", shiftDown)

function shiftDown(){
    anime({
        targets: 'div.box.darkslate',
        translateY: 300,
        duration: 3000
    });
    buttonOne.textContent = "Click Me Again?";
    buttonOne.addEventListener("click",shiftRight);
}

function shiftRight(){
    anime({
        targets: 'div.box.darkslate',
        translateX: 300,
        duration: 3000
    });
    buttonOne.textContent = "Spinning is a good trick";
    buttonOne.addEventListener("click",spinning);
}

function spinning(){
    anime({
        targets: 'div.box.darkslate',
        rotate:{
            value: '1turn',
        },
        duration: 3000,
    });
    buttonOne.textContent = "Refresh!";
    buttonOne.addEventListener("click",reload);
}

function reload() {
    location.reload();
    return false;
}
