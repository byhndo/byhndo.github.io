new Vue({
  el: '#app',
  data() {
    return {
      bg: 'bio'
    }
  }
})


Splitting();


AOS.init();
AOS.init({
  easing: 'ease-out-sine',
  once: false,
  offset: 0
});




$(document).ready(function() {
  $( ".dot" ).delay(3000).animate({top:"0"},
     3000, 'easeOutBounce'
)
});
