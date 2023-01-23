new Vue({
  el: '#app',
  data() {
    return {
      bg: 'bio'
    }
  }
})


AOS.init();
AOS.init({
  offset: 120, 
  delay: 0, 
  duration: 1500, 
  easing: 'ease-out-quad' 
});
