function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let display = document.getElementById('display').value;
    
    display = display.replace(/x/g, '*');
    
    try {
        const result = eval(display);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}