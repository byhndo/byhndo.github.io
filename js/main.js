new Vue({
  el: '#app',
  data() {
    return {
      bg: 'bio'
    }
  }
})


Splitting();


$(document).ready(function() {
  $( "h3text-overlap .dot" ).animate({top:"0"},
     2000, 'easeOutBounce'
)
});


AOS.init();
AOS.init({
  easing: 'ease-out-sine',
  once: false,
  offset: 0
});



