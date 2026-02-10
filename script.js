let currentPage = 1;

/* TYPEWRITER */
function typeText(el, speed = 35) {
  const text = el.innerText;
  el.innerText = "";
  let i = 0;
  const timer = setInterval(() => {
    el.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

/* PAGE SWITCH */
function showPage(n) {
  document.getElementById(`page${currentPage}`).classList.remove("active");

  setTimeout(() => {
    const page = document.getElementById(`page${n}`);
    page.classList.add("active");
    currentPage = n;

    page.querySelectorAll(".typewriter").forEach(el =>
      typeText(el)
    );

    if (n === 11) initMovie();
  }, 300);
}

/* GIFT */
const gift = document.getElementById("giftBox");
const polaroid = document.getElementById("polaroid");

if (gift) {
  gift.onclick = () => {
    gift.style.display = "none";
    polaroid.style.display = "block";
  };
}

/* MOVIE PAGE */
function initMovie() {
  const yes = document.getElementById("yesBtn");
  const no = document.getElementById("noBtn");
  let scale = 1;

  const grow = setInterval(() => {
    if (scale < 1.6) {
      scale += .05;
      yes.style.transform = `scale(${scale})`;
    }
  }, 700);

  no.onclick = () => {
    no.style.left = Math.random() * 70 + "%";
    no.style.top = Math.random() * 180 + "px";
  };

  yes.onclick = () => {
    yes.innerText = "YAYYY 😍🍿";
    clearInterval(grow);
    setTimeout(() => showPage(12), 1500);
  };
}

/* INIT FIRST PAGE */
document.querySelectorAll(".typewriter").forEach(el =>
  typeText(el)
);
