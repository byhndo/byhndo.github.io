document.addEventListener("DOMContentLoaded", function() {

var width = 100,
  perfData = window.performance.timing,
  EstimatedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart),
  time = Math.floor((EstimatedTime / 1000) % 60) * 100;

$(".loadbar").animate({
  width: width + "%"
}, time);

var PercentageID = $("#precent"),
  start = 0,
  end = 100,
  duration = time;
animateValue(PercentageID, start, end, duration);

function animateValue(id, start, end, duration) {
  var range = end - start,
    current = start,
    increment = end > start ? 1 : -1,
    stepTime = Math.abs(Math.floor(duration / range)),
    obj = $(id);

  var timer = setInterval(function () {
    current += increment;
    $(obj).text(current);
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

async function animateLoader() {
  await new Promise((resolve) => setTimeout(resolve, time));
	
  let percentBar = document.getElementById("precent");
  let loadingBar = document.getElementById("loader");
	
  const DOM = {};
  DOM.intro = document.querySelector(".preloader-wrap");
  DOM.shape = DOM.intro.querySelector("svg.shape");
  DOM.path = DOM.intro.querySelector("path.goey");
	
  let tl = gsap.timeline({
    paused: true,
    onComplete: contentShow
  })
	    	
  .to(".percentage", {
    autoAlpha: 0,
    duration: 1,
    delay: 1,
    ease: "none",
    onComplete: () => {
      percentBar.style.display = "none";
      tl.to("#loader", {
        autoAlpha: 0,
        duration: 1,
        ease: "quart.out",
        onComplete: () => {
          loadingBar.style.display = "none";
          tl.to(DOM.intro, {
            y: "-200vh",
            delay: 0.1,
            duration: 2,
            ease: "quad.inOut"
          });
          gsap.to(DOM.path, {
            duration: 1.2,
            ease: "linear",
            attr: { d: DOM.path.getAttribute("pathdata:id") }
          });
        }
      });
    }
  });  
	    	  	
  (function show() {
    const arrOpts = [{      
      direction: 'top',
      duration: 1400,
      speed: 1.5,
      oscillationCoefficient: 15,
      direction: 'top'
    }];

    const it = document.querySelectorAll(".wrapbtnloader");
    it.forEach((il, pos) => {
      let bttn = il.querySelector("button.particles-button");
      if (!bttn) return;
      let particlesOpts = arrOpts[pos];
      const particles = new Particles(bttn, particlesOpts);

      gsap.to(bttn, {
        autoAlpha: 0,
        onComplete: () => {
          particles.integrate({
            duration: 900,
            easing: "easeOutSine"
          });
          gsap.to(bttn, {
            duration: 1,
            onComplete: () => {
              bttn.style.opacity = "1";
              bttn.style.visibility = "visible";
            }
          });
        }
      });

      gsap.to(bttn, {
        onComplete: () => {
          bttn.addEventListener("click", function () {
            particles.disintegrate();
            tl.play();
          });
        }
      });
    });
  })();
}

animateLoader();
		
function contentShow() {
	
const easing = "expoScale(0.5,7,none)";
const dur = 1;
const once = "play none none reset";
const delaytl = .5;

$('html, body').css({
  'overflow': 'auto',
  'height': 'auto'
})
		
gsap.registerPlugin(ScrollTrigger);
	
/*$('.one').each(function(){
  $(this).html($(this).text().replace(/\S/g, "<span>$&</span>"));
});*/

$('.quote').each(function(){
  $(this).html($(this).text().replace(/\S/g, "<span>$&</span>"));
});
	
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
data() {
        return {
            bg: 'bio'
        }
    }
}).mount('#app') 
		

gsap.to("h1", { 
 autoAlpha:1
});
	  
gsap.to(".sub-title", {     
 autoAlpha:1,
});
	
gsap.set('.indicator', {
 y:-100	
});
	
gsap.to('.indicator', {
 y:0,
 duration:dur,
 autoAlpha: 1,
 ease: easing,
 onComplete: () => {
 gsap.fromTo('.indicator', {
  autoAlpha: 1,
  y:0,
  ease: easing
 }, {
  autoAlpha: 0,
  y:-100,
  duration: dur,
  ease: easing,
  scrollTrigger: {
  scrub: 3,
  trigger: '.indicator',
  start: 'center 40%',
  end: 'center 70%'					
  }
 });
}
}, "<");

    
(function () {
  const arrOpts = [    
    {
      color: "#068FFF",
      direction: 'right',
      duration: 1000,
      easing: 'easeInOutCubic'
    },
    {
      color: "#068FFF",
      direction: 'left',
      duration: 1000,
      easing: 'easeInOutCubic'
    }
  ];

  const items = document.querySelectorAll(".nav");

  items.forEach((el, pos) => {

    let bttn = el.querySelector("button.particles-button");
    if (!bttn) return; 
    let particlesOpts = arrOpts[pos];
    const particles = new Particles(bttn, particlesOpts);

let tl = gsap.timeline()

tl.to(items, {
 autoAlpha:1
});
	  
bttn.addEventListener("click", () => {      
   tl.to(bttn, {
      autoAlpha: 0,    
      onComplete: () => {	
        particles.integrate({
          duration: 900,
          easing: "easeOutSine"
        });

        gsap.to(bttn, {
          duration: 1,	  
          onComplete: () => {
            bttn.style.opacity = "1";
            bttn.style.visibility = "visible";
          }
        })
      }
    }, ">1");  
}); 

bttn.addEventListener("click", () => {
tl.to(items, {                
 autoAlpha: 1
});
	
    tl.to(bttn, {
      autoAlpha: 0,  
      onUpdate: () => {	
        particles.integrate({
          duration: 900,
          easing: "easeOutSine"
        });
	
        gsap.to(bttn, {
         duration: 1,	        
         autoAlpha: 1,
	 opacity:1
        });
      }
    }, "+=1.5");  
});
	 
    tl.to(bttn, {
      autoAlpha: 0,
      onComplete: () => {
        particles.integrate({
          duration: 900,
          easing: "easeOutSine"
        });

        gsap.to(bttn, {
          duration: 1,
          onComplete: () => {
            bttn.style.opacity = "1";
            bttn.style.visibility = "visible";
          }
        })
      }
    }, pos + 1.3)  
 
    bttn.addEventListener("click", () => {
      particles.disintegrate();
    });       
     
  });
})();
                    
gsap.to('.header', {  
 onComplete: () => {
  gsap.to(".header", {  
   y: "10dvh",
   ease: "cubic.out",
   scrollTrigger: {
    scrub: 4,
    trigger: '.header',
    start: 'top top'
  }
  })
    }
});

const lenis = new Lenis({
 duration: 2,
 easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
 orientation: "vertical",
 direction: "vertical",
 gestureDirection: "vertical",
 smooth: 2,
 smoothWheel: 2,
 touchMultiplier: 2,
 wheelMultiplier: 2, 
 touchInertiaMultiplier: 35,
 syncTouch: true,
 autoResize: true
});

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

const bioPath = document.getElementById("bioPath");
const photosPath = document.getElementById("photosPath");

const paths = {
  step1: {
    unfilled: "M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z",
 // inBetween: "M 0 0 h 33 c -30 54 113 65 0 100 H 0 V 0 Z",    
 // inbetween:  "M 0 0 h 34 c 73 7 73 94 0 100 H 0 V 0 Z",
    inBetween:" M 0 0 h 33 c -30 54 113 65 0 100 H 0 V 0 Z",
 // inBetween: " M 0 0 h 34 c 112 44 -32 49 0 100 H 0 V 0 Z",        
    filled: "M 0 0 h 100 c 0 50 0 50 0 100 H 0 V 0 Z"
  },

  step2: {
    filled: "M 100 0 H 0 c 0 50 0 50 0 100 h 100 V 50 Z",
 // inBetween: 'M 100 0 H 50 c 20 33 20 67 0 100 h 50 V 0 Z',
    inBetween: "M 100 0 H 50 c 28 43 4 81 0 100 h 50 V 0 Z",
    unfilled: "M 100 0 H 100 c 0 50 0 50 0 100 h 0 V 0 Z"
  }
};

const tl = gsap.timeline({
    paused: true
})

.set([bioPath, photosPath], {
    attr: { d: paths.step1.unfilled }
})

.to([bioPath, photosPath], {
      duration: 1.2,
      ease: "power3.in",
      attr: { d: paths.step1.inBetween }},0)

.to([bioPath, photosPath], {
    duration: .6,
    ease: "power1",
    attr: { d: paths.step1.filled }
  })

/*.set([bioPath, photosPath], {
    attr: { d: paths.step2.filled }
  })

.to([bioPath, photosPath], {
    duration: 0.15,
    ease: "sine.in",
    attr: { d: paths.step2.inBetween }
  })

.to([bioPath, photosPath], {
    duration: 1,
    ease: "power4",
    attr: { d: paths.step2.unfilled }
});*/

const bioBtn = document.getElementById("btn-nav-1");
const photosBtn = document.getElementById("btn-nav-2");
const allMorphBtns = [bioBtn, photosBtn];

allMorphBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tl.restart();
  });
});
	
	
function setupReveal(container) {
	
container.ctx = gsap.context(() => {	
	
const RevealBoxsme = container.querySelectorAll(".boxme");
   RevealBoxsme.forEach((boxme, a) => { 	   	   
    const aboutme = boxme.querySelectorAll(".aboutme");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: boxme,
     toggleActions: once
     }, delay:delaytl
     }); 

tl.set(aboutme, {
 y:50	
});
	   
tl.to(aboutme, {
 autoAlpha: 1,
 opacity: 1,
 y:0,
 duration:dur,
 stagger:.07,
 ease: easing
}, a * .2);

});	  
	 
