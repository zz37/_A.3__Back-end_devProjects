
// for the left dice image
let randonNumber1 = Math.floor((Math.random() * 6) + 1); // rand ->[0,6]
let randomDiceImage1 = "images/" + "Dice" + randonNumber1 + ".png"; // src name
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDiceImage1);

// for the right dice image
let randonNumber2 = Math.floor((Math.random() * 6) + 1); // rand -> [0,6]
let randomDiceImage2 = "images/" + "Dice" + randonNumber2 + ".png"; // src name
let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDiceImage2);


// select the winner
if (randonNumber1 > randonNumber2) {
    document.querySelector("h1").innerHTML = " 🥇 Palyer 1 Wins! ";
} else if (randonNumber2 > randonNumber1) {
    document.querySelector("h1").innerHTML = " Player 2 Wins! 🥇 ";
} else { // draw
    document.querySelector("h1").innerHTML = " Tie !, next is Overtime "
} 
