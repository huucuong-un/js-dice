
var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1;

var dice1;
// dice1 = document.querySelector(".img1").attributes.src.value = "images/dice" + randomNumber1 + ".png";
dice1 = document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");


console.log(randomNumber1);


var randomNumber2;
randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2;
dice2 = document.querySelector(".img2").attributes.src.value = "images/dice" + randomNumber2 + ".png";
console.log(randomNumber2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player2 Wins!";
} else {
     document.querySelector("h1").textContent = "Draw!!!";
}



