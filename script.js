let currentPage = 1;

/* UNIVERSAL TYPEWRITER */
function typeText(el, text, speed = 35) {
  el.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

/* PAGE SWITCH */
function showPage(n) {
  document.getElementById(`page${currentPage}`).classList.remove("active");
  setTimeout(() => {
    const page = document.getElementById(`page${n}`);
    page.classList.add("active");
    currentPage = n;

    page.querySelectorAll("[data-text]").forEach(el =>
      typeText(el, el.dataset.text)
    );

    if (n === 8) typeParagraph();
    if (n === 11) initMovie();
  }, 300);
}

/* PAGE 8 PARAGRAPH */
const paragraph =
`This is my first time and ik tujhe bhot proposal aaye h,

and mujhe bhe krte hue thoda sa dr lg rha tha ke mujhe bhe reject na kr de 😅

but maine chance liya and it was a yes, and sach m mai itna khush kbhi nhi hua.

It wasn't the only fact that you are beautiful.
It was something else, something sort of mysterious.
I don't have a name for it but it always kept me wanting you 🌌

but everytime I see you m automatically khush hojata hu.

Sorry mai tere sath es time pr nhi hua,
but itni surety deta hu ke aage isse bhe zyada special krunga 😊

hope karta hu tujhe ye sb pasand aaye,
kyuki ismey sach m bhot mehnat lgi h 🧸`;

function typeParagraph() {
  const el = document.getElementById("longText");
  el.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += paragraph[i];
    i++;
    if (i >= paragraph.length) clearInterval(interval);
  }, 25);
}

/* GIFT */
document.getElementById("giftBox").onclick = () => {
  document.getElementById("giftBox").style.display = "none";
  document.getElementById("polaroid").style.display = "block";
};

/* MOVIE PAGE */
function initMovie() {
  const yes = document.getElementById("yesBtn");
  const no = document.getElementById("noBtn");
  let scale = 1;

  const grow = setInterval(() => {
    if (scale < 1.8) {
      scale += .05;
      yes.style.transform = `scale(${scale})`;
    }
  }, 700);

  no.onclick = () => {
    no.style.left = Math.random() * 70 + "%";
    no.style.top = Math.random() * 180 + "px";
  };

  yes.onclick = () => {
    yes.textContent = "YAYYY 😍🍿";
    clearInterval(grow);
    setTimeout(() => showPage(12), 1500);
  };
}

/* INIT FIRST PAGE */
document.querySelectorAll("[data-text]").forEach(el =>
  typeText(el, el.dataset.text)
);
