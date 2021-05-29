function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      
      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
  });
  
}

navSlide();


// Smooth Slide 
function smoothScroll(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var starPosition = window.pageYOffset;
  var distance = targetPosition - starPosition;
  var startTime = null;

  function animation(currentTime){
      if(startTime == null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, starPosition, distance, duration);
      window.scrollTo(0,run);
      if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d){
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
  };

  requestAnimationFrame(animation);
}
  


var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');
var section21 = document.querySelector('.section21');
var section31 = document.querySelector('.section31');
var section3 = document.querySelector('.section3');
var section4 = document.querySelector('.section4');
var nav1 = document.querySelector('.nav1');
var nav2 = document.querySelector('.nav2');
var nav3 = document.querySelector('.nav3');
var nav4 = document.querySelector('.nav4');


section1.addEventListener('click', function(){
  smoothScroll('.sec2', 1000);
});
section2.addEventListener('click', function(){
  smoothScroll('.section1', 1000);
});
section21.addEventListener('click', function(){
  smoothScroll('.sec3', 1000);
});
section31.addEventListener('click', function(){
  smoothScroll('.sec4', 1000);
});
section3.addEventListener('click', function(){
  smoothScroll('.section1', 1000);
});
section4.addEventListener('click', function(){
  smoothScroll('.section1', 1000);
});
nav1.addEventListener('click', function(){
  smoothScroll('.section1', 1000);
});
nav2.addEventListener('click', function(){
  smoothScroll('.sec2', 1000);
});
nav3.addEventListener('click', function(){
  smoothScroll('.sec31', 1000);
});
nav4.addEventListener('click', function(){
  smoothScroll('.sec41', 1000);
});

