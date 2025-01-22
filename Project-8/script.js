// Get references to the DOM elements
const colorInput = document.getElementById("colorInput");
const generateButton = document.getElementById("generateButton");
const paletteContainer = document.getElementById("paletteContainer");

// Function to generate complementary colors
function generateComplementaryColors(baseColor) {
  const baseColorRgb = hexToRgb(baseColor);
  const colors = [];

  // Generate complementary colors by manipulating the RGB values
  for (let i = 0; i < 5; i++) {
    const color = adjustColor(baseColorRgb, i);
    colors.push(rgbToHex(color));
  }

  return colors;
}

// Function to adjust the base color by shifting the RGB values
function adjustColor(rgb, i) {
  return {
    r: (rgb.r + i * 40) % 256,
    g: (rgb.g + i * 30) % 256,
    b: (rgb.b + i * 20) % 256,
  };
}

// Helper function to convert hex to RGB
function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

// Helper function to convert RGB to hex
function rgbToHex(rgb) {
  return `#${((1 << 24) | (rgb.r << 16) | (rgb.g << 8) | rgb.b).toString(16).slice(1).toUpperCase()}`;
}

// Function to render the color palette
function renderPalette(colors) {
  paletteContainer.innerHTML = ""; // Clear the previous palette
  colors.forEach(color => {
    const colorBox = document.createElement("div");
    colorBox.classList.add("colorBox");
    colorBox.style.backgroundColor = color;
    paletteContainer.appendChild(colorBox);
  });
}

// Event listener for the generate button
generateButton.addEventListener("click", () => {
  const baseColor = colorInput.value;
  console.log(baseColor); // Debug: check if the color input is correct
  const palette = generateComplementaryColors(baseColor);
  renderPalette(palette);
});
