const bioPath = document.getElementById("bioPath");
const photosPath = document.getElementById("photosPath");
const findmePath = document.getElementById("findmePath");

const paths = {
    step1: {
      unfilled: "M 0 0 h 0 c 0 50 0 50 0 100 H 0 V 0 Z",
      inBetween: "M 0 0 h 33 c -30 54 113 65 0 100 H 0 V 0 Z",
      /*
        M 0 0 h 34 c 73 7 73 94 0 100 H 0 V 0 Z
        M 0 0 h 33 c -30 54 113 65 0 100 H 0 V 0 Z
        M 0 0 h 34 c 112 44 -32 49 0 100 H 0 V 0 Z
        */
      filled: "M 0 0 h 100 c 0 50 0 50 0 100 H 0 V 0 Z"
    },

    step2: {
      unfilled: "M 100 0 h 0 c 0 50 0 50 0 100 H 100 V 0 Z",  
      inBetween: "M 100 0 h -33 c 30 54 -113 65 0 100 H 100 V 0 Z",
      filled: "M 100 0 h -100 c 0 50 0 50 0 100 H 100 V 0 Z"
    }
  };

const tl = gsap.timeline({
    paused: true
  })

    .set(bioPath, {
      attr: { d: paths.step1.unfilled }
    })

    .to(bioPath,{
        duration: 0.8,
        ease: "power3.in",
        attr: { d: paths.step1.inBetween }
      }, 0)

    .to(bioPath, {
      duration: 0.2,
      ease: "power1",
      attr: { d: paths.step1.filled }
    });
  
  const tl2 = gsap.timeline({paused: true}) 

    .set(photosPath, {
      attr: { d: paths.step2.unfilled }
    })

    .to(photosPath, {
        duration: 0.8,
        ease: "power3.in",
        attr: { d: paths.step2.inBetween }
      }, 0)

    .to(photosPath, {
      duration: 0.2,
      ease: "power1",
      attr: { d: paths.step2.filled }
    });

const tl3 = gsap.timeline({ paused: true })

  .set(findmePath, { attr: { d: paths.step1.unfilled } })
  .to(findmePath, {
    duration: 0.8,
    ease: "power3.in",
    attr: { d: paths.step1.inBetween }
  }, 0)

  .to(findmePath, {
    duration: 0.2,
    ease: "power1",
    attr: { d: paths.step1.filled }
  });
  
  const bioBtn = document.getElementById("btn-nav-1");
  const photosBtn = document.getElementById("btn-nav-2"); 
  const findmeBtn = document.getElementById("btn-nav-3"); 

  bioBtn.addEventListener("click", () => {
    tl.restart();
  });

  photosBtn.addEventListener("click", () => {         
    tl2.restart();
  });

  findmeBtn.addEventListener("click", () => {
    tl3.restart();
  });
