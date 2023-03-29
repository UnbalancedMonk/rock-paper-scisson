function computerChoice() {
  let s = Math.floor(Math.random() * 15 + 1);
  if (s == 1 || s == 4 || s == 7 || s == 10 || s == 13) {
    return "ROCK";
  } else if (s == 2 || s == 5 || s == 8 || s == 11 || s == 14) {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
}

function playGround(playerSelection, computerSelection) {
  if (
    (playerSelection == "ROCK" && computerSelection == "PAPER") ||
    (playerSelection == "PAPER" && computerSelection == "SCISSOR") ||
    (playerSelection == "SCISSOR" && computerSelection == "ROCK")
  ) {
    console.log(
      computerSelection + " beats " + playerSelection + ", COMPUTER wins!"
    );
  } else if (playerSelection == computerSelection) {
    console.log("Uh oh, it's a draw");
  } else {
    console.log(
      playerSelection + " beats " + computerSelection + ", PLAYER wins!"
    );
  }
}

playerCoice = prompt("Enter Rock, Paper or Scissor: ");
playerSelection = playerCoice.toUpperCase();
computerSelection = computerChoice();

playGround(playerSelection, computerSelection);
