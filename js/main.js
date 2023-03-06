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
            delay: 4,
            duration: 3,
            opacity: 0,
            y: "-3rem",
            filter: "blur(10px)",
            ease: "Elastic.easeOut"
        }); 
         
        gsap.from("h1 span", {
            duration: 1.5,
            delay: 1.2,
            opacity: 0, 
            filter: "blur(10px)",
            bottom: "3rem", 
            stagger: {
            amount: .3
            },          
            ease: "Elastic.easeOut"
        });

        gsap.from(".sub-title", {
            delay: 5.5,
            duration: 1.5,
            opacity: 0,         
            bottom: "-3rem", 
            filter: "blur(10px)",
            ease: "Bounce.easeOut"
        });
        
        gsap.to(".ball", {
            top: 0, delay: 5.5, opacity: 1, duration: 1.5, ease: "Bounce.easeOut"
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

            const text1 = box1.querySelectorAll(".text1, .text1 span");            
            const line = box1.querySelectorAll(".line");
           
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: box1,
                    toggleActions: "restart none none none"
                }, delay: .5
            });
                  
            tl.from(text1, {
            duration: 3,           
            opacity: 0,
            scale: [5,1],
            filter: "blur(10px)",
            bottom: "3rem",
            ease: "Elastic.easeOut",
            stagger: {
            amount: .8
            }            
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

