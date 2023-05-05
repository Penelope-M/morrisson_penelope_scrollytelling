gsap.registerPlugin(ScrollTrigger);
/*gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(GSDevTools);
https://assets.codepen.io/16327/DrawSVGPlugin3.min.js*/

/**/
const body = document.querySelector("body");
let timer;

window.addEventListener("scroll", function () {
  body.classList.add("is-scrolling");
  clearTimeout(timer);
  timer = setTimeout(function () {
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

gsap.to(".arrow", {
  duration: 2,
  x: "50%",
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true,
});

gsap.to(".lune", {
  duration: 2,
  rotation: 20,
  transformOrigin: "center 5%",
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});
gsap.to(".boule", {
  duration: 3,
  rotation: 360,
  x: 1550,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});
gsap.to(".boulebig", {
  duration: 2,
  rotation: 360,
  x: 700,
  ease: "bonce.inOut",
  repeat: -1,
  yoyo: true,
});
gsap.to(".boulemini", {
  duration: 1,
  rotation: 360,
  x: 1600,
  ease: "none.inOut",
  repeat: -1,
  yoyo: true,
});
gsap.to(".pencil", {
  duration: 2,
  transformOrigin: "center ",
  rotation: -2,
  ease: "bonce.inOut",
  repeat: -1,
  yoyo: true,
});

gsap.to(".cadre", {
  duration: 3,
  transformOrigin: "center ",
  rotation: -2,
  ease: "bonce.inOut",
  repeat: -1,
  yoyo: true,
  pin: true,
});

console.log(hauteurTotale);

gsap.to("#parallax-bg-1", {
  scrollTrigger: {
    trigger: "#fin",
    scrub: true,
    markers: true,
  },
  x: 300,
  ease: "none",
});

gsap.to("#parallax-bg-2", {
  scrollTrigger: {
    trigger: "#fin",
    scrub: true,
    markers: true,
  },
  x: 200,
  ease: "none",
});

gsap.to("#parallax-bg-3", {
  scrollTrigger: {
    trigger: "#fin",
    scrub: true,
    markers: true,
    start: "left right",
        end: "right left",
  },
  x: 100,
  ease: "none",
});
