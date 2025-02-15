const asciiContainer = document.getElementById("asciiBackground");

// Calculate width dynamically for full coverage
const width = Math.floor(window.innerWidth / 7); // Smaller division for denser characters
const height = Math.floor(window.innerHeight / 14);
const chars = ["H", "A", "C", "K", "E", "D"];
let frame = 0;

function generateAscii() {
  let asciiArt = "";
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let charIndex = Math.abs(
        Math.floor((Math.sin((x + frame) * 0.15) + Math.cos((y - frame) * 0.15)) * 3) % chars.length
      );
      asciiArt += chars[charIndex] + " "; // Added space to improve readability
    }
    asciiArt += "\n";
  }
  asciiContainer.textContent = asciiArt;
  frame++;
}

function animateAscii() {
  generateAscii();
  requestAnimationFrame(animateAscii);
}

// Set font to monospace to maintain alignment
asciiContainer.style.fontFamily = "monospace";
asciiContainer.style.whiteSpace = "pre"; // Preserve line breaks

animateAscii();
