const computerPlay = () => {
  const wordsArray = ["Rock", "Paper", "Scissors"];
  return wordsArray[Math.floor(Math.random() * wordsArray.length)];
};

const playRound = (playerSelection, computerSelection) => {
  const playerWord = playerSelection.toLowerCase();
  const computerWord = computerSelection.toLowerCase();
  let gameCondition = false;

  if (playerWord === "rock" && computerWord !== "paper") {
    gameCondition = true;
  }

  if (playerWord === "paper" && computerWord !== "scissors") {
    gameCondition = true;
  }

  if (playerWord === "scissors" && computerWord !== "rock") {
    gameCondition = true;
  }

  return gameCondition
    ? `You win! ${playerWord} beats ${computerWord}.`
    : `You lose! ${computerWord} beats ${playerWord}.`
}

const game = () => {
    const userInput = prompt("ROCK, PAPER, SCISSORS")
    for(let i = 0; i < 5; i++) {
        console.log(playRound(userInput, computerPlay()))
    }
}

game();