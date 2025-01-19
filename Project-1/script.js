const button = document.getElementById("changeButton");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "You clicked the button! The text has changed.";
});