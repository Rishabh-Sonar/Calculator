// CALCULATOR PROGRAM

const display = document.getElementById("display");
const operators = ['+', '-', '*', '/'];

// ADD VALUE
function appendToDisplay(input){
    const lastChar = display.value.slice(-1);
    const lastNumber = display.value.split(/[+\-*/]/).pop();

    // prevent double operators
    if (operators.includes(input) && operators.includes(lastChar)) return;

    // prevent multiple decimals
    if (input === '.' && lastNumber.includes('.')) return;

    display.value += input;

    // force cursor to end (IMPORTANT for input)
    display.selectionStart = display.selectionEnd = display.value.length;
}

// CLEAR
function clearDisplay(){
    display.value = "";
}

// CALCULATE
function calculate(){
    try {
        let result = eval(display.value);

        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}