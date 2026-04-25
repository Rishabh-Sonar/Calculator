const display = document.getElementById("display");
const operators = ['+', '-', '*', '/'];

function appendToDisplay(input){
    const lastChar = display.innerText.slice(-1);
    const lastNumber = display.innerText.split(/[+\-*/]/).pop();

    if (operators.includes(input) && operators.includes(lastChar)) return;
    if (input === '.' && lastNumber.includes('.')) return;

    display.innerText += input;

    // 👇 THIS WORKS PROPERLY NOW
    display.scrollLeft = display.scrollWidth;
}

function clearDisplay(){
    display.innerText = "";
}

function deleteLast(){
    display.innerText = display.innerText.slice(0, -1);
}

function calculate(){
    try {
        let result = eval(display.innerText);

        if (!isFinite(result)) {
            display.innerText = "Error";
        } else {
            display.innerText = result;
        }
    } catch {
        display.innerText = "Error";
    }
}