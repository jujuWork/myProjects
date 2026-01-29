// Get the elements we need to animate
const caseSection = document.getElementById("caseSection");
const caseBackground = document.getElementById("caseBackground");
const carouselWrapper = document.getElementById("carouselWrapper");

// Listen for scroll events
window.addEventListener("scroll", function () {
  // Get the position of the case section
  const sectionTop = caseSection.offsetTop;
  const sectionHeight = caseSection.offsetHeight;

  // Get current scroll position
  const scrollPosition = window.scrollY;
  console.log(scrollPosition);

  // Calculate how far we've scrolled into the section
  // This gives us a value from 0 to sectionHeight
  const scrollIntoSection = scrollPosition - sectionTop;

  // Only animate when we're in the section area
  if (scrollIntoSection >= 0 && scrollIntoSection <= sectionHeight) {
    // Calculate progress (0 to 1)
    // 0 = just entered section, 1 = reached bottom of section
    const progress = scrollIntoSection / sectionHeight;

    // --- Background Parallax Effect ---
    // Move background up as we scroll down
    // Multiply by 300 to control speed (adjust this number for faster/slower)
    const backgroundMove = progress * 300;
    caseBackground.style.transform = `translateY(-${backgroundMove}px)`;

    // --- Carousel Scroll Effect ---
    // Move carousel to the left as we scroll down
    // We want images to move from center to left
    // Starting position: centered (showing first 3 images)
    // Ending position: 5th image on the right

    // Calculate how much to move
    // Multiply by 800 to control distance (adjust based on your needs)
    const carouselMove = progress * 800;
    carouselWrapper.style.transform = `translateX(-${carouselMove}px)`;
  }

  // If we scroll past the section, keep final position
  if (scrollIntoSection > sectionHeight) {
    caseBackground.style.transform = `translateY(-300px)`;
    carouselWrapper.style.transform = `translateX(-800px)`;
  }

  // If we scroll before the section, reset to initial position
  if (scrollIntoSection < 0) {
    caseBackground.style.transform = `translateY(0)`;
    carouselWrapper.style.transform = `translateX(0)`;
  }
});
