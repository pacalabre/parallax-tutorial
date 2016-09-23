new WOW().init();

// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

// Scene Handler
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger1", // point of execution
  duration: $(window).height() - 40, // pin element for the window height - 1
  // triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin("#pinned-element1") // the element we want to pin
.addTo(controller);

// Scene2 Handler
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger2", // point of execution
  duration: $(window).height() - 40 // pin the element for a total of 400px
})
.setPin("#pinned-element2") // the element we want to pin
.addTo(controller);



var scene3 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger3",
  duration: $(window).height() - 40
})
// .setClassToggle("#animate1", "zap")

.setPin("#pinned-element3")
// .offset(200)
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
  triggerElement: "#pinned-trigger4",
  duration: 2000
})

.setPin("#pinned-element4")
.addTo(controller);
