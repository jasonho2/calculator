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
calculatorDisplay.id = "calculator-display";
calculatorDisplay.classList.add("flexbox-item");
calculatorDisplay.textContent = "Start calculating!"; // placeholder text
headerContainer.appendChild(calculatorDisplay);

// create a clear button
const clearButton = document.createElement("button");
clearButton.id = "clear-button";
clearButton.classList.add("flexbox-item");
clearButton.textContent = "Clear";
headerContainer.appendChild(clearButton);

// create the second row container for digit and operator button containers
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
calculatorContainer.appendChild(buttonContainer);

// create separate containers for the digit buttons and operator buttons
const digitContainer = document.createElement("div");
digitContainer.id = "digit-container";
digitContainer.classList.add("flexbox-item");
buttonContainer.appendChild(digitContainer);

const operatorContainer = document.createElement("div");
operatorContainer.id = "operator-container";
operatorContainer.classList.add("flexbox-item");
buttonContainer.appendChild(operatorContainer);

// create the calculator buttons
const calculatorDigits = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
const calculatorOperators = Array('+', '-', '*', '/', '=');

// append the digit buttons
for (let i = 0; i < calculatorDigits.length; i++) {
    const button = document.createElement("button");
    button.classList.add("calculator-digit-button");
    button.textContent = calculatorDigits[i];
    digitContainer.appendChild(button);
};

// append the operator buttons
for (let i = 0; i < calculatorOperators.length; i++) {
    const button = document.createElement("button");
    button.classList.add("calculator-operator-button");
    button.textContent = calculatorOperators[i];
    operatorContainer.appendChild(button);
};

// event listener that shows the digit of the button being pressed
digitContainer.addEventListener('click', (event) => {
    // check if the element clicked is a button
    if (event.target.tagName === 'BUTTON'){
        console.log(event.target.textContent); // show the text of the button clicked
    };
});

// event listener that shows the operator of the button being pressed
operatorContainer.addEventListener('click', (event) => {
    // check if the element clicked is a button
    if (event.target.tagName === 'BUTTON'){
        console.log(event.target.textContent); // show the text of the button clicked
    };
});