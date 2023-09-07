'use strict';

var animatedElements = document.querySelectorAll('.animated');

var debounce = function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var timeout = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = undefined;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

var checkAnimation = function checkAnimation(e) { //Check if a scroll animated element is in view

  animatedElements.forEach(function (animatedElement) {
    var slideInTrigger = window.scrollY + window.innerHeight - animatedElement.offsetHeight;

    var isShowing = slideInTrigger > animatedElement.offsetTop;

    if (isShowing) {
      animatedElement.classList.remove('inactive'); //Unhide the element
    } else {
      animatedElement.classList.add('inactive'); //Hide the element
    }
  });
};

var hideAnimated = function hideAnimated(e) {
  animatedElements.forEach( function(animatedElement) {
    animatedElement.classList.add('inactive'); //Hide elements by default
  })
}

window.addEventListener('scroll', debounce(checkAnimation, 20)); 