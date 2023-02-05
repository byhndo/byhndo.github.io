gsap.registerPlugin(ScrollTrigger);

const { createApp, ref, onMounted } = Vue
  createApp({
    methods: {
      afterEnter(el) {
        setupReveal(el); 
      },
      afterLeave(el) {
        el.ctx && el.ctx.revert();
      }
    },
    data() {
      return {
        bg: 'bio'
      }
    }
  }).mount('#app')


function setupReveal(container) {
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
        duration: 3.5,
        xPercent: -100,
        ease: "Elastic.easeOut"
      }); 

      tl.from(image,  {
        duration: 3.5,
        xPercent: 100,
        scale: 1.3,
        ease: "Elastic.easeOut"
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












