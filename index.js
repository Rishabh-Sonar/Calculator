// CALCULATOR PROGRAM

const display = document.getElementById("display");
const operators = ['+', '-', '*', '/'];

// 🔧 Cursor always end pe le jaane ke liye
function moveCursorToEnd(){
    setTimeout(() => {
        display.selectionStart = display.selectionEnd = display.value.length;
    }, 0);
}

// ➕ ADD VALUE
function appendToDisplay(input){
    const lastChar = display.value.slice(-1);
    const lastNumber = display.value.split(/[+\-*/]/).pop();

    // prevent double operators
    if (operators.includes(input) && operators.includes(lastChar)) return;

    // prevent multiple decimals
    if (input === '.' && lastNumber.includes('.')) return;

    display.value += input;

    moveCursorToEnd(); // 👈 auto move
}

// 🧹 CLEAR
function clearDisplay(){
    display.value = "";
    moveCursorToEnd();
}

// ⌫ DELETE LAST
function deleteLast(){
    display.value = display.value.slice(0, -1);
    moveCursorToEnd();
}

// 🧮 CALCULATE
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

    moveCursorToEnd();
}

// ⌨️ KEYBOARD SUPPORT (pro feature)
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key) || ['+', '-', '*', '/', '.'].includes(e.key)) {
        appendToDisplay(e.key);
    }
    else if (e.key === "Enter") {
        calculate();
    }
    else if (e.key === "Backspace") {
        deleteLast();
    }
    else if (e.key === "Escape") {
        clearDisplay();
    }
});