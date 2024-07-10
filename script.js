function clearDisplay() {
    document.getElementById('display').value = '';
}

function removeLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function appendValue(value) {
    let currentValue = document.getElementById('display').value;
    let lastChar = currentValue.slice(-1);
    
    if (isOperator(value)) {
        if (isOperator(lastChar)) {
            document.getElementById('display').value =
                currentValue.slice(0, -1) + value;
            return;
        }
    }

    document.getElementById('display').value += value;
}

function calculate() {
    let currentValue = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(currentValue);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}