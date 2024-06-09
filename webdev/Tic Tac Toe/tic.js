let boxes = document.querySelectorAll(".sub-box");
let winner = null;

let win_boxes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

let turn = true;
boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(turn){
            box.innerHTML = '<span style="color: red; font-size: 50px;">X</span>';
            turn = false;
            box.disabled = true;
            }

        else{
            box.innerHTML = '<span style="color: aqua; font-size: 50px;">O</span>';
            turn = true;
            box.disabled = true;

        }
        
    check_win();
    if (winner == "X"){
        document.getElementById("show").innerHTML = `Winner is <b style=color:red>${winner}</b>`; 
        }
    else if(winner == "O"){
        document.getElementById("show").innerHTML = `Winner is <b style=color:aqua>${winner}</b>`; 
            }

    })
});

function check_win(){
    for(let vals of win_boxes){
        // console.log(vals);
        let box_cont1 = boxes[vals[0]].textContent;
        let box_cont2 = boxes[vals[1]].textContent;
        let box_cont3 = boxes[vals[2]].textContent;

if (box_cont1!= "" && box_cont2!= "" && box_cont3!=""){        
    if (box_cont1 === box_cont2 && box_cont2=== box_cont3){
            winner=box_cont1;
            for(let box of boxes){
                box.disabled = true
                }
 
            } 
        }

    }
}



