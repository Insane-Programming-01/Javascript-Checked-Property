let button = document.getElementById('btn');
let answer = document.getElementById('answer');
let paymentMode = document.getElementById('paymentMode');
let visa = document.getElementById('visa');
let master = document.getElementById('master');
let gpay = document.getElementById('gpay');
let policy = document.getElementById('policy');

button.onclick = function(){
    if (policy.checked) {
        answer.innerText = "Redirect to New Page";
    } else {
        answer.innerText = "You must agree with the privay policy."
    }

    if (visa.checked) {
        paymentMode.innerText = "You are paying with Visa Card";
    } else if (master.checked) {
        paymentMode.innerText = "You are paying with Master Card";
    } else if (gpay.checked) {
        paymentMode.innerText = "You are paying with Google Pay";
    } else {
        paymentMode.innerText = "You must select a payment method"
    }
}