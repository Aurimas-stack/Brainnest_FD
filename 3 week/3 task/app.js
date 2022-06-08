const computerPlay = () => {
  const wordsArray = ["Rock", "Paper", "Scissors"];
  return wordsArray[Math.floor(Math.random() * wordsArray.length)];
};

const playRound = (playerSelection, computerSelection) => {
  const playerWord = playerSelection.toLowerCase();
  const computerWord = computerSelection.toLowerCase();
  let winCondition = false;

  if(playerWord === computerWord) {
    return `Even round, you've both selected ${playerWord}!`;
  }

  if (playerWord === "rock" && computerWord !== "paper") {
    winCondition = true;
  }

  if (playerWord === "paper" && computerWord !== "scissors") {
    winCondition = true;
  }

  if (playerWord === "scissors" && computerWord !== "rock") {
    winCondition = true;
  }

  return winCondition
    ? `You win! ${playerWord} beats ${computerWord}.`
    : `You lose! ${computerWord} beats ${playerWord}.`
}

const game = () => {
    const userInput = prompt("ROCK, PAPER, SCISSORS")

    if (userInput.length === 0) return;
 
    for(let i = 0; i < 5; i++) {
        console.log(playRound(userInput, computerPlay()))
    }
     
}

//game()