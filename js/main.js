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
mounted: function() {   
	
gsap.set("nav", {	      
	scaleY: 1.3, 	
	transformOrigin: "top center"
});
gsap.to("nav", {
	delay:.5,
	duration:.7,
	opacity: 1,	
	ease: Back.easeOut.config(2.15),
	y: 0
});
gsap.to("nav", {
	duration:2,	
	ease: "Elastic.easeOut",	
	scaleY: 1
}, "<+=0.2");
	
gsap.set("h1 span", {		
	scaleY: 2, 	 
	transformOrigin: "50% 0%"
});
gsap.to("h1 span", {	
	delay: 2.5,	
	duration:.7,
	opacity: 1,
	stagger: .1,	
	ease: Back.easeOut.config(2.15)
});
gsap.to("h1 span", {
	duration: 3,	
	stagger: .1,
	ease: "Elastic.easeOut",	
	scaleY: 1
}, "<+=0.2");

gsap.set(".ball", {
  scaleY: 1,  
  transformOrigin: "center bottom"
});	
gsap.to(".ball", {
  delay:8, 
  duration:.7,
  top: 0,  
  scaleY: 2,
  opacity: 1,
  ease: Back.easeOut.config(2.15)	
});
gsap.to(".ball", {
  scaleY: 1,
  duration: 2.5, 
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
	delay: 5,	
	duration:.7,
	opacity: 1,
	stagger: .1,	
	ease: Back.easeOut.config(2.15),
	y: 0	
});
gsap.to(".sub-title span", {
	duration: 3,	
	stagger: .1,
	ease: "Elastic.easeOut",	
	scaleY: 1,
	x: 0,
	y:0,
	rotate:1
}, "<+=0.2");
		
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
                        
tl.set(one, {		
	scaleY: 2, 	
	y: "random(-30, 30)",
	rotate: "random(-180, 180)", 
	transformOrigin: "50% 0%"
});
tl.to(one, {
	delay:1,
	opacity: 1,
	duration:.7,
	stagger: .1,
	ease: Back.easeOut.config(2.15),
	y: 0
});
tl.to(one, {
	duration: 3,
	stagger: .1,	
	ease: "Elastic.easeOut",
	scaleY: 1,	
	y:0,
	rotate:0
}, "<+=0.2");

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
                                       
tl.set(two, {			
	y: "-2.5rem"
});
tl.to(two, {
	opacity: 1,
	duration: 1,	
	y: 0,	
	ease: "Quad.easeOut"
});   

tl.to(ln, {
	opacity: 1,
	duration: 1,	
	width: "100%",
	ease: SlowMo.ease.config(0.7, 0.7)
},">");		
	                                                                                                                  
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
              delay: .3,
              ease: "Quad.easeOut"
            }, 0);
        });

    });
}


$(window).scroll(function(){
  scroll();
});

scroll();
function scroll(){
  var top = $('html, body').scrollTop();
  var el = $("#distort").find("feDisplacementMap");  
  el.attr('scale', top);
  $(".header").css('opacity', 1 - (top * 0.007))
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
