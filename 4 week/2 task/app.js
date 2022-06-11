const add = (number_1, number_2) => {
  return number_1 + number_2;
};
const subtract = (number_1, number_2) => {
  return number_1 - number_2;
};
const multiply = (number_1, number_2) => {
  return number_1 * number_2;
};
const divide = (number_1, number_2) => {
  return number_1 / number_2;
};

function isNumber(n){
    return typeof n == 'number' && !isNaN(n) && isFinite(n);
 }

const calculationArray = [];
const displayArray = [];
const currentPressedBtnArray = [];
let currentPressedBtn = null;

const operate = (numb1, numb2, operator) => {
  const number_1 = +numb1;
  const number_2 = +numb2;
  const integerRegex = /^-?[0-9]+$/;
  let calculationResult;

  if(!isNumber(number_1) || !isNumber(number_2)) {
      return;
  }

  if (operator === "+") {
    calculationResult = add(number_1, number_2);
  }
  if (operator === "-") {
    calculationResult = subtract(number_1, number_2);
  }
  if (operator === "X") {
    calculationResult = multiply(number_1, number_2);
  }

  if (operator === "/") {
    calculationResult = divide(number_1, number_2);
  }

  if (!integerRegex.test(calculationResult)) {
    calculationResult = calculationResult.toFixed(2);
  }

  calculationArray[0] = calculationResult;
};

const calculate = () => {
  if (calculationArray.length > 0) {
    calculationArray.push(currentPressedBtnArray.join(""));
    currentPressedBtnArray.length = 0;
  }

  if (!calculationArray[0] || !calculationArray[2] || !calculationArray[1]) {
    return;
  }

  while (calculationArray.length > 1) {
    if (+calculationArray[2] === 0 && calculationArray[1] === "/") {
      displayArray.length = 0;
      displayArray[0] = "You can't divide by zero!";
      return;
    }
    operate(calculationArray[0], calculationArray[2], calculationArray[1]);
    calculationArray.splice(1, 2);
  }

  displayArray.length = 0;
  displayArray[0] = calculationArray[0];
};

const calculator = (action) => {
  const operators = ["X", "/", "X", "-", "+"];
  currentPressedBtn = action;

  if (currentPressedBtn === "AC") {
    calculationArray.length = 0;
    currentPressedBtnArray.length = 0;
    displayArray.length = 0;
    return;
  }

  if (
    operators.includes(currentPressedBtn) &&
    currentPressedBtnArray.length >= 1 &&
    !operators.includes(calculationArray[calculationArray.length - 1])
  ) {
    calculationArray.push(currentPressedBtnArray.join(""));
    currentPressedBtnArray.length = 0;
  }

  if (
    !isNaN(currentPressedBtn) &&
    operators.includes(currentPressedBtnArray[0]) &&
    !operators.includes(calculationArray[calculationArray.length - 1])
  ) {
    calculationArray.push(currentPressedBtnArray[0]);
    currentPressedBtnArray.length = 0;
  }

  if (!isNaN(currentPressedBtn)) {
    currentPressedBtnArray.push(currentPressedBtn);
    displayArray.push(currentPressedBtn);
  }

  if (operators.includes(currentPressedBtn)) {
    currentPressedBtnArray[0] = currentPressedBtn;
  }

  console.log(currentPressedBtnArray)
  console.log(calculationArray)

  if (
    operators.includes(currentPressedBtn) &&
    !operators.includes(displayArray[displayArray.length - 1])
  ) {
    displayArray.push(currentPressedBtn);
  }

  if (
    currentPressedBtn === "." &&
    !isNaN(currentPressedBtnArray.length - 1) &&
    !currentPressedBtnArray.includes(".")
  ) {
    currentPressedBtnArray.push(currentPressedBtn);
    displayArray.push(currentPressedBtn);
  }

  if (currentPressedBtn === "=") {
    calculate();
  }
};

const btns = document.querySelectorAll(".buttons")[0].children;
const calculationScreen = document.getElementById("calculation_screen");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    calculator(btns[i].outerText);
    calculationScreen.textContent = displayArray.join("");
  });
}
