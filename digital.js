const openSlide = document.getElementById('open-menu');
const closeSlide = document.getElementById('close-btn');
const navlinks = document.querySelector('.nav-links');
const images = document.querySelectorAll('.images');
const animation = document.querySelector('.animation-sec')

// toggle menu
openSlide.addEventListener('click', () => {
    navlinks.style.left = "0";
    navlinks.style.transition = "0.8s ease-in-out";
})

closeSlide.addEventListener('click', () => {
    navlinks.style.left = `${-500 + "px"}`
    navlinks.style.transition = "0.8s ease-out"
});



