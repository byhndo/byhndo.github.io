document.addEventListener("DOMContentLoaded", function(event) {
window.addEventListener("load", function(e) {

		


let loadingBar = document.getElementById('loading-bar');
    let loadingText = document.getElementById('loading-text');
    let preloader = document.getElementById('preloader');
    let progress = 0;

    function updateProgress() {
        if (progress <= 100) {
            loadingText.textContent = `Loading ${progress}`;
            loadingBar.style.width = `${progress * 2}px`;
            progress++;
            setTimeout(updateProgress, 30); 
        } else {
            loadingText.textContent = 'Loading complete';
            setTimeout(hidePreloader, 500); 
        }
    }

    function hidePreloader() {
        anime({
            targets: '#loading-bar-bg, #loading-text',
            opacity: 0,            
            duration: 1000,
            easing: 'easeOutExpo',
            complete: function() {
                loadingText.style.display = 'none';
                loadingBar.style.display = 'none';
                anime({
                    targets: '#preloader',
                    opacity: 0,
                    duration: 1000,
                    easing: 'easeOutExpo',
                    complete: function() {
                       preloader.style.display = 'none';                                              
                    }
                });
            }
        });
    }

    updateProgress();



let tl = gsap.timeline({	
 onComplete: contentShow
});


	
function contentShow() {

const easing = "sine.out";
const dur = 1;
const once = "play none none reset";
	
gsap.registerPlugin(ScrollTrigger);
	
$('.one').each(function(){
  $(this).html($(this).text().replace(/\S/g, "<span>$&</span>"));
});

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

Splitting();


$('html, body').css({
  'overflow': 'auto',
  'height': 'auto'
})

$('nav li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
					
gsap.set(".sub-title, .sub-title .char", {
 x: () => gsap.utils.random(-200, 200), 
 y: () => gsap.utils.random(-150, 150)
});
gsap.to(".sub-title, .sub-title .char", {
 autoAlpha:1,
 opacity: 1,
 duration:2,
 x: 0,
 y: 0,
 ease: "quad.out",
 stagger: { each: 0.05, grid: 'auto', from: 'random'}
});

gsap.set("wnav", {
 y:-50
});	
gsap.to("wnav", {
 autoAlpha:1, 
 opacity:1,
 duration:dur, 
 y:0,
 ease: easing,
 transformOrigin: "center center"
}, ">");

gsap.set("h1, h1 .char", { 
 y:100,
 rotationY:100
});
gsap.to("h1, h1 .char", {
 autoAlpha:1, 
 opacity:1,
 duration:dur,
 stagger:.06,
 rotationY:0,
 y:0,
 scale:1.0,
 transformOrigin: "center center",
 ease:easing	
}); 
	

gsap.set('.indicator', {
 y:-100	
});
	
gsap.to('.indicator', {
 y:0,
 duration:dur,
 autoAlpha: 1,
 onComplete: () => {
 gsap.fromTo('.indicator', {
  autoAlpha: 1,
  y:0
 }, {
  autoAlpha: 0,
  y:-100,
  duration: dur,
  scrollTrigger: {
  scrub: 3,
  trigger: '.indicator',
  start: 'center 40%',
  end: 'center 70%'					
  }
 });
}
}, ">");

	
function setupReveal(container) {
	
 container.ctx = gsap.context(() => {	
	 
const RevealBoxsme = container.querySelectorAll(".boxme");
   RevealBoxsme.forEach((boxme, a) => { 	   	   
    const aboutme = boxme.querySelectorAll(".aboutme");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: boxme,
     toggleActions: once
     }, delay:.3
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
     }, delay:.3
     }); 
	   	   
tl.to(gr, {
 autoAlpha:1, 
 opacity:1,
 duration:dur,	
 width:"100%",
 stagger:.07,
 ease:easing
}, g * .2);	

});	  

	 
const RevealBoxsline = container.querySelectorAll(".boxline");
   RevealBoxsline.forEach((boxline, d) => { 	   	   
    const line = boxline.querySelectorAll(".line");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: boxline,
     toggleActions: once
     }, delay:.3
     }); 
	   	   
tl.to(line, {
 autoAlpha:1, 
 opacity:1,
 duration:dur,	
 width:"100%",
 stagger:.07,
 ease:easing
}, d * .2);	

});	  

	 
const RevealBoxs1 = container.querySelectorAll(".box1");
   RevealBoxs1.forEach((box1) => { 	   	   
    const one = box1.querySelectorAll(".one, .one span");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger: box1,
     toggleActions: once
     }, delay:.3
     }); 
	   
tl.set(one, { 
 transformOrigin: '50% 100%',
 scaleY: 0
})
tl.to(one, {
 autoAlpha: 1,
 opacity: 1,
 duration: dur,
 scaleY: 1,
 stagger: 0.08,
 ease: 'quart.in'
});
	   
});

	 
const RevealBoxs2 = container.querySelectorAll(".box2");
 RevealBoxs2.forEach((box2, i) => { 	   	   
 const two = box2.querySelectorAll(".two");
 let tl = gsap.timeline({
  scrollTrigger: {
   trigger: box2,
   toggleActions: once
   }, delay:.3
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
  toggleActions: once
 }, delay: .3
 });  
	 
tl.set(quote, {
 scaleY: 0
})
tl.to(quote, {
 animation: Expo.easeIn,
 autoAlpha:1,
 opacity: 1,
 scaleY: 1,
 stagger: 0.05
});
	 	                                                                                                                  
});

	 
const revealContainers = container.querySelectorAll(".item"); 
 revealContainers.forEach((el) => {
 const image = el.querySelectorAll("img");
 let tl = gsap.timeline({ 
 scrollTrigger: {
  trigger: el,
  toggleActions: once
  }, delay:.3
 });

tl.set(el, {
 autoAlpha: 1,
 scale:0
})	 
tl.to(el, {
 scale:1,
 duration: 1.5,
 delay: gsap.utils.random(.1, 1),
 ease: easing
});  
 
});
	

const RevealSc = container.querySelectorAll(".sc");
   RevealSc.forEach((sc) => {                
    const pl = sc.querySelectorAll(".pl");
    let tl = gsap.timeline({
    scrollTrigger: {
     trigger:sc,
     toggleActions: once
     }, delay:.3
     }); 

tl.to(pl, {
 autoAlpha:1,
 opacity:1,
 duration:dur,     
 ease:easing
});
	   
});

	 
const RevealBoxs4 = container.querySelectorAll(".box4");
 RevealBoxs4.forEach((box4) => {
 const footer = box4.querySelectorAll(".footer");                              
 let tl = gsap.timeline({
 scrollTrigger: {
  trigger: box4,
  toggleActions: once
 }, delay: .3
 });  

tl.to(footer, {
 autoAlpha:1, 
 opacity:1,
 duration:dur,
 ease: easing
}); 
		 	                                                                                                                  
});	
	 
});
}

	
}


	
}, false);
});
