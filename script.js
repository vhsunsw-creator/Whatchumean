let pages = document.querySelectorAll(".page");
let index = 0;

function next() {
  pages[index].classList.remove("active");
  index++;
  if (index < pages.length) {
    pages[index].classList.add("active");
  }
}

/* TYPEWRITER */
document.querySelectorAll(".type").forEach(el => {
  let text = el.innerText;
  el.innerText = "";
  let i = 0;
  let speed = 35;

  function type() {
    if (i < text.length) {
      el.innerText += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
});

/* GIFT */
document.getElementById("gift").addEventListener("click", () => {
  document.getElementById("gift").style.display = "none";
  document.getElementById("polaroid").style.display = "block";
});
