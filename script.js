let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");

function validatePassword() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
        password.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity("");
        password.setCustomValidity("");
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
