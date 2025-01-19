const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");

signupForm.addEventListener("submit" function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "" || email === "") {
        alert("Please fill in both fields (name and email).");
    } else {
        alert("Thank you, " + name + "! You have successfully signed up with the email: " + email);
        
        nameInput.value = "";
        emailInput.value = "";
    }
});