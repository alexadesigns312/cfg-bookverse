document.addEventListener("DOMContentLoaded", () => {
  const sliderItems = document.querySelectorAll(".slider-item");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  const slideItems = document.querySelectorAll(".slide-item");

  function slideNext() {
    slideItems.forEach((item, index) => {
      const newPosition = (index - currentIndex) * 100;
      item.style.transform = `translateX(${newPosition}%)`;
    });
  }

  function showSlide(index) {
    sliderItems.forEach((item, i) => {
      item.style.transform = `translateX(${(i - index) * 100}%)`;
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1 ) % sliderItems.length;
    showSlide(currentIndex);
  });

  // Start the slider automatically (optional)
  function autoSlide() {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
    setTimeout(autoSlide, 8000); // Change slide every 8 seconds
  }

  autoSlide();

  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownBtn.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
  });

  window.addEventListener("click", (event) => {
    if (!event.target.matches(".dropbtn")) {
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    }
  });
});