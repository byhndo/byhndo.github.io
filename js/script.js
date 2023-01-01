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



const logo = document.querySelectorAll(".sub1 span");


let tl = gsap.timeline();

tl.from(logo, {

  duration: 1.8,

  opacity: 0,

  // ease: "bounce",

  right: "100%",

  stagger: .5,

});






Splitting();

/* ---------------------------------- */

/* Click to re-run */

document.body.innerHTML += '<div style="position: absolute; top: 0; left: 0; right: 0; padding: .5em; font-size: 12px; font-family: monospace; text-align: center; pointer-event: none; ">👆Click to re-run</div>';

var lr = document.querySelector('[data-splitting]');

window.addEventListener('click',()=>{

  var newone = lr.cloneNode(true);

  lr.parentNode.replaceChild(newone, lr);

  lr = newone;

});
