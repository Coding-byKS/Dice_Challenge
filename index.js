let diceRoll = () => {
  let num = Math.ceil(Math.random() * 6);
  if (num == 1) {
    return "./images/dice1.png";
  } else if (num == 2) {
    return "./images/dice2.png";
  } else if (num == 3) {
    return "./images/dice3.png";
  } else if (num == 4) {
    return "./images/dice4.png";
  } else if (num == 5) {
    return "./images/dice5.png";
  } else if (num == 6) {
    return "./images/dice6.png";
  }
};

const player1DiceScore = diceRoll();
const player2DiceScore = diceRoll();

document.querySelector(".img1").setAttribute("src", player1DiceScore);
document.querySelector(".img2").setAttribute("src", player2DiceScore);

let result = () => {
  if (player1DiceScore[13] > player2DiceScore[13]) {
    return "Player 1 Wins!!!";
  } else if (player1DiceScore[13] == player2DiceScore[13]) {
    return "It's a Tie!!";
  } else {
    return "Player 2 Wins!!!";
  }
};

document.querySelector("h1").innerHTML = result();
