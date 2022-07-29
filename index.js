
const sum = (num1, num2) =>{
    return num1 + num2
} 


const subtract = (num1, num2) =>{
    return num1 - num2
} 


const multiply = (num1, num2) =>{
    return num1 * num2
}


const divide = (num1, num2) =>{
    return num1 / num2
}


const operate = (num1, operator, num2) =>{
    switch(operator){
        case "+":
            return sum(num1, num2)
        case "-":
            return subtract(num1, num2)
        case "*":
            return multiply(num1, num2)
        case "/":
            return divide(num1, num2)
        default:
            return "Syntax Error"
    }
}


// I think this not will work, I have to investigate events
const displayVal = (val) =>{
    let actualDisplay = []
    actualDisplay.push(val)
    document.getElementById("actual-num").innerHTML = actualDisplay
}