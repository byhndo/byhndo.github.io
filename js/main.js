document.addEventListener("DOMContentLoaded", function(event) {
window.addEventListener("load", function(e) {

gsap.registerPlugin(ScrollTrigger, CustomEase);

let tl = gsap.timeline({	
 onComplete: contentShow
});
				
tl.to("#loader", {
 duration: 1.5,
 "--clip": '23%'
}); 

tl.to(".textload span", {
 autoAlpha:0,
 opacity:0,
 y:150,
 rotation:gsap.utils.wrap([-180, 180]),
 delay:"random(0, 1.5)",
 duration:"random(.7, 2)",
 stagger:.07,
 ease:"expo.inOut"
}); 

tl.to("#loader", {
 duration: .8,
 autoAlpha:0,
 opacity:0
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
const once = "restart complete none reset";
	
gsap.set("nav", {
 y:-30
});	

gsap.to("nav", {
 autoAlpha:1, 
 opacity:1,
 delay:2.5,
 duration:2, 
 y:0,
 ease: "expo.inOut"
});
	
gsap.set("h1, h1 .char", { 
 y:100,
 rotationY:100
});
gsap.to("h1, h1 .char", {
 autoAlpha:1, 
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
 y:20,
 rotation:100
});
gsap.to(".sub-title, .sub-title .char", {
 autoAlpha:1, 
 opacity:1,
 duration:.8,
 rotation:0,
 stagger:.08, 
 y:0,
 ease:easing
});

 gsap.to('.indicator', {
 delay:3.5,
 duration:2,
 autoAlpha: 1,
 onComplete: () => {
 gsap.fromTo('.indicator', {
  autoAlpha: 1,
  y:0
 }, {
  autoAlpha: 0,
  y:-50,
  duration: 2,
  scrollTrigger: {
  scrub: 2,
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
     toggleActions: once
     }, delay:.5
     }); 

tl.fromTo(pl, {
   scale:.3
   },
   {
   scale:1,
   autoAlpha:1, 
   opacity:1,
   duration:.8,     
   ease:easing
   });
	   
   });

const RevealBoxs = container.querySelectorAll(".box");
   RevealBoxs.forEach((box) => { 	   	   
    const gr = box.querySelectorAll(".gr");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: box,
     toggleActions: once
     }, delay:.5
     }); 
	   	   
tl.to(gr, {
 autoAlpha:1, 
 opacity:1,
 duration:.8,	
 width:"100%",
 ease:easing
});	

});	  
	 
const RevealBoxs1 = container.querySelectorAll(".box1");
   RevealBoxs1.forEach((box1) => { 	   	   
    const one = box1.querySelectorAll(".one, .one span");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: box1,
     toggleActions: once
     }, delay:.5
     }); 
	   
tl.set(one, {
 y:50,
 rotation:100
})
tl.to(one, {
 autoAlpha:1, 
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
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: box2,
  toggleActions: once
 }, delay: .5
 });  
	 
tl.set(two, {
 y:50
});   
	 
tl.to(two, {
 autoAlpha:1, 
 opacity:1,
 y:0,
 duration:.8,
 ease:easing
}); 
	 	                                                                                                                  
});	

const RevealBoxs3 = container.querySelectorAll(".box3");
 RevealBoxs3.forEach((box3) => {
 const two = box3.querySelectorAll(".three");                              
 const quote = box3.querySelectorAll(".quote");                              
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: box3,
  toggleActions: once,
  scrub: 2,
  start: "top bottom",
  end: "bottom center"
 }, delay: .5
 });  
	 
tl.set(quote, {
 x:150
})
tl.to(quote, {
 autoAlpha: 1,
 opacity:1,
 x:0
});
	 	                                                                                                                  
});	
	 
let revealContainers = container.querySelectorAll(".item");
 revealContainers.forEach((el) => {
 let image = el.querySelector("img");
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: el,
  toggleActions: once
  }, delay:.5
 });

  tl.set(el, {
   scale:.3	  
   });	 
  tl.to(el, {
   autoAlpha:1,
   opacity:1,
   scale:1,
   duration: 1.2,
   ease: easing
  }, 0);
  tl.to(image, {
   duration:2.2, 
   ease: easing	  
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
