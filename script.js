let userInput = [];
let getDisplay = document.getElementById("display");
function press(val){
  let number =  val.getAttribute('data-num');
  console.log(number);
  userInput.push(number);
  getDisplay.innerText = userInput;
}


