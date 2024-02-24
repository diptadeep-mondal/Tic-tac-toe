let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('.reset');
let turn=true;
let array=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

boxes.forEach((box)=>{
box.addEventListener('click',()=>{
    if(turn){
        box.innerText="x";
        turn=false;
    }
    else{
        box.innerText="o";
        turn=true;
    }
    box.disabled=true;
    checkWinner();
})
})

function checkWinner(){
for(let pattern of array){
  //  console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            document.querySelector('.winner').innerHTML=`Winner is ${pos1}`;
            boxes.forEach((button)=>{
                button.disabled=true;
            });
        }
    } 
}
}


function resetGame(){
turn=true;
boxes.forEach((button)=>{
button.disabled=false;
button.innerText='';
});

}