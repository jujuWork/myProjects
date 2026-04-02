// ヒーロー画像の切り替え
document.addEventListener("DOMContentLoaded", function () {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  if (!mediaQuery.matches) {
    return;
  }

  const images = document.querySelectorAll(".hero__image");
  let currentIndex = 0;

  setInterval(function () {
    images[currentIndex].classList.remove("hero__image--active");

    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    images[currentIndex].classList.add("hero__image--active");
  }, 4000);
});

// カルーセルバナー
window.addEventListener("load", () => {
  const el = document.querySelector('[data-js="banner-swiper"]');
  if (!el) return;

  new Swiper(el, {
    loop: true,

    slidesPerView: 1,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },

    spaceBetween: 16,

    navigation: {
      nextEl: ".carousel-banner__button-next",
      prevEl: ".carousel-banner__button-prev",
    },

    pagination: {
      el: ".carousel-banner__pagination",
      clickable: true,
    },

    autoplay: {
      delay: 3000,              // 次に動き出すまでの待機時間
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    speed: 1000,                // ← アニメーション時間（ms）
  });
});

// お知らせのフェードアニメーション
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const elements = document.querySelectorAll('[data-js="fade"]');
  if (!elements.length) return;

  elements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });
});

// バナーのフェードアニメーション
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = document.querySelectorAll('[data-js="slide-image"]');
  if (!images.length) return;

  images.forEach((image) => {
    const isLeft = image.classList.contains("banner__image--primary");
    const xValue = isLeft ? -200 : 200;

    gsap.from(image, {
      x: xValue,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: image,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });
});

// テキストマスクのフェードアニメーション
window.addEventListener("load", () => {
  const el = document.querySelector('[data-js="text-swiper"]');
  if (!el) return;

  new Swiper(el, {
    loop: true,
    slidesPerView: 1,

    effect: "fade",        // ← これを追加
    fadeEffect: {
      crossFade: true      // ← なめらかに重なる
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    speed: 1000,           // フェードの時間（ms）
  });
});

// pointスライダー
const point = document.querySelector('[data-js="point-swiper"]');

if (point) {
  new Swiper(point, {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    pagination: {
      el: ".point__pagination",
      clickable: true
    }
  });
}