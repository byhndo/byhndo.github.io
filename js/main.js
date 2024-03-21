document.addEventListener("DOMContentLoaded", function(event) {
window.addEventListener("load", function(e) {

gsap.registerPlugin(ScrollTrigger, CustomEase);

let tl = gsap.timeline({	
 onComplete: contentShow
});
		
tl.to(".textload span", {
 opacity:0,
 y:150,
 rotation:gsap.utils.wrap([-180, 180]),
 delay:"random(0, 1.5)",
 duration:"random(.7, 2)",
 stagger:.07,
 ease:"expo.inOut"
}); 
		
tl.to("#loader", {
 duration:.8,
 scaleX:.5,
 scaleY:.3,
 transformOrigin: "center",
 ease:"sine.out"
}); 

tl.to("#loader", {
 delay:.2,
 duration:.8,
 scaleX:0,
 scaleY:0,
 transformOrigin: "center",
 ease:"sine.out"
}); 
	
function contentShow() {
	
$('.one').each(function(){
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

Splitting();

const easing = "sine.out";
	
gsap.set("nav", {
 y:-30,
 autoAlpha:0, 
 opacity:0
});	

gsap.to("nav", {
 autoAlpha:1,
 opacity:1,
 delay:2,
 duration:2, 
 y:0,
 ease: "expo.inOut"
});
	
gsap.set("h1, h1 .char", { 
 y:100,
 rotationY: 90,
 opacity:0
});
gsap.to("h1, h1 .char", {
 opacity:1,
 duration:1,
 stagger:.06,
 rotationY:0,
 y:0,
 scale:1.0,
 transformOrigin: "center center",
 ease:easing	
});
		
gsap.set(".sub-title, .sub-title .char", {
 y:10,
 rotation:100,
 opacity:0
});
gsap.to(".sub-title, .sub-title .char", {
 opacity:1,
 duration:.5,
 rotation:0,
 stagger:.08, 
 y:0,
 ease:easing
});

 gsap.to('.indicator', {
 delay:2,
 duration:2,
 autoAlpha: 1,
 onComplete: () => {
 gsap.fromTo('.indicator', {
  autoAlpha: 1
 }, {
  autoAlpha: 0,
  duration: 2,
  scrollTrigger: {
  scrub: true,
  trigger: '.indicator',
  start: 'center 60%',
  end: 'center 50%'					
  }
 });
}
});

	
function setupReveal(container) {	
 container.ctx = gsap.context(() => {	  
  	 
 const RevealSc = container.querySelectorAll(".sc");
   RevealSc.forEach((sc) => {                
    const pl = sc.querySelectorAll(".pl");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger:sc,
     toggleActions: "restart none none none"
     }, delay:.7
     }); 
tl.set(pl, {
opacity:0	
})
tl.fromTo(pl, {
   clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
   webkitClipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
   },
   {
   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
   webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
   delay:.7,
   duration:.8,     
   ease:easing,
   opacity:1
   });
	   
   });
	 
 const RevealBoxs1 = container.querySelectorAll(".box1");
   RevealBoxs1.forEach((box1) => { 	   	   
    const one = box1.querySelectorAll(".one, .one span");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: box1,
     toggleActions: "restart none none none"
     }, delay:.7
     }); 

tl.set(box1, {
 autoAlpha:1,
 opacity:0
});
	   
tl.set(one, {
 y:50,
 rotation:100, 
 opacity:0
})
tl.to(one, {
 opacity:1,
 duration:.8,
 rotation:0,
 y:0,
 stagger:.1,
 ease:easing	
});

});
	  
const RevealBoxs2 = container.querySelectorAll(".box2");
 RevealBoxs2.forEach((box2) => {
 const two = box2.querySelectorAll(".two");            
 const ln = box2.querySelectorAll(".line");                  
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: box2,
  toggleActions: "restart none none none"
  }, delay: .7
  });  

tl.set(box2, {
 autoAlpha:1,
 opacity:0
});
	 
tl.set(two, {
 y:-50,
 opacity:0
});   
	 
tl.to(two, {
 opacity:1,
 y:0,
 duration:.8,
 ease:easing
});   

tl.set(ln, {
 opacity:0
});	
tl.to(ln, {
 opacity:1,
 duration:.8,	
 width:"100%",
 ease:easing
});	
	                                                                                                                  
});	

let revealContainers = container.querySelectorAll(".item");
 revealContainers.forEach((el) => {
 let image = el.querySelector("img");
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: el,
  toggleActions: "restart none none none"
  }, delay: .7
  });

  tl.set(el, {
   autoAlpha:1,
   opacity:0
   });
	 
  tl.fromTo(el, {
   clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
   webkitClipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
   },
   {
   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
   webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
   duration:1.2,
   ease:easing,
   opacity:1
   }); 
  tl.from(image, {
    duration:2.2,                   
    scale: 1.4,   
    ease:easing
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
    tl = gsap.timeline({paused:true});
    tl.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 0, y: isFF ? e.offsetY : e.offsetY + 0, width: 0, height: 0 } }, 0);
    tl.to(turb, 3, { attr: { x: '-=300', y: '-=230', width: 600, height: 600 } }, 0);
    tl.fromTo(dm, 2, { attr: { scale: 30 } }, { attr: { scale: 0 } }, 0);
    tl.restart();
  });
}

initBt2();
function initBt2() {
  var bt = document.querySelectorAll('#wtr2')[0];
  var turb = document.querySelectorAll('#filter-ripple-2 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-2 feDisplacementMap')[0];
  
  bt.addEventListener('click', function(e) {
    tl = gsap.timeline({paused:true});
    tl.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 0, y: isFF ? e.offsetY : e.offsetY + 0, width: 0, height: 0 } }, 0);
    tl.to(turb, 3, { attr: { x: '-=300', y: '-=230', width: 600, height: 600 } }, 0);
    tl.fromTo(dm, 2, { attr: { scale: 30 } }, { attr: { scale: 0 } }, 0);
    tl.restart();
  });
}
	
$('html, body').css({
  'overflow': 'auto',
  'height': 'auto'
})

}

	
}, false);
});
