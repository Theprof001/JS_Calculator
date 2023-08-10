// Get the input and operator elements from the HTML file
const resultInput = document.getElementById("result");
const operatorInput = document.getElementById("operator");

// Define an array of possible operators
const validOperators = ["+", "-", "x", "/"];

// Set initial values for firstNumber, secondNumber, and operator
let firstNumber = 0;
let secondNumber = 0;
let operator = null;

// Add a clicked number to the input field
const addNumber = (clickedNumber) => {
  if (resultInput.value === "=") {
    resultInput.value = "";
  }
  
  if (clickedNumber === "." && resultInput.value.includes(".")) {
    return;
  }
  
  resultInput.value += clickedNumber;
};

// Handle operator button clicks
const onClickOperator = (clickedOperator) => {
  firstNumber = parseFloat(resultInput.value);
  operator = clickedOperator;
  resultInput.value = "";
  operatorInput.value = operator;
};

// Handle cancel button clicks
const onClickCancel = () => {
  resultInput.value = "";
  operatorInput.value = "";
  firstNumber = 0;
  secondNumber = 0;
  operator = null;
};

// Handle equals button clicks
const onClickEquals = () => {
  secondNumber = parseFloat(resultInput.value);
  let result;

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "x":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
  }

  resultInput.value = Number.isNaN(result) ? "Error" : result;
  operatorInput.value = "=";
  firstNumber = result;
  secondNumber = 0;
  operator = null;
};

// Add event listeners to each operator button
validOperators.forEach((operator) => {
  document.getElementById(operator).addEventListener("click", () => {
    onClickOperator(operator);
  });
});

// Add event listeners to the cancel and equals buttons
document.getElementById("cancel").addEventListener("click", onClickCancel);
document.getElementById("equals").addEventListener("click", onClickEquals);
