/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navImg = document.querySelector(".nav_img");


/////////// Menu Show /////////////
if(navToggle) {
   navToggle.addEventListener("click", function() {
      navMenu.classList.add("show-menu");
      navImg.style.top = "-15px";
   })
};



///////////// Menu Hide /////////
if(navClose) {
   navClose.addEventListener("click", function(){
      navMenu.classList.remove("show-menu");
      navImg.style.top = "-500px";

   })
};

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
   // const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*=============== HOME SWIPER ===============*/

let homeSwiper = new Swiper(".home-swiper", {
   spaceBetween : 30,
   loop: true,

   pagination: {
      el: ".swiper-pagination",
      clickable: true
   },
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
// function scrollHeader(){
//    const header = document.getElementById("header")
//    if (this.scrollY >=100) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
// }
// window.addEventListener("scroll",scrollHeader)
/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
   centeredSlides: true,
   slidesPerView: "auto",
   loop: 'true',
   spaceBetween: 16,
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
function scrollActive(){
   const scrollY = window.pageYOffset

   sections.forEach(current =>{
       const sectionHeight = current.offsetHeight,
             sectionTop = current.offsetTop - 58,
             sectionId = current.getAttribute('id')

       if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
           document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
       }else{
           document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
       }
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
   const scrollUp = document.getElementById('scroll-up');
   // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
   if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 300,
   // reset: true
})


sr.reveal('.home-swiper, .new-swiper, .newsletter_container')
sr.reveal('.category_data, .product_content, .footer_container', {interval: 100})
sr.reveal('.about_data, .discount_img', {origin: 'left'})
sr.reveal('.about_img, .discount_data', {origin: 'right'})


////////////////////////////////////////

const openBtn =  document.querySelectorAll(".pro_btn")

const showModal = ()=> {
   const modalContainer = document.getElementById('modal-container')
   modalContainer.classList.add("show-modal")
}
openBtn.forEach(c=>c.addEventListener("click", showModal))


const closeBtn =  document.querySelectorAll(".close-modal")

const hideModal = ()=> {
   const modalContainer = document.getElementById('modal-container')
   modalContainer.classList.remove("show-modal")
}
closeBtn.forEach(c=>c.addEventListener("click", hideModal))


////////////////////////////////////////////

/**========================== Model Swiper ==================== **/
let ModelSwiper = new Swiper(".img-swiper", {
   spaceBetween : 10,
   centeredSlides: true,
   loop: true,

   pagination: {
      el: ".swiper-pagination",
      clickable: true
   },
});