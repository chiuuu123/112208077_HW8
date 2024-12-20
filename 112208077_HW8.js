// Fetch input elements
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');
const resultDisplay = document.getElementById('result-display');

// Add function
function add(a, b) {
  return a + b;
}

// Subtract function
function subtract(a, b) {
  return a - b;
}

// Multiply function
function multiply(a, b) {
  return a * b;
}

// Divide function
function divide(a, b) {
  if (b === 0) {
    alert("Division by zero is not allowed.");
    return null;
  }
  return a / b;
}

// Main calculate function
function calculate() {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  const operatorValue = operator.value;

  if (isNaN(num1Value) || isNaN(num2Value)) {
    alert("Please enter valid numbers.");
    return;
  }

  let result;

  switch (operatorValue) {
    case "+":
      result = add(num1Value, num2Value);
      break;
    case "-":
      result = subtract(num1Value, num2Value);
      break;
    case "*":
      result = multiply(num1Value, num2Value);
      break;
    case "/":
      result = divide(num1Value, num2Value);
      break;
    default:
      alert("Invalid operator selected.");
      return;
  }

  if (result !== null) {
    resultDisplay.textContent = `Result = ${result.toFixed(2)}`;
  }
}
