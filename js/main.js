new Vue({
  el: '#app',
  data() {
    return {
      bg: 'bio'
    }
  },


gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".item");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
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






})


AOS.init();
AOS.init({
  offset: 120,
  delay: 0, 
  duration: 2100 
});
