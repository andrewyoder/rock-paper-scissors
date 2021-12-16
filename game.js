const rock = 0;
const paper = 1;
const scissors = 2;

/* play 5 rounds, keep score, and report the winner */
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let result = "";

  // best 3 out of 5; also accounts for any necessary tie breakers
  while (playerScore < 3 && computerScore < 3) {
    result = playRound(getPlayerMove(), computerPlay());
    
    switch(result) {
      case "WIN":
        playerScore++;
        continue;
      case "LOSE":
        computerScore++;
        continue;
      case "DRAW":
        continue;
      default:
    }
  }

  let message = (playerScore > computerScore) ? `You win! ${playerScore} - ${computerScore}` :
                                                `You lose! ${playerScore} - ${computerScore}`;
  console.log(message);
}

/* play a round of rock, paper, scissors */
function playRound(playerMove, computerMove) {
  console.log("...Rock!\n...Paper!\n...Scissors!\nShoot!\n");

  if (playerMove == computerMove) {
    console.log("It's a Draw!");
    return("DRAW");
  }
  
  if (playerMove == rock && computerMove == scissors ||
      playerMove == paper && computerMove == rock ||
      playerMove == scissors && computerMove == paper) {
    console.log(`You Win! ${getMoveName(playerMove)} beats ${getMoveName(computerMove)}!`);
    return("WIN");
  }
  console.log(`You Lose! ${getMoveName(computerMove)} beats ${getMoveName(playerMove)}!`);
  return("LOSE");
}

/* use prompt() to get the player's move */
function getPlayerMove() {
  do {
    let move = prompt("What's your move?");

    if (move.toLowerCase() === "rock") {
      return rock;
    } else if (move.toLowerCase() === "paper") {
      return paper;
    } else if (move.toLowerCase() === "scissors") {
      return scissors;
    } else {
      console.log("You entered an invalid response. Please enter 'Rock', 'Paper', or 'Scissors'");
    }
  } while (true);
}

/* select random move for computer */
function computerPlay() {
  let move = Math.floor(Math.random()*3);
  
  return move;
}

/* return the English name of the move's numerical value */
function getMoveName(move) {
  if (move == rock) {
    return "ROCK";
  } else if (move == paper) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

game();