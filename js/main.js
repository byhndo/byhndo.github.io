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





  $( ".dot" ).delay(1000).animate({top:"0"},
     2000, 'easeOutBounce'
)
