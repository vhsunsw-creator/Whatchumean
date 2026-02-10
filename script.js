let currentPage = 1;

function typeText(el, speed = 40) {
  const text = el.innerText;
  el.innerText = "";
  let i = 0;

  const timer = setInterval(() => {
    el.innerText += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

function showPage(n) {
  document.getElementById(`page${currentPage}`).classList.remove("active");

  setTimeout(() => {
    const page = document.getElementById(`page${n}`);
    page.classList.add("active");
    currentPage = n;

    page.querySelectorAll(".typewriter").forEach(el =>
      typeText(el)
    );
  }, 300);
}

/* GIFT */
document.getElementById("giftBox").onclick = () => {
  document.getElementById("giftBox").style.display = "none";
  document.getElementById("polaroid").style.display = "block";
};

/* INIT FIRST PAGE */
document.querySelectorAll(".typewriter").forEach(el =>
  typeText(el)
);
