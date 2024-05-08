let numbers_stack = [];
let operator_stack = [];
let number_complete = false;

function inFix(){
    
}
function postFix(){

}
function preFix(){

}

function appendToDisplay(value){
    let display = document.getElementById("display");
    let display2 = document.getElementById("secondDisplay");

    if (number_complete)
        clearDisplay();

    if(!(value == '0' && display.value == '0') &&
    (value != '.' || display.value.indexOf('.') < 0)){

        if(display.value == '0' && value != '.'){
            display.value = value;
            display2.value = value;
        } else{
            display.value += value;
            display2.value += value;
        }
    }
}

function operator(value){
    display2 = document.getElementById("secondDisplay");
    if(!number_complete){
        addNumStack();
    while(lengthOpStack() > 0 && !precedence(topOpStack(), value)){
        let result = partialCalculate();
        addResultStack(result);
        }
    }else {
        getOpFromStack(value);
    }
    display2.value += value;
    addOpStack(value);
}

function calculate (value) {
    display2 = document.getElementById("secondDisplay");
    addNumStack();
    let result = 0;
    while(lengthOpStack() > 0){
        result = partialCalculate();
        addResultStack(result);
    }
    display2.value += value;
    display2.value += result;
    document.getElementById("display").value = result;
}

function clearDisplay() {
    if(!number_complete){
        document.getElementById("secondDisplay").value = "";
    }
    document.getElementById("display").value = "";
    number_complete = false;
}

function backspace() {
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.substring(
    0,displayValue.length -1);
}

function addNumStack(){
    let number = document.getElementById("display").value;
    number_complete = true;
    numbers_stack.push(number);
}

function addResultStack(number){
    numbers_stack.push(number);
}

function addOpStack(value){
    operator_stack.push(value);
}

function getOpFromStack(value){
    return operator_stack.pop();
}

function partialCalculate() {
    let n2 = numbers_stack.pop();
    let n1 = numbers_stack.pop();
    let op = getOpFromStack();
    let result = eval(n1 + op + n2);
    return result;
}

function precedence(op1,op2) {
    let operators = new Map([
        ['+', '1'],
        ['-', '1'],
        ['*', '2'],
        ['/', '2']
    ]);
    return operators.get(op2) > operators.get(op1);
}

function topOpStack(){
    return operator_stack[operator_stack.length-1];
}

function lengthOpStack() {
    return operator_stack.length;
}