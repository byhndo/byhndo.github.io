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
    mounted: function(){         
     gsap.to(".ball", {top: 0, delay: 1.7, opacity: 1, duration: 2, ease: Bounce.easeOut});   
      },   
    data() {
      return {
        bg: 'bio'
      }
    }
  }).mount('#app')

function setupReveal(container) {
container.ctx = gsap.context(() => {
        
const textRevealBoxs1 = container.querySelectorAll(".box1");

textRevealBoxs1.forEach((box1) => {

const text1 = box1.querySelectorAll(".text1, .text1 span");
const line = box1.querySelectorAll(".line");
       
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger: box1, 
      toggleActions: "restart none none none"
    }           
    }); 
          
    tl.from(text1,  {      
     duration: 2.5,
     opacity: 0,
     top: "2rem",     
     stagger: .2,  
     delay: 1.3, 
      ease: "Elastic.easeOut"
      }); 

    tl.to(line, {
     duration: 2,
     width: "100%",
     delay: 1,
     ease: "Power3.easeOut"
    }, "<");
                             
    });  
    
    
const textRevealBoxs2 = container.querySelectorAll(".box2");
          
textRevealBoxs2.forEach((box2) => {
    
const text2 = box2.querySelectorAll(".text2, .text2 span");  

  let tl = gsap.timeline({
    scrollTrigger:{
      trigger: box2,
      toggleActions: "restart none none none"
    }           
    }); 
          
    tl.from(text2,  {  
      autoAlpha: 0,         
      filter: "blur(0px)",
      duration: 1.5,
      delay: 1.3,
      ease: "none"           
      });   
 
 });
       
let revealContainers = container.querySelectorAll(".item");                
revealContainers.forEach((el) => {     
      
  let image = el.querySelector("img");   
  
  let tl = gsap.timeline({
    scrollTrigger:{
    trigger: el,
    toggleActions: "restart none none none"        
    },             
    }); 
                 
    tl.set(el, { autoAlpha: 1 });
      tl.from(el,  {         
        duration: 3,
        xPercent: -100,          
        ease: "Circ.easeOut"    
      });      
      
      tl.from(image,  {      
        duration: 3,    
        xPercent: 100,
        scale: 1.3,         
        ease: "Circ.easeOut"       
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
