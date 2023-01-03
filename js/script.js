new Vue({
  el: '#app',
  data() {
    return {
      bg: 'bio'
    }
  }
})




const .sub1 = document.querySelectorAll(".sub1 span");

let tl = gsap.timeline();

tl.from(sub1, {
  duration: 1.5,
  opacity: 0,
  ease: "bounce",
  right: "100%",
  stagger: 0.2,
});



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



