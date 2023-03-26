gsap.registerPlugin(ScrollTrigger);
const {
    createApp,
    ref,
    onMounted
} = Vue
createApp({
    methods: {
        afterEnter(el) {
            setupReveal(el);
        },

        afterLeave(el) {
            el.ctx && el.ctx.revert();
        }
    },
    mounted: function() { 
                 
        gsap.from("nav",  {
            delay: 2,
            duration: 1,
            opacity: 0,
            y: -30,
            filter: "blur(10px)",
            ease: "Quad.easeOut"
        }); 
         
        gsap.from("h1 span", {
          duration: 1,            
          bottom: 30,
          opacity: 0,    
          filter: "blur(10px)",                 
          stagger: {
            amount: .9
          },
          ease: "Quad.easeOut"
         });

        gsap.from(".sub-title", {
            delay: 2,
            duration: 1,
            opacity: 0,         
            y: 30, 
            stagger: {
            amount: .9
          },
            filter: "blur(10px)",
            ease: "Quad.easeOut"
        });
        
        gsap.to(".ball", {
            top: 0, delay: 3.5, opacity: 1, duration: 3, ease: "Bounce.easeOut"
        });
},                          
    data() {
        return {
            bg: 'bio'
        }
    }
}).mount('#app')   

function setupReveal(container) {
    container.ctx = gsap.context(() => {
       
        const RevealBoxs1 = container.querySelectorAll(".box1");
        RevealBoxs1.forEach((box1) => {
                
        const one = box1.querySelectorAll(".one, .one span");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: box1,
            toggleActions: "restart none none none"
          }, delay: .5
            }); 
                        
            tl.from(one, {
            duration: 4,           
            opacity: 0, 
            scale: [0,1], 
            y: 30,
            rotation:90,
            rotationX:-50,    
            transformOrigin:"50% 50%",
            filter: "blur(10px)",           
            ease: "Elastic.easeOut",
            stagger: {
            amount: .9
            }            
            });   
       });
                    
        const RevealBoxs2 = container.querySelectorAll(".box2");
        RevealBoxs2.forEach((box2) => {
            const two = box2.querySelectorAll(".two, .two span");            
            const line = box2.querySelectorAll(".line");
                       
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: box2,
                    toggleActions: "restart none none none"
                }, delay: .5
            });                      
                                       
            tl.from(two, {
            duration: 1, 
            y:-30,
            opacity: 0,    
            filter: "blur(10px)",           
            ease: "Quad.easeOut"           
            });
                     
            tl.to(line, {
                duration: 2,
                width: "100%",
                opacity: 1,
                filter: "blur(0px)",
                ease: "Quad.easeInOut"
            }, "<");
                                                                                                                
        });
                                     
        let revealContainers = container.querySelectorAll(".item");
        revealContainers.forEach((el) => {

            let image = el.querySelector("img");

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    ease: "Expo.easeOut",
                    toggleActions: "restart none none none"
                }, delay: .5
            });

            tl.set(el, {
              autoAlpha: 1
            });
            tl.fromTo(el, {
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
            },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 1,     
              ease: "Quad.easeOut"
            });

            tl.from(image, {
              duration: 3,                   
              scale: 1.5,
              filter: "blur(2px)",
              delay: .3,
              ease: "Quad.easeOut"
            }, 0);
        });

    });
}



const turbulence = document.querySelector("feTurbulence");
const durationTime = 2;
document.addEventListener("mouseover", (e) => {

  if (!e.target.matches("#goey")) return;
  const goey = e.target.parentNode.querySelector("#goey");

  gsap.to(goey, {
    duration: 0,
    startAt: { css: { filter: "none" } },
    css: { filter: "url(#distortion)" }
  });

  gsap.to(turbulence, {
    duration: durationTime,
    startAt: { attr: { baseFrequency: 0.03 } },
    attr: { baseFrequency: 0 }
  });
});

document.addEventListener("mouseout", (e) => {
  if (!e.target.matches("#goey")) return;
  const goey = e.target.parentNode.querySelector("#goey");

  gsap.to(goey, {
    duration: 0,
    startAt: { css: { filter: "url(#distortion)" } },
    css: { filter: "none" }
  });
});


Splitting();

