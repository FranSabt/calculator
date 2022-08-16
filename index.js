
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
    operatorState: false,
    operator: '',
    actualDisplay : '',
    prevDisplay: '',
    displayVal : function(val){
        this.actualDisplay += val;
        document.getElementById('actual-num').innerHTML = calculator.actualDisplay;
    },
    callOperator : function(val){ // I need to get out the parts that execute the operations
        if(this.operatorState === true && val === '='){
            let r = operate(this.prevDisplay, this.operator, this.actualDisplay);
            this.actualDisplay = r;
            this.operatorState = false;
            this.operator = ''
            console.log(this.operatorState + '1')
        }
        if(this.operatorState === true && this.actualDisplay !== ''){
            let r = operate(this.prevDisplay, this.operator, this.actualDisplay);
            this.actualDisplay = r;
            this.operatorState = false;
            console.log(this.operatorState + '2')
        }

        this.actualDisplay !== '' ? this.prevDisplay = this.actualDisplay: this.prevDisplay = this.prevDisplay ;
        document.getElementById('previous-num').innerHTML = this.prevDisplay + ` ${val}`;
        this.actualDisplay = ''
        
        console.log(val);
        if(val !== '='){
            this.operator = val;
            this.operatorState = true;
        }
        else{
            this.operator = '';
            this.operatorState = false;
        }
        console.log(this.operatorState + '123');
    }, Reset : function(){
        this.operatorState = false,
        this.operator = '';
        this.actualDisplay = ''
        this.prevDisplay = ''
        document.getElementById("previous-num").innerHTML = 0;
        document.getElementById('actual-num').innerHTML = 0;
    }
}
document.getElementById("previous-num").innerHTML = 0;
document.getElementById('actual-num').innerHTML = 0;


/* el problema es la secuencia de ejecucion con callOperator
creo que necesitare colocar aparte la asignacion del operador 
y luego hacer el llamado a las funciones de operacio */