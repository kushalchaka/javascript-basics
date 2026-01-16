const hello = (name, age) => {console.log(`Hello ${name}`)
                        console.log(`You are ${age} years old`)};

hello("Yoshi", 1);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);

const even = numbers.filter((element) => element % 2 === 0);
console.log(even);

const odd = numbers.filter((element) => element % 2 !== 0);
console.log(odd);

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);