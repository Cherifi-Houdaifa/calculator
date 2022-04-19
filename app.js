// app variables
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "="];

// DOM variables
const numbersDiv = document.querySelector(".container .numbers");

// add buttons to the numbers div
for (let i = 0; i < numbers.length; i++) {
    let btn = document.createElement("input");
    btn.setAttribute("class", "number");
    btn.setAttribute("value", numbers[i]);
    btn.setAttribute("type", "button");
    
    

    numbersDiv.appendChild(btn);
}