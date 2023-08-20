const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const passwordCheckField = document.getElementById("password-check");
const favAlbumField = document.getElementById("fav-album");
const submitButton = document.querySelector('[type="button"]');

nameField.addEventListener("change", checkName);
emailField.addEventListener("change", checkEmail);
passwordField.addEventListener("change", checkPassword);
passwordCheckField.addEventListener("change", checkPassword);
favAlbumField.addEventListener("change", checkFavAlbum);

// reverses the CSS animation when mouse leaves the button
submitButton.addEventListener("mouseout", e => {
    submitButton.style.animation = "button-hover 2s reverse";
    submitButton.addEventListener('animationend', function() {
        submitButton.style.animation = '';
    }, { once: true });
});
submitButton.addEventListener("mouseenter", e => {
    const computedStyle = window.getComputedStyle(submitButton);
    const playState = computedStyle.getPropertyValue('animation-play-state');
    if (playState !== "running") {
        submitButton.style.animation = '';
    }
})


const nameRegex = /[a-z]+(\s[a-z]+)?/;
/**
 * Client side validation – checks that the user has entered a valid name
 */
function checkName() {
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
/**
 * Checks whether the user has entered a valid email address
 */
function checkEmail() {
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
/**
 * Checks a) whether the user's password is strong, and b) whether they've
 * reconfirmed their password correctly
 */
function checkPassword() {
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

/**
 * Checks whether the user has good taste in music (ie. their fav album
 * is from the sat trilogy)
 */
function checkFavAlbum() {
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

/**
 * Checks whether the submit button should be enabled (ie. if
 * all fields are valid)
 */
let enableSubmit = function() {
    let allValid = nameField.classList.contains("is-valid") &&
                    emailField.classList.contains("is-valid") &&
                    passwordField.classList.contains("is-valid") &&
                    favAlbumField.classList.contains("is-valid");
    if (allValid) {
        if (submitButton.disabled) switchLogoOn();
        submitButton.disabled = false;
    } else {
        if (!submitButton.disabled) switchLogoOff();
        submitButton.disabled = true;
    }
}

/**
 * Animates the logo if all inputs are valid – making it
 * flicker, and 'switch on'
 */
function switchLogoOn() {
    let logoSvgObj = document.getElementById("logo");
    let testDoc = logoSvgObj.contentDocument;

    const styleElement = document.createElementNS("http://www.w3.org/2000/svg", "style");
    styleElement.textContent = `
        @keyframes flicker {
            0%, 14%, 40%, 54%, 65%, 100% {
                fill: #000000;
            }
            15%, 39%, 55%, 64% {
                fill: #ffc800;
            }
        }

        g {
            animation: flicker 1.4s;
        }
    `;

    testDoc.querySelector('svg').appendChild(styleElement);
    let gElt = logoSvgObj.contentDocument.getElementById('myGroup');
    gElt.addEventListener('animationend', function(e) {
        gElt.setAttribute('filter', 'url(#glow)');
        gElt.setAttribute('fill', '#ffc800');
    });
}

/**
 * Resets the animation and 'switches the logo off'
 */
function switchLogoOff() {
    let logoSvgObj = document.getElementById("logo");
    let testDoc = logoSvgObj.contentDocument;
    console.log(`last child: ${testDoc.querySelector('svg').lastElementChild}`);
    testDoc.querySelector('svg').lastElementChild.remove();

    let gElt = logoSvgObj.contentDocument.getElementById('myGroup');
    gElt.setAttribute('filter', '');
    gElt.setAttribute('fill', '#000000');
}