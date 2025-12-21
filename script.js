// Typing Effect
const textElement = document.getElementById("typing-text");
const texts = ["Deep Learning", "3D City Models", "Urban Analytics", "Point Clouds", "Spatial AI", "Geodesy", "Python"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait 2 seconds before next word
    } else {
        setTimeout(type, 100); // Typing speed
    }
})();

// Smooth Scroll for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});