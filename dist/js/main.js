const init=document.getElementById("init"),parar=document.getElementById("stop"),pausar=document.getElementById("pause"),container=document.querySelector(".container"),btn=document.querySelector(".settings"),radio=document.querySelectorAll("input[type=radio]"),image_input=document.querySelector("#img_bg");let uploaded_image,hh=0,mm=0,ss=0,time,tempo=document.getElementById("time"),paused=!1,timeSaved,tema;function start(){clearInterval(time),time=setInterval(()=>{timer()},1e3),paused=!1,pausar.textContent="Pausar"}function pause(){clearInterval(time),0==paused?(paused=!0,pausar.textContent="Despausar"):(start(),paused=!1,pausar.textContent="Pausar"),localStorage.setItem("pause",""+paused)}function stop(){clearInterval(time),hh=0,mm=0,ss=0,tempo.textContent="00:00:00";tempo.textContent;paused=!1,pausar.textContent="Pausar",localStorage.setItem("pause",""+paused),saveLocale(),localStorage.setItem("timeSaved",""+tempo.textContent)}function timer(){ss++,60===ss&&(ss=0,mm++),60===mm&&(mm=0,hh++);var e=(hh<10?"0"+hh:hh)+":"+(mm<10?"0"+mm:mm)+":"+(ss<10?"0"+ss:ss);tempo.textContent=e,localStorage.setItem("timeSaved",""+tempo.textContent),saveLocale()}image_input.addEventListener("change",function(){let e=new FileReader;e.addEventListener("load",()=>{uploaded_image=e.result,container.style.backgroundImage=`url(${uploaded_image})`,container.style.backgroundSize="contain",container.style.backgroundRepeat="no-repeat",container.style.backgroundPosition="center"}),e.readAsDataURL(this.files[0])}),window.onload=function(){0==localStorage.length?(saveLocale(),tempo.textContent="00:00:00",document.body.classList.add("themeBlack"),localStorage.setItem("tema","themeBlack"),localStorage.setItem("timeSaved","00:00:00")):(ss=localStorage.getItem("seconds"),mm=localStorage.getItem("minutes"),hh=localStorage.getItem("hour"),tempo.textContent=localStorage.getItem("timeSaved"),paused=localStorage.getItem("pause"),0==paused?paused=!0:pausar.textContent="Despausar",tema=localStorage.getItem("tema"),container.classList="",document.body.classList="",container.style="",document.body.classList.add(""+tema))},init.addEventListener("click",()=>{start()}),pausar.addEventListener("click",()=>{pause()}),parar.addEventListener("click",()=>{stop()}),btn.addEventListener("click",()=>{let e=document.querySelector(".container--btn");e.classList.toggle("settings__btn"),e.classList.toggle("btnBox")});let radioBtn=Array.from(radio);for(let e=0;e<radioBtn.length;e++){var botao=radioBtn[e];botao.addEventListener("click",(e,t)=>{e=e.target;1==e.checked&&(container.classList="",document.body.classList="",container.style="",document.body.classList.add(""+e.value),image_input.value="",localStorage.setItem("tema",""+e.value))})}function saveLocale(){localStorage.setItem("seconds",""+ss),localStorage.setItem("minutes",""+mm),localStorage.setItem("hour",""+hh)}