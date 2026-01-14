function happyBirthday (username, age) {
    console.log("Happy birthday!");
    console.log(`Happy birthday! ${username}`);
    console.log("Happy birthday!");
    console.log(`You are ${age} years old`);
}

happyBirthday("Yoshi", 21);
happyBirthday("Bob", 100);

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function isEven(number) {
    if (number % 2 === 0) {
        return true
    }
    else {
        return false;
    }
}

function isValidEmail(email) {
    if (email.includes("@")) {
        return true;
    }
    else {
        return false;
    }
}

console.log(add(2, 3));

console.log(isEven(2));
console.log(isEven(1));

console.log(isValidEmail("billgates@microsoft.com"));
console.log(isValidEmail("billgatesmicrosoft.com"));