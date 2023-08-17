const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const passwordCheckField = document.getElementById("password-check");
const favAlbumField = document.getElementById("fav-album");
const submitButton = document.querySelector('[type="submit"]');

nameField.addEventListener("change", e => checkName());
emailField.addEventListener("change", e => checkEmail());
passwordField.addEventListener("change", e => checkPassword());
passwordCheckField.addEventListener("change", e => checkPassword());
favAlbumField.addEventListener("change", e => checkFavAlbum());

const nameRegex = /[a-z]+(\s[a-z]+)?/;
let checkName = function() {
    if (nameRegex.test(nameField.value.toLowerCase())) {
        nameField.classList.add("is-valid");
    } else {
        nameField.classList.remove("is-valid");
    }
    enableSubmit();
}

const emailRegex = /[a-z0-9_.\-]+@[a-z1-9\-]+\.[a-z1-9\-]{2,}/
let checkEmail = function() {
    if (emailRegex.test(emailField.value.toLowerCase())) {
        emailField.classList.add("is-valid");
    } else {
        emailField.classList.remove("is-valid");
    }
    enableSubmit();
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
    enableSubmit();
}

let checkFavAlbum = function() {
    if (favAlbumField.value === "") {
        favAlbumField.classList.remove("is-valid");
    } else {
        favAlbumField.classList.add("is-valid");
    }
    enableSubmit();
}

let enableSubmit = function() {
    if (nameField.classList.contains("is-valid") &&
        emailField.classList.contains("is-valid") &&
        passwordField.classList.contains("is-valid") &&
        favAlbumField.classList.contains("is-valid")) {
            submitButton.disabled = false;
            
            let logoSvgObj = document.getElementById("logo");
            let testDoc = logoSvgObj.contentDocument;
            console.log(`test doc: ${testDoc}`);
            
            let gElt = logoSvgObj.contentDocument.getElementById('myGroup');
            gElt.setAttribute('fill', '#ffc800');
            gElt.setAttribute('filter', 'url(#glow)');
        } else {
            submitButton.disabled = true;
        }
}