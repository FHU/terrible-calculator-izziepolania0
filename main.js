//Step 1: Find all the elements to interact with
const numb1Input = document.getElementById('number1')
const numb2Input = document.getElementById('number2')
const operatorSelect = document.getElementById('operator')
const calculateButton = document.getElementById('calculateButton')
const resultSpan = document.getElementById('result')

calculateButton.addEventListener('click', calculate)

function calculate(){

    const num1 = parseFloat(numb1Input.value)
    const num2 = parseFloat(numb2Input.value)
    const operator = operatorSelect.value;

    let result
    if(operator=== "+"){

        result = num1 + num2
    }

    else if(operator=== "-"){

        result = num1 - num2
    }

     else if(operator=== "*"){

        result = num1 * num2
    }

     else if(operator=== "/"){

        result = num1 / num2
    }




    resultSpan.innerText = result;

}