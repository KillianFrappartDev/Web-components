const items = document.querySelectorAll(".carousel-item");
let currentIndex = -1;

setInterval(() => {
  if (items[currentIndex]) {
    items[currentIndex].classList.remove("active");
  }

  if (currentIndex === items.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  items[currentIndex].classList.add("active");
  items[currentIndex].style.zIndex += 1;
}, 3000);
