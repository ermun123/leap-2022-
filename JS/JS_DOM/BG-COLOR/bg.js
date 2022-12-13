function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomColor() {
    const green = getRandomNumber(0, 255);
    const red = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    return `rgb(${red} ,${green} ,${blue})`
}
const pTag1 = document.getElementsByClassName("txt")[0];
const pTag2 = document.getElementsByClassName("txt")[1];

let myButton = document.getElementById("myBtn");
function changeBackgroundColor() {
    pTag1.style.backgroundColor = getRandomColor();
    pTag2.style.backgroundColor = getRandomColor()
}
myButton.addEventListener("click", changeBackgroundColor)