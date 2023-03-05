Splitting();
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
            duration: 2,
            opacity: 0,
            y: "-3rem",
            ease: "Elastic.easeOut"
        }); 
        
        gsap.from(".char", {
            duration: 3,           
            opacity: 0,           
            y: "-3rem",
            ease: Elastic.easeOut.config(1.7),
            stagger: .02,
            rotation:90,
            rotationX:-50,           
            transformOrigin:"50% 50%" 
            }, 0.05);
        
        gsap.to(".ball", {
            top: 0, delay: 3, opacity: 1, duration: 2, ease: "Bounce.easeOut"
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

            const text1 = box1.querySelectorAll(".text1");
            const line = box1.querySelectorAll(".line");
           
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: box1,
                    toggleActions: "restart none none none"
                }, delay: 1.2
            });
                  
            tl.from(text1, {
            duration: 1.5,           
            opacity: 0,
            filter: "blur(10px)",
            y: "-3rem",
            ease: "Power3.easeOut"
            });
           
            tl.to(line, {
                duration: 3,
                width: "100%",
                opacity: 1,
                filter: "blur(0px)",
                ease: "Power3.easeOut"
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
                scale: 1.3,
                ease: "Power2.easeOut"
            }, 0);
        });

    })
}

