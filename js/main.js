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

gsap.set("nav", {	      
	scaleY: 2, 	
	transformOrigin: "50% 0%"
});
gsap.to("nav", {
	delay:1,
	duration: .7,
	opacity: 1,
	ease: Back.easeOut.config(2.15),
	y: 0
});
gsap.to("nav", {
	duration: 3,	
	ease: "Elastic.easeOut",	
	scaleY: 1
}, "<+=0.2");
	
gsap.set("h1 span", {	     		
	scaleY: 2, 
	y: "5rem", 
	transformOrigin: "50% 0%"
});
gsap.to("h1 span", {
	delay: 2.5,	
	duration: .7,
	opacity: 1,
	stagger: .1,	
	ease: Back.easeOut.config(2.15),
	y: 0
});
gsap.to("h1 span", {
	duration: 3,
	stagger: .1,
	ease: "Elastic.easeOut",	
	scaleY: 1
}, "<+=0.2");

gsap.set(".ball", {
  scaleY: 1,  
  transformOrigin: "50% 0"
});	
gsap.to(".ball", {
  delay: 6.5, 
  duration: .7,
  top: 0,  
  scaleY: 2,
  opacity: 1,
  ease: Back.easeOut.config(2.15)
});
gsap.to(".ball", {
  scaleY: 1,
  duration: 3, 
  ease: "Elastic.easeOut"
}, "<+=0.2");


gsap.set(".sub-title", {		
	y: "3rem",	
});
gsap.to(".sub-title", {
	opacity: 1,
	delay:5,
	duration: 2,	
	y: 0,
	ease: "Quad.easeOut"
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
                        
tl.set(one, {		
	scaleY: 2, 
	y: "-3rem", 
	transformOrigin: "50% 0%"
});
tl.to(one, {
	opacity: 1,
	duration: .7,
	stagger: .1,
	ease: Back.easeOut.config(2.15),
	y: 0
});
tl.to(one, {
	duration: 3.5,
	stagger: .1,	
	ease: "Elastic.easeOut",
	scaleY: 1
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
	y: "-3rem"
});
tl.to(two, {
	opacity: 1,
	duration: 1,	
	y: 0,
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
  var bete1 = document.querySelectorAll('#wtr')[0];
  var turb = document.querySelectorAll('#filter-ripple-1 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-1 feDisplacementMap')[0];
  
  bete1.addEventListener('click', function(e) {
    TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
    TweenLite.to(turb, 5, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
    TweenLite.fromTo(dm, 3, { attr: { scale: 30 } }, { attr: { scale: 0 } });
  });
}

initBt2();
function initBt2() {
  var bete2 = document.querySelectorAll('#wtr2')[0];
  var turb = document.querySelectorAll('#filter-ripple-2 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-2 feDisplacementMap')[0];
  
  bete2.addEventListener('click', function(e) {
    TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
    TweenLite.to(turb, 5, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
    TweenLite.fromTo(dm, 3, { attr: { scale: 30 } }, { attr: { scale: 0 } });
  });
}

