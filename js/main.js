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
            delay: 5,
            duration: 2,
            opacity: 0,
            y: "-5rem",
            ease: "Elastic.easeOut"
        }); 
        
        gsap.from(".char", {
            duration: 1.5,           
            opacity: 0,           
            y: "-3rem",
            ease: "Elastic.easeOut"       
            });
        
        gsap.to(".ball", {
            top: 0, delay: 4, opacity: 1, duration: 2, ease: "Bounce.easeOut"
        });
                          
    data() {
        return {
            bg: 'bio'
        }
    }
}).mount('#app')

Splitting();

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
                }, delay: .5
            });

            tl.set(el, {
                autoAlpha: 1
            });
            tl.from(el, {
                duration: 3,
                xPercent: -100,
                ease: "Circ.easeOut"
            });

            tl.from(image, {
                duration: 3,
                xPercent: 100,
                filter: "blur(10px)",
                scale: 2,
                ease: "Circ.easeOut"
            }, 0);
        });

    })
}

