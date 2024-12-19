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

// function that calls the above 4 functions depending on the operator
function operate(firstInput, operator, secondInput) {

    // eligibleOperators = ['+','-','x','/'];

    // if (!eligibleOperators.includes(operator)) {
    //     alert('Please select an eligible operator: +, -, x, /');
    // }

    if (operator === '+') {
        return add(firstInput, secondInput);
    } else if (operator === '-') {
        return subtract(firstInput, secondInput);
    } else if (operator === 'x') {
        return multiply(firstInput, secondInput);
    } else { // divide
        return divide(firstInput, secondInput);
    }
};

// create the body container
const calculatorContainer = document.createElement("div");
calculatorContainer.classList.add("container");
document.body.appendChild(calculatorContainer);

// create the first row container for display and clear button
const headerContainer = document.createElement("div");
headerContainer.classList.add("header-container");
calculatorContainer.appendChild(headerContainer);

// create a display for the entered digits and operators - like a calculator screen
const calculatorDisplay = document.createElement("div");
calculatorDisplay.classList.add("calculator-display");
calculatorDisplay.textContent = 0; // placeholder text
headerContainer.appendChild(calculatorDisplay);

// create a clear button
const clearButton = document.createElement("button");
clearButton.classList.add("clear-button");
clearButton.textContent = "Clear";
headerContainer.appendChild(clearButton);

// create the second row container for digit and operator button containers
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
calculatorContainer.appendChild(buttonContainer);

// create separate containers for the digit buttons and operator buttons
const digitContainer = document.createElement("div");
digitContainer.id = "digit-container";
buttonContainer.appendChild(digitContainer);

const operatorContainer = document.createElement("div");
operatorContainer.id = "operator-container";
buttonContainer.appendChild(operatorContainer);

// create the calculator buttons
const calculatorDigits = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
const calculatorOperators = Array('+', '-', 'x', '/', '=');

// append the digit buttons
for (let i = 0; i < calculatorDigits.length; i++) {
    const button = document.createElement("button");
    button.classList.add("calculator-digit-button");
    button.textContent = calculatorDigits[i];
    button.id = `digit${calculatorDigits[i]}`;
    digitContainer.appendChild(button);
};

// append the operator buttons
for (let i = 0; i < calculatorOperators.length; i++) {
    const button = document.createElement("button");
    button.classList.add("calculator-operator-button");
    button.textContent = calculatorOperators[i];
    button.id = `operator${calculatorOperators[i]}`;
    operatorContainer.appendChild(button);
};

// variables for use to store values and operators
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';

// rather than container event listeners, create an event listener when buttons are clicked


// function for populating display as buttons are clicked
function updateDisplay(value) {
    if (calculatorDisplay.textContent === '0') {
        calculatorDisplay.textContent = value;
    } else {
        calculatorDisplay.textContent += value;
    };
};

// functions to support storing the current values and operator in the display
function updateNumber(value) {
    return parseFloat(value);
};

function updateOperator(value) {
    return value;
}