new Vue({
  el: '#app',
  data() {
    return {
      bg: 'bio'
    }
  }
})






$(window).scroll(function(){
  scroll();
});

scroll();

function scroll(){
  var top = $('html, body').scrollTop();
  var el = $("#distort").find("feDisplacementMap");
  el.attr('scale', top);
  $("h1").css('opacity', 1 - (top * 0.007))
}






  

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9
};

let revealCallback = (entries, self) => {
  entries.forEach((entry) => {
    let container = entry.target;
    let img = entry.target.querySelector("img");
    const easeInOut = "power3.out";
    const revealAnim = gsap.timeline({ ease: easeInOut });

    if (entry.isIntersecting) {
      revealAnim.set(container, {
        visibility: "visible"
      });
      revealAnim.fromTo(
        container,
        {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
        },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1,
          ease: easeInOut
        }
      );
      revealAnim.from(img, 4, {
        scale: 1.4,
        ease: easeInOut,
        delay: -1
      });
      self.unobserve(entry.target);
    }
  });
};

let revealObserver = new IntersectionObserver(revealCallback, options);

document.querySelectorAll(".item").forEach((reveal) => {
  revealObserver.observe(reveal);
});
