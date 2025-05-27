$('.slider-cont-flex').slick({
    infinite: true,
    autoplay:true,
    arrows:false,
    slidesToShow: 2,
    slidesToScroll: 1,
    slideInterval:1000,
  });

// const sliderContainer = document.querySelector('.slider-cont-flex');
//     const slides = document.querySelectorAll('.slider-flex');
//     let currentIndex = 0;
//     const slideInterval = 3000; // Time in milliseconds

//     function slideNext() {
//         // Move to the next slide
//         currentIndex++;
//         if (currentIndex >= slides.length) {
//             currentIndex = 0; // If it's the last slide, go back to the first slide
//         }
//         sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     // Autoplay functionality
//     setInterval(slideNext, slideInterval);