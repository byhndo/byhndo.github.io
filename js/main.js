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
        duration: 3,
        xPercent: -100,
        ease: "Power3.easeOut"
      }); 

      tl.from(image,  {
        duration: 3,
        xPercent: 100,
        scale: 1.3,
        ease: "Power3.easeOut"
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




var duration = 3;
var tl = gsap.timeline({delay:0.2});

CustomBounce.create("myBounce", {strength:0.7, squash:5});

tl.to(".ball", { y:100, duration: duration, ease:"myBounce"})

  .to(".ball", {scaleY:0.5, duration: duration, scaleX:1, ease:"myBounce-squash", transformOrigin:"bottom"}, 0)














