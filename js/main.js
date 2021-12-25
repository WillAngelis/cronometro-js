const init = document.getElementById("init");
const parar = document.getElementById("stop");
const pausar = document.getElementById("pause");
const container = document.querySelector(".container");
const btn = document.querySelector(".settings");
const radio = document.querySelectorAll("input[type=radio]");

let hh = 0;
let mm = 0;
let ss = 0;
let time;
let tempo = document.getElementById("time");

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
btn.addEventListener("click", () => {
  let btnContainer = document.querySelector(".container--btn");
  btnContainer.classList.toggle("settings__btn");
  btnContainer.classList.toggle("btnBox");
});

let radioBtn = Array.from(radio);

for (let i = 0; i < radioBtn.length; i++) {
  var botao = radioBtn[i];
  botao.addEventListener("click", (e) => {
    let el = e.target;
    if (el.checked == true) {
      container.classList = "";
      container.classList.add(`${el.value}`);
    }
    if (container.classList == "themeWhite") {
      let timer = document.querySelector(".timer__title");
      timer.style.color = "#000";
    } else {
      let timer = document.querySelector(".timer__title");
      timer.removeAttribute("style");
    }
  });
}
