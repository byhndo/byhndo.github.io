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
 
   const textRevealElements = document.querySelectorAll(".reveal-text");
    
  let revealContainers = container.querySelectorAll(".item");
       
    
      
      
      
      



  

  textRevealElements.forEach((el) => {

    el.innerHTML = el.textContent.replace(

      /([-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]+)/g,

      '<div class="word">$1</div>'

    );

    let words = el.querySelectorAll(".word");

    words.forEach((word) => {

      word.innerHTML = word.textContent.replace(

        /[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g,

        "<div class='perspective'><div class='letter'><div>$&</div></div></div>"

      );

    });

    const letters = el.querySelectorAll(".letter");

    let tl = gsap.timeline({

      scrollTrigger: {

        trigger: el,

        toggleActions: "restart none none none"

      }

    });
      
      
      
      tl.set(el, { autoAlpha: 1 });

    tl.fromTo(

      letters,

      1.6,

      {

        transformOrigin: "center",

        rotationY: 90,

        x: 30

      },

      {

        rotationY: 0.1,

        x: 0,

        stagger: 0.025

        
      }

    );

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








    















$(document).ready(function() {
$( ".ball" ).delay(100).animate({top:"0"},
     3000, 'easeOutBounce'

)
  });

