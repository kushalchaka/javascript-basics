const fullname = "Chief Yoshi";

// let firstname = fullname.slice(0, 5);
// let lastname = fullname.slice(6);
// let firstChar = fullname.slice(0, 1);
// let lastChar = fullname.slice(-1);

let firstname = fullname.slice(0, fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(" ") + 1);
let firstChar = fullname.slice(0, 1);
let lastChar = fullname.slice(-1);
console.log(firstname);
console.log(lastname);
console.log(firstChar);
console.log(lastChar);

const email = "billgates@microsoft.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.lastIndexOf("@") + 1);

console.log(username);
console.log(extension);