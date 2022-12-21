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
