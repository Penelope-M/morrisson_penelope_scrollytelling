gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(GSDevTools);
/*const play = document.querySelector('.fleche');

play.addEventListener('hover', () => {
  gsap.to('.fleche', { x: '400%' }) 
});*/

/*gsap.set(".massiveImage",{backgroundImage: `url("/img/img_arriere_plan/fond_bureau.png")`})
gsap.to(".massiveImage", {
  xPercent: -100, 
  x: () => innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".massiveImage",
    start: "top top",
    end: () => innerWidth * 3,
    scrub: true,
    pin: true,
    invalidateOnRefresh: true,
    anticipatePin: 1
  }
});*/
/*let panels = gsap.utils.toArray(".container > .chapitre");
let subPanels = gsap.utils.toArray(".chapitre", panels[2]);

let tl = gsap.timeline();
tl.to(panels, {
    xPercent: -100 * 2,
    ease: "none"
  });
  
  tl.to(subPanels, {
    yPercent: -100 * (subPanels.length - 1),
    ease: "none"
  });
  
  tl.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: "none"
  });
  
  GSDevTools.create();


const header = document.querySelector('header');

ScrollTrigger.create({
  start: 'top',
  end: 'bottom',
  onUpdate: (self) => {
    if (self.direction === -1) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
  }
});*/

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
});*/