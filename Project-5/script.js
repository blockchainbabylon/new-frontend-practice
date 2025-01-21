const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const colorDisplay = document.getElementById('color-display');
const colorCode = document.getElementById('color-code');
const copyButton = document.getElementById('copy-button');

function updateColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    colorDisplay.style.backgroundColor = rgbColor;

    colorCode.textContent = rgbColor;
}

function copyToClipboard() {
    const textToCopy = colorCode.textContent;
    navigator.clipboard.writeText(textToCopy)
        .then(() => alert('Copied to clipboard'))
        .catch(err => alert('Failed to copy!'));
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
copyButton.addEventListener('click', copyToClipboard);

updateColor();