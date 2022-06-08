

const computerPlay = () => {
  const wordsArray = ["Rock", "Paper", "Scissors"];
  return wordsArray[Math.floor(Math.random() * wordsArray.length)];
};

const playRound = (playerSelection, computerSelection) => {
  let winCondition = 0;

  if(playerSelection === computerSelection) {
    return 2;
  }

  if (playerSelection === "rock" && computerSelection !== "paper") {
    winCondition = 1;
  }

  if (playerSelection === "paper" && computerSelection !== "scissors") {
    winCondition = 1;
  }

  if (playerSelection === "scissors" && computerSelection !== "rock") {
    winCondition = 1;
  }

  return winCondition;
}

let textOutput = "";
const winRounds = {
  player: 0,
  computer: 0
}

const game = (userSelection) => {
  const userPick = userSelection.toLowerCase();;
  const computerPick = computerPlay().toLowerCase();
  const condition = playRound(userPick, computerPick);

  if(winRounds.player === 5) {
    textOutput =  "Player won!";
    return;
  }

  if(winRounds.computer === 5) {
    textOutput === "Computer won!";
    return;
  }

  if(condition === 0) {
    textOutput = `You lose! ${computerPick} beats ${userPick}`
    winRounds.computer += 1
  }

  if(condition === 1) {
    textOutput = `You win! ${userPick} beats ${computerPick}`
    winRounds.player += 1;
  }

  if(condition === 2) {
    textOutput = `Even round! You both picked ${userPick}`
  }
     
}

const getDOMElement = (el) => {
  return document.getElementById(el)
}

const output = getDOMElement("output");
const roundCountPlayer = getDOMElement("win_rounds__player")
const roundCountComputer = getDOMElement("win_rounds__computer")

const resetBtn = getDOMElement("reset_btn");
const actions = document.querySelectorAll(".game__action")

for(let i = 0; i < actions.length; i++) {
  actions[i].addEventListener("click", () => {
    game(actions[i].id)
    output.textContent = textOutput;
    roundCountPlayer.textContent = winRounds.player;
    roundCountComputer.textContent = winRounds.computer;
  })
}

resetBtn.addEventListener("click", () => {
  output.textContent = "";
  roundCountPlayer.textContent = 0;
  roundCountComputer.textContent = 0;
  textOutput = "";
  winRounds.player = 0;
  winRounds.computer = 0;
})

