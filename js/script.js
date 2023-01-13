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






  

window.addEventListener("load", function () {
  gsap.registerPlugin(CustomEase);
  gsap.registerPlugin(ScrollTrigger);

  // Wrap every letter
  const textRevealElements = document.querySelectorAll(".sub1");

  textRevealElements.forEach((element) => {
    element.innerHTML = element.textContent.replace(
      /([-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]+)/g,
      '<div class="word">$1</div>'
    );

    let words = element.querySelectorAll(".word");
    words.forEach((word) => {
      word.innerHTML = word.textContent.replace(
        /[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g,
        "<div class='perspective'><div class='letter'><div>$&</div></div></div>"
      );
    });

    const letters = element.querySelectorAll(".letter");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        toggleActions: "restart none none reset"
      }
    });
    tl.set(element, { autoAlpha: 1 });
    tl.fromTo(
      letters,
      1.6,
      {
        transformOrigin: "center",
        rotationY: 90,
        x: 30
      },
      {
        rotationY: 0.1,
        x: 0,
        stagger: 0.025,
        ease: CustomEase.create("custom", "M0,0 C0.425,0.005 0,1 1,1 ")
      }
    );
  });
});





