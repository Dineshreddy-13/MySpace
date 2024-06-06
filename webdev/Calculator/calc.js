const hello = document.getElementById("hello");
const result = document.getElementById("result");
// const temp = document.getElementById("hello");
var i = 0; 
var temp = "";
function show(input){
  if (input == "()" && i%2 == 0 ){
    input = "(";
    i++;
  }

  else if (input == "()" && i%2 == 1 ){
    input = ")";
    i++;
  }
  
  temp += input;
  if (input == "*"){
    input = "×";
  }

  if (input == "/"){
    input = "÷";
  }

  hello.value += input;
  try{
    result.textContent = eval(temp);
  }
  catch(error){
    result.textContent = "";
  }
}


function cleardisplay(){
  hello.value = "";
  temp = "";
  result.textContent = "";
  i = 0;
  
} 

function calculate(){
  hello.value = result.textContent;
  result.textContent = "";
  
}

function sliceoff(){
  hello.value = hello.value.slice(0,-1);
  if(temp[temp.length-1]=="(" || temp[temp.length-1]==")"){
    i -= 1;
  }
  // console.log(temp[]);
  temp = temp.slice(0,-1);
  // console.log(temp);
  try{
    result.textContent = eval(temp);
  }
  catch(error){
    result.textContent = "";
  }
}




