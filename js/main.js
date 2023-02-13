gsap.registerPlugin(ScrollTrigger, CustomEase);
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

        stagger: 0.025,

        ease: CustomEase.create("custom", "M0,0 C0.425,0.005 0,1 1,1 ")

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

