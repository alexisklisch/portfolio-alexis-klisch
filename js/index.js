const $burguerMenu = document.querySelector('.header__nav__burger-menu');
const $nav = document.querySelector('.menu');

window.onload = function() {
    Particles.init({
        selector: '.background',
        color: '#fff',
        maxParticles: 100,
        speed: 0.2
    })
}

$burguerMenu.addEventListener('click', function() {
    $nav.classList.toggle('active');
    $burguerMenu.querySelectorAll('div').forEach(div => {
        div.classList.toggle('open-menu');
    })
})
$nav.querySelectorAll('.menu__links__item a').forEach(item =>{
    item.addEventListener('click', function() {
        $nav.classList.remove('active');
        $burguerMenu.querySelectorAll('div').forEach(div => {
            div.classList.toggle('open-menu');
        })
    } )
})