const RevealBoxs = container.querySelectorAll(".box");
   RevealBoxs.forEach((box, g) => { 	   	   
    const gr = box.querySelectorAll(".gr");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: box,
     toggleActions: once
     }, delay:delaytl
     }); 

tl.set(gr, {
 autoAlpha:1
});
	   
tl.to(gr, {
 duration:dur,	
 width:"100%",
 stagger:.07,
 ease:easing
}, g * .2);	

});	  
	 
const RevealBoxsline = container.querySelectorAll(".boxline");
   RevealBoxsline.forEach((boxline, l) => { 	   	   
    const line = boxline.querySelectorAll(".line");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: boxline,
     toggleActions: once
     }, delay:delaytl
     }); 

tl.set(line, {
 autoAlpha:1
});
	   
tl.to(line, {
 duration: dur,	
 width: "100%",
 stagger: .07,
 ease: easing
}, l * .2);	

});	  
	 
const RevealBoxs1 = container.querySelectorAll(".box1");
RevealBoxs1.forEach((box1) => { 	
const one = box1.querySelectorAll(".one"); 
const feBlur = box1.querySelector(`#noise2 feGaussianBlur`);
const feDisplacementMap = box1.querySelector(`#noise2 feDisplacementMap`);
          
let primitiveValues = { stdDeviation: 0, scale: 0 };
 
const tl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: 'expo.out'
},
  
  onUpdate: () => {
      feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
      feDisplacementMap.setAttribute('scale', primitiveValues.scale);
    },  
    
  scrollTrigger: {
      trigger: box1, 
     toggleActions: "play none none reset"
    }, delay:delaytl
  });

