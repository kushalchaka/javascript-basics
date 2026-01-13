const temp = -100;
const isSunny = true;

if (temp > 0 && temp <= 30) {
    console.log("The weather is good");
}
else if (temp <= 0 || temp > 30) {
    console.log("The weather is bad");
}
else if (!isSunny) {
    console.log("The weather is bad");
}
else {
    console.log("idk");
}
