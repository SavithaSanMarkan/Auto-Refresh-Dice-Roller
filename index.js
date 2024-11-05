


function rollDice() {
    // Random number for Player 1
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var imagePath1 = "images/dice" + randomNumber1 + ".png"; // Path for Player 1's dice image
    var diceImage1 = document.querySelector(".img1"); // Select Player 1's image element
    diceImage1.setAttribute("src", imagePath1); // Update Player 1's image source

    // Random number for Player 2
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var imagePath2 = "images/dice" + randomNumber2 + ".png"; // Path for Player 2's dice image
    var diceImage2 = document.querySelector(".img2"); // Select Player 2's image element
    diceImage2.setAttribute("src", imagePath2); // Update Player 2's image source



var resultText;
if (randomNumber1>randomNumber2)
    {
resultText="Congrats Player 1, you is the WINNER!!"; 
} 
else if (randomNumber1<randomNumber2){
    resultText="Congrats Player 2, you is the WINNER!!" 
} 
else {
    resultText = "It's a draw";
}

document.querySelector("h1").innerHTML = resultText;

}

rollDice();
