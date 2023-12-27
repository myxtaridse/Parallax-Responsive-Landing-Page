/*========= SHOW MENU ==========*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*========= RELLAX ==========*/
var relax = new Rellax('.parallax')

/*========= ANIMATION GSAP ==========*/
/* Navbar */
gsap.from('.nav-logo', {opacity:0, duration:3, delay:.5, y:30, ease:'expo.out'})
gsap.from('.nav-toggle', {opacity:0, duration:3, delay:.7, y:30, ease:'expo.out'})
gsap.from('.nav-item', {opacity:0, duration:3, delay:.7, y:35, ease:'expo.out', stagger:.2})

/* Text */
gsap.from('.home-title', {opacity:0, duration:3, delay:1.3, y:35, ease:'expo.out'})
gsap.from('.home-subtitle', {opacity:0, duration:3, delay:1.1, y:35, ease:'expo.out'})

/* Scroll */
gsap.from('.home-scroll', {opacity:0, duration:3, delay:1.5, y:35, ease:'expo.out'})

/*============ SCROLL REVEAL SECTION ==========*/
const sr = ScrollReveal({
    duration: 2500,
    reset: true
})

/* Data */
sr.reveal('.section-data', {origin: 'left',distance: '70px'})

/* Imgs */
sr.reveal('.section-img', {origin: 'right',distance: '70px', delay:100})