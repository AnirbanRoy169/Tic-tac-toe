console.log("Tic Tac Toe");

let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";

let isgameover = false;

//FUNCTION TO CHANGE THE TURN
const changeTurn = ()=>{
    return turn === "X"?"O" : "X";
};

//FUNCTION TO CHECK FOR A WIN
const checkWin = ()=>{
    let text = document.getElementsByClassName("text");
    let wins = [
        [0, 1, 2, 75, 75, 0],
        [3, 4, 5, 75, 225, 0],
        [6, 7, 8, 75, 375, 0],
        [0, 3, 6, -75, 225, 90],
        [1, 4, 7, 75, 225, 90],
        [2, 5, 8, 225, 225, 90],
        [0, 4, 8, 75, 225, 45],
        [2, 4, 6, 75, 225, 135],
    ]
    wins.forEach(e =>{
        if((text[e[0]].innerText === text[e[1]].innerText) && (text[e[2]].innerText === text[e[1]].innerText) && (text[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = text[e[0]].innerText + " Wins";
            isgameover = true;
            document.querySelector('.img').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "300px";
            document.querySelector('.line').style.transform = `translate(${e[3]}px, ${e[4]}px) rotate(${e[5]}deg)`;
            gameover.play();
        }
    });
};

//GAME LOGIC
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let text = element.querySelector('.text');
    element.addEventListener('click', ()=>{
        if(text.innerText ===''){
            text.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        };
    });
});

//RESET BUTTON LOGIC
document.getElementById('btn').addEventListener('click', ()=>{
    let text = document.querySelectorAll('.text');
    Array.from(text).forEach(element =>{
        element.innerText = "";
        turn = "X";
        isgameover = false
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.img').getElementsByTagName('img')[0].style.width = "0px";
        document.querySelector('.line').style.width = "0";
    });
});