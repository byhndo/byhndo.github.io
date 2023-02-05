gsap.registerPlugin(ScrollTrigger);

const { createApp, ref, onMounted } = Vue
  createApp({
    methods: {
      afterEnter(el) {
        setupReveal(el); 
      },
      afterLeave(el) {
        el.ctx && el.ctx.revert(); // revert the animations/ScrollTriggers after leaving
      }
    },
    data() {
      return {
        bg: 'bio'
      }
    }
  }).mount('#app')


function setupReveal(container) {
  // create a context so that we can easily revert
  container.ctx = gsap.context(() => {
    let revealContainers = container.querySelectorAll(".item");
    revealContainers.forEach((el) => {
      let image = el.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger:{
          trigger: el,
          toggleActions: "restart none none none"
        }
      }); 

      tl.set(el, { autoAlpha: 1 });
      tl.from(el,  { 
        duration: 1.5,
        xPercent: -100,
        ease: "power2.out"
      }); 

      tl.from(image,  {
        duration: 1.5,
        xPercent: 100,
        scale: 1.3,
        ease: "power2.out"
      }, 0); 
    });
  });
}


    

Splitting();


$(document).ready(function() {
$( ".dot" ).delay(100).animate({top:"0"},
     3000, 'easeInOutBounce'

)
  });












