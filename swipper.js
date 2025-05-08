 // Initialize Swiper
 const swiper = new Swiper(".mySwiper", {
    // Enable autoplay
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Enable loop
    loop: true,
    // Enable pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Enable navigation buttons
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Enable keyboard control
    keyboard: {
      enabled: true,
    },
    // Enable CSS mode for better performance on mobile
    cssMode: true,
    // Other effects
    effect: "slide",
    speed: 800,
    grabCursor: true,
  });