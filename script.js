window.onload = function() {
  document.querySelector(".new-game-button").addEventListener('click', runNewGame);
}

var playerScore = 0;
var computerScore = 0;

function runNewGame() {
  playerScore = 0;
  computerScore = 0;
  prepareElements();
  renderInterface();

  // display initial scores
  document.querySelector(".player-score").innerHTML = playerScore;
  document.querySelector(".computer-score").innerHTML = computerScore;
}

function prepareElements() {
  document.querySelector(".rock").addEventListener('click', clickedRock);
  document.querySelector(".paper").addEventListener('click', clickedPaper);
  document.querySelector(".scissor").addEventListener('click', clickedScissor);
}

function updateScores(result) {
  if(result.toLocaleLowerCase().includes('win')) {
    playerScore++;
  }
  else if (result.toLocaleLowerCase().includes('lose')) {
    computerScore++
  }
  document.querySelector(".player-score").innerHTML = playerScore;
  document.querySelector(".computer-score").innerHTML = computerScore;
  document.querySelector(".round-result").innerHTML = result;

  if (playerScore === 5 || computerScore === 5) {
    gameOver();
  }
}

function clickedRock() {
  const result = playRound('Rock', computerPlay());
  updateScores(result);
}
function clickedPaper() {
  const result = playRound('Paper', computerPlay());
  updateScores(result);
}
function clickedScissor() {
  const result = playRound('Scissor', computerPlay());
  updateScores(result);
}

function gameOver() {
  document.querySelector(".round-result").innerHTML = "GAME OVER!";
  document.querySelector(".interface").style.border = 'none';
  document.querySelector(".new-game-button").style.display = 'flex';
  document.querySelector(".rock").removeEventListener('click', clickedRock);
  document.querySelector(".paper").removeEventListener('click', clickedPaper);
  document.querySelector(".scissor").removeEventListener('click', clickedScissor);
}

function renderInterface() {
  //hideNewGameButton
  document.querySelector(".new-game-button").style.display = 'none';
  //show scores
  document.querySelector(".scores").style.display = 'flex';
  //show images
  document.querySelector(".images").style.visibility = 'visible';
  //drawInterfaceBorder
  document.querySelector(".interface").style.border = '1px solid #f2f2f2';
}

function computerPlay() {
  // return randomly "Rock", "Paper", or "Scissors"
  const randomNum = Math.floor(Math.random() * 3);
  switch(randomNum) {
    case 0: return "Rock";
    case 1: return "Paper";
    case 2: return "Scissor";
    default: return "";
  }
}

function playRound(playerSelection, computerSelection) {
  // play a single round of rock, paper, scissors
  // output string result of round - eg. "You Lose! Paper beats Rock"

  const playerMove = playerSelection.toLowerCase();
  const computerMove = computerSelection.toLowerCase();

  if (playerMove === 'rock') {
    if(computerMove === 'rock') {
      return "It's a Draw! Rock is equal against Rock"
    } else if(computerMove === 'paper') {
      return "You Lose! Paper beats Rock"
    } else if(computerMove === 'scissor') {
      return "You Win! Rock beats Scissor"
    }
  }

  else if (playerMove === 'paper') {
    if(computerMove === 'rock') {
      return "You Win! Paper beats Rock"
    } else if(computerMove === 'paper') {
      return "It's a Draw! Paper is equal against Paper"
    } else if(computerMove === 'scissor') {
      return "You Lose! Scissor beats Paper"
    }
  }

  else if (playerMove === 'scissor') {
    if(computerMove === 'rock') {
      return "You Lose! Rock beats Scissor"
    } else if(computerMove === 'paper') {
      return "You Win! Scissor beats Paper"
    } else if(computerMove === 'scissor') {
      return "You Draw! Scissor is equal against Scissor"
    }
  }
}