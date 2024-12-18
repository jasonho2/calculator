// basic functions add, subtract, multiply, divide
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

// console.log(add(3, 4));
// console.log(subtract(5, 2));
// console.log(multiply(4, 5));
// console.log(divide(6, 4));

// let firstInput = 0;
// let operator = '';
// let secondInput = 0;

// function that calls the above 4 functions depending on the operator
function operate(firstInput, operator, secondInput) {

    eligibleOperators = ['+','-','*','/'];

    if (!eligibleOperators.includes(operator)) {
        alert('Please use an eligible operator: +, -, *, /');
    }

    if (operator === '+') {
        return add(firstInput, secondInput);
    } else if (operator === '-') {
        return subtract(firstInput, secondInput);
    } else if (operator === '*') {
        return multiply(firstInput, secondInput);
    } else { // divide
        return divide(firstInput, secondInput);
    }
};

console.log(operate(3, '+', 5));

// create the body container
const calculatorContainer = document.createElement("div");
calculatorContainer.classList.add("container");
document.body.appendChild(calculatorContainer);

// create a display for the entered digits and operators - like a calculator screen
const calculatorDisplay = document.createElement("div");
calculatorDisplay.id = "calculator-display";
calculatorDisplay.textContent = "2 + 2 = 4"; // placeholder text
calculatorContainer.appendChild(calculatorDisplay);

// create separate containers for the digit buttons and operator buttons
const digitContainer = document.createElement("div");
digitContainer.id = "digit-container";
calculatorContainer.appendChild(digitContainer);

const operatorContainer = document.createElement("div");
operatorContainer.id = "operator-container";
calculatorContainer.appendChild(operatorContainer);

// create the calculator buttons
const calculatorDigits = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
const calculatorOperators = Array('+', '-', '*', '/', '=');

// append the digit buttons
for (let i = 0; i < calculatorDigits.length; i++) {
    const button = document.createElement("button");
    button.classList.add("calculator-digit-button");
    button.textContent = calculatorDigits[i];
    digitContainer.appendChild(button);
}

// append the operator buttons
for (let i = 0; i < calculatorOperators.length; i++) {
    const button = document.createElement("button");
    button.classList.add("calculator-operator-button");
    button.textContent = calculatorOperators[i];
    operatorContainer.appendChild(button);
}