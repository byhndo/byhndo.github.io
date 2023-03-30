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
            duration: 3,
            opacity: 0,
            y: "-3rem",
            filter: "blur(10px)",
            ease: "Elastic.easeOut"
        }); 
         
        gsap.from("h1 span", {
          duration: 3,                     
          opacity: 0, 
          scale: [0,1],
          y: "3rem",      
          filter: "blur(10px)",                 
          stagger: {
            amount: .9
          },
          ease: "Elastic.easeOut"
         });

        gsap.from(".sub-title", {
            delay: 2,
            duration: 1,
            opacity: 0,         
            y: "3rem", 
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
            duration: 3,           
            opacity: 0, 
            scale: [0,1],
            y: "3rem",
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
            y: "-3rem",
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










//particle

particlesJS("particles-js", {

  "particles": {

    "number": {

      "value": 50,

      "density": {

        "enable": true,

        "value_area":1000

      }

    },

    "color": {

      "value": ["#ccc", "#555", "#aaa", "#777"]

    },

    

    "shape": {

      "type": "circle",

      "stroke": {

        "width": 0,

        "color": "#fff"

      },

      "polygon": {

        "nb_sides": 5

      },

      "image": {

        "src": "img/github.svg",

        "width": 100,

        "height": 100

      }

    },

    "opacity": {

      "value": 0.6,

      "random": false,

      "anim": {

        "enable": false,

        "speed": 1,

        "opacity_min": 0.1,

        "sync": false

      }

    },

    "size": {

      "value": 2,

      "random": true,

      "anim": {

        "enable": false,

        "speed": 40,

        "size_min": 0.1,

        "sync": false

      }

    },

    "line_linked": {

      "enable": true,

      "distance": 120,

      "color": "#777",

      "opacity": 0.4,

      "width": 1

    },

  },

  "interactivity": {

    "detect_on": "canvas",

    "events": {

      "onhover": {

        "enable": true,

        "mode": "grab"

      },

      "onclick": {

        "enable": false

      },

      "resize": true

    },

    "modes": {

      "grab": {

        "distance": 140,

        "line_linked": {

          "opacity": 1

        }

      },

      "bubble": {

        "distance": 400,

        "size": 40,

        "duration": 2,

        "opacity": 8,

        "speed": 3

      },

      "repulse": {

        "distance": 200,

        "duration": 0.4

      },

      "push": {

        "particles_nb": 4

      },

      "remove": {

        "particles_nb": 2

      }

    }

  },

  "retina_detect": true

});
