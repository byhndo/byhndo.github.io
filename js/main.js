const { createApp } = Vue
  createApp({
    data() {
      return {
        bg: 'bio'
      }
    },

mounted() {
    $(document).ready(function() {
     $( ".dot" ).delay(1500).animate({top:"0"},
      3000, 'easeOutBounce'
)
});
 
Splitting();

},
  }).mount('#app')






