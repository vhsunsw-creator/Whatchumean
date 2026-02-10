const pages = document.querySelectorAll(".page");
let current = 0;

function typeText(el, speed = 65) {
  const text = el.getAttribute("data-text");
  el.textContent = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

function showPage(index) {
  pages.forEach(p => p.classList.remove("active"));
  const page = pages[index];
  page.classList.add("active");
  page.querySelectorAll(".typewriter").forEach(el => typeText(el));
}

document.querySelectorAll(".next").forEach(btn => {
  btn.addEventListener("click", () => {
    current++;
    if (current < pages.length) showPage(current);
  });
});

showPage(0);
