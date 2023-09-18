$(function () {
  
		var controller = new ScrollMagic.Controller(); // 1. create a scroll container

		// tween 1: define movement of panels
		var tween1 = new TimelineMax()
			.to("#slideContainer", 1, {x: "-10%"})
  		.to("#slideContainer", 1, {x: "-19%"})
  		.to("#slideContainer", 1, {x: "-28%"})
      // .to(".last-scene", 1, {y: "-100%"})
    
		// scene 1: create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: 0,
				duration: "200%"
			})
			.setPin("#pinContainer")
			.setTween(tween1)
			.addTo(controller);

    // build tween for animations on sectionTwo
    var tween2 = new TimelineMax ()
      .add([
        TweenMax.fromTo("#parallaxOne", 1, {
          opacity:3, left:0
        }, {
          opacity:0, left:0
        })
      ]);

    // build scene for tween2
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer", 
      duration: "100%", 
      offset: "50%" // durations and offsets are based on the timing of your panels built on tween1
    })
    .setTween(tween2)
    .addTo(controller); //add this scene to the same scroll container
  
    // build tween for animations on sectionThree
    var tween3 = new TimelineMax ()
      .add([
        TweenMax.fromTo("#parallaxTwo", 1, {
          scale:2, left: 0, opacity: -3
        }, {
          scale:1, left: "-35%", opacity: 1
        })
      ]);

    // build scene for tween3
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer", 
      duration: "100%", 
      offset: "50%"
    })
    .setTween(tween3)
    .addTo(controller);


  
  
	
  
  //lightbox handler
  $(document).on('click', '[data-lightbox]', lity);
  
});

document.getElementById("warning-btn-1").onclick = function () {
  var x = document.getElementById("warning-img-1");
  if (x.style.visibility == "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
};

document.getElementById("warning-btn-2").onclick = function () {
  var x = document.getElementById("warning-img-2");
  if (x.style.visibility == "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
};

document.getElementById("warning-btn-3").onclick = function () {
  var x = document.getElementById("warning-img-3");
  if (x.style.visibility == "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
};

document.getElementById("warning-btn-4").onclick = function () {
  var x = document.getElementById("warning-img-4");
  if (x.style.visibility == "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
};

