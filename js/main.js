const init = document.getElementById("init");
const parar = document.getElementById("stop");
const pausar = document.getElementById("pause");
let hh = 0;
let mm = 0;
let ss = 0;
let time;
let tempo = document.getElementById("time");


function start(){
    time = setInterval(()=>{
        timer();
    },1000);
}
function pause(){
    clearInterval(time);
}
function stop (){
    clearInterval(time);
    hh = 0;
    mm = 0;
    ss = 0;
    tempo.innerHTML= "00:00:00";
}
function timer(){
    ss++;
    if (ss ===60){
        ss= 0;
        mm++;
    }
    if (mm ===60){
        mm = 0;
        hh++;
    }
    let format =
    (hh < 10 ? "0" + hh : hh) + ":" +
    (mm < 10 ? "0" + mm : mm) + ":" +
    (ss < 10 ? "0" + ss : ss);

    tempo.innerHTML = format;
}
init.addEventListener("click", ()=> {
    start();
});
parar.addEventListener("click", ()=> {
    stop();
});
pausar.addEventListener("click",() => {
    pause();
})