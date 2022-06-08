const btns = document.querySelectorAll(".buttons")[0].children;
const calculationScreen = document.getElementById("calculation_screen");
const resultDisplay = document.getElementById("result_screen");

const calculationArray = [];
let result = 0;

const calculate = (actionText) => {
    const mainActions = ["AC", "="];

    if(!mainActions.includes(actionText)) {
        actionText === "X" ? actionText = "*" : actionText
        calculationArray.push(actionText)
    }

    if(actionText === "=") {
        result = eval(calculationArray.join(""))
    }

    if(actionText === "AC") {
        calculationArray.length = 0
        result = 0;
    }
};

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        calculate(btns[i].outerText)
        calculationScreen.textContent = calculationArray.join("");
        resultDisplay.textContent = result;
    })
}