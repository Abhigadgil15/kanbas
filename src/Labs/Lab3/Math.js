export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    return a / b;
}

// Rename Math to MathOperations
const MathOperations = {
    add,
    subtract,
    multiply,
    divide,
};

export default MathOperations;
