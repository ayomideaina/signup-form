document.getElementById("signupForm").addEventListener("submit", function (event) {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let isValid = true;

    // First Name Validation
    if (firstName === "") {
        document.getElementById("firstNameError").textContent = "First Name is required.";
        isValid = false;
    }

    // Last Name Validation
    if (lastName === "") {
        document.getElementById("lastNameError").textContent = "Last Name is required.";
        isValid = false;
    }

    // Email Validation
    if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }

    // Password Validation
    if (!validatePassword(password, 6, 20)) {
        document.getElementById("passwordError").textContent = "Password must be 6-20 characters and contain only letters, numbers, and @, _, -.";
        isValid = false;
    }

    // Prevent form submission if invalid
    if (!isValid) {
        event.preventDefault();
    }
    if (isValid) {
        alert('Form Submitted Successfully!');
    }
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Password Validation Function
function validatePassword(password, minLength, maxLength) {
    const regex = /^[a-zA-Z0-9@_\-]+$/;
    return regex.test(password) && password.length >= minLength && password.length <= maxLength;
}
