const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    const children = [...slides.children];

    let newIndex = children.indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = children.length - 1;
    if (newIndex >= children.length) newIndex = 0;

    delete activeSlide.dataset.active;
    children[newIndex].dataset.active = true;

    // Move slides
    slides.style.transform = `translateX(-${newIndex * 100}%)`;
  });
});
