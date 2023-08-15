const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const passwordCheckField = document.getElementById("password-check");
const favAlbumField = document.getElementById("fav-album");

// add event listeners for all the below
nameField.addEventListener("keydown", e => checkName());
emailField.addEventListener("keydown", e => checkEmail());
passwordField.addEventListener("keydown", e => checkPassword());
passwordCheckField.addEventListener("keydown", e => checkPassword());

const nameRegex = /[a-z]+(\s[a-z]+)?/;
let checkName = function() {
    if (nameRegex.test(nameField.value.toLowerCase())) {
        console.log("heck m 123")
        nameField.classList.add("is-valid");
    } else {
        console.log("jfdklsajl")
        nameField.classList.remove("is-valid");
    }
}

const emailRegex = /[a-z0-9_.\-]+@[a-z1-9\-]+\.[a-z1-9\-]{2,}/
let checkEmail = function() {
    if (emailRegex.test(emailField.value.toLowerCase())) {
        emailField.classList.add("is-valid");
    } else {
        emailField.classList.remove("is-valid");
    }
}

const passwordRegex = /^(?=.*[^a-zA-Z0-9\s])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/
let checkPassword = function() {
    if (passwordRegex.test(passwordField.value) &&
        passwordField.value === passwordCheckField.value) {
            passwordField.classList.add("is-valid");
            passwordCheckField.classList.add("is-valid");
        } else {
            passwordField.classList.remove("is-valid");
            passwordCheckField.classList.remove("is-valid");    
        }
}