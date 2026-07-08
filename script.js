// ============================================
// SELECT ELEMENTS
// ============================================

const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const togglePassword = document.getElementById("togglePassword");

const loginBtn = document.getElementById("loginBtn");

// ============================================
// SHOW / HIDE PASSWORD
// ============================================

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});

// ============================================
// EMAIL VALIDATION
// ============================================

function validateEmail(value) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(value);

}

// ============================================
// SHOW ERROR
// ============================================

function showError(element, message) {

    element.innerText = message;

}

// ============================================
// CLEAR ERROR
// ============================================

function clearErrors() {

    emailError.innerText = "";
    passwordError.innerText = "";

}

// ============================================
// LOGIN FORM
// ============================================

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    clearErrors();

    let valid = true;

    // Email

    if (email.value.trim() === "") {

        showError(emailError, "Email is required");

        valid = false;

    }

    else if (!validateEmail(email.value.trim())) {

        showError(emailError, "Enter a valid email");

        valid = false;

    }

    // Password

    if (password.value.trim() === "") {

        showError(passwordError, "Password is required");

        valid = false;

    }

    else if (password.value.length < 6) {

        showError(passwordError,
            "Password must contain at least 6 characters");

        valid = false;

    }

    if (!valid) return;

    // ========================================
    // LOADING
    // ========================================

    loginBtn.classList.add("loading");

    loginBtn.disabled = true;

    // Fake Login

    setTimeout(() => {

        loginBtn.classList.remove("loading");

        loginBtn.disabled = false;

        alert("Login Successful ✅");

        loginForm.reset();

    }, 2000);

});

// ============================================
// ENTER KEY SUPPORT
// ============================================

document.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        loginForm.requestSubmit();

    }

});

// ============================================
// REMOVE ERROR WHILE TYPING
// ============================================

email.addEventListener("input", () => {

    emailError.innerText = "";

});

password.addEventListener("input", () => {

    passwordError.innerText = "";

});

// ============================================
// INPUT FOCUS ANIMATION
// ============================================

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.transform = "scale(1.02)";

    });

    input.addEventListener("blur", () => {

        input.parentElement.style.transform = "scale(1)";

    });

});

// ============================================
// SOCIAL BUTTONS
// ============================================

const googleBtn = document.querySelector(".google");
const githubBtn = document.querySelector(".github");

googleBtn.addEventListener("click", () => {

    alert("Google Login Coming Soon 🚀");

});

githubBtn.addEventListener("click", () => {

    alert("GitHub Login Coming Soon 🚀");

});

// ============================================
// CARD PARALLAX EFFECT
// ============================================

const card = document.querySelector(".login-card");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;

    const y = (window.innerHeight / 2 - e.pageY) / 40;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave", () => {

    card.style.transform =
        "rotateY(0deg) rotateX(0deg)";

});

// ============================================
// END
// ============================================