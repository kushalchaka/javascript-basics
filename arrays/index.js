let fruits = ["apple", "orange", "banana"];


//fruits[3] = "cocunut"; 
fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

fruits.sort().reverse();
console.log(fruits);

let numFruits = fruits.length;
let index = fruits.indexOf("apple");
console.log(numFruits);
console.log(index);

for (let fruit of fruits) {
    console.log(fruit);
}