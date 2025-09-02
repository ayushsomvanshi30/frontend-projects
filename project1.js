let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".btnid");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const winningpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide"); 

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("event was clicked");

        if (turn0) {
            box.innerText = "x";
            turn0 = false;
        }
        else {
            box.innerText = "o";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableboxes=()=>{
for (let box of boxes){
    box.disabled=true;
}
};
const enableboxes =()=>{
for (let box of boxes){
    box.disabled=false;
    box.innerText="";
}
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
disableboxes();
};

const checkwinner = () => {
    for (let pattern of winningpattern) {
        //  console.log([pattern[0]],[pattern[1]],[pattern[2]]);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("winner");
                showwinner(pos1val);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
