const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I'm SpongeBob")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function(){console.log("No, this is Patrick...")},
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();