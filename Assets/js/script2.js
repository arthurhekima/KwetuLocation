/* carroussol independant */

let currentSlide = 0;

        function moveSlide(direction, carouselId) {
            const carousel = document.getElementById(carouselId);
            const slides = carousel.querySelector('.carousel-images1');
            const totalSlides = slides.children.length;

            currentSlide += direction;

            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            } else if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }

            slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
        }


        /* read more */

document.querySelector('.read-more-btn').addEventListener('click', function() {
    var hiddenContent = document.querySelector('.hidden-content');
    if (hiddenContent.style.display === 'none') {
      hiddenContent.style.display = 'block';
      this.textContent = 'Read Less';
    } else {
      hiddenContent.style.display = 'none';
      this.textContent = 'Read More';
    }
  });


