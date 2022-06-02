const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", function() {
    let aColor = "#";
    for (let i=0; i < 6; i++) {
        aColor += a[getRandomNumber()];
    }
    color.textContent = aColor;
    document.body.style.backgroundColor = aColor;
}); 

function getRandomNumber() {
    return Math.floor(Math.random()* 16);
}