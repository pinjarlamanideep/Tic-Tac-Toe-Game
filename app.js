let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgame-btn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let turnO=true;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame=()=>{
    turnO=true;
    enabledBoxes();
    msgcontainer.classList.add("hide");
    count=0;

}
let count=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
    
        checkwinner();
        if(count===9){
            draw();
        }
        

    })
})
const disabledBoxes=()=>{
    for(box of boxes){
        box.disabled=true;

    }
}
const enabledBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}
const draw=()=>{
    msg.innerText="The Match is Drawn";
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}
const checkwinner=()=>{
   for(let pattern of winpatterns){
    let pos0val=boxes[pattern[0]].innerText;
    let pos1val=boxes[pattern[1]].innerText;
    let pos2val=boxes[pattern[2]].innerText;
    if(pos0val!="" && pos1val!="" && pos2val!=""){
        if(pos0val===pos1val && pos1val==pos2val){
            showWinner(pos0val);

        }
        
    }
}
}
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
