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
  duration: 2100,
  easing: 'ease-out-quart',
  delay: 200
});
