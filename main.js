//gallery navigation

var pageStart = 0; //the first slide
var pageEnd = 8; //the last slide
var slider = document.getElementById("absinthe");
var nav = document.getElementById("nav");
var pageNum = pageStart;

function nextPage() {
  if (pageNum > pageEnd - 1) {
    pageNum == pageEnd; //if the page number would go above the last page, go to the last page instead
  } else {
    pageNum += 1; //increase the page number by 1
  }
  slider.className = "page" + pageNum; //set the class of the page wrapper to the current page number
}

function prevPage() {
  if (pageNum < pageStart + 1) {
    pageNum == pageStart; //if the page number would go below the first page, go to the first page instead
  } else {
    pageNum -= 1; //reduce the page number by 1
  }
  slider.className = "page" + pageNum; //set the class of the page wrapper to the current page number
}

function pageUp() {
  nextPage();
}

function pageDown() {
  prevPage();
}

function setPage(x) {
  pageNum = x;
  slider.className = "page" + x;
}

//toggle mobile menu

function toggleMenu() {
  nav.classList.toggle("open");
}

//toggle slide content

var pages = document.querySelectorAll(".absinthe article");

var pageToggle = function () {
  this.classList.toggle("flipped");
};

for (var i = 0; i < pages.length; i++) {
  pages[i].addEventListener("click", pageToggle, false);
}

//function for toggling all slides at once

function toggleAll() {
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.toggle("flipped");
  }
}

//arrow key navigation

var Key = {
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

/**
 * old IE: attachEvent
 * Firefox, Chrome, or modern browsers: addEventListener
 */
function _addEventListener(evt, element, fn) {
  if (window.addEventListener) {
    element.addEventListener(evt, fn, false);
  } else {
    element.attachEvent("on" + evt, fn);
  }
}

function handleKeyboardEvent(evt) {
  if (!evt) {
    evt = window.event;
  } // for old IE compatible
  var keycode = evt.keyCode || evt.which; // also for cross-browser compatible

  var info = document.getElementById("info");
  switch (keycode) {
    case Key.UP:
      nextPage();
      break;
    case Key.LEFT:
      prevPage();
      break;
    case Key.DOWN:
      prevPage();
      break;
    case Key.RIGHT:
      nextPage();
      break;
    case Key.SPACE:
      toggleAll();
      break;
    default:
      void 0;
  }
}

_addEventListener("keydown", document, handleKeyboardEvent);

/* adding support for mobile screen swipes using https://github.com/john-doherty/swiped-events */

slider.addEventListener("swiped-left", function (e) {
  nextPage();
});

slider.addEventListener("swiped-right", function (e) {
  prevPage();
});

slider.addEventListener("swiped-up", function (e) {
  nav.classList.add("open");
});

slider.addEventListener("swiped-down", function (e) {
  nav.classList.remove("open");
});









/*!

 * swiped-events.js - v1.1.6

 * Pure JavaScript swipe events

 * https://github.com/john-doherty/swiped-events

 * @inspiration https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element

 * @author John Doherty <www.johndoherty.info>

 * @license MIT

 */

!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=e.createEvent("CustomEvent");return a.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),a},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",function(t){if("true"===t.target.getAttribute("data-swipe-ignore"))return;s=t.target,r=Date.now(),n=t.touches[0].clientX,a=t.touches[0].clientY,u=0,i=0},!1),e.addEventListener("touchmove",function(t){if(!n||!a)return;var e=t.touches[0].clientX,r=t.touches[0].clientY;u=n-e,i=a-r},!1),e.addEventListener("touchend",function(t){if(s!==t.target)return;var e=parseInt(l(s,"data-swipe-threshold","20"),10),o=parseInt(l(s,"data-swipe-timeout","500"),10),c=Date.now()-r,d="",p=t.changedTouches||t.touches||[];Math.abs(u)>Math.abs(i)?Math.abs(u)>e&&c<o&&(d=u>0?"swiped-left":"swiped-right"):Math.abs(i)>e&&c<o&&(d=i>0?"swiped-up":"swiped-down");if(""!==d){var b={dir:d.replace(/swiped-/,""),touchType:(p[0]||{}).touchType||"direct",xStart:parseInt(n,10),xEnd:parseInt((p[0]||{}).clientX||-1,10),yStart:parseInt(a,10),yEnd:parseInt((p[0]||{}).clientY||-1,10)};s.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:b})),s.dispatchEvent(new CustomEvent(d,{bubbles:!0,cancelable:!0,detail:b}))}n=null,a=null,r=null},!1);var n=null,a=null,u=null,i=null,r=null,s=null;function l(t,n,a){for(;t&&t!==e.documentElement;){var u=t.getAttribute(n);if(u)return u;t=t.parentNode}return a}}(window,document);
