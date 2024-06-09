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
  num1 = parseInt(num1);
  num2 = parseInt(num2);

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

function calculate(numsArr) {
  while (numsArr.length > 1) {
    let firstMult = numsArr.indexOf("*");
    let firstDiv = numsArr.indexOf("/");
    let firstAdd = numsArr.indexOf("+");
    let firstSub = numsArr.indexOf("-");

    if (firstMult != -1) {
      let result = operate(numsArr[firstMult - 1], numsArr[firstMult + 1], "*");
      numsArr.splice(firstMult - 1, 3, result);
    } else if (firstDiv != -1) {
      let result = operate(numsArr[firstDiv - 1], numsArr[firstDiv + 1], "/");
      numsArr.splice(
        firstDiv - 1,
        3,
        operate(numsArr[firstDiv - 1], numsArr[firstDiv + 1], "/")
      );
    } else if (firstAdd != -1) {
      let result = operate(numsArr[firstAdd - 1], numsArr[firstAdd + 1], "+");
      numsArr.splice(
        firstAdd - 1,
        3,
        operate(numsArr[firstAdd - 1], numsArr[firstAdd + 1], "+")
      );
    } else if (firstSub != -1) {
      let result = operate(numsArr[firstSub - 1], numsArr[firstSub + 1], "-");
      numsArr.splice(
        firstSub - 1,
        3,
        operate(numsArr[firstSub - 1], numsArr[firstSub + 1], "-")
      );
    }
  }
  return numsArr[0];
}

// Finish the calculator GUI
const calc = document.querySelector("#calc"); // The main div in index.html
const input = document.querySelector("#input"); // User types input in this div

// Let's change this up a bit...
let numsArr = [];
let validOperators = new Set(["+", "-", "/", "*"]);

document.addEventListener("keydown", (event) => buttonClick(event.key));
/*
document.addEventListener("keydown", function (event) {
  const output = document.querySelector("#output"); // output box on top of page
  console.log("is even: " + (numsArr.length % 2) == 0);

  if (event.key >= 0 && event.key <= 9 && numsArr.length % 2 == 0) {
    numsArr.push(event.key);
    output.textContent = numsArr.join(" ");
  } else if (event.key >= 0 && event.key <= 9) {
    numsArr[numsArr.length - 1] = numsArr[numsArr.length - 1] + event.key;
    output.textContent = numsArr.join(" ");
  } else if (validOperators.has(event.key)) {
    numsArr.push(event.key);
    output.textContent = numsArr.join(" ");
  } else if (event.key == "Enter" && numsArr.length % 2 == 1) {
    console.log("enter key pressed, numsArr is " + numsArr);
    output.textContent = calculate(numsArr);
    numsArr = [];
  } else if (event.key == "Backspace" || event.key == "Delete") {
    numsArr = [];
    output.textContent = "";
  }
});
*/
function buttonClick(num) {
  console.log("input is " + num);
  const output = document.querySelector("#output"); // output box on top of page
  if (num >= 0 && num <= 9 && numsArr.length % 2 == 0) {
    numsArr.push(num);
    output.textContent = numsArr.join(" ");
    console.log("new number to array. arr is " + numsArr);
  } else if (num >= 0 && num <= 9) {
    numsArr[numsArr.length - 1] = numsArr[numsArr.length - 1] + num;
    output.textContent = numsArr.join(" ");
    console.log("add num to num. new arr is: " + numsArr);
  } else if (validOperators.has(num) && numsArr.length % 2 == 1) {
    numsArr.push(num);
    output.textContent = numsArr.join(" ");
    console.log("add operator. new arr is " + numsArr);
  } else if (num == "Enter" && numsArr.length % 2 == 1) {
    console.log("about to calculate this array: current arr is: " + numsArr);
    let answer = calculate(numsArr);
    console.log("calculated answer is " + answer);
    output.textContent = answer;
    numsArr = [answer];
  } else if (num == "Backspace" || num == "Delete") {
    numsArr = [];
    output.textContent = "";
    console.log("delete");
  }
}

const numbers = document.querySelectorAll("button");

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    buttonClick(num.getAttribute("data-value"));
    num.blur();
  });
});

/*

function displayEquation(num1, num2, operator) {
  if (!equationFinished) {
    if (num1 == null) {
      return "";
    } else if (operator == null) {
      return num1;
    } else if (num2 == null) {
      return num1 + " " + operator;
    } else {
      return num1 + " " + operator + " " + num2;
    }
  } else {
    return operate(parseInt(num1), parseInt(num2), operator);
  }
}

// Let's do some math!
let num1 = null;
let num2 = null;
let operator = null;
let equationFinished = false;
//let validOperators = new Set(["+", "-", "/", "*"]);

document.addEventListener("keydown", function (event) {
  const output = document.querySelector("#output"); // output box on top of page

  if (event.key >= 0 && event.key <= 9 && operator == null) {
    num1 = num1 == null ? event.key : num1 + event.key;
  } else if (
    num1 != null &&
    operator == null &&
    validOperators.has(event.key)
  ) {
    operator = event.key;
  } else if (operator != null && event.key >= 0 && event.key <= 9) {
    num2 = num2 == null ? event.key : num2 + event.key;
  } else if (
    num1 != null &&
    operator != null &&
    num2 != null &&
    event.key == "Enter"
  ) {
    equationFinished = true;
  }

  output.textContent = displayEquation(num1, num2, operator, equationFinished);
  if (equationFinished) {
    num1 = null;
    num2 = null;
    operator = null;
    equationFinished = false;
  }
});
*/
