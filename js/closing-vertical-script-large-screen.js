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
    console.log(value);

    
    if (value > 300) {
        text1.style.opacity = 0;
        text1.style.marginTop = 299 * 2.5 + 700 +'px';
      } else {
        text1.style.opacity = 1;
        text1.style.marginTop = value * 2.5 + 700 + 'px';
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
      text2.style.marginTop = value * 0.08 + '%';
      ufo.style.marginTop = value * 0.28 + '%';
      leftmark.style.marginTop = value * 0.28 + '%';
      rightmark.style.marginTop = value * 0.28 + '%';
      text3.style.marginTop = value * 0.12 + '%';
    } else {
      text2.style.marginTop = 600 * 0.08  +10 + '%';
      ufo.style.marginTop = 600 * 0.28  + 10 +'%';
      leftmark.style.marginTop = 600 * 0.28 + 10 +'%';
      rightmark.style.marginTop = 600 * 0.28 + 10 +'%';
      text3.style.marginTop = 600 * 0.12 + 10 +'%';
    }

    fusion.style.top = value * -1.5 + 'px';
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