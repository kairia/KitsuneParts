
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
const tween = new TimeLineLite();

const controller = new ScrollMagic.Controller({addIndicators: true});
const nav = new ScrollMagic.Scene({
    triggerElement: '.info',
    duration:3000
});

