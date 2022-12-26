let operations = ['+', '-', '*', '/'];

let operation = operations[Math.floor(Math.random() * operations.length)];

let num1= Math.floor(Math.random()*10);

let num2 = Math.floor(Math.random()*10);

document.getElementById('num1').value=num1;
document.getElementById('num2').value=num2;

function operation(){

   let output=document.getElementById('output').value



    let result:


    switch(operation) {
      case '+':
        result = operand1 + operand2;
        break;
      case '-':
        result = operand1 - operand2;
        break;
      case '*':
        result = operand1 * operand2;
        break;
      case '/':
        result = operand1 / operand2;
        break;
    }
    


}


console.log(`${operand1} ${operation} ${operand2} = ${result}`);
