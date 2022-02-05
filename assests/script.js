// wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
})

function runGame(gameType) {

   let num1= Math.floor(Math.random()*25)+1;
   let num2= Math.floor(Math.random()*25)+1;

   if (gameType === "addition") {
        additionQ(num1, num2);
   } else if (gameType === "subtract") {
        subtractQ(num1, num2);
   }
   else {
       alert(`Unknown game type ${gameType}`);
       throw `Unknown game type ${gameType}, aborting!`;
   }
  
}

function checkAnswer() {

     let userAnswer =  parseInt(document.getElementById("answer-box").value);
     let calculatedAnswer = calculateCorrectAnswer();
     let isCorrect = userAnswer === calculatedAnswer[0];

     if (isCorrect) {
         alert(`Hey you got it right! The answer was indeed ${calculatedAnswer[0]}`);

     }else {
         alert(`Awww...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
     }
     runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {

         [operand1 + operand2 , "addition"];

    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"]
    }
    
    else{
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, aborting`;
    }


}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function additionQ(operand1,operand2) {

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function subtractQ(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1: operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2: operand1;
    document.getElementById("operator").textContent = "-";


}

function multiplyQ() {

}

function divideQ() {

}