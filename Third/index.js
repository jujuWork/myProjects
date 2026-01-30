// VERTICAL SCROLLING FOR BACKGROUND

// const img2 = document.querySelectorAll(".main__img")[1];

// window.addEventListener("scroll", () => {
//   const scrolled = window.pageYOffset;
//   const maxScroll = document.body.scrollHeight - window.innerHeight;
//   const scrollPercent = scrolled / maxScroll;

//   // Move second image from bottom (100%) to top (0%)
//   const translateY = 100 - scrollPercent * 100;
//   img2.style.transform = `translateY(-${100 - translateY}%)`;
// });

const img2 = document.querySelectorAll(".main__img")[1];
const carouselWrapper = document.querySelector(".case__carousel-wrapper");
const carouselSwiper = document.querySelector(".case__carousel-swiper");

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrolled / maxScroll;

  // Move second image from bottom (100%) to top (0%)
  const translateY = 100 - scrollPercent * 100;
  img2.style.transform = `translateY(-${100 - translateY}%)`;

  // Horizontal scroll for carousel
  const carouselWidth =
    carouselSwiper.scrollWidth - carouselWrapper.offsetWidth;
  const horizontalScroll = scrollPercent * carouselWidth;
  carouselSwiper.style.transform = `translateX(-${horizontalScroll}px)`;
});
