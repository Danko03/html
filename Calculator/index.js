// let firstValue = [];
// let secondValue = [];
// let result = "";
// let firstExist = false;
// let action = "";
// let numberValue = 0;
// let numberQuote = 0;
// let displayEl = "";

// // display controller
// function display() {
//     if (numberValue === 0 && numberQuote === 1) {
//         displayEl = firstValue;
//         document.getElementById("display").innerHTML = displayEl;
//     } else if (numberValue === 0 && numberQuote === 2) {
//         displayEl = String(firstValue[0]) + String(firstValue[1]);
//         document.getElementById("display").innerHTML = displayEl;
//     } else if (numberValue === 0 && numberQuote === 3) {
//         displayEl = String(firstValue[0]) + String(firstValue[1]) + String(firstValue[2]);
//         document.getElementById("display").innerHTML = displayEl;
//     } else if (numberValue === 0 && numberQuote === 4) {
//         displayEl = String(firstValue[0]) + String(firstValue[1]) + String(firstValue[2]) + String(firstValue[3]);
//         document.getElementById("display").innerHTML = displayEl;
//     } else if (numberValue === 0 && numberQuote === 5) {
//         displayEl = String(firstValue[0]) + String(firstValue[1]) + String(firstValue[2]) + String(firstValue[3]) + String(firstValue[4]);
//         document.getElementById("display").innerHTML = displayEl
//     } else if (numberValue === 0 && numberQuote === 6) {
//         displayEl = String(firstValue[0]) + String(firstValue[1]) + String(firstValue[2]) + String(firstValue[3]) + String(firstValue[4]) + String(firstValue[5]);
//         document.getElementById("display").innerHTML = displayEl;
//     }
//     if (numberValue === 1 && numberQuote === 7) {
//         document.getElementById("display").innerHTML = displayEl + action;
//     }
//     if (numberValue === 3 && numberQuote === 8) {
//         displayEl += action + secondValue;
//         document.getElementById("display").innerHTML = displayEl;
//     } else if (numberValue === 3 && numberQuote === 9) {
//         displayEl += String(secondValue[1]);
//         document.getElementById("display").innerHTML = displayEl;
//     } else if (numberValue === 3 && numberQuote === 10) {
//         displayEl += String(secondValue[2]);
//         document.getElementById("display").innerHTML = displayEl;
//     } else if (numberValue === 3 && numberQuote === 11) {
//         displayEl += String(secondValue[3]);
//         document.getElementById("display").innerHTML = displayEl;
//     } else if (numberValue === 3 && numberQuote === 12) {
//         displayEl += String(secondValue[4]);
//         document.getElementById("display").innerHTML = displayEl
//     } else if (numberValue === 3 && numberQuote === 13) {
//         displayEl += String(secondValue[5]);
//         document.getElementById("display").innerHTML = displayEl;
//     }
//     if (numberValue >= 3 && numberQuote === 14) {
//         document.getElementById("display").innerHTML = displayEl += " = " + result;
//         numberQuote + 1;
//     }
// }

// // arythmethic engine
// function calculate() {
//     numberQuote = 14
//     if (action === " + ") {
//         result = Number(firstValue) + Number(secondValue);
//         display()
//     } else if (action === " - ") {
//         result = Number(firstValue) - Number(secondValue);
//         display()
//     } else if (action === " &#215; ") {
//         result = Number(firstValue) * Number(secondValue);
//         display()
//     } else if (action === " : ") {
//         result = Number(firstValue) / Number(secondValue);
//         display()
//     }
// }

// // action input
// function add() {
//     numberValue = 1;
//     if (numberValue === 1 && firstExist === true) {
//         action = " + ";
//         numberQuote = 7
//     }else {
//         console.log("Please, choose a number first")
//     }
//     display();
// }

// function sub() {
//     numberValue = 1;
//     if (numberValue === 1 && firstExist === true) {
//         action = " - ";
//         numberQuote = 7
//     }else {
//         console.log("Please, choose a number first")
//     }
//     display();
// }

// function multiply() {
//     numberValue = 1;
//     if (numberValue === 1 && firstExist === true) {
//         action = " &#215; ";
//         numberQuote = 7
//     }else {
//         console.log("Please, choose a number first")
//     }
//     display();
// }

// function divide() {
//     numberValue = 1;
//     if (numberValue === 1 && firstExist === true) {
//         action = " : ";
//         numberQuote = 7
//     }else {
//         console.log("Please, choose a number first")
//     }
//     display();
// }

// // number input
// function one() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(1);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(1);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(1)
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function two() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(2);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(2);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(2);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function three() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(3);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(3);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(3);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function four() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(4);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(4);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(4);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function five() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(5);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(5);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(5);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function six() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(6);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(6);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(6);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function seven() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(7);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(7);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(7);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function eight() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(8);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(8);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(8);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function nine() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(9);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(9);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(9);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function zero() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(0);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(0);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(0);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }






