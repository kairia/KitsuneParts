var AnimationSpeed = 300;

var block = document.querySelectorAll(".block");
var text = document.querySelector(".commit");
var Animstop = Boolean(false);
/* preloader */
$("html, body").css({
  overflow: "hidden",
  height: "100%"
});
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
  $("html, body").removeAttr("style");
});

var events = document.getElementById("events");
events.addEventListener("click",()=>{
  const display = document.querySelector(".event-display");
  display.classList.toggle("event-display-on");
  
});

var eventdisplay = document.getElementById("event-display");
eventdisplay.addEventListener("click",()=>{
  const display = document.querySelector(".event-display");
  display.classList.toggle("event-display-on");
  
});
/* preloader */
/* randomanimater */
/*   function setProperty(height, width, horizon, vertic, opacity) {
    const selected = Math.round(Math.random() * 15);
    block[selected].style.setProperty("--randomHeight", height + "vh");
    block[selected].style.setProperty("--randomWidth", width + "vw");
    block[selected].style.setProperty("--randomX", horizon + "%");
    block[selected].style.setProperty("--randomY", vertic + "%");
  }
  function changePercentage() {
    var height = Math.random() * 8;
    var width = Math.random() * 8;
    var horizon = Math.random() * 100;
    var vertic = Math.random() * 100;
    var opacity = Math.random() * 0.4 + 0.1;
    setProperty(height, width, horizon, vertic, opacity);
  }
  var RBlock;
  var RBlockAnim= function(){
    RBlock=setInterval(changePercentage, AnimationSpeed);
  }
  RBlockAnim();

 */
/* randomanimater */

/* const controller = new ScrollMagic.Controller();
const nav = new ScrollMagic.Scene({
  triggerElement: ".info",
  duration: 0,
  triggerHook: 0
})
  .on('start',function animstop(){
    if(Animstop===false){
        Animstop = Boolean(true);
        clearInterval(RBlock);
        console.log('debug');
    }
    else{
        Animstop = Boolean(false);
        RBlockAnim();
    }
}).reverse(true)
  .setClassToggle(".nav", "nav-engage").reverse(true)
  .addIndicators()
  .addTo(controller); */
