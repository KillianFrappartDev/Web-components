const containers = document.querySelectorAll(".container");
const items = document.querySelectorAll(".item");

let target = "";

containers.forEach((container) => {
  container.addEventListener("dragenter", function (e) {
    target = this.id;
    this.classList.add("pink");
  });

  container.addEventListener("dragleave", function (e) {
    this.classList.remove("pink");
  });
});

items.forEach((item) => {
  item.addEventListener("dragstart", function (e) {});

  item.addEventListener("dragend", function (e) {
    const curItem = document.getElementById(this.id);
    const targetContainer = document.getElementById(target);

    targetContainer.append(curItem);
  });
});
