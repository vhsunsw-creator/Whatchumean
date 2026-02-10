let currentPage = 1;

/* TYPEWRITER */
function typeText(el, speed = 35) {
  const text = el.dataset.text;
  el.innerText = "";
  let i = 0;
  const timer = setInterval(() => {
    el.innerText += text.charAt(i);
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

    if (n === 12) initMovie();
  }, 400);
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
  let grow = null;

  no.onclick = () => {
    no.style.left = Math.random() * 70 + "%";
    no.style.top = Math.random() * 160 + "px";

    if (!grow) {
      grow = setInterval(() => {
        if (scale < 1.6) {
          scale += 0.08;
          yes.style.transform = `scale(${scale})`;
        }
      }, 500);
    }
  };

  yes.onclick = () => {
    yes.innerText = "YAYYY 😍🍿";
    clearInterval(grow);
    setTimeout(() => showPage(13), 1400);
  };
}

/* START FIRST PAGE */
typeText(document.querySelector("#page1 .typewriter"));
