let gameSeq =[];
let userSeq = [];
let btns = ["red","blue","yellow","green"];

let started = false;
let level = 0;

let h2= document.querySelector("h2");

document.addEventListener("keypress", function (){
    if(started == false){
        console.log("game start");
        started = true;
        levelUp();
    };
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText =`Level ${level}`;
    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`)

    gameSeq.push(randColor);
    btnFlash(randBtn);
};

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove(`flash`);
    },100);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove(`userflash`);
    },100);
};

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML=`Game Over!  <br> Your scroe was <b>${level} `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },1000);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}