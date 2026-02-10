const pages = document.querySelectorAll(".page");
let current = 0;

/* TYPEWRITER */
function typeText(el, speed = 60) {
  const text = el.dataset.text;
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

  if (index === 11) initMovie();
}

function nextPage() {
  current++;
  if (current < pages.length) showPage(current);
}

/* INIT */
showPage(0);

/* GIFT */
document.addEventListener("click", e => {
  if (e.target.id === "giftBox") {
    document.getElementById("giftBox").style.display = "none";
    document.getElementById("polaroid").style.display = "block";
  }
});

/* MOVIE LOGIC */
function initMovie() {
  const yes = document.getElementById("yesBtn");
  const no = document.getElementById("noBtn");

  let scale = 1;

  no.onclick = () => {
    no.style.left = Math.random() * 70 + "%";
    no.style.top = Math.random() * 150 + "px";
    scale += 0.12;
    yes.style.transform = `scale(${scale})`;
  };

  yes.onclick = () => {
    yes.textContent = "YAYYYY 😍🍿";
    setTimeout(() => nextPage(), 1200);
  };
}
