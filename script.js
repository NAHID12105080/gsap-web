// GSAP

//  transform: translateX(200px);

// gsap.to(".box", {
//   x: 1000,
//   rotate: 360,
//   backgroundColor: "blue",
//   duration: 2,
//   delay: 1,
// });

// gsap.from(".box", {
//   x: 1000,
//   rotate: 360,
//   backgroundColor: "blue",
//   duration: 2,
//   delay: 1,
// });

// GSAP Timeline

var timeline = gsap.timeline();

timeline.to(".box1", {
  x: 1200,
  rotate: 360,
  scale: 0.5,
  duration: 2,
  // delay: 1,
  repeat: -1,
  yoyo: true,
});

timeline.to(".box2", {
  x: 1200,
  rotate: 360,
  scale: 0.5,
  duration: 2,
  borderRadius: "50%",
  // delay: 1,
  repeat: -1,
  yoyo: true,
});

timeline.to(".box3", {
  x: 1200,
  rotate: 360,
  scale: 0.5,
  duration: 2,
  // delay: 1,
  repeat: -1,
  yoyo: true,
});

// gsap.to(".box1", {
//   x: 1200,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
//   delay: 1,
// });

// gsap.to(".box2", {
//   x: 1200,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
//   delay: 2,
// });

// gsap.to(".box3", {
//   x: 1200,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
//   delay: 3,
// });
