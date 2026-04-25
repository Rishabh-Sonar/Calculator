// CALCULATOR PROGRAM 
const display = document.getElementById("display");
const operators = ['+', '-', '*', '/'];

function appendToDisplay(input) {
    const lastChar = display.value.slice(-1);
    const lastNumber = display.value.split(/[\+\-\*\/]/).pop();

    // prevent double operators
    if (operators.includes(input) && operators.includes(lastChar)) {
        return;
    }

    // prevent multiple decimals
    if (input === '.' && lastNumber.includes('.')) {
        return;
    }

    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);

        if (result === Infinity) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch {
        display.value = "Error";
    }
}