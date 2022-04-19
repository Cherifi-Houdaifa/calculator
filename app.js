// operation functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operate = (x, y, op) => {
    if (op === "*") return multiply(x, y);
    else if (op === "/") return divide(x, y);
    else if (op === "+") return add(x, y);
    else if (op === "-") return subtract(x, y);
};


// app variables
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "="];
let currentOp = null;
let lastNum = null;
let currentNum = null;
// DOM variables
const numbersDiv = document.querySelector(".container .numbers");
const display = document.querySelector(".container .display");
const operators = Array.from(document.querySelectorAll(".container .operators input"));
const clear = document.querySelector(".container .clear");
const remove = document.querySelector(".container .delete");

// add buttons to the numbers div
for (let i = 0; i < numbers.length; i++) {
    let btn = document.createElement("input");
    btn.setAttribute("class", "number");
    btn.setAttribute("value", numbers[i]);
    btn.setAttribute("type", "button");
    
    if (typeof numbers[i] === "number") {
        btn.addEventListener("click", (e) => {
            if (display.textContent.length < 11) {
                display.textContent += numbers[i].toString();                
            }
        });
    }
    else if (numbers[i] === "=") {
        btn.addEventListener("click", (e) => {
            currentNum = display.textContent;
            let result = operate(Number(lastNum), Number(currentNum), currentOp);
            if (result === undefined) {
                return;    
            }
            if (result.toString().length > 11) {
                result = result.toString().substring(0, 11);
            }
            if (result === Infinity) {
                alert("Can't divide by zero");
                return;
            }
            display.textContent = result;
        });
    }
    else if (numbers[i] === ".") {
        btn.addEventListener("click", (e) => {
            if (display.textContent.includes(".") === false && display.textContent.length < 11) {
                display.textContent += numbers[i];                
            }
        });
    }

    numbersDiv.appendChild(btn);
}
// add functionality to the clear button
clear.addEventListener("click", (e) => {
    display.textContent = "";
    lastNum = null;
    currentNum = null;
    currentOp = null;
});

// add functionality to the delete button
remove.addEventListener("click", (e) => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
});


// add functionality to the operators
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (e) => {
        lastNum = display.textContent;
        currentOp = operators[i].getAttribute("value");
        display.textContent = "";
    });
}