const button = document.querySelector("button");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

button.addEventListener("click", () => {
    backdrop.classList.add("visible");
    modal.classList.add("visible");
});

backdrop.addEventListener("click", () => {
    backdrop.classList.remove("visible");
    modal.classList.remove("visible");
});