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
/*gsap.to(".header-content",
  {
   yPercent: -100, /* -100% * nb de chapitres - 1*/
/*   scrollTrigger: {
    trigger: "header",
    pin: true,
    pinSpacer: false,
    markers: false,
    scrub: 1,
    end: "+=9000",
  }
});*/

/*main*/
gsap.to(".chapitre",
  {
    xPercent: -500, /* -100% * nb de chapitres - 1*/
    scrollTrigger: {
      trigger: "main",
      pin: true,
      pinSpacer: false,
      markers: false,
      scrub: 1,
      end: "+=9000",
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
/*gsap.set(".lapin", {scale: 0.5, autoAlpha: 1});*/

gsap.to(".lapin", {

ease:'none',
 scale:0.5,
 
  motionPath: {
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.6, 1.1],
    autoRotate: true,
    start: 0.00,
    end: 1.,
    
  },
  scrollTrigger: {
    trigger: "#lapin",
    end: "+=8000",
    scrub: true,
   pinSpacing: false,
 
  },
  
});


/* Animation Chapitre 2*/
gsap.to('.boulebig', {
  xPercent: 900,
  rotation: '360',
  scrollTrigger: {
    trigger: '#deux',
    end: '+=5000',
    scrub: true,
    markers: false,
    pin: true,
    toggleActions: 'restart complete reverse reset',
    pinSpacing: false,
  }
});
gsap.to('.pencil', {
  transformOrigin: "center ",
  rotation: -5,
  scrollTrigger: {
    trigger: '#deux',
    end: '+=5000',
    scrub: true,
    markers: false,
    pin: true,
    toggleActions: 'restart complete reverse reset',
    pinSpacing: false,
  }
});


gsap.to('.cadre', {
  transformOrigin: "center",
  rotation: -10,
  ease: "bonce.inOut",
  scrollTrigger: {
    trigger: '#deux',
    end: '+=6000',
    scrub: true,
    markers: false,
    pin: true,
    toggleActions: 'restart complete reverse reset',
    pinSpacing: false,
  }
});


/* Animation Chapitre 3*/
gsap.to('.boule', {
  x: '800',
  rotation: '360',
  duration: 5,
  
  scrollTrigger: {
    trigger: '#trois',
    markers: false,
    pin: true,
    pinSpacing: false,
    toggleActions: 'restart complete reverse reset',
    end: '+=5000',
    animationDirection: "normal"
  }
  
});
gsap.to('.main', {
  x: '600',
delay: 0.5,
  scrollTrigger: {
    trigger: '#quatre',
    scrub: true,
    markers: false,
    pin: true,
    pinSpacing: false,
    toggleActions: 'restart complete reverse reset',
    end: '+=5000',
  }
});



/*Animation chapitre 4*/
gsap.set([".cercle", ".sourire", ".yeuxG", ".yeuxD"],{drawSVG:"0% 0%"});
function anim() {
  gsap.timeline()
  .fromTo(
    ".cercle",
     {
      drawSVG:"0% 0%",
     
    },
    {
      drawSVG:"0% 100%",
      duration: 1
    }
  )
  .fromTo(
    [ ".sourire", ".yeuxG", ".yeuxD"],
     {
      drawSVG:"0% 0%"
    },
    {
      drawSVG:"0% 100%",
      duration: 2
    }
  )
  .fromTo(
    ".cercle",
     {
    
      strokeOpacity: 0,
    },
    {
      strokeOpacity: 1,
      duration: 1.5
    }
  )
  .fromTo(
    ".cercle",
     {
    
      fillOpacity: 0,
    },
    {
      fillOpacity:1,
      duration: 1
    }
  )
  .fromTo(
    [".sourire", ".yeuxG", ".yeuxD"],
    {
      strokeOpacity: 0,
    },
    {
      strokeOpacity: 1,
      duration: 1
    }
  )
}
let tl;


ScrollTrigger.create({
  trigger: '#quatre',
  onEnter: () => {
     tl = anim(); 
    tl.repeat(-1);
  },
  onEnterBack: () => {
    tl.resume(); 
  }
});
/*const livre = document.querySelector('.livre_devant');
const sectionAnimation = gsap.to(section, { opacity: 1, duration: 1 });

const sectionTimeline = gsap.timeline({
  opacity:0,
  scrollTrigger: {
    trigger: '#lapin',
    scrub: true,
    pin: true,
    end:'+=10000',
    anticipatePin: 1,
  },
});

sectionTimeline.add(sectionAnimation);*/

/*Animation chapitre 5*/

gsap.to(".all-img-cinq", {
  scale:0.5,
  ease: "sine.in",
  motionPath: {
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.0, 0.6],
    start: 0.65,
    end: 1.,
    autoRotate: 0,
  },
  scrollTrigger: {
    trigger: "#lapin",
    end: "+=10000",
    scrub: true,
    markers:false,
    scrub: 1,
  },
});





 /*gsap.to(".all-img-cinq", {
  /* backgroundPosition: "120px center",*/
 /* x:900,
  y:-500,*//*
   ease: "none",
   scrollTrigger: {
     trigger: ".lapin",
     end: '+=9000',
     scrub: true,
     markers:false,
     toggleActions: 'restart complete reverse reset',
   },*/
   /*onUpdate: () => {
    gsap.to(".all-img-cinq", {
      /* backgroundPosition: "120px center",*/
     /* scale:0.5,
       ease: "none",
       scrollTrigger: {
         trigger: ".lapin",
         end: '+=9000',
         scrub: true,
         markers: false,
         toggleActions: 'restart complete reverse reset',
       },
     });
  }
 });*/
/*Animation chapitre 6*/

gsap.to(".lune", {
  duration: 2,
  rotation: 20,
  transformOrigin: "center 5%",
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
  scrollTrigger: {
    trigger: "#lapin",
    end: '+=9000',
   
  }

});

gsap.to("#parallax-bg-3", {
  backgroundSize: "200%",
  scale:1.45,
  ease: "none",
  scrollTrigger: {
    trigger: "#fin",
    end: '+=9000',
    scrub: true,
    markers: false,
  }
});
gsap.to("#parallax-bg-1", {
 /* backgroundPosition: "120px center",*/
 scale:1.5,
  ease: "none",
  scrollTrigger: {
    trigger: "#fin",
    end: '+=9000',
    scrub: true,
    markers: false,
    toggleActions: 'restart complete reverse reset',
  },
});