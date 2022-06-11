const add = (number_1, number_2) => {
    return number_1 + number_2
}
const subtract = (number_1, number_2) => {
    return number_1 - number_2
}
const multiply = (number_1, number_2) => {
    return number_1 * number_2
}
const divide = (number_1, number_2) => {
    return number_1 / number_2
}

const calculationArray = [];
const displayArray = [];
const currentPressedBtnArray = [];
let currentPressedBtn = null;

const operate = (numb1, numb2, operator) => {
    const number_1 = +numb1;
    const number_2 = +numb2;
    const patternInteger = /^-?[0-9]+$/
    let calculationResult;


    if(operator === "+") {
        calculationResult = add(number_1, number_2)
    }
    if(operator === "-") {
        calculationResult = subtract(number_1, number_2)
    }
    if(operator === "X") {
        calculationResult = multiply(number_1, number_2)
    }

    if(operator === "/") {
        calculationResult = divide(number_1, number_2)
    }

    if(!patternInteger.test(calculationResult)) {
        calculationResult = calculationResult.toFixed(3)

    }

    calculationArray[0] = calculationResult

}


const calculate = (action) => {;
    const operators = ["X", "/", "X", "-", "+"]
    currentPressedBtn = action;

    if(currentPressedBtn === "AC") {
        calculationArray.length = 0;
        currentPressedBtnArray.length = 0;
        displayArray.length = 0;
        return;
    }

    if(operators.includes(currentPressedBtn) && currentPressedBtnArray.length >= 1) {
        calculationArray.push(currentPressedBtnArray.join(""))
        currentPressedBtnArray.length = 0;
    }

    if(!isNaN(currentPressedBtn) && operators.includes(currentPressedBtnArray[0])) {
        calculationArray.push(currentPressedBtnArray[0])
        currentPressedBtnArray.length = 0;
    }

    if(!isNaN(currentPressedBtn)) {
        currentPressedBtnArray.push(currentPressedBtn)
        displayArray.push(currentPressedBtn)
    }

    if(operators.includes(currentPressedBtn)) {
        currentPressedBtnArray[0] = currentPressedBtn
        displayArray.push(currentPressedBtn)
    }

    if(currentPressedBtn === ".") {

    }


    if(currentPressedBtn === "=") {

        if(calculationArray.length > 0) {
            calculationArray.push(currentPressedBtnArray.join(""))
            currentPressedBtnArray.length = 0
        }

        if(!calculationArray[0] || !calculationArray[2] || !calculationArray[1]) {
            return;
        }

        while(calculationArray.length > 1) {
            if(+calculationArray[2] === 0 && calculationArray[1] === "/") {
                displayArray.length = 0;
                displayArray[0] = "You can't divide by zero!"
                return;
            }


            operate(calculationArray[0], calculationArray[2], calculationArray[1])
            calculationArray.splice(1,2);

        }
        displayArray.length = 0;
        displayArray[0] = calculationArray[0]
    }

};

const btns = document.querySelectorAll(".buttons")[0].children;
const calculationScreen = document.getElementById("calculation_screen");

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        calculate(btns[i].outerText)
        calculationScreen.textContent = displayArray.join("");
    })
}