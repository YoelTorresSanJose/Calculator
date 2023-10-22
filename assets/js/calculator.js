const display = document.getElementById('display');
const resultHistory = document.getElementById('result-history');
let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    display.value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(currentExpression);
        resultHistory.innerHTML += `<li>${currentExpression} = ${result}</li>`;
        clearDisplay();
    } catch (error) {
        display.value = 'Error';
    }
}