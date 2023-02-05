const { createApp } = Vue
  createApp({
    data() {
      return {
        bg: 'bio'
      }
    },
mounted() {
AOS.init();
AOS.init({
  easing: 'ease-out-sine',
  once: false,
  offset: 0
});
}
  }).mount('#app')


Splitting();




$(document).ready(function() {
  $( ".dot" ).delay(1500).animate({top:"0"},
     3000, 'easeOutBounce'
)
});
