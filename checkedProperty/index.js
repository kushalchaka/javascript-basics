const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const purchaseResult = document.getElementById("purchaseResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if (myCheckbox.checked) {
        purchaseResult.innerHTML = "You agreed to the terms and conditions.";
    }
    else {
        purchaseResult.innerHTML = "You must agree to the terms and conditions.";
    }

    if (visaBtn.checked) {
        paymentResult.innerHTML = "You selected Visa as your payment method.";
    }
    else if (mastercardBtn.checked) {
        paymentResult.innerHTML = "You selected MasterCard as your payment method.";
    }
    else if (paypalBtn.checked) {
        paymentResult.innerHTML = "You selected PayPal as your payment method.";
    }
    else {
        paymentResult.innerHTML = "You did not select a payment method.";
    }
}