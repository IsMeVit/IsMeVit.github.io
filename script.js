let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '50px',
    duration: 2500, 
    delay: 300,
    reset: true
});

sr.reveal('.home-content', {delay: 130, origin: 'top'});
sr.reveal('.home-img', {delay: 350, origin: 'top'});
sr.reveal('.social-icons', {delay: 150, origin: 'top'});