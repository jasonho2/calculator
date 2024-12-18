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