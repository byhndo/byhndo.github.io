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
      filled: "M 100 0 H 0 c 0 50 0 50 0 100 h 100 V 50 Z",
      //inBetween: 'M 100 0 H 50 c 20 33 20 67 0 100 h 50 V 0 Z',
      inBetween: "M 100 0 H 50 c 28 43 4 81 0 100 h 50 V 0 Z",
      unfilled: "M 100 0 H 100 c 0 50 0 50 0 100 h 0 V 0 Z"
    }
  };

const tl = gsap
    .timeline({
      paused: true
    });

    tl.set(bioPath, {
      attr: { d: paths.step1.unfilled }
    })

    .to(bioPath,{
        duration: 0.8,
        ease: "power3.in",
        attr: { d: paths.step1.inBetween }
      },0)

    .to(bioPath, {
      duration: 0.2,
      ease: "power1",
      attr: { d: paths.step1.filled }
    });

const tl2 = gsap.timeline({paused: true})
  
    .set(photosPath, {
      attr: { d: paths.step1.unfilled }
    })

    .to(photosPath, {
        duration: 0.8,
        ease: "power3.in",
        attr: { d: paths.step1.inBetween }
      },0)

    .to(photosPath, {
      duration: 0.2,
      ease: "power1",
      attr: { d: paths.step1.filled }
    });

const tl3 = gsap.timeline({ paused: true });

  tl3.set(findmePath, { attr: { d: paths.step1.unfilled } })

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

  const bioBtn = document.getElementById("bio");
  const photosBtn = document.getElementById("photos"); 
  const findmeBtn = document.getElementById("findme");
  
  bioBtn.addEventListener("click", () => {
    tl.restart();
  });

  photosBtn.addEventListener("click", () => {         
    tl2.restart();
  });

  findmeBtn.addEventListener("click", () => {
    tl3.restart();
  });
