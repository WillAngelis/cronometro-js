const init = document.getElementById("init");
const parar = document.getElementById("stop");
const pausar = document.getElementById("pause");
const container = document.querySelector(".container");
let hh = 0;
let mm = 0;
let ss = 0;
let time;
let tempo = document.getElementById("time");
let gradient = 'linear-gradient(to right, #ff416c, #ff4b2b)';

function start() {
  time = setInterval(() => {
    timer();
  }, 1000);
}
function pause() {
  clearInterval(time);
}
function stop() {
  clearInterval(time);
  hh = 0;
  mm = 0;
  ss = 0;
  tempo.textContent = "00:00:00";
}
function timer() {
  ss++;
  if (ss === 60) {
    ss = 0;
    mm++;
  }
  if (mm === 60) {
    mm = 0;
    hh++;
  }
  let format =
    (hh < 10 ? "0" + hh : hh) +
    ":" +
    (mm < 10 ? "0" + mm : mm) +
    ":" +
    (ss < 10 ? "0" + ss : ss);

  tempo.textContent = format;
}
init.addEventListener("click", () => {
  start();
});
pausar.addEventListener("click", () => {
  pause();
});
parar.addEventListener("click", () => {
  stop();
});

/* 
container.className = '';
container.classList.add('theme');
container.style.background = `${gradient}`
container.style = '';
container.classList.add('theme2');
container.style = '';
container.className = '';
container.classList.add('theme1'); 
*/