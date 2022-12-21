var check = function() {
    if (document.getElementById('password').value ===
        document.getElementById('confirm_password').value || document.getElementById('password').value === '') {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = '';
        document.getElementById("submitbtn").disabled = false
        document.getElementById("submitbtn").className = "btn"
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = "Passwords don't match";
        document.getElementById("submitbtn").disabled = true
        document.getElementById("submitbtn").className = "btn disabled"
    }
}


const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const firstName = document.getElementById("first_name")
const firstNameError = document.querySelector("#first_name + span.error")
const lastName = document.getElementById("last_name")
const lastNameError = document.querySelector("#last_name + span.error")
const phoneNumber = document.getElementById("phone_number")
const phoneNumberError = document.querySelector("#phone_number + span.error")
const password = document.getElementById("password")
const passwordError = document.querySelector("#password + span.error")
const confirmPassword = document.getElementById("confirm_pasword")
const confirmPasswordError = document.querySelector("#confirm_password + span.error")

email.addEventListener("input", (event) => {

    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {

        showErrorEmail();
    }
});

firstName.addEventListener("input", (event) => {

    if (firstName.validity.valid) {
        firstNameError.textContent = "";
        firstNameError.className = "error";
    } else {

        showErrorFirstName();
    }
});
lastName.addEventListener("input", (event) => {

    if (lastName.validity.valid) {
        lastNameError.textContent = "";
        lastNameError.className = "error";
    } else {

        showErrorLastName();
    }
});
phoneNumber.addEventListener("input", (event) => {

    if (phoneNumber.validity.valid) {
        phoneNumberError.textContent = "";
        phoneNumberError.className = "error";
    } else {

        showErrorPhoneNumber();
    }
});
password.addEventListener("input", (event) => {

    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "error";
    } else {

        showErrorPassword();
    }
});

form.addEventListener("submit", (event) => {

    if (!email.validity.valid) {

        showErrorEmail();

        event.preventDefault();
    }
    if (!firstName.validity.valid) {

        showErrorFirstName();

        event.preventDefault();
    }
    if (!lastName.validity.valid) {

        showErrorLastName();

        event.preventDefault();
    }
    if (!phoneNumber.validity.valid) {

        showErrorPhoneNumber();

        event.preventDefault();
    }
    if (!password.validity.valid) {

        showErrorPassword();

        event.preventDefault();
    }

});

function showErrorEmail() {
    if (email.validity.valueMissing) {

        emailError.textContent = "You need to enter an e-mail address.";

    } else if (email.validity.typeMismatch) {

        emailError.textContent = "Entered value needs to be an e-mail address.";

    }

    emailError.className = "error active";
}

function showErrorFirstName() {
    if (firstName.validity.valueMissing) {
        firstNameError.textContent = "You need to enter a name.";
    }
    firstNameError.className = "error active";
}

function showErrorLastName() {
    if (lastName.validity.valueMissing) {
        lastNameError.textContent = "You need to enter a name.";
    }
    lastNameError.className = "error active";
}

function showErrorPhoneNumber() {
    if (phoneNumber.validity.valueMissing) {
        phoneNumberError.textContent = "You need to enter a number.";
    } else if (phoneNumber.validity.patternMismatch) {
        phoneNumberError.textContent = "Entered value needs to be a phone number.";
    }
    phoneNumberError.className = "error active";
}

function showErrorPassword() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "You need to enter a password.";
    } else if (password.validity.patternMismatch) {
        passwordError.textContent = "You need to enter a password with minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
    }
    passwordError.className = "error active";
}