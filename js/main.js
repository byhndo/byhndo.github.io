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
  once: false,
  offset: 0
});
AOS.refresh();

$(document).ready(function() {
  $( ".dot" ).delay(1500).animate({top:"0"},
     3000, 'easeOutBounce'
)
});
