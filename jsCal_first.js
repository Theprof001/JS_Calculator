// Get the input and operator elements from the HTML file
const myInput = document.getElementById("result");
const myOperator = document.getElementById("operator");

// Define an array of possible operators
const operators = ["+","-","x","/"];

// Set initial values for firstNumber, secondNumber, and operator
let firstNumber = 0;
let secondNumber = 0;
let operator = null;

// Add a clicked number to the input field
const addNumber = (clickedNumber) => {
        // If the value of the input field is "=", replace it with an empty string
    if (myInput.value === "=") {
        myInput.value = "";
    }
        // If the clicked number is ".", check if the input field already includes a ".", and if so, do nothing
    if (clickedNumber === "."){
        if (myInput.value.includes(".")) {
            return;
        }
    }
        // Add the clicked number to the input field
    myInput.value += clickedNumber;
};

// Handle operator button clicks
const onClickOperator = (clickedOperator) => {
        // Set the value of firstNumber to the current value of the input field
        firstNumber = parseFloat(myInput.value);
        // Set the operator to the clicked operator
        operator = clickedOperator;
        // Clear the input field
        myInput.value = "";
        // Set the value of the operator element to the clicked operator
        myOperator.value = operator;
    };
    // Handle cancel button clicks
    const onClickCancel = () => {
    // Set the value of the input and operator elements to empty strings
        myInput.value = "" ;
        myOperator.value = "";
    // Reset the values of firstNumber, secondNumber, and operator to their initial values
        firstNumber = 0;
        secondNumber = 0;
        operator = null;
    };
    // Handle equals button clicks
    const onClickEquals = () => {
    // Set the value of secondNumber to the current value of the input field
        secondNumber = parseFloat(myInput.value);
        let result;
    // Use a switch statement to perform the appropriate operation based on the current operator
        switch (operator){
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
    // If the operator is null or an invalid value, set the result to 0
                            default:
                                result = 0;
        }
    // Set the value of the input field to the result, or to "Error" if the result is NaN
        myInput.value = Number.isNaN(result) ? "Error" : result;
    // Set the value of the operator element to "="
        myOperator.value = "=";
    // Set the value of firstNumber to the result, and reset the values of secondNumber and operator to their initial values
        firstNumber = result;
        secondNumber = 0;
        operator = null;
    };

// Add event listeners to each operator button
    operators.forEach((operator) => {
        document.getElementById(operator).addEventListener("click", onClickOperator);
    });
// Add event listeners to the cancel and equals buttons
    document.getElementById("cancel").addEventListener("click", onClickCancel);
    document.getElementById("equals").addEventListener("click", onClickCancel);
