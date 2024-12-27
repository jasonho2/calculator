// basic functions add, subtract, multiply, divide
function add(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return Math.round((a + b) * 10000) / 10000;
};
function subtract(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return Math.round((a - b) * 10000) / 10000;
};
function multiply(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return Math.round((a * b) * 10000) / 10000;
};
function divide(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    if (b === 0 || b === '') {
        return 'lmao';
    } else {
        return Math.round((a / b) * 10000) / 10000;
    };
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

// variables for use to store values and operators
let currentNumber = '';
let previousNumber = '';
let currentOperator = '';

// query selector for all buttons and the display
const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

// array for mathematical operator buttons
const eligibleOperators = ['+','-','x','/'];

// rather than container event listeners, create an event listener when buttons are clicked
buttons.forEach(button => {
    button.addEventListener('click', () => {

        // data value of the button
        const value = button.getAttribute('data-value');

        if (button.textContent === 'C') { // if clear is pressed then reset everything
            currentNumber = '';
            previousNumber = '';
            currentOperator = '';
            display.textContent = '';

        } else if (eligibleOperators.includes(button.textContent)) { // if a mathematical operator was clicked then set the previous number to the text content and the current operator to the operator button pressed

            // if no previous number entry, set to 0
            if (display.textContent === '') {
                previousNumber = 0;
                updateDisplay(0);
            };

            // check if a pair of numbers and operator exists. evaluate this equation first before proceeding with more calculations
            if (previousNumber && currentOperator && currentNumber) {
                const result = operate(previousNumber, currentOperator, currentNumber);
                display.textContent = result;
                previousNumber = result;
                currentNumber = '';
            };

            // check if the most recent button entry was an operator. replace with the most recent click
            if (eligibleOperators.includes(display.textContent.charAt(display.textContent.length - 1))) {
                currentOperator = button.textContent;
                display.textContent = display.textContent.slice(0, -1) + currentOperator;
            } else if (currentNumber === 0) { // checking for currentNumber === 0, continue operation regardless of next inputs
                const result = operate(previousNumber, currentOperator, currentNumber);
                display.textContent = result;
                updateDisplay(currentOperator);
                previousNumber = result;
                currentNumber = '';
            } else {
                currentOperator = button.textContent;
                updateDisplay(currentOperator);
                previousNumber = parseFloat(display.textContent);
                currentNumber = '';
            };

        } else if (button.textContent === '=') {
            if (currentNumber === '') {
                alert("Please finish the equation: second number not provided");
            } else {
                const result = operate(previousNumber, currentOperator, currentNumber);
                display.textContent = result;
                previousNumber = result;
                currentNumber = '';
                currentOperator = '';
            };

        } else if (button.textContent === '+/-') { // switch the sign of the current number or result if +/- is clicked
            if (currentOperator) {
                currentNumber = parseFloat(currentNumber) * -1;
                display.textContent = previousNumber + currentOperator + currentNumber;
            } else {
                display.textContent = parseFloat(display.textContent) * -1;
            };

        } else { // update the current number input
            currentNumber += button.textContent;
            updateDisplay(button.textContent);
            currentNumber = parseFloat(currentNumber);
        };
        
    });
});

// event listener for backspace key
document.addEventListener('keydown', (e) => {
    if (e.code === 'Backspace') {
        if (String(currentNumber).length > 0) {
            currentNumber = String(currentNumber).slice(0, -1); // Remove the last character
            display.textContent = currentNumber || '0'; // Update display or show '0' if empty
        }
    }
});

// event listener for keyboard number support
document.addEventListener('keydown', (e) => {
    const value = e.key;
    const button = document.querySelector(`button[data-value="${value}"]`);
    const dataValue = button.getAttribute('data-value');
    console.log(dataValue);
    if (button) {
        button.click(); // simulate a button click
    };
});

// event listener for the enter key for equals
document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        if (currentNumber === '') {
            alert("Please finish the equation: second number not provided");
        } else {
            const result = operate(previousNumber, currentOperator, currentNumber);
            display.textContent = result;
            previousNumber = result;
            currentNumber = '';
            currentOperator = '';
        };
    };
});

// event listener for backspace key for clear
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        currentNumber = '';
        previousNumber = '';
        currentOperator = '';
        display.textContent = '';
    };
});

// function for populating display as buttons are clicked
function updateDisplay(value) {
    if (display.textContent === '') {
        display.textContent = value;
    } else {
        display.textContent += value;
    };
    return value;
};