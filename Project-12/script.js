const jokeButton = document.getElementById("jokeButton");
const jokeDisplay = document.getElementById("jokeDisplay");

jokeButton.addEventListener("click", getJoke);

async function getJoke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();

        jokeDisplay.innerHTML = `${data.setup} <br> <strong>${data.punchline}</strong>`;
    } catch (error) {
        jokeDisplay.innerHTML = "Oops! Something went wrong. Try again later. "
    }
}