let text1 = document.getElementById('text1');
let ruangkendali = document.getElementById('ruangkendali');
let kaca = document.getElementById('kaca');
let text2 = document.getElementById('text2');
let fusion = document.getElementById('fusion');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text1.style.marginTop = value * 2.5 + 'px';
    if (value > 400) {
        text1.style.opacity = 0;
      } else {
        text1.style.opacity = 1;
      }
    text2.style.marginTop = value * 2.5 + 'px';
    if (value < 400) {
        text2.style.opacity = 0;
      } else {
        text2.style.opacity = 1;
      }
    console.log(value);
    fusion.style.top = value * -1.5 + 'px';
    ruangkendali.style.top = value * -1.5 + 'px';
    kaca.style.top = value * -1.5 + 'px';



});