// let firstValue = [];
// let secondValue = [];
// let result = "";
// let firstExist = false;
// let action = "";
// let numberValue = 0;
// let numberQuote = 0;
// let displayEl = document.getElementById("display");
// let displayNum = "";
// let whatDisplay = display();


// // display controller
// function display() {
//     if (numberValue === 0 && numberQuote <= 6){
//         for (let i = 0; i < firstValue.length; i++) {
//             displayNum = firstValue;
//             return displayNum;
//         }
//     } 
//     else if (numberValue === 1 && numberQuote === 7) {
//         displayEl.innerHTML = displayNum + action;
//     } 
//     else if (numberValue === 2 && numberQuote === 8) {
//         displayEl += action;
//         for (let i = 0; i < secondValue.length; i++) {
//             document.getElementById("display").innerHTML += secondValue[i];
//         }
//     }
//     else if (numberValue === 2 && numberQuote >= 9){
//         for (let i = 1; i < secondValue.length; i++) {
//             document.getElementById("display").innerHTML += secondValue[i];
//         }
//     }
// }

// displayEl.innerHTML = "&nbsp;" + whatDisplay;

// // arythmethic engine
// function calculate() {
//     numberQuote = 14;
//     if (action === " + ") {
//         result = Number(firstValue) + Number(secondValue);
//         display()
//     } else if (action === " - ") {
//         result = Number(firstValue) - Number(secondValue);
//         display()
//     } else if (action === " &#215; ") {
//         result = Number(firstValue) * Number(secondValue);
//         display()
//     } else if (action === " : ") {
//         result = Number(firstValue) / Number(secondValue);
//         display()
//     }
// }

// // action input
// function add() {
//     numberValue = 1;
//     if (numberValue === 1 && firstExist === true) {
//         action = " + ";
//         numberQuote = 7;
//     }else {
//         console.log("Please, choose a number first")
//     }
//     display();
// }

// function sub() {
//     numberValue = 1;
//     if (numberValue === 1 && firstExist === true) {
//         action = " - ";
//         numberQuote = 7
//     }else {
//         console.log("Please, choose a number first")
//     }
//     display();
// }

// function multiply() {
//     numberValue = 1;
//     if (numberValue === 1 && firstExist === true) {
//         action = " &#215; ";
//         numberQuote = 7
//     }else {
//         console.log("Please, choose a number first")
//     }
//     display();
// }

// function divide() {
//     numberValue = 1;
//     if (numberValue === 1 && firstExist === true) {
//         action = " : ";
//         numberQuote = 7
//     }else {
//         console.log("Please, choose a number first")
//     }
//     display();
// }

// // number input
// function one() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(1);
//         numberQuote += 1;
//         display();
//     }else if (numberValue === 1 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 2;
//         secondValue.push(1);
//         display();
//     }else if (numberValue === 2 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(1)
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function two() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(2);
//         numberQuote += 1;
//         display();
//     }else if (numberValue === 1 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 2;
//         secondValue.push(2);
//         display();
//     }else if (numberValue === 2 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(2)
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function three() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(3);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(3);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(3);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function four() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(4);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(4);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(4);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function five() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(5);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(5);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(5);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function six() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(6);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(6);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(6);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function seven() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(7);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(7);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(7);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function eight() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(8);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(8);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(8);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function nine() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(9);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(9);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(9);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }

// function zero() {
//     firstExist = true;
//     if (numberValue === 0 && numberQuote <= 7) {
//         firstValue.push(0);
//         numberQuote += 1;
//         display();
//     }else if (numberValue <= 2 && numberQuote === 7) {
//         numberQuote = 8;
//         numberValue = 3;
//         secondValue.push(0);
//         display();
//     }else if (numberValue === 3 && numberQuote >= 8) {
//         numberQuote += 1;
//         secondValue.push(0);
//         display();
//     } else {
//         console.log("error 420")
//     }
// }






// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");
// const btn4 = document.getElementById("btn4");
// const btn5 = document.getElementById("btn5");
// const btn6 = document.getElementById("btn6");
// const btn7 = document.getElementById("btn7");
// const btn8 = document.getElementById("btn8");
// const btn9 = document.getElementById("btn9");
// const btn0 = document.getElementById("btn0");
// const btnPlus = document.getElementById("btn-Plus");
// const btnMinus = document.getElementById("btn-Minus");
// const btnMultiply = document.getElementById("btn-Multiply");
// const btnDivide = document.getElementById("btn-Divide");
// const btnIs = document.getElementById("btn-Long");
// const display = document.getElementById("display");

// let displayed;
// let input;
// let action;
// let controller = 0;
// let numberCounter = 0;
// let firstValue = 0;
// let secondValue = 0;
// let result = 0;

