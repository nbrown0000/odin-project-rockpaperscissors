window.onload = function() {
  game()
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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for(let i=0; i<5; i++) {
    const playerChoice = prompt('Rock, Paper or Scissor?', '');
    const result = playRound(playerChoice, computerPlay());
    console.log(result);
    if(result.toLocaleLowerCase().includes('win')) {
      playerScore++;
    }
    else if (result.toLocaleLowerCase().includes('lose')) {
      computerScore++
    }
  }

  console.log(`Final score: Player ${playerScore}, Computer ${computerScore}`)
}