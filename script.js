const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");
const gallery = document.querySelector(".galleryContainer");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");


menuBtn.addEventListener("click", () => {
    navMenu.classList.add("show");
    overlay.classList.add("show");

    menuBtn.style.display = "none";
    closeBtn.style.display = "inline";
});


closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show");
    overlay.classList.remove("show");

    menuBtn.style.display = "inline";
    closeBtn.style.display = "none";
});


overlay.addEventListener("click", () => {
    navMenu.classList.remove("show");
    overlay.classList.remove("show");

    menuBtn.style.display = "inline";
    closeBtn.style.display = "none";
});

rightBtn.addEventListener("click", () => {
    gallery.scrollBy({
        left: 400,
        behavior: "smooth"
    });
});

leftBtn.addEventListener("click", () => {
    gallery.scrollBy({
        left: -400,
        behavior: "smooth"
    });
});
