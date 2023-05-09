gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
/*gsap.registerPlugin(GSDevTools);
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
/*main*/
gsap.to(".chapitre",
  {
    xPercent: -500, /* -100% * nb de chapitres - 1*/
    scrollTrigger: {
      trigger: "main",
      pin: true,
      pinSpacer: false,
      markers: true,
      scrub: 1,
      end: "+=9000",
    }
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

/* Animation header*/
gsap.to(".arrow", {
  duration: 2,
  x: "50%",
  ease: "power2.inOut",
  repeat: -1,
  yoyo: true,
});

/*Animation Chapitre 1*/
/*let animation =gsap.to(".bulle1", {
  motionPath: {
 align: "#vallon",
 path: "#vallon",
 start: 0,
 end: 1,
 alignOrigin: [0.5, 0.9],
 autoRotate: true,
 },

 duration: 10,
})*/

gsap.set(["#etoiler", "#pensette", "#bulle1", "#bulle2", "#bulle3"], { drawSVG: "0% 0%" });
function anim() {
  gsap.timeline(),
    gsap.to(
      "#pensette",
      {
        drawSVG: "0% 0%"
      },
      {
        drawSVG: "0% 100%",
        duration: 1
      }
    )
  gsap.to(
    "#etoiler",
    {
      drawSVG: "0% 0%"
    },
    {
      drawSVG: "0% 100%",
      duration: 1
    }
  )
  gsap.to(
    ["#etoiler", "#pensette", "#bulle1", "#bulle2", "#bulle3"],
    {
      fillOpacity: 0
    },
    {
      fillOpacity: 1,
      duration: 1
    }
  );
}
const dep = document.querySelector("#debut");
dep.addEventListener("click", anim);

/*let anim= gsap.to("#pense", {
  morphSVG: "#etoile"
});
window.addEventListener("click", function () {
  console.log("reset");
  anim.progress(0).pause();
   const myTimeout = setTimeout(function () {
     anim.play();
   }, 1000);
 });*/


/*gsap.to(".boule", { 
  scrollTrigger: {
  trigger: '#trois',
  scrub: true,
  markers: true,
   x: 1550,
  duration: 3,
  rotation: 360,
  ease: "power1.inOut",
  /*yoyo: true,*//*
start: 'left 50%',
end: 'right 50%'
},
});*/
/* Animation Chapitre 2*/
/*gsap.to(".boulebig", {
  scrollTrigger: {
  trigger: '#deux',
  scrub: true,
  markers: true,
  rotation: 360,
  toggleActions: "restart complete reverse reset",
  ease: "bonce.inOut",
  /*repeat: -1,
  yoyo: true,*/
/* },
 x: '100%',
 duration: 2,
});*/

/*const myAnimation = gsap.timeline()
    .to('.boulebig', { 
       x: '500', 
       
      duration:6,  
      scrollTrigger: {
        trigger: '#deux',
        start: 'center top',
        end: 'center bottom',
        scrub: true,
        markers: true,
        pin:true,
        pinSpacing: false,
        rotation: 360,
        onEnter: () => {
            myAnimation.play();
        },
        onLeave: () => {
          myAnimation.reverse();
      },
      
    } 
  });*/
const myAnimation = gsap.timeline()
  .to('.boulebig', {
    x: '480',
    rotation: '360',
    scrollTrigger: {
      trigger: '#deux',
      start: 'center top',
      end: 'center bottom',
      scrub: true,
      markers: true,
      pin: true,
      onEnter: (e) => {
        myAnimation.play();
      },
      onUpdate: (e) => {
        myAnimation.reverse();
      },
    }
  });






/* const myTrigger = ScrollTrigger.create({
   trigger: '#deux',
   start: 'top center',
   end: 'bottom center',
   scrub: true,
   markers: true,
   pin:true,
   pinSpacing: false,
   onEnter: () => {
       myAnimation.play();
   },
   onLeave: () => {
     myAnimation.pause();
 },
 onLeaveBack: () => {
     myAnimation.reverse();
 }
});*/

/*gsap
  .timeline({
    scrollTrigger: {
      markers: true,
      start: "top 75%",
      end: "bottom 25%",
      toggleActions: "restart complete reverse reset",
      trigger: ".boulebig"
    }
  })
  .to("#deux.boulebig", { x: "0%", duration: 2 },{ x: "100%", duration: 2 })
  .fromTo("#deux.boulebig",  { opacity: "100%"}, { opacity: "50%", duration: 2});
*/

/*gsap.to(".boulemini", {
  duration: 1,
  rotation: 360,
  x: 1600,
  ease: "none.inOut",
  repeat: -1,
  yoyo: true,
});*/
gsap.to(".pencil", {
  duration: 2,
  transformOrigin: "center ",
  rotation: -2,
  ease: "bonce.inOut",
  repeat: -1,
  yoyo: true,
});

/* Animation Chapitre 3*/
gsap.to(".boule", {
  xPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: "#trois",
    scrub: true,
    start: "top top",
    end: "bottom bottom"
  }
});

/*Animation chapitre 6*/

gsap.to(".cadre", {
  duration: 3,
  transformOrigin: "center ",
  rotation: -2,
  ease: "bonce.inOut",
  repeat: -1,
  yoyo: true,
  pin: true,
});

gsap.to(".lune", {
  duration: 2,
  rotation: 20,
  transformOrigin: "center 5%",
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

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
