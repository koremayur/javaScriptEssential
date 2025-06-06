    
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        // Display the result
        displayMultiplicationResult(multiply(num1, num2));
        displayAdditionResult(addition(num1, num2));
        displayDivisionResult(division(num1, num2));
    } else {
        displayResult('Please enter valid numbers');            
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function addition(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a + b;
}

function division(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a / b;
}

function displayMultiplicationResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('multiplication_result');
    resultElement.textContent = `The Multiplication result is: ${result}`;
}
 
function displayAdditionResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('addition_result');
    resultElement.textContent = `The Addition result is: ${result}`;
}

function displayDivisionResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('division_result');
    resultElement.textContent = `The Division result is: ${result}`;
}