








AOS.init();

AOS.init({
  offset: 120, 
  delay: 0, 
  duration: 1000, 
  easing: 'ease-out-quad' 
});








gsap.registerPlugin(ScrollTrigger);

let revealA = document.querySelectorAll("img");

revealA.forEach((a) => {
  let image = a.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: a,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(a, { autoAlpha: 1 });
  tl.from(a, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});
