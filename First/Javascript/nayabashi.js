// HEADER IMAGE SLIDES (SINGLE)

// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 5000); // Change image every 5 seconds
// }


// CONTENT Image CAROUSEL

const container = document.getElementById('carouselContainer');
let currentIndex = 0;
const totalImages = 3; // Original number of images
const slideInterval = 5000;

function slideCarousel() {
    currentIndex++;
    
    // Calculate transform percentage (each slide moves by 50% since we show 2 images)
    const translateX = currentIndex * -50;
    container.style.transform = `translateX(${translateX}%)`;
    
    // Reset to beginning seamlessly
    if (currentIndex >= totalImages) {
        setTimeout(() => {
            container.style.transition = 'none';
            currentIndex = 0;
            container.style.transform = 'translateX(0)';
            
            setTimeout(() => {
                container.style.transition = 'transform 0.6s ease-in-out';
            }, 50);
        }, 600);
    }
}

// Start auto-sliding
setInterval(slideCarousel, slideInterval);



// MULTIPLE IMAGE SLIDER IN ONE PAGE

function autoSlide(container) {
  let slides = container.querySelectorAll('.mySlides'); // Selecting all the class inside the container
  let slideDuration = 5000; // change the image into 5 seconds interval

  function showSlide() {
    let slideIndex = +container.getAttribute('data-index');

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].classList.remove('active');
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('active');

    container.setAttribute('data-index', slideIndex);

    setTimeout(showSlide, slideDuration);
  }

  showSlide();
}

document.addEventListener('DOMContentLoaded', function() {

  let carouselContainers = document.querySelectorAll('.header-image-slide, .news-slides-container');

  carouselContainers.forEach(container => {
    let slides = container.querySelectorAll('.mySlides');
    for (let i = 1; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[0].style.display = 'block';
    container.setAttribute('data-index', 1);

    autoSlide(container);
  });

});