// function displayIt() {
//     display.innerHTML += input;
//     displayed = display.innerHTML;
//     if (controller === 0 && numberCounter < 6){
//         firstValue += Number(displayed);
//     } else if (controller === 2 && numberCounter >= 6){
//         secondValue += input;
//         console.log(secondValue)
//         // Listen bruh... You've got over here a mistake: the second value numbers are being added, instead of being stored stringWise (1 + 2 = 3). Danko
// }}

// function calculate() {
//     if (action = "+"){
//         result = firstValue + secondValue;
//         display.innerHTML = result;
//         console.log(result)
//     }
// }

// btn1.addEventListener("click", function(){
//     if (controller === 0 && numberCounter < 6){
//         numberCounter++;
//         input = 1;
//         displayIt();
//     } else if (controller >= 1 && numberCounter < 12 && numberCounter >= 6){
//         controller = 2;
//         numberCounter++;
//         input = 1;
//         displayIt();
//     }
// })

// btn2.addEventListener("click", function(){
//     if (controller === 0 && numberCounter < 6){
//         numberCounter++;
//         input = 2;
//         displayIt();
//     } else if (controller >= 1 && numberCounter < 12 && numberCounter >= 6){
//         controller = 2;
//         numberCounter++;
//         input = 2;
//         displayIt();
//     }
// })

// btn3.addEventListener("click", function(){
//     if (controller === 0 && numberCounter < 6){
//         numberCounter++;
//         input = 3;
//         displayIt();
//     } else if (controller >= 1 && numberCounter < 12 && numberCounter >= 6){
//         controller = 2;
//         numberCounter++;
//         input = 3;
//         displayIt();
//     }
// })

// btn4.addEventListener("click", function(){
//     if (controller === 0 && numberCounter < 6){
//         numberCounter++;
//         input = 4;
//         displayIt();
//     } else if (controller >= 1 && numberCounter < 12 && numberCounter >= 6){
//         controller = 2;
//         numberCounter++;
//         input = 4;
//         displayIt();
//     }
// })

// btn5.addEventListener("click", function(){
//     if (controller === 0 && numberCounter < 6){
//         numberCounter++;
//         input = 5;
//         displayIt();
//     } else if (controller >= 1 && numberCounter < 12 && numberCounter >= 6){
//         controller = 2;
//         numberCounter++;
//         input = 5;
//         displayIt();
//     }
// })

// btn6.addEventListener("click", function(){
//     if (controller === 0 && numberCounter < 6){
//         numberCounter++;
//         input = 6;
//         displayIt();
//     } else if (controller >= 1 && numberCounter < 12 && numberCounter >= 6){
//         controller = 2;
//         numberCounter++;
//         input = 6;
//         displayIt();
//     }
// })

// btn7.addEventListener("click", function(){
//     if (controller === 0 && numberCounter < 6){
//         numberCounter++;
//         input = 7;
//         displayIt();
//     } else if (controller >= 1 && numberCounter < 12 && numberCounter >= 6){
//         controller = 2;
//         numberCounter++;
//         input = 7;
//         displayIt();
//     }
// })

// btn8.addEventListener("click", function(){
//     if (controller === 0 && numberCounter < 6){
//         numberCounter++;
//         input = 8;
//         displayIt();
//     } else if (controller >= 1 && numberCounter < 12 && numberCounter >= 6){
//         controller = 2;
//         numberCounter++;
//         input = 8;
//         displayIt();
//     }
// })

// btn9.addEventListener("click", function(){
//     if (controller === 0 && numberCounter < 6){
//         numberCounter++;
//         input = 9;
//         displayIt();
//     } else if (controller >= 1 && numberCounter < 12 && numberCounter >= 6){
//         controller = 2;
//         numberCounter++;
//         input = 9;
//         displayIt();
//     }
// })

// btn0.addEventListener("click", function(){
//     if (controller === 0 && numberCounter < 6 && numberCounter > 0){
//         numberCounter++;
//         input = 0;
//         displayIt();
//     } else if (controller >= 1 && numberCounter < 12 && numberCounter >= 6){
//         controller = 2;
//         numberCounter++;
//         input = 0;
//         displayIt();
//     }
// })

// btnPlus.addEventListener("click", function(){
//     if (numberCounter > 0){
//         controller = 1;
//         numberCounter = 6;
//         input = " + ";
//         action = "+";
//         displayIt();
// }})

// btnMinus.addEventListener("click", function(){
//     if (numberCounter > 0){
//         controller = 1;
//         numberCounter = 6;
//         input = " - ";
//         action = "-";
//         displayIt();
// }})

// btnMultiply.addEventListener("click", function(){
//     if (numberCounter > 0){
//         controller = 1;
//         numberCounter = 6;
//         input = " &#215; ";
//         action = "&#215;";
//         displayIt();
// }})

// btnDivide.addEventListener("click", function(){
//     if (numberCounter > 0){
//         controller = 1;
//         numberCounter = 6;
//         input = " : ";
//         action = ":";
//         displayIt();
// }})

// btnIs.addEventListener("click", function(){
//     calculate();
// })