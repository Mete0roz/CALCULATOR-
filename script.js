const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const del = document.querySelector("#del");
const container = document.querySelector("#container");
const display = document.querySelector("#result");

let operator = "";
let firstNumber = "";
let secondNumber = null;
let resetTheDisplay = false;


const calculator = {
      captureNumberOne: function () {
          numbers.forEach(button =>{
          button.addEventListener("click", (event) =>{
            if (resetTheDisplay) {
                display.textContent = "";
                resetTheDisplay = false;
            }
              display.textContent += event.target.textContent;
              firstNumber += event.target.textContent;
              console.log(firstNumber);
          });
      });
   },

    
     captureOperator: function(){ 
        operators.forEach(btn =>{
        btn.addEventListener("click", (event) =>{
            if (firstNumber !== ""){
                if (secondNumber !== null){
                    calculator.calculate();
                }
            display.textContent = "";
            operator = event.target.textContent;
            secondNumber = firstNumber;
            firstNumber = "";
            console.log(operator);
        } else if (secondNumber !== null){
            operator = event.target.textContent;
            console.log(operator);
        }
        });
     });
    },

    calculate: function (){
        if (firstNumber !== "" && secondNumber !== null
            && operator !== ""
        ){
            let result;
            const num1 = parseFloat(secondNumber);
            const num2 = parseFloat(firstNumber);

            switch (operator){
                case "+":
                result = num1 + num2;
                break;
                case "-":
                result = num1 - num2;
                break;
                case "*":
                result = num1 * num2;
                break;
                case "/":
                result = num1 / num2;
                break;
                default:
                    result = "ERROR";
            }
            display.textContent = result;
            console.log(result);
            secondNumber = result.toString();
            firstNumber = "";
            operator = "";
            resetTheDisplay = true;
        }
    },
     


     delete: function () {
     del.addEventListener("click", () =>{
        display.textContent = "";
        operator = "";
        firstNumber = "";
        secondNumber = null;
        console.clear();
        console.log("reset calculator");
    });
  }
};

calculator.captureNumberOne();
calculator.captureOperator();
calculator.delete();

document.querySelector("#equal").addEventListener("click", () =>{
    calculator.calculate();
});
