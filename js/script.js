const tanah = document.querySelectorAll(".tanah");
const dims = document.querySelectorAll(".dims");
const scorBoard = document.querySelector(".scor");
const pop = document.querySelector("#pop");
let ts;
let finish;
let scor;

function random(tanah) {
  const r = Math.floor(Math.random() * tanah.length);
  const tr = tanah[r];
  if (tr == ts) {
    random(tanah);
  }
  ts = tr;
  return tr;
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function showDims() {
  const r = random(tanah);
  const w = randomTime(300, 1000);
  r.classList.add("muncul");
  setTimeout(() => {
    r.classList.remove("muncul");
    if (!finish) {
      showDims();
    }
  }, w);
}

function play() {
  finish = false;
  scor = 0;
  scorBoard.textContent = 0;
  showDims();
  setTimeout(() => {
    finish = true;
    scorBoard.textContent = "Game Over";
  }, 12000);
}

function hit() {
  scor++;
  this.parentNode.classList.remove("muncul");
  pop.play();
  scorBoard.textContent = scor;
}

dims.forEach(item => {
  item.addEventListener("click", hit);
});
