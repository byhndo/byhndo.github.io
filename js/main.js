gsap.registerPlugin(ScrollTrigger);
const { createApp, ref, onMounted } = Vue
  createApp({
    methods: {
      afterEnter(el, element) {
        setupReveal(el);
        setupReveal(element);
      },

      afterLeave(el, element) {
        el.ctx && el.ctx.revert(); 
        element.ctx && element.ctx.revert();
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
 
  const textRevealElements = container.querySelectorAll(".box");
    
  let revealContainers = container.querySelectorAll(".item");
       
textRevealElements.forEach((element) => {
    
  const text = element.querySelectorAll(".text, .text span");
  const text2 = element.querySelectorAll(".text2");
  
  let tl = gsap.timeline({
        scrollTrigger:{
          trigger: element,
          toggleActions: "restart none none none"
        }           
      }); 
          
      tl.from(text,  {      
        duration: 2,
        opacity: 0,
        top: "2rem",     
        stagger: .2,  
        delay:.7, 
        ease: "Elastic.easeOut"
      }); 
      tl.from(text2,  {      
        duration: .5,
        opacity: 0                    
      }); 
                        
    });  
                  
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
        ease: "power2.out"    
      });      
      
      tl.from(image,  {      
        duration: 3,
        xPercent: 100,
        scale: 1.3,
        ease: "power2.out"       
      }, 0);                   
    });           
   })
}







  

let letters = document.getElementsByClassName('title-letter');

setTimeout(() => {
  for (let i = 0; i < letters.length; i++) {
    anime({
      targets: letters[i],
      easing: 'easeInQuad',
      translateX: ['5px', '0'],
      delay: 50 * i
    });

    anime({
      targets: letters[i],
      easing: 'easeInQuad',
      opacity: 1,
      delay: 60 * i,
      complete: function(anim) {
        if (i === letters.length - 1) {
          showSubTitle()
        }
      }
    });
  }
}, 500);

function showSubTitle() {
  anime({
    targets: '#sub-title',
    easing: 'easeInQuad',
    opacity: 1,
    duration: 500,
    delay: 1
  });
}


$(document).ready(function() {
$( ".ball" ).delay(100).animate({top:"0"},
     3000, 'easeOutBounce'
)
  });
