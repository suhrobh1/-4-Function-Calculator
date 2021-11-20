let startNum = [];
let nextNum = [];

let signs = [];
let result = 0;
let getDisplay = document.getElementById("display");
let displayInput = 0;
function press(val){
  let inputUser =  val.getAttribute('data-num');
  if(inputUser!= "+" && inputUser != "-" && inputUser!= "÷" && inputUser!= "*" && inputUser!= "=" && inputUser!= "C"){
    if(startNum.length == 0 || signs.length == 0){
      startNum.push(inputUser);
      displayInput = parseFloat(startNum.join(""));
      getDisplay.innerText = displayInput;

    }else{
      nextNum.push(inputUser);
      displayInput = parseFloat(nextNum.join(""));
      getDisplay.innerText = displayInput;
    }
  }else if(inputUser != "="){
    signs[0] = inputUser;
 
    
  }else if(inputUser == "C"){
    getDisplay.innerText = inputUser;
    console.log("clear")
    nextNum = [];
    startNum = [];
    signs = [];
  }else if (inputUser == "="){
    if(signs[0] == "÷"){
      result = startNum / nextNum;
      getDisplay.innerText = result;
    }else if(signs[0] == "*"){
      result = startNum * nextNum;
      getDisplay.innerText = result;
    }else if(signs[0] == "-"){
      result = startNum - nextNum;
      getDisplay.innerText = result;
    }else{
      result = parseFloat(startNum) + parseFloat(nextNum);
      getDisplay.innerText = result;
    }
      nextNum = [];
      startNum = result;
      console.log(startNum + "    put total from before here");
  }



// let displayInput = parseFloat(startNum.join(""));
// getDisplay.innerText = displayInput;
}
  

