const history = document.getElementById('history');
const display = document.getElementById('display');

let strA = '';
let strB = '';
let operator = [null, null]; // [value, button-ref]
let pointToA = true;

function calculate() {
    if (strB == '') {
        return;
    }

    let numA = +strA;
    let numB = +strB;
    history.textContent = `${strA} ${operator[0]} ${strB} =`;
    operator[1].classList.remove("active");

    switch (operator[0]) {
        case '+':
            ans = add(numA, numB);
            break;
        case '-':
            ans = subtract(numA, numB); 
            break;
        case '*':
            ans = multiply(numA, numB);
            break;
        case '/':
            if (numB == 0) {
                history.textContent = "nice try";
            }
            ans = ''
            break;
        default:
            console.error("goofy operation");
    }

    display.textContent = Math.round((ans + Number.EPSILON) * 100) / 100;

    strA = display.textContent;
    strB = '';
    operator = [null, null];
    pointToA = true;
}

function appendNum(n) {
    if (history.textContent != '') {
        history.textContent = '';
    }
    if (operator[0]) {
        operator[1].classList.remove("active");
    }

    // mann, it'd be SM easier if JS had smtn like:
    // strRn = (pointToA ? strA : strB);

    if (pointToA) {
        if (n == '.' && strA.includes(n)) {
            return;
        }
        strA += n;
        display.textContent = strA;
    } else {
        if (n == '.' && strB.includes(n)) {
            return;
        }
        strB += n;
        display.textContent = strB;
    }
}

function appendOper(oper, elt) {
    if (strA == '') {
        return;
    }
    if (operator[0]) {
        operator[1].classList.remove("active");
    }
    calculate();

    operator = [oper, elt];
    operator[1].classList.add("active");
    pointToA = false;
}



function clearScreen() {
    history.textContent = '';
    display.textContent = '';
    if (operator[0]) {
        operator[1].classList.remove("active");
    }

    strA = '';
    strB = '';
    operator = [null, null];
    pointToA = true;
}

function backspace() {
    if (!pointToA && strB == '') {
        operator[1].classList.remove("active");
        operator == [null, null];
    } else if (!pointToA) {
        strB = strB.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    } else {
        strA = strA.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    }
}

function plusMinus() {
    strRn = [...display.textContent];
    if (!strRn.length) {
        return;
    }

    strRn[0] == '-' ? 
        display.textContent = display.textContent.slice(1) : 
        display.textContent = '-' + display.textContent;

    pointToA ? strA = display.textContent : strB = display.textContent;
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
    return a/b;
}