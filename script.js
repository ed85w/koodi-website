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

const circles = gsap.utils.toArray('div.circle.floating');
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


// testimonial circle animation (mob )
let testimonialTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonial-logo-container",
    start: "top center",
  }
})
testimonialTl.from(".testimonial-logo", {
  width: "100%",
  duration: 1,
  ease: "back.out(1.7)"
})
.from(".testimonials .container .pink-circle", {
  scale: 0,
  duration: 1,
  ease: "back.out(1.7)"
},0)



// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".blue-circle",
//     start: "top 10%", //when top of element crosses 80% from of page
//     end: "bottom center",   //when bottom of element crosses center of page
//     toggleActions: "play none reverse none",
//     // scrub: 1
//   }
// })

// const blueCircle = document.getElementsByClassName("blue-circle")
// tl.to(".blue-circle", {
//   x: () => innerWidth * 0.9,
//   y: () => innerHeight * 0.9,
//   duration: 1.5,
//   ease: "ease-in-out"
// })
// .to(".blue-circle", {
//   x: blueCircle._gsTransform.x,
//   y: blueCircle._gsTransform.y,
//   duration: randomTime,
//   repeat: -1
// })

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