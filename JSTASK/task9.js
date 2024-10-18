// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Function to find the modulus of two numbers
function modulus(a, b) {
    return a % b;
}

// Example usage
const num1 = 10;
const num2 = 3;

console.log("Addition:", add(num1, num2));           // Output: 13
console.log("Subtraction:", subtract(num1, num2));   // Output: 7
console.log("Multiplication:", multiply(num1, num2)); // Output: 30
console.log("Division:", divide(num1, num2));         // Output: 3.333...
console.log("Modulus:", modulus(num1, num2));         // Output: 1
