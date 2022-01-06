/**
 * Global variables for updating elements
 */
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

const currentMoves = document.querySelector('.currentMoves');

/**
 * Add button listeners to capture gameplay; record result
 * and update score displayed
 */
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let result = playRound(e.target.id);

    if (result === "DRAW") return;
    // update the scores
    if (result === "WIN") {
      playerScore.textContent++;
    }
    if (result === "LOSE") {
      computerScore.textContent++;
    }

    // first to reach 5 wins, so add a win/lose statement and reset scores
    if (+playerScore.textContent == 5 || +computerScore.textContent == 5) {
      const container = document.querySelector('body');

      // win/lose and final score statement
      const finalScore = document.createElement('div');
      finalScore.textContent = `You ${result}! Final Score: `
          + `${playerScore.textContent} to ${computerScore.textContent}`;
      finalScore.style.cssText = 'text-align: center';
      finalScore.style.color = (result === "WIN") ? 'green' : 'red';
      container.appendChild(finalScore);

      // reset scores for next game
      playerScore.textContent = 0;
      computerScore.textContent = 0;
    }
  });
});

/**
 * play a round of rock, paper, scissors
 * 
 * @param {string} playerMove
 * @returns {string} result of the round
 */
function playRound(playerMove) {
  let computerMove = computerPlay();

  if (playerMove === computerMove) {
    currentMoves.textContent = "It's a Draw!";
    return("DRAW");
  }
  
  if (playerMove === 'ROCK' && computerMove === 'SCISSORS' ||
      playerMove === 'PAPER' && computerMove === 'ROCK' ||
      playerMove === 'SCISSORS' && computerMove === 'PAPER') {
    currentMoves.textContent = `You Win this round! ${playerMove} beats ${computerMove}!`;
    return("WIN");
  }
  currentMoves.textContent = `You Lose this round! ${computerMove} beats ${playerMove}!`;
  return("LOSE");
}


/**
 * select random move for computer
 * 
 * @returns {string} rock, paper, or scissors
 */
function computerPlay() {
  let move = Math.floor(Math.random()*3);
  
  return getMoveName(move);
}

/**
 * helper function for computerPlay()
 * 
 * @param {number} move
 * @returns {string} rock, paper, or scissors
 */
function getMoveName(move) {
  if (move === 0) {
    return "ROCK";
  } else if (move === 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}




/* ------------------------------------------------------------------------- */

/* DEPRECATED -- game plays when buttons are pressed */
/*
game();
*/


/* DEPRECATED -- player move now determined by button selection */
/* use prompt() to get the player's move */
/*
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
*/


/* DEPRECATED -- for console gameplay */
/* play 5 rounds, keep score, and report the winner */
/*
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
*/