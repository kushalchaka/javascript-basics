const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);
const maximum = prices.reduce(getMax);
const minimum = prices.reduce(getMin);

console.log(`$${total.toFixed(2)}`);
console.log(`$${maximum.toFixed(2)}`);
console.log(`$${minimum.toFixed(2)}`);

function sum(accumulator, element) {
    return accumulator + element;
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element);
}

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}