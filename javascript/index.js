var slideIndex = 1;
showSlides(slideIndex);


let outsideSlideIndex = 1;
showsSlidesOutside(outsideSlideIndex)
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

const plusSlidesOutside = (b) => {
  showsSlidesOutside(slideIndex += b)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlideOutside(b) {
  showsSlidesOutside(outsideSlideIndex = b)
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

const showSlidesOutside = (b) => {
  let j;
  let outsideSlides = document.getElementsByClassName("mySlides-o")
  if (b > outsideSlides.length) {outsideSlideIndexlideIndex = 1}
  if (b < 1) { outsideSlideIndex = outsideSlides.length}
  for (j = 0; j < slides.length; j++) {
    outsideSlides[i].style.display = "none";
}
  outsideSlides[outsideSlideIndex-1].style.display = "block";
}