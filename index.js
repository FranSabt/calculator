
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
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    console.log(typeof num1);
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


const calculator = {
    operator: false,
    oldOperator: '',
    actualDisplay : '',
    prevDisplay: '',
    displayVal : function(val){
        this.actualDisplay += val;
        document.getElementById('actual-num').innerHTML = calculator.actualDisplay;
    },
    callOperator : function(val){ // I need to get out the parts that execute the operations
        if(this.operator = true){
            let r = operate(this.prevDisplay, this.oldOperator, this.actualDisplay);
            console.log(r);
            !this.operator;
        }
        this.prevDisplay = this.actualDisplay;
        document.getElementById('previous-num').innerHTML = this.prevDisplay + ` ${val}`;
        this.actualDisplay = ''
        this.oldOperator = val;
    }
}
document.getElementById("previous-num").innerHTML = 0;
document.getElementById('actual-num').innerHTML = 0;


/* el problema es la secuencia de ejecucion con callOperator
creo que necesitare colocar aparte la asignacion del operador 
y luego hacer el llamado a las funciones de operacio */