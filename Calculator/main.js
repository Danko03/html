const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnPlus = document.getElementById("btn-Plus");
const btnMinus = document.getElementById("btn-Minus");
const btnMultiply = document.getElementById("btn-Multiply");
const btnDivide = document.getElementById("btn-Divide");
const btnIs = document.getElementById("btn-Long");
const display = document.getElementById("display");

let firstValue;
let secondValue;
let action;
let controller = 0;
let result;

function displayOperation(firstValue, secondValue, action){
    if (action == undefined && secondValue == undefined){
        display.textContent = firstValue;
    } else if (action && secondValue == undefined){
        display.innerHTML = firstValue + action;
    } else if (action && secondValue){
        display.innerHTML = firstValue + action + secondValue;
    }
}

function displayResult(firstValue, secondValue, action){
    controller = 13;
    if(action === " + "){
        return Number(firstValue) + Number(secondValue);
    } else if(action === " - "){
        return Number(firstValue) - Number(secondValue);
    } else if(action === " &#215; "){
        return Number(firstValue) * Number(secondValue);
    } else if(action === " : "){
        return Number(firstValue) / Number(secondValue);
    }
}

function input(digit){
    if(controller < 6){
        if(controller == false){
            firstValue = String(digit);
        } else if(controller){
            firstValue += String(digit);
        }
        controller++;
        displayOperation(firstValue, undefined, undefined);
    } else if(controller >= 7 && controller < 13){
        if(secondValue === undefined){
            secondValue = String(digit);
            controller = 8;
        } else if(secondValue){
            secondValue += String(digit);
            controller++;
        }
        displayOperation(firstValue, secondValue, action);
    }
}

function inputAction(){
    if(controller < 8 && controller != false && controller != 13){
        controller = 7;
        if(controller === 7){
            displayOperation(firstValue, undefined, action);
        }
    }
    if(controller === 13){
        controller = 7;
        secondValue = undefined;
        firstValue = result;
        displayOperation(result, secondValue, action);
    }
}

btn1.addEventListener("click", function(){
    input(1);
})

btn2.addEventListener("click", function(){
    input(2);
})

btn3.addEventListener("click", function(){
    input(3);
})

btn4.addEventListener("click", function(){
    input(4);
})

btn5.addEventListener("click", function(){
    input(5);
})

btn6.addEventListener("click", function(){
    input(6);
})

btn7.addEventListener("click", function(){
    input(7);
})

btn8.addEventListener("click", function(){
    input(8);
})

btn9.addEventListener("click", function(){
    input(9);
})

btn0.addEventListener("click", function(){
    input(0);
})

btnPlus.addEventListener("click", function(){
    action = " + ";
    inputAction();
})

btnMinus.addEventListener("click", function(){
    action = " - ";
    inputAction();
})

btnMultiply.addEventListener("click", function(){
    action = " &#215; ";
    inputAction();
})

btnDivide.addEventListener("click", function(){
    action = " : ";
    inputAction();
})

btnIs.addEventListener("click", function(){
    if(controller > 7){
        result = displayResult(firstValue, secondValue, action);
        display.textContent = result;
    }
})