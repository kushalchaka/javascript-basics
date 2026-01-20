const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");


myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    // event.target.style.backgroundColor = "tomato";
    // event.target.textContent = "OUCH!! :("
    myBox.textContent = "OUCH!! :(" 
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    // event.target.style.backgroundColor = "yellow";
    // event.target.textContent = "Don't do it  :|"
    myBox.textContent = "Don't do it  :|"
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    // event.target.style.backgroundColor = "lightgreen";
    // event.target.textContent = "Click Me :)"
    myBox.textContent = "Click Me :)"
});