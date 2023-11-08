gsap.registerPlugin(ScrollTrigger, CustomEase, EasePack);
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

gsap.to("nav",{        
clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",       
	 delay:3,
	 opacity:1,
	 duration: 2,
         ease:"Quad.easeOut"
        }
      );

gsap.set("h1 span", {
	perspective:500,
	scaleY:.5,
	y:"random(-300, 300)",
	rotateX: "random(-360, 360)",
	rotateY: "random(-360, 360)",  
	transformOrigin: "10% 50% -50"
});
gsap.to("h1 span", {	
	delay:4.5,	
	duration:1.5,
	opacity: 1,
	stagger: .1,
	y:0,
	ease:Back.easeOut.config(2.15)
});
gsap.to("h1 span", {
	delay:1.7,
	duration:1.5,	
	stagger: .1,
	rotateX:0,
	rotateY:0,
	scaleY:1,
	ease: "Quad.easeOut"
}, "<+=0.9");

gsap.set(".ball", {
  scaleY: 1,  
  transformOrigin: "center bottom"
});	
gsap.to(".ball", {
 delay:13, 
 duration:.7,
 top:0,  
 scaleY: 2,
 opacity: 1,
 ease: Back.easeOut.config(2.15)	
});
gsap.to(".ball", {
  scaleY: 1,
  duration: 2, 
  ease: "Elastic.easeOut"
}, "<+=0.2");

gsap.set(".sub-title span", {	     
	scaleY: 2, 	
	x: "random(-10, 10)",
	y: "random(-200, 200)",
	rotate: "random(-180, 180)", 
	transformOrigin: "50% 0%"
});
gsap.to(".sub-title span", {
	delay: 10,	
	duration:1,
	opacity: 1,
	stagger: .1,
	y:0,
	ease: Back.easeOut.config(2.15)		
});
gsap.to(".sub-title span", {
	duration: 3,	
	stagger: .1,
	ease: "Elastic.easeOut",	
	scaleY: 1,
	x:0,
	y:0,
	rotate:0
}, "<+=0.2");
                        	
function setupReveal(container) {	
 container.ctx = gsap.context(() => {	  
  

	 
const RevealSc = container.querySelectorAll(".sc");
   RevealSc.forEach((sc) => {                
    const pl = sc.querySelectorAll(".pl");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger:sc,
     toggleActions: "restart none none none"
     }, delay: .7
     }); 
tl.to(pl, {
 clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100% )",
 webkitClipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100% )",
 opacity:1,
 duration:3,
 ease:Quad.easeOut
        }); 
	   
   });
	   
	 

	 
	 
 const RevealBoxs1 = container.querySelectorAll(".box1");
   RevealBoxs1.forEach((box1) => {                
    const one = box1.querySelectorAll(".one, .one span");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: box1,
     toggleActions: "restart none none none"
     }, delay: .7
     }); 
	   
tl.to(one, {
 perspective:500,
 scaleY:0,
 y:"random(-70, 70)",
 rotateX: "random(-360, 360)",
 rotateY: "random(-360, 360)",  
 transformOrigin: "30% 50% -50"
});
tl.to(one, {
 scaleY:2	
});
tl.to(one, {	
 duration:2.3,
 opacity: 1,
 scaleY:1,
 y:0,
 rotateX:0,
 rotateY:0,
 ease: "Quad.easeOut"	
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
  }, delay: .7
  });                      
                                       
tl.set(two, {			
 y: "-2.5rem"
});
tl.to(two, {
 opacity:1,
 duration:1,	
 y:0,	
 ease:"Quad.easeOut"
});   

tl.to(ln, {
 opacity: 1,
 duration: 1,	
 width: "100%",
 ease: "Quad.easeOut"
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
  }, delay: .7
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
   duration: .5,     
   ease: "Quad.easeOut"
   });

   tl.from(image, {
    duration: 2,                   
    scale: 1.5,                     
    delay: .3,
    ease: "Quad.easeOut"
    }, 0);
    });
	
    });
}
	
var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

initBt1();
function initBt1() {
  var bt = document.querySelectorAll('#wtr')[0];
  var turb = document.querySelectorAll('#filter-ripple-1 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-1 feDisplacementMap')[0];
  
  bt.addEventListener('click', function(e) {
    TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
    TweenLite.to(turb, 5, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
    TweenLite.fromTo(dm, 3, { attr: { scale: 40 } }, { attr: { scale: 0 } });
  });
}

initBt2();
function initBt2() {
  var bt = document.querySelectorAll('#wtr2')[0];
  var turb = document.querySelectorAll('#filter-ripple-2 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-2 feDisplacementMap')[0];
  
  bt.addEventListener('click', function(e) {
    TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
    TweenLite.to(turb, 5, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
    TweenLite.fromTo(dm, 3, { attr: { scale: 40 } }, { attr: { scale: 0 } });
  });
}
