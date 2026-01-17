const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}]

fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.calories));

const lowCals = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCals);