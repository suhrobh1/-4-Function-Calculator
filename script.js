let startNum = [];
let nextNum = [];
let signs = [];
let result = 0;
let getDisplay = document.getElementById("display");

function press(val){
  let inputUser =  val.getAttribute('data-num');
  if(inputUser!= "+" && inputUser != "-" && inputUser!= "÷" && inputUser!= "*" && inputUser!= "="){
    if(startNum.length == 0 || signs.length == 0){
      startNum.push(inputUser);
      let displayInput = parseFloat(startNum.join(""));
      getDisplay.innerText = displayInput;

    }else{
      
      console.log("clear the area 2");
      displayInput = parseFloat(nextNum.join(""));
      getDisplay.innerText = displayInput;
      nextNum.push(inputUser);
    }
  }else if(inputUser != "="){
    console.log("clear the area");
    //displayInput = parseFloat(signs.join(""));
    signs[0] = inputUser;
    getDisplay.innerText = signs[0];
    
  }else if (inputUser == "="){
    if(signs[0] == "÷"){
      result = startNum / nextNum;
    }else if(signs[0] == "*"){
      result = startNum * nextNum;
    }else if(signs[0] == "-"){
      result = startNum - nextNum;
    }else{
      result = parseFloat(startNum) + parseFloat(nextNum);
      getDisplay.innerText = result;
      
    }startNum = [];
      nextNum = [];
      signs = [];
      startNum.push(result);
    
  }



// let displayInput = parseFloat(startNum.join(""));
// getDisplay.innerText = displayInput;

  console.log(startNum);
  console.log(nextNum);
  console.log(signs);
 
}
  



function operate(sign){
let operationSign = sign.getAttribute('data')
}