tl.to(primitiveValues, { 
    startAt: { stdDeviation: 35, scale: 250 },  
    stdDeviation: 0,  
    scale: 0 
  }, 0)

.to(one, { 
    duration: 1.3,
    startAt: {
      opacity: 0, 
      autoAlpha:0,
      scale: 0.8,
      yPercent: 20
    },
    opacity: 1, 
    autoAlpha:1,
    scale: 1,
    yPercent: 0  
  }, 0);

});

const revealvline = container.querySelectorAll(".vline");
revealvline.forEach((vline) => {
  const vl = vline.querySelectorAll(".vl");             
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: vline,
      toggleActions: once,
      scrub: 2,
      start: "top bottom",
      end : "bottom 50%"
    }, delay : delaytl
  });

tl.set(vl, {
 autoAlpha:1
});
	
tl.to(vl, {
 height:"200px"
})
  
});

const rboxs = container.querySelectorAll(".rbox");
rboxs.forEach((rbox) => { 	
const one2 = rbox.querySelectorAll(".one2"); 
const feBlur = rbox.querySelector(`#noise3 feGaussianBlur`);
const feDisplacementMap = rbox.querySelector(`#noise3 feDisplacementMap`);
          
let primitiveValues = { stdDeviation: 0, scale: 0 };
 
const tl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: 'expo.out'
},
  
  onUpdate: () => {
      feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
      feDisplacementMap.setAttribute('scale', primitiveValues.scale);
    },  
    
  scrollTrigger: {
      trigger: rbox, 
     toggleActions: "play none none reset"
    }, delay:delaytl
  });

