let numbers_stack = [];
let operator_stack = [];
let number_complete = false;


function appendToDisplay(value){
    let display = document.getElementById("display");

    if (number_complete)
        clearDisplay();

    if(!(value == '0' && display.value == '0') &&
    (value != '.' || display.value.indexOf('.')<0)){

            if(display.value == '0' && value != '.'){
            display.value = value;
            } else{
            display.value += value;
        }
    }
}

function operator(value){
    if(!number_complete){
    addNumStack();
    addOpStack(value);
    }else {
        remOpFromStack(value);
        addOpStack(value);
    }

}

function calculate () {
    addNumStack();
   // alert(numbers_stack + '\n' + operator_stack);

    let result = partialCalculate();
    document.getElementById("display").value =  result;
    number_complete = false;
    
    numbers_stack = [];
    operator_stack = [];
}

function clearDisplay() {
    document.getElementById("display").value = "";
    number_complete = false;
}

function backspace() {
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.substring(0,displayValue.length -1);
}

function addNumStack(){
    let number = document.getElementById("display");
    number_complete = true;
    numbers_stack.push(number);
}

function addOpStack(){
    operator_stack.push(value);
}

function remOpFromStack(){
    operator_stack.pop();
}

function partialCalculate() {
    let n2 = numbers_stack.pop();
    let n1 = numbers_stack.pop();
    let op = operator_stack.pop();
    let result = eval(n1 + op + n2);
    return result;
}