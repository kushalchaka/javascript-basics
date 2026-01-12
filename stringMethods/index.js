let username = " ChiefYoshi";

console.log(username);
console.log(username.charAt(2));
console.log(username.indexOf("yoshi"));
console.log(username.lastIndexOf("i"));
console.log(username.length)

username = username.trim();
console.log(username);
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.repeat(3));
console.log(username.startsWith("C"));
console.log(username.endsWith("i"));
console.log(username.includes(" "));

let phoneNumber = "123-456-7890";
console.log(phoneNumber.replaceAll("-", "."));
console.log(phoneNumber.padStart(15, "*"));
console.log(phoneNumber.padEnd(15, "*"));
