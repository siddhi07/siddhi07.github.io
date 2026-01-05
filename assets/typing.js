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
    cursor.classList.add("blink");

    // blink twice (2s), then fade out
    setTimeout(() => {
      cursor.classList.remove("blink");
      cursor.classList.add("hide");
    }, 2000);
  }
}

window.addEventListener("load", type);
