let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red", "green", "yellow", "purple"];


document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is Started");
        started = true;

        levelUp();

    }
});
function btnFlash(box) {
    box.classList.add("flash");
    setTimeout(function () {
        box.classList.remove("flash");
    }, 250);

}
function userFlash(box) {
    box.classList.add("userflash");
    setTimeout(function () {
        box.classList.remove("userflash");
  

    }, 250);

}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let ranInd = Math.floor(Math.random() * 3);
    let ranclr = btns[ranInd];
    let randbtn = document.querySelector(`.${ranclr}`);
    gameSeq.push(ranclr);
    console.log(gameSeq);
    btnFlash(randbtn);
}
function checkans(ind){
    
    if(userSeq[ind]===gameSeq[ind]){
        if(userSeq.length==gameSeq.length){
            setTimeout(
                levelUp(), 2000
            );
            }
          console.log("same value")
    }else{
        h2.innerHTML=`Game Over! Your score was <b> ${level} </b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"},150);
        reset();
    }
    
}

function btnpress() {
    let btn = this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkans(userSeq.length-1)

}
let allBtns = document.querySelectorAll(".box");

for (box of allBtns) {
    box.addEventListener("click", btnpress)
}
function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}