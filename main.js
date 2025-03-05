document.getElementById("signupForm").addEventListener("submit", function (event) {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let isValid = true;

    if (firstName === "") {
        document.getElementById("firstNameError").textContent = "First Name is required.";
        isValid = false;
    }

    if (lastName === "") {
        document.getElementById("lastNameError").textContent = "Last Name is required.";
        isValid = false;
    }

    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    if (!validatePassword(password, 6, 20)) {
        document.getElementById("passwordError").textContent = "Password must be 6-20 characters and contain only letters, numbers, and @, _, -.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        event.preventDefault();
        showSuccessMessage();
    }
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validatePassword(password, minLength, maxLength) {
    const regex = /^[a-zA-Z0-9@_\-]+$/;
    return regex.test(password) && password.length >= minLength && password.length <= maxLength;
}

function showSuccessMessage() {
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block"; 

    setTimeout(() => {
        successMessage.style.display = "none";
    }, 3000);
}