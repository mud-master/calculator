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
  if (operate == "+") {
    return add(num1, num2);
  } else if (operate == "-") {
    return subtract(num1, num2);
  } else if (operate == "*") {
    return multiply(num1, num2);
  } else if (operate == "/") {
    return divide(num1, num2);
  } else {
    console.log("Invalid Operator");
    return 0;
  }
}

function displayEquation(num1, num2, operator) {
    if (!equationFinished) {
        if (num1 == null) {
            return '';
        } else if (operator == null) {
            return num1;
        } else if (num2 == null) {
            return num1 + ' ' + operator;
        }
        else {
            return num1 + ' ' + operator + ' ' + num2;
        }
    }
    else {
        return operate(parseInt(num1), parseInt(num2), operator);
    }

}

// Finish the calculator GUI
const calc = document.querySelector("#calc"); // The main div in index.html
const input = document.querySelector("#input"); // User types input in this div

// Let's do some math!
let num1 = null;
let num2 = null;
let operator = null;
let equationFinished = false;
let validOperators = new Set(["+", "-", "/", "*"]);

document.addEventListener("keydown", function (event) {
  const output = document.querySelector("#output"); // output box on top of page

  if (event.key >= 0 && event.key <= 9 
    && operator == null) {
    num1 = (num1 == null ? event.key : num1 + event.key);
  } else if (
    num1 != null &&
    operator == null &&
    validOperators.has(event.key)
  ) {
    operator = event.key;
  } else if (
    operator != null &&
    event.key >= 0 &&
    event.key <= 9
  ) {
    num2 = (num2 == null ? event.key : num2 + event.key);
  } else if (num1 != null && operator != null && num2 != null && event.key == 'Enter') {
    equationFinished = true;
  }

  output.textContent = displayEquation(num1, num2, operator, equationFinished);
});
