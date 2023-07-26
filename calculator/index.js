const display = document.getElementById('display');
let strA = '';
let strB = '';
let operator;

function calculate() {
    if (strB == '') {
        return;
    }

    let numA = +strA;
    let numB = +strB;
    switch (operator) {
        case '+':
            display.textContent = add(numA, numB);
            break;
        case '-':
            display.textContent = subtract(numA, numB); 
            break;
        case '*':
            display.textContent = multiply(numA, numB);
            break;
        case '/':
            display.textContent = divide(numA, numB);
            break;
        case '%':
            display.textContent = modulo(numA, numB);
            break;
        default:
            console.error("goofy operation");
    }

    strA = display.textContent;
    strB = '';
    operator = null;
}

function appendNum(n) {
    if (operator == null) {
        strA += n;
        display.textContent = strA;
    } else {
        strB += n;
        display.textContent = strB;
    }
}

function appendOper(o) {
    calculate();
    operator = o;
}



function clearDisplay() {
    display.textContent = '';

    strA = '';
    strB = '';
    operator = null;
}

function backspace() {
    if (operator != null && strB == '') {
        operator == null;
        // deselect operator visually
    } else if (operator != null) {
        strB = strB.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    } else {
        strA = strA.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    }
}



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        console.error("ha ha, funny guy");
        return;
    }
    return a/b;
}

function modulo(a, b) {
    return ((a % b) + b) % b;
}