// modalClose = document.querySelector(".modal_close");


// modalOpen.addEventListener("click",function(){
//    modalContainer.classList.add("show-modal")
// });
// modalClose.addEventListener("click",function(){
//    modalContainer.classList.remove("show-modal")
// });










const closeBtn =  document.querySelectorAll(".close-modal")

const hideModal = ()=> {
   const modalContainer = document.getElementById('modal-container')
   modalContainer.classList.remove("show-modal")
}
closeBtn.forEach(c=>c.addEventListener("click", hideModal))



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










// gsap.from(".modal", {
//    // y:-400,
//    duration:.5,
//    scale:.5
// })