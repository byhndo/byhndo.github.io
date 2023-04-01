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
            const ln = box2.querySelectorAll(".ln");
                       
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
                     
            tl.from(ln, {
                duration: 2,
                width: "0%",  
                opacity: 0,
                filter: "blur(10px)",
                ease: "Quad.easeInOut"
            }, "<");
                                                                                                                
        });
      
      
      
      
      
      
      

// WITHOUT SPLITTING.JS

window.addEventListener("load", function () {

  let splitWords = function (selector) {

    var elements = document.querySelectorAll(selector);

    elements.forEach(function (el) {

      el.dataset.splitText = el.textContent;

      el.innerHTML = el.textContent

        .split(/\s/)

        .map(function (word) {

          return word

            .split("-")

            .map(function (word) {

              return '<span class="word">' + word + "</span>";

            })

            .join('<span class="hyphen">-</span>');

        })

        .join('<span class="whitespace"> </span>');

    });

  };

  let splitLines = function (selector) {

    var elements = document.querySelectorAll(selector);

    splitWords(selector);

    elements.forEach(function (el) {

      var lines = getLines(el);

      var wrappedLines = "";

      lines.forEach(function (wordsArr) {

        wrappedLines += '<span class="line"><span class="words">';

        wordsArr.forEach(function (word) {

          wrappedLines += word.outerHTML;

        });

        wrappedLines += "</span></span>";

      });

      el.innerHTML = wrappedLines;

    });

  };

  let getLines = function (el) {

    var lines = [];

    var line;

    var words = el.querySelectorAll("span");

    var lastTop;

    for (var i = 0; i < words.length; i++) {

      var word = words[i];

      if (word.offsetTop != lastTop) {

        // Don't start with whitespace

        if (!word.classList.contains("whitespace")) {

          lastTop = word.offsetTop;

          line = [];

          lines.push(line);

        }

      }

      line.push(word);

    }

    return lines;

  };

  splitLines(".reveal-text");

  let revealText = document.querySelectorAll(".reveal-text");

  gsap.registerPlugin(ScrollTrigger);

  let revealLines = revealText.forEach((element) => {

    const lines = element.querySelectorAll(".words");

    let tl = gsap.timeline({

      scrollTrigger: {

        trigger: element,

        toggleActions: "restart none none none"

      }, delay: .5

    });

    tl.set(element, { autoAlpha: 1 });

    tl.from(lines, {
duration: 2,
      yPercent: 100,

      ease: Quad.easeOut,

      stagger: {

            amount: .9

            }         

      

    });

  });

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