tl.to(primitiveValues, { 
    startAt: { stdDeviation: 35, scale: 250 },  
    stdDeviation: 0,  
    scale: 0 
  }, 0)

.to(one2, { 
    duration: 1.3,
    startAt: {
      opacity: 0, 
      autoAlpha:0,
      scale: 0.8,
      yPercent: 20
    },
    opacity: 1, 
    autoAlpha:1,
    scale: 1,
    yPercent: 0  
  }, 0);

});
		 
const RevealBoxs2 = container.querySelectorAll(".box2");
 RevealBoxs2.forEach((box2, i) => { 	   	   
 const two = box2.querySelectorAll(".two");
 let tl = gsap.timeline({
  scrollTrigger: {
   trigger: box2,
   toggleActions: once
   }, delay:delaytl
   });
	 
tl.set(two, {
 y:50	
});
	 
tl.to(two, {
 autoAlpha: 1,
 opacity: 1,
 y:0,
 duration: dur,
 stagger:.07,
 ease: easing
}, i * .2);
	   
});      
      	 
const RevealBoxs3 = container.querySelectorAll(".box3");
 RevealBoxs3.forEach((box3) => {
 const quote = box3.querySelectorAll(".quote, .quote span");                              
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: box3,
  toggleActions: once,
  scrub:2,
  start: "top bottom",
  end : "bottom 50%"
 }, delay: delaytl
 });  
	 
tl.set(quote, {
 scaleY: 0
});
	 
tl.to(quote, {
 ease: Expo.easeIn,
 autoAlpha:1,
 opacity: 1,
 scaleY: 1,
 stagger: 0.05
});
	 	                                                                                                                  
});
	 
const revealContainers = container.querySelectorAll(".item"); 
 revealContainers.forEach((el, i) => {
 let tl = gsap.timeline({ 
 scrollTrigger: {
  trigger: el,
  toggleActions: once
  }, delay:delaytl
 });
	 
tl.to(el, {
 autoAlpha: 1,
 "--x": "-98.75%",
 ease: "steps(39)",
 duration: 2
}, i * .02);

});

const items = container.querySelectorAll(".sc");
  items.forEach((soc) => {
    const item = soc.querySelectorAll(".item-soc");                              
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: soc,
        toggleActions: once
      }, delay: delaytl
    });
	  	  
tl.to(item, {
 autoAlpha:1,
 duration: dur,
 ease: easing
});	  
          
})
        	 
const RevealBoxs4 = container.querySelectorAll(".box4");
 RevealBoxs4.forEach((box4) => {
 const footer = box4.querySelectorAll(".footer");                              
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: box4,
  toggleActions: once
 }, delay: delaytl
 });  
	 
tl.to(footer, {
 autoAlpha:1,
 duration:dur,
 ease: easing
}); 
		 	                                                                                                                  
});	
	 
});
	
}
	 
}
	
})
