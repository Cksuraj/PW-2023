//  calculator funtion for calculating the follwing opration 

function calculate(num1, num2, operator) {
    let result;

//  useing the switch case funtion for the calculator

    switch(operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
    console.log(`${num1} ${operator} ${num2} = ${result}`);
  }
  
  calculate(10, 5, '+'); 
  calculate(10, 5, '-'); 
  calculate(10, 5, '*'); 
  calculate(10, 5, '/');
  calculate(10, 5, '%'); // Output: Invalid operator
  