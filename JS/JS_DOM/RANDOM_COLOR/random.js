function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomColor() {
    const green = getRandomNumber(0, 255);
    const red = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    return `rgb(${red} , ${green} , ${blue})`;
}
const htmlTag = document.querySelector("html");

let myButton = document.getElementById("myBtn")
function changeBackgroundColor() {
    htmlTag.style.backgroundColor = getRandomColor();
    myButton.style.color = getRandomColor();
}
myButton.addEventListener("click", changeBackgroundColor)