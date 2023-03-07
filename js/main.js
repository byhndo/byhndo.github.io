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
            delay: 3,
            duration: 3,
            opacity: 0,
            y: "-3rem",
            filter: "blur(10px)",
            ease: "Elastic.easeOut"
        }); 
         
        gsap.from("h1 span", {
          duration: 3,           
          delay: 1.2,
          scale: [0, 1],
          opacity: 0,
          filter: "blur(10px)",                 
          stagger: {
            amount: 0.5
          },
          ease: "Elastic.easeOut"
         });

        gsap.from(".sub-title", {
            delay: 4.5,
            duration: 1.5,
            opacity: 0,         
            bottom: "-3rem", 
            filter: "blur(10px)",
            ease: "Bounce.easeOut"
        });
        
        gsap.to(".ball", {
            top: 0, delay: 4.5, opacity: 1, duration: 1.5, ease: "Bounce.easeOut"
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
       
        const textRevealBoxs1 = container.querySelectorAll(".box1");
        textRevealBoxs1.forEach((box1) => {
                
        const one = box.querySelectorAll(".one, .one span");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: box1,
            toggleActions: "restart none none none"
          }, delay: .5
            }); 
                        
            tl.from(one, {
            duration: 3,           
            opacity: 0, 
            scale: [0,1],
            filter: "blur(10px)",           
            ease: "Elastic.easeOut",
            stagger: {
            amount: .8
            }            
            });   
       });
        
        const textRevealBoxs2 = container.querySelectorAll(".box2");
        textRevealBoxs2.forEach((box1) => {
            
            const two = box2.querySelectorAll(".two");            
            const line = box2.querySelectorAll(".line");
           
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: box2,
                    toggleActions: "restart none none none"
                }, delay: .5
            });                      
                      
            tl.from(two, {
            duration: 3,           
            opacity: 0, 
            bottom: "3rem",
            filter: "blur(10px)",           
            ease: "Elastic.easeOut"           
            });
                     
            tl.to(line, {
                duration: 3,
                width: "100%",
                opacity: 1,
                filter: "blur(0px)",
                ease: "Power2.easeOut"
            }, "<");

        });

        let revealContainers = container.querySelectorAll(".item");
        revealContainers.forEach((el) => {

            let image = el.querySelector("img");

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    toggleActions: "restart none none none"
                }, delay: 1
            });

            tl.set(el, {
                autoAlpha: 1
            });
            tl.from(el, {
                duration: 3,
                xPercent: -100,
                ease: "Power2.easeOut"
            });

            tl.from(image, {
                duration: 3,
                xPercent: 100,
                filter: "blur(10px)",
                scale: 1.5,
                ease: "Power2.easeOut"
            }, 0);
        });

    })
}

