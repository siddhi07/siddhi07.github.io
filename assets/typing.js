const text = "Hi, I’m Siddhi.";
const target = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

let index = 0;

function type() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(type, 80);
  } else {
    // let cursor blink a bit, then hide
    setTimeout(() => {
      cursor.classList.add("hide");
    }, 1200);
  }
}

window.addEventListener("load", type);
