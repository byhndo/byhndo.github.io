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


(function() {
    var bgLayer = document.getElementsByTagName('img');
    window.onscroll = function() {
        var top = pageYOffset;
        document.body.style.backgroundPosition = '0 ' + (top*2) + 'px';
        bgLayer[0].style.backgroundPosition = '0 ' + (top*0.5) + 'px';
        bgLayer[1].style.backgroundPosition = '0 ' + (top*1.5) + 'px';
        
    };
})();
