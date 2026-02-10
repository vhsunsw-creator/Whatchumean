let pages = document.querySelectorAll(".page");
let current = 0;

/* NEXT PAGE */
function nextPage() {
  pages[current].classList.remove("active");
  current++;
  if (current < pages.length) {
    pages[current].classList.add("active");
    startTypewriter();
  }
}

/* TYPEWRITER */
function startTypewriter() {
  let el = pages[current].querySelector(".type");
  if (!el) return;

  let text = el.innerText;
  el.innerText = "";
  let i = 0;

  let timer = setInterval(() => {
    el.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, 35);
}

/* POLAROID */
function openPolaroid() {
  document.querySelector(".polaroid").classList.add("open");
}

/* MOVIE PAGE */
function moveNo() {
  let btn = document.getElementById("no");
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
}

function yesClicked() {
  document.getElementById("yes").innerText = "YAYYY 😍🍿";
  setTimeout(() => nextPage(), 1500);
}

/* INIT */
startTypewriter();
