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





AOS.init();

AOS.init({
  offset: 120, 
  delay: 0, 
  duration: 400, 
  easing: 'ease-out-quad', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom' 
});
  
