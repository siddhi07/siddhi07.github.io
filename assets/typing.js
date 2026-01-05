const text = "Hi, I’m Siddhi.";
const target = document.getElementById("typed-text");

let index = 0;

function type() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(type, 80); // typing speed
  }
}

window.addEventListener("load", type);
