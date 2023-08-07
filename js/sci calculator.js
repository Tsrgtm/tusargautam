let currentExpression = '';

function updateDisplay() {
    document.getElementById('display').value = currentExpression;
}

function appendCharacter(character) {
    currentExpression += character;
    updateDisplay();
}

function clearDisplay() {
    currentExpression = '';
    updateDisplay();
}

function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        currentExpression = eval(currentExpression).toString();
    } catch (error) {
        currentExpression = 'Error';
    }
    updateDisplay();
}

function calculateSqrt() {
    try {
        currentExpression = Math.sqrt(eval(currentExpression)).toString();
    } catch (error) {
        currentExpression = 'Error';
    }
    updateDisplay();
}

function calculateLog() {
    try {
        currentExpression = Math.log(eval(currentExpression)).toString();
    } catch (error) {
        currentExpression = 'Error';
    }
    updateDisplay();
}

function calculateLog10() {
    try {
        currentExpression = Math.log10(eval(currentExpression)).toString();
    } catch (error) {
        currentExpression = 'Error';
    }
    updateDisplay();
}

function calculateSin() {
    try {
        currentExpression = Math.sin(eval(currentExpression)).toString();
    } catch (error) {
        currentExpression = 'Error';
    }
    updateDisplay();
}

function calculateCos() {
    try {
        currentExpression = Math.cos(eval(currentExpression)).toString();
    } catch (error) {
        currentExpression = 'Error';
    }
    updateDisplay();
}

function calculateTan() {
    try {
        currentExpression = Math.tan(eval(currentExpression)).toString();
    } catch (error) {
        currentExpression = 'Error';
    }
    updateDisplay();
}
