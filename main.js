new WOW().init();

$(function() {
    $('.chart').easyPieChart({
        //your configuration goes here
        animate: true
    });
});

// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

// Scene Handler
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#trigger1"
})
.setTween("#element1",0.5, { backgroundColor: 'green', scale: 2.5})
.addIndicators({name:'animate 1'})
.addTo(controller);

// Scene2 Handler
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#trigger2",
  duration: 300
})

.setTween("#element2", {scale: .7})
.addIndicators({name:'animate 2'})
.addTo(controller);



var scene3 = new ScrollMagic.Scene({
  triggerElement: "#trigger3",
  duration: $(window).height() -250
})
.setPin('#element3')
.addIndicators({name:'animate 3'})
.addTo(controller);

var tween = TweenMax.to("#element4", 0.5, {scale: 1.3, repeat: 5, yoyo: true});


var scene4 = new ScrollMagic.Scene({
  triggerElement: "#trigger4", duration: "100%"
  })
  .setTween(tween)
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);


// define movement of panels
    var wipeAnimation = new TimelineMax()
      .fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
      .fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
      .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#pinContainer",
        triggerHook: "onLeave",
        duration: "300%"
      })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);


