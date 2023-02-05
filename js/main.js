const { createApp } = Vue
  createApp({
    data() {
      return {
        bg: 'bio'
      }
    }
  }).mount('#app')


Splitting();

AOS.init();
AOS.init({
  easing: 'ease-out-sine',
  offset: 0
});


$(document).ready(function() {
  $( ".dot" ).delay(1500).animate({top:"0"},
     3000, 'easeOutBounce'
)
});
