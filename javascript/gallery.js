document.addEventListener("DOMContentLoaded", function () {
  const slideshows = document.querySelectorAll(".slideshow-container");

  slideshows.forEach((container) => {
    let slideIndex = 0;

    const slides = container.querySelectorAll(".mySlides");
    const dots = container.querySelectorAll(".dot");
    const caption = container.querySelector(".caption");
    const prev = container.querySelector(".prev");
    const next = container.querySelector(".next");

    function showSlide(n) {
      slideIndex = (n + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
      });

      dots.forEach((dot, i) => {
        dot.className = dot.className.replace(" active", "");
        if (i === slideIndex) dot.className += " active";
      });

      const img = slides[slideIndex].querySelector("img");
      caption.textContent = img ? img.alt : "";
    }

    // Eventi frecce
    prev.addEventListener("click", () => showSlide(slideIndex - 1));
    next.addEventListener("click", () => showSlide(slideIndex + 1));

    // Eventi dot
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => showSlide(i));
    });

    // Inizializza slideshow
    showSlide(0);
  });
});