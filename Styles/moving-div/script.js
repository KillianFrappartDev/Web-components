const blackA = document.getElementById("A");
const blackB = document.getElementById("B");

blackA.style.top = "300px";
blackA.style.left = "300px";

window.addEventListener("scroll", function(e) {
    const scroll = window.scrollY;
    console.log(scroll);
    blackA.style.left = (300 + scroll) + "px";
    blackA.style.top = (300 + scroll) + "px";
    
});
