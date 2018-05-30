let current = 0;
let slides = document.querySelectorAll(".slide");
let interval = setInterval(nextSlide,2500);

function nextSlide(){
  slides[current].className = "slide";
  current = (current+1) % slides.length;
  slides[current].className = "slide active";
}
