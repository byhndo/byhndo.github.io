const { createApp } = Vue
  createApp({
    data() {
      return {
        bg: 'bio'
      }
    },
mounted() {
    AOS.init({
      offset: 0,   
      easing: 'ease-out-sine', 
      once: false    
    })
  },
  }).mount('#app')


Splitting();


$(document).ready(function() {
  $( ".dot" ).delay(1500).animate({top:"0"},
     3000, 'easeOutBounce'
)
});
