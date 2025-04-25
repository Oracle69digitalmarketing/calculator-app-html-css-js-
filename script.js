// Initialize the display as an empty string
let displayValue = '';

function updateDisplay() {
  // Update the display input with the current display value
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  // Clear the display value
  displayValue = '';
  updateDisplay();
}

function appendValue(value) {
  // Append the clicked value to the current display
  displayValue += value;
  updateDisplay();
}

function deleteLast() {
  // Remove the last character from the display value
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    // Evaluate the expression in the display
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    // Handle invalid expressions
    displayValue = 'Error';
    updateDisplay();
  }
}