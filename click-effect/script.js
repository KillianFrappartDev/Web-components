const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  const white = document.createElement("span");
  container.appendChild(white);
  white.classList.add("circle");

  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  console.log(e);

  white.style.top = y + "px";
  white.style.left = x + "px";

  setTimeout(() => {
    white.remove();
  }, 3000);
});
