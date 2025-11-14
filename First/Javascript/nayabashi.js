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

    // function to switch between slides
  function showSlide() {
    let slideIndex = +container.getAttribute('data-index'); // current slide number " + "

      // hides all the slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].classList.remove('active');
    }

      // Looping all slides
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

      // shows the current slide
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('active'); // adding the .active class for animation/styling

      // saving the current slides to know where it left off
    container.setAttribute('data-index', slideIndex);

    setTimeout(showSlide, slideDuration); // slide duration for 5 seconds
  }

  showSlide(); // starts the slides
}

  // this part waits the webpage to load before starting the slides
document.addEventListener('DOMContentLoaded', function() {

    // selecting all the class inside the containers
  let carouselContainers = document.querySelectorAll('.header-image-slide, .news-slides-container');

    // hides all slides except the first one
    // sets the starting to slide index to 1
  carouselContainers.forEach(container => {
    let slides = container.querySelectorAll('.mySlides');
    for (let i = 1; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[0].style.display = 'block';
    container.setAttribute('data-index', 1);

      // starts all the auto slide function
    autoSlide(container);
  });

});




// INTERSECTION OBSERVER FOR ANIMATION SCROLL
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.querySelectorAll('.lesson-image-grey').forEach(img => {
//         img.classList.add('animate');
//       });
//       observer.unobserve(entry.target);
//     }
//   });
// }, {
//   threshold: 1
// });

// const lessonContainer = document.querySelector('.lesson-image-container2');
// observer.observe(lessonContainer);


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // Calculate how much of the viewport height the intersection occupies
    const intersectionHeight = entry.intersectionRect ? entry.intersectionRect.height : 0;
    const visibleFractionOfViewport = intersectionHeight / window.innerHeight;

    // Trigger only when at least 10% of the viewport height of the container is visible
    if (entry.isIntersecting && visibleFractionOfViewport >= 0.1) {
      entry.target.querySelectorAll('.lesson-image-grey').forEach(img => {
        img.classList.add('animate');
      });
      observer.unobserve(entry.target);
    }
  });
}, {
  // include a threshold that will cause callbacks near the 10% crossing
  threshold: [0, 0.1]
});

const lessonContainer = document.querySelector('.lesson-image-container2');
if (lessonContainer) observer.observe(lessonContainer);