let text1 = document.getElementById('text1');
let ruangkendali = document.getElementById('ruangkendali');
let kaca = document.getElementById('kaca');
let text2 = document.getElementById('text2');
let fusion = document.getElementById('fusion');
let text3 = document.getElementById('text3');
let ufo = document.getElementById('ufo');
let leftmark = document.getElementById('leftmark');
let rightmark = document.getElementById('rightmark');



window.addEventListener('scroll', () => {
    let value = window.scrollY;

    
    if (value > 300) {
        text1.style.opacity = 0;
        text1.style.marginTop = 299 * 2.5 + 500 +'px';
      } else {
        text1.style.opacity = 1;
        text1.style.marginTop = value * 2.5 + 500 + 'px';
      }
    text2.style.marginTop = value * 2.5 + 'px';
    if (value < 400) {
        text2.style.opacity = 0;
        text3.style.opacity = 0;
        ufo.style.opacity = 0;
        leftmark.style.opacity = 0;
        rightmark.style.opacity = 0;
        leftmark.classList.remove("loop");
        rightmark.classList.remove("loop");
      } else {
        text2.style.opacity = 1;
        text3.style.opacity = 1;
        ufo.style.opacity = 1;
        leftmark.classList.add("loop");
        rightmark.classList.add("loop");
        leftmark.style.opacity = 1;
        rightmark.style.opacity = 1;
        
      }
    if (value < 550) {
      text2.style.marginTop = value * 1.1 + 'px';
      ufo.style.marginTop = value * 1.4 + 'px';
      leftmark.style.marginTop = value * 1.45 + 'px';
      rightmark.style.marginTop = value * 1.45 + 'px';
      text3.style.marginTop = value * 1.65 + 'px';
    } else {
      text2.style.marginTop = 600 * 1.1  +200 + 'px';
      ufo.style.marginTop = 600 * 1.4  + 200 +'px';
      leftmark.style.marginTop = 600 * 1.45 + 200 +'px';
      rightmark.style.marginTop = 600 * 1.45 + 200 +'px';
      text3.style.marginTop = 600 * 1.7 + 200 +'px';
    }

    fusion.style.top = value * -1 + 'px';
    ruangkendali.style.top = value * -1.5 + 'px';
    kaca.style.top = value * -1.5 + 'px';



});

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