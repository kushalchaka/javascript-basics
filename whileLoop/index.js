let username = "";

// while (username === "" || username === null) {
//     username = prompt("Please enter your username:");
// }

do {
    username = prompt("Please enter your username:");
} while (username === "" || username === null);


console.log(`Hello, ${username}!`);
