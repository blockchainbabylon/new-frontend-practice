const nameForm = document.getElementById("nameForm");
const nameInput = document.getElementById("nameInput");

nameForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter your name!");
    } else {
        alert("Hello, " + name + "!");
        nameInput.value = "";
    }
});