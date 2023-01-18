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


$(function() {
    var $window = $(window),
        $body = $('.transition-bio'),
        $section = $('.bio');
    $window.on("scroll", function() {
        var distance = $(this).scrollTop();
        $body.css('background-position', '0 -' + distance + 'px');
        $section.css('background-position', '0 -' + distance * 2 + 'px');
    });
});






