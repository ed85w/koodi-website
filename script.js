// navbar
function burgerMenu() {
  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');
  console.log('click');
  if (navMenu.classList.contains("expanded")){
    navMenu.classList.remove("expanded");
    burgerBtn.setAttribute("aria-expanded", false)

  } else {
    navMenu.classList.add("expanded");
    animateListItems();
    burgerBtn.setAttribute("aria-expanded", true)
  }
}



// GSAP


// animation called when opening mob menu 
function animateListItems() {
  gsap.from(".navbar-li", { 
    opacity: 0,
    y: 30,
    // x: -60,
    duration: 1,
    ease: "ease-in",
    stagger: 0.1,
  });
}

// gsap timeline to animate logo 
var logoTl = gsap.timeline({})
logoTl.from("#logo-k-line", {duration:1, height: 0, ease: Power3.easeOut }, 0.7)
logoTl.from("#logo-i-line", {duration:1, scaleY:0, transformOrigin:"center bottom",ease: Power3.easeOut} , 0.7)
logoTl.from("#logo-k-circle", {duration: 1, scale: 0, transformOrigin: "center center", ease:Back.easeOut.config(1.7)}, 1.2)
logoTl.from("#logo-i-circle", {duration: 1, scale: 0, transformOrigin: "center center", ease:Back.easeOut.config(1.7)}, 1.5)


// // "floating circles"
const randomX = random(1, 20);
const randomY = random(1, 20);
const randomDelay = random(0, 2);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(-10, 10);

const circles = gsap.utils.toArray('.floating');
circles.forEach(circle => {
  gsap.set(circle, {
    x: randomX(-1),
    y: randomX(1),
  });

  moveX(circle, 1);
  moveY(circle, -1);
});

function rotate(target, direction) {
  
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}


// SCROLLTRIGGER ANIMATIONS 
gsap.registerPlugin(ScrollTrigger);

// fade in (included section)
ScrollTrigger.matchMedia({
	
  // desktop - stagger all 
  "(min-width: 991px)": function() {
    gsap.from(".included-container", {
      scrollTrigger: ".included-container", 
      duration: 1,
      opacity:0,
      x: -20,
      ease: "ease-in" ,
      stagger: 0.1
    });
  },
  // mobile - each animated individually
  "(max-width: 990px)": function() {
    var fadeIn = gsap.utils.toArray('.included-container');
    fadeIn.forEach((fadeIn) => {
      gsap.from(fadeIn, { 
        duration: 1,
        opacity:0,
        x: -20,
        ease: "ease-in" ,
        scrollTrigger: {
          trigger: fadeIn,
          start: "top 70%", //when top of element crosses 80% from of page
          end: "bottom center",   //when bottom of element crosses center of page
          toggleActions: "play none none none",
        }
      });
    })
  },
});

// bounce in (our work section)
const bounceInCircles = gsap.utils.toArray('.bounce-in');
bounceInCircles.forEach((bounceInCircles) => {
  let randDur = gsap.utils.random(2, 5);
  gsap.from(bounceInCircles, { 
    scale: 0,
    duration: randDur,
    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
      trigger: bounceInCircles,
      start: "top 80%", //when top of element crosses 80% from of page
      end: "bottom center",   //when bottom of element crosses center of page
      toggleActions: "play none none none",
    }
  });
})

// our work section 
const spinCircles = gsap.utils.toArray('.spinning');
spinCircles.forEach((spinCircles) => {
  gsap.to(spinCircles, {
    rotationY: 580,
    scrollTrigger: {
      trigger: spinCircles,
      scrub: 1.5
    }
  })
})



// testimonial section circle animation (mob )
ScrollTrigger.matchMedia({
  // mobile only - each animated individually
  "(max-width: 990px)": function() {
    let testimonialTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonial-logo-container",
        start: "top center",
      }
    })
    testimonialTl.from("#koodi-logo-testimonial", {
      width: "100%",
      duration: 1,
      ease: "back.out(1.7)"
    })
    .from(".testimonials .container .pink-circle", {
      scale: 0,
      duration: 1,
      ease: "back.out(1.7)"
    },0)
  },
  "(min-width: 991px)": function() {
    let logoTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials",
      }
    })
    logoTl2.from("#testimonial-logo-k-line", {duration:1, height: 0, ease: Power3.easeOut }, 0.7)
    logoTl2.from("#testimonial-logo-i-line", {duration:1, scaleY:0, transformOrigin:"center bottom",ease: Power3.easeOut} , 0.7)
    logoTl2.from("#testimonial-logo-k-circle", {duration: 1, scale: 0, transformOrigin: "center center", ease:Back.easeOut.config(1.7)}, 1.2)
    logoTl2.from("#testimonial-logo-i-circle", {duration: 1, scale: 0, transformOrigin: "center center", ease:Back.easeOut.config(1.7)}, 1.5)
  }
})


// SWIPER 
const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: true
});