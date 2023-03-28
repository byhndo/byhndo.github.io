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




const hoverItem = document.querySelector('p')

var ct = 0;

const blob1 = createBlob({

    element: document.querySelector('#blob'),

    numPoints: 8,

    centerX: 500,

    centerY: 500,

    minRadius: 400,

    maxRadius: 455,

    minDuration: 1,

    maxDuration: 2

})

TweenMax.to(blob1.tl, 0.3, { 

  timeScale: 1,

  onStart() {

    blob1.tl.play()

  }

});

function createBlob(options) {

    const points = []

    const path = options.element

    const slice = (Math.PI * 2) / options.numPoints

    const startAngle = random(Math.PI * 2)

    const tl = new TimelineMax({

        onUpdate: update,

      paused: true

    })

    for (let i = 0; i < options.numPoints; i++) {

        const angle = startAngle + i * slice

        const duration = random(options.minDuration, options.maxDuration)

        const point = {

            x: options.centerX + Math.cos(angle) * options.minRadius,

            y: options.centerY + Math.sin(angle) * options.minRadius

        }

        const tween = TweenMax.to(point, duration, {

            x: options.centerX + Math.cos(angle) * options.maxRadius,

            y: options.centerY + Math.sin(angle) * options.maxRadius,

            repeat: -1,

            yoyo: true,

            ease: Sine.easeInOut

        })

        tl.add(tween, -random(duration))

        points.push(point)

    }

    options.tl = tl

    options.points = points

  

  tl.progress(1).progress(0).timeScale(0)

    update()

    function update() {

      console.log("UPDATE", ct++)

        path.setAttribute('d', cardinal(points, true, 1))

    }

    return options

}

// Cardinal spline - a uniform Catmull-Rom spline with a tension option

function cardinal(data, closed, tension) {

    if (data.length < 1) return 'M0 0'

    if (tension == null) tension = 1

    let size = data.length - (closed ? 0 : 1)

    let path = 'M' + data[0].x + ' ' + data[0].y + ' C'

    for (let i = 0; i < size; i++) {

        let p0, p1, p2, p3

        if (closed) {

            p0 = data[(i - 1 + size) % size]

            p1 = data[i]

            p2 = data[(i + 1) % size]

            p3 = data[(i + 2) % size]

        } else {

            p0 = i == 0 ? data[0] : data[i - 1]

            p1 = data[i]

            p2 = data[i + 1]

            p3 = i == size - 1 ? p2 : data[i + 2]

        }

        let x1 = p1.x + ((p2.x - p0.x) / 6) * tension

        let y1 = p1.y + ((p2.y - p0.y) / 6) * tension

        let x2 = p2.x - ((p3.x - p1.x) / 6) * tension

        let y2 = p2.y - ((p3.y - p1.y) / 6) * tension

        path += ' ' + x1 + ' ' + y1 + ' ' + x2 + ' ' + y2 + ' ' + p2.x + ' ' + p2.y

    }

    return closed ? path + 'z' : path

}

function random(min, max) {

    if (max == null) {

        max = min

        min = 0

    }

    if (min > max) {

        var tmp = min

        min = max

        max = tmp

    }

    return min + (max - min) * Math.random()

}



