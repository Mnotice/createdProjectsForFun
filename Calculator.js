// get Input from user
const num1 = parseFloat(prompt("Enter a number"));
const num2 = parseFloat(prompt("Enter another number"));
const operator = prompt("Enter an operator (+, -, *, /)");

//perform calculations based on Input and Operator
switch (operator) {
    case "+":
        console.log(`${num1} + $(num2) = ${num1 + num2}`);
        break;
    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "/":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:

        console.log("Invalid operator");            
}

 const num1 = parseFloat(prompt("Enter a number"));
const num2 = parseFloat(prompt("Enter another number"));
const operator = prompt("Enter an operator (+, -, *, /)");

switch (operator) {
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "/":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log("Invalid operator");
}


// Get input from the user
var num1 = prompt("Enter a number:");
var num2 = prompt("Enter another number:");

// Perform calculations
var sum = parseFloat(num1) + parseFloat(num2);
var difference = parseFloat(num1) - parseFloat(num2);
var product = parseFloat(num1) * parseFloat(num2);
var quotient = parseFloat(num1) / parseFloat(num2);

// Display results
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);
console.log("The difference of " + num1 + " and " + num2 + " is " + difference);
console.log("The product of " + num1 + " and " + num2 + " is " + product);
console.log("The quotient of " + num1 + " and " + num2 + " is " + quotient);