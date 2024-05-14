let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#Reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turnO = true;  // playerX ,playerO
                          // To store wiining patterns 2D array is used here
let winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button is cilcked");
        if(turnO){
            box.innerText = "X";
            turnO=false;
        }
        else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = "true";
        checkWinner();
    });

});

const resetGame = ()=>{
turnO = true;
enableboxes();
msgContainer.classList.add("hide");
}

let disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

let enableboxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}
const showWinner = (winner)=>{
msg.innerText= `congratulations winner is : ${winner}`;
msgContainer.classList.remove("hide");
disabledBoxes();
}


const checkWinner = ()=>{
    for(pattern of winpatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val == pos2val && pos2val==pos3val){
            console.log("winner is : "+pos1val);
            showWinner(pos1val);
        }
    }
}
}

newbtn.addEventListener("click",resetGame);
restbtn.addEventListener("click",resetGame);

