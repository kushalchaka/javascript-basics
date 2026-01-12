const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age = 0;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);

    if (age > 100) {
        resultElement.textContent = `Too old`;
    }
    else if (age == 0) {
        resultElement.textContent = `Just born lol`;
    }
    else if (age >= 18) {
        resultElement.textContent = `Adult`;
    }
    else if (age < 0) {
        resultElement.textContent = `How? Not possible lol`;
    }
    else{
        resultElement.textContent = `Child`;
    }
}