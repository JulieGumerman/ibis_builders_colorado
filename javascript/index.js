var slideIndex = 1;
showSlides(slideIndex);


let outsideSlideIndex = 1;
showSlidesOutside(outsideSlideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
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

function showSlidesOutside (b) {
  let j;
  let outsideSlides = document.getElementsByClassName("mySlides-o")
  if (b > outsideSlides.length) {outsideSlideIndexlideIndex = 1}
  if (b < 1) { outsideSlideIndex = outsideSlides.length}
  for (j = 0; j < outsideSlides.length; j++) {
    outsideSlides[j].style.display = "none";
}
  outsideSlides[outsideSlideIndex-1].style.display = "block";
}

function plusSlidesOutside (b) {
  console.log("Julie was here.")
  showSlidesOutside(outsideSlideIndex+=b)
}

/****************** Basement slideshow functionality*******************/
let slideIndexBasement = 1;
showSlidesBasement(slideIndexBasement);

// Next/previous controls
function plusSlidesBasement(a) {
  showSlidesBasement(slideIndexBasement += a);
}

// Thumbnail image controls
function currentSlideBasement(a) {
  showSlidesBasement(slideIndexBasement = a);
}

function showSlidesBasement(z) {
  var slidesBasement = document.getElementsByClassName("mySlides-basement");
  if (z > slidesBasement.length) {slideIndexBasement = 1}
  if (z < 1) {slideIndexBasement = slides.length}
  for (k = 0; k < slidesBasement.length; k++) {
      slidesBasement[k].style.display = "none";
  }

  slidesBasement[slideIndexBasement-1].style.display = "block";

}

/**********************Railing slideshow functionality ***************/
let slideIndexRailings = 1;
showSlidesRailings(slideIndexRailings);

// Next/previous controls
function plusSlidesRailings(d) {
  showSlidesRailings(slideIndexRailings += d);
}

// Thumbnail image controls
function currentSlideRailings(d) {
  showSlidesRailings(slideIndexRailings = d);
}

function showSlidesRailings(y) {
  var slidesRailings = document.getElementsByClassName("mySlides-r");
  if (y > slidesRailings.length) {slideIndexRailings = 1}
  if (y < 1) {slideIndexRailings = slidesRailings.length}
  for (m = 0; m < slidesRailings.length; m++) {
      slidesRailings[m].style.display = "none";
  }

  slidesRailings[slideIndexRailings-1].style.display = "block";

}