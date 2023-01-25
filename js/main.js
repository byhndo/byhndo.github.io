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
  duration: 2000,
  easing: 'ease-out-cubic',
  delay: 200
});
