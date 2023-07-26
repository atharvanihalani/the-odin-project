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
        // TODO PRINT SNARKY MSG
    }
    return a/b;
}


let numA;
let numB;
let operator;

function operator(a, oper, b) {
    switch (oper) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "goofy operation";
    }
}