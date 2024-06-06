function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        console.log("Oops, you can't divide by 0");
        return 0;
    } else {
        return num1 / num2;
    }
}

function operate(num1, num2, operate) {
    if (operate == '+') {
        return add(num1,num2);
    } else if (operate == '-') {
        return subtract(num1,num2);
    } else if (operate == '*') {
        return multiply(num1,num2);
    } else if (operate == '/') {
        return divide(num1,num2);
    } else {
        console.log("Invalid Operator");
        return 0;
    }
}

// Create the calculator GUI



// Let's do some math!
let num1 = 5;
let num2 = 0;
let operator = '/';

console.log( operate(num1, num2, operator) );