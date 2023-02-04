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
  $( ".dot" ).animate({top:"0"},
     300, 'easeOutBounce'
)
});


AOS.init();
AOS.init({
  easing: 'ease-out-sine',
  once: false,
  offset: 0
});



