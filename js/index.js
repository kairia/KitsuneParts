var AnimationSpeed = 30;




var block = document.querySelectorAll('.block');
var Animstop = new Boolean(false);
/* preloader */
$('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
})
window.addEventListener('load', () => {

    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
    $('html, body').removeAttr('style')
});
/* preloader */
/* randomanimater */
function setProperty(height,width,horizon,vertic,opacity) {
    const selected = Math.round(Math.random()*15);
    block[selected].style.setProperty('--randomHeight', height +'px' );
    block[selected].style.setProperty('--randomWidth', width +'px');
    block[selected].style.setProperty('--randomX', horizon +'%');
    block[selected].style.setProperty('--randomY', vertic +'%');
    block[selected].style.setProperty('--randomOpacity', opacity );
  }
  function changePercentage() {
    var height = Math.random()*100;
    var width = Math.random()*100;
    var horizon = Math.random()*100;
    var vertic = Math.random()*100;
    var opacity =Math.random()*0.7+0.1;
    setProperty(height,width,horizon,vertic,opacity);
  }
  setInterval(changePercentage, AnimationSpeed);
/* randomanimater */

const controller = new ScrollMagic.Controller();
const nav = new ScrollMagic.Scene({
    triggerElement: '.info',
    duration:0,
    triggerHook:0,
})
  .setClassToggle(".nav", "nav-engage").reverse(true)
  .addIndicators()
  .addTo(controller);




