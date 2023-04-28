gsap.registerPlugin(ScrollTrigger);
/*gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(GSDevTools);*/


/**/
const body = document.querySelector("body");
let timer;

window.addEventListener("scroll", function() {
  body.classList.add("is-scrolling");
  clearTimeout(timer);
  timer = setTimeout(function(){
    body.classList.remove("is-scrolling");
  }, 100);
});

/*gsap.to("#section-parallax", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
      trigger: "#section-parallax",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      markers: true
  }
});
gsap.to('.no2', {
  motionPath: '#ligne',
  duration: 4,
  repeat: -1,
  yoyo: true,
})*/

gsap.to('.arrow', {
  duration: 2,
  x: '50%',
  ease: 'power2.inOut',
  repeat: -1,
  yoyo: true
});

gsap.to('.lune', {
  duration: 2,
  rotation:20,
  transformOrigin:'center 5%',
  ease: 'power1.inOut',
  repeat: -1,
  yoyo: true
});
gsap.to('.boule', {
  duration: 3,
  rotation:360,
  x: 2000,
  ease: 'power1.inOut',
  repeat: -1,
  yoyo:true,
});