// HEADER IMAGE SLIDES

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}


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