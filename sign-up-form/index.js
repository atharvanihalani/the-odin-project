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
submitButton.addEventListener("mouseenter", e => {
    const computedStyle = window.getComputedStyle(submitButton);
    const playState = computedStyle.getPropertyValue('animation-play-state');
    if (playState !== "running") {
        submitButton.style.animation = '';
    }
})
submitButton.addEventListener("mouseout", e => {
    submitButton.style.animation = "button-hover 2s reverse";
    submitButton.addEventListener('animationend', function() {
        submitButton.style.animation = '';
    }, { once: true });
});

const nameRegex = /[a-z]+(\s[a-z]+)?/;
let checkName = function() {
    if (nameRegex.test(nameField.value.toLowerCase())) {
        nameField.classList.add("is-valid");
        nameField.parentElement.setAttribute("data-after-name", "");
    } else {
        nameField.classList.remove("is-valid");
        nameField.parentElement.setAttribute("data-after-name", "please enter a valid name");
    }
    enableSubmit();
}

const emailRegex = /[a-z0-9_.\-]+@[a-z1-9\-]+\.[a-z1-9\-]{2,}/
let checkEmail = function() {
    if (emailRegex.test(emailField.value.toLowerCase())) {
        emailField.classList.add("is-valid");
        emailField.parentElement.setAttribute("data-after-email", "");
    } else {
        emailField.classList.remove("is-valid");
        emailField.parentElement.setAttribute("data-after-email", "please enter a valid email");
    }
    enableSubmit();
}

const passwordRegex = /^(?=.*[^a-zA-Z0-9\s])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/
let checkPassword = function() {
    if (!passwordRegex.test(passwordField.value)) {
        console.log("weak passwrod")
        passwordField.parentElement.setAttribute("data-after-pw", "please strengthen your password");
        passwordField.classList.remove("is-valid");
        passwordCheckField.classList.remove("is-valid");
    } else if (passwordField.value !== passwordCheckField.value) {
        passwordField.parentElement.setAttribute("data-after-pw", "please confirm your password");
        passwordField.classList.remove("is-valid");
        passwordCheckField.classList.remove("is-valid");
    } else {
        passwordField.parentElement.setAttribute("data-after-pw", "");
        passwordField.classList.add("is-valid");
        passwordCheckField.classList.add("is-valid");
    }
    enableSubmit();
}

let checkFavAlbum = function() {
    favAlbumField.style.borderWidth = '3px';
    if (favAlbumField.value.includes("SAT")) {
        favAlbumField.classList.add("is-valid");
        favAlbumField.parentElement.setAttribute("data-after-favalbum", "")
    } else {
        favAlbumField.classList.remove("is-valid");
        favAlbumField.parentElement.setAttribute("data-after-favalbum", "objectively bad music taste");
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

            const styleElement = document.createElementNS("http://www.w3.org/2000/svg", "style");
            styleElement.textContent = `
                @keyframes flicker {
                    0%, 9%, 20%, 34%, 55%, 74% {
                        fill: #000000;
                    }
                    10%, 19%, 35%, 54%, 75%, 100% {
                        fill: #ffc800;
                    }
                }

                g {
                    animation: flicker 3s;
                }
            `;

            svgDocument.querySelector('svg').appendChild(styleElement);
            let gElt = logoSvgObj.contentDocument.getElementById('myGroup');
            // gElt.setAttribute('fill', '#ffc800');
            gElt.setAttribute('filter', 'url(#glow)');
        } else {
            submitButton.disabled = true;
        }
}

