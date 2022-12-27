let displayP = document.getElementById("p-Display");
let sqActed = 0;
let xMoved = false;
let grid1 = 0;
let grid2 = 0;
let grid3 = 0;
let grid4 = 0;
let grid5 = 0;
let grid6 = 0;
let grid7 = 0;
let grid8 = 0;
let grid9 = 0;
let message;

// engine
function act() {
    if (sqActed === 1 && xMoved == false && grid1 === 0){
        document.getElementById("x-1y1").innerHTML = "&#215;";
        xMoved = true;
        grid1 = 2;
        console.log("X")
    } else if (sqActed === 1 && xMoved == true && grid1 === 0){
        document.getElementById("x-1y1").innerHTML = "&#9900;";
        xMoved = false;
        grid1 = 1;
        console.log("O")
    } else if (sqActed === 2 && xMoved == false && grid2 === 0){
        document.getElementById("x0y1").innerHTML = "&#215;";
        xMoved = true;
        grid2 = 2;
        console.log("X")
    } else if (sqActed === 2 && xMoved == true && grid2 === 0){
        document.getElementById("x0y1").innerHTML = "&#9900;";
        xMoved = false;
        grid2 = 1;
        console.log("O")
    } else if (sqActed === 3 && xMoved == false && grid3 === 0){
        document.getElementById("x1y1").innerHTML = "&#215;";
        xMoved = true;
        grid3 = 2;
        console.log("X")
    } else if (sqActed === 3 && xMoved == true && grid3 === 0){
        document.getElementById("x1y1").innerHTML = "&#9900;";
        xMoved = false;
        grid3 = 1;
        console.log("O")
    } else if (sqActed === 4 && xMoved == false && grid4 === 0){
        document.getElementById("x-1y0").innerHTML = "&#215;";
        xMoved = true;
        grid4 = 2;
        console.log("X")
    } else if (sqActed === 4 && xMoved == true && grid4 === 0){
        document.getElementById("x-1y0").innerHTML = "&#9900;";
        xMoved = false;
        grid4 = 1;
        console.log("O")
    } else if (sqActed === 5 && xMoved == false && grid5 === 0){
        document.getElementById("x0y0").innerHTML = "&#215;";
        xMoved = true;
        grid5 = 2;
        console.log("X")
    } else if (sqActed === 5 && xMoved == true && grid5 === 0){
        document.getElementById("x0y0").innerHTML = "&#9900;";
        xMoved = false;
        grid5 = 1;
        console.log("O")
    } else if (sqActed === 6 && xMoved == false && grid6 === 0){
        document.getElementById("x1y0").innerHTML = "&#215;";
        xMoved = true;
        grid6 = 2;
        console.log("X")
    } else if (sqActed === 6 && xMoved == true && grid6 === 0){
        document.getElementById("x1y0").innerHTML = "&#9900;";
        xMoved = false;
        grid6 = 1;
        console.log("O")
    } else if (sqActed === 7 && xMoved == false && grid7 === 0){
        document.getElementById("x-1y-1").innerHTML = "&#215;";
        xMoved = true;
        grid7 = 2;
        console.log("X")
    } else if (sqActed === 7 && xMoved == true && grid7 === 0){
        document.getElementById("x-1y-1").innerHTML = "&#9900;";
        xMoved = false;
        grid7 = 1;
        console.log("O")
    } else if (sqActed === 8 && xMoved == false && grid8 === 0){
        document.getElementById("x0y-1").innerHTML = "&#215;";
        xMoved = true;
        grid8 = 2;
        console.log("X")
    } else if (sqActed === 8 && xMoved == true && grid8 === 0){
        document.getElementById("x0y-1").innerHTML = "&#9900;";
        xMoved = false;
        grid8 = 1;
        console.log("O");
    } else if (sqActed === 9 && xMoved == false && grid9 === 0){
        document.getElementById("x1y-1").innerHTML = "&#215;";
        xMoved = true;
        grid9 = 2;
        console.log("X");
    } else if (sqActed === 9 && xMoved == true && grid9 === 0){
        document.getElementById("x1y-1").innerHTML = "&#9900;";
        xMoved = false;
        grid9 = 1;
        console.log("O");
    }
    sqActed = 0;
    console.log("done");
    message = check();
    display();
}

function check() {
    if (grid1 === 1 && grid2 === 1 && grid3 === 1 || grid4 === 1 && grid5 === 1 && grid6 === 1 || grid7 === 1 && grid8 === 1 && grid9 === 1 || grid1 === 1 && grid4 === 1 && grid7 === 1 || grid2 === 1 && grid5 === 1 && grid8 === 1 || grid3 === 1 && grid6 === 1 && grid9 === 1 || grid1 === 1 && grid5 === 1 && grid9 === 1 || grid3 === 1 && grid5 === 1 && grid7 === 1){
        grid1 = 3;
        grid2 = 3;
        grid3 = 3;
        grid4 = 3;
        grid5 = 3;
        grid6 = 3;
        grid7 = 3;
        grid8 = 3;
        grid9 = 3;
        return "Player 2 has won the game. Congratulation!"
    } else if (grid1 === 2 && grid2 === 2 && grid3 === 2 || grid4 === 2 && grid5 === 2 && grid6 === 2 || grid7 === 2 && grid8 === 2 && grid9 === 2 || grid1 === 2 && grid4 === 2 && grid7 === 2 || grid2 === 2 && grid5 === 2 && grid8 === 2 || grid3 === 2 && grid6 === 2 && grid9 === 2 || grid1 === 2 && grid5 === 2 && grid9 === 2 || grid3 === 2 && grid5 === 2 && grid7 === 2){
        grid1 = 3;
        grid2 = 3;
        grid3 = 3;
        grid4 = 3;
        grid5 = 3;
        grid6 = 3;
        grid7 = 3;
        grid8 = 3;
        grid9 = 3;
        return "Player 1 has won the game. Congratulation!";
    } else {
        return "None has won the game... Try once again"
    }
}

function display(){
    if (grid1 === 3){
    document.getElementById("lmao").textContent = message;
    }
}

function act1() {
    sqActed = 1;
    act()
}

function act2() {
    sqActed = 2;
    act()
}

function act3() {
    sqActed = 3;
    act()
}

function act4() {
    sqActed = 4;
    act()
}

function act5() {
    sqActed = 5;
    act()
}

function act6() {
    sqActed = 6;
    act()
}

function act7() {
    sqActed = 7;
    act()
}

function act8() {
    sqActed = 8;
    act()
}

function act9() {
    sqActed = 9;
    act()
}