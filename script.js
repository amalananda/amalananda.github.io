// script.js
const container = document.querySelector(".slider-container");
const slide = document.querySelector(".image-container");

// buttons
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

// current slide no. and width of the slide
let currImg = 0;
let size = container.clientWidth;
const totalImages = document.querySelectorAll(".image-item").length;

// resizing
window.addEventListener("resize", () => {
  size = container.clientWidth;
  slide.style.transform = "translateX(" + -currImg * size + "px)";
});

// initial setup
window.addEventListener("load", () => {
  size = container.clientWidth;
  slide.style.transform = "translateX(0px)";
});

// button listeners
next.addEventListener("click", () => {
  if (currImg < totalImages - 1) {
    currImg++;
    slide.style.transition = "transform 0.8s ease-in-out";
    slide.style.transform = "translateX(" + -currImg * size + "px)";
  } else {
    slide.style.transition = "none";
    currImg = 0;
    slide.style.transform = "translateX(0px)";
    setTimeout(() => {
      slide.style.transition = "transform 0.8s ease-in-out";
      currImg++;
      slide.style.transform = "translateX(" + -currImg * size + "px)";
    }, 50);
  }
});

prev.addEventListener("click", () => {
  if (currImg > 0) {
    currImg--;
    slide.style.transition = "transform 0.8s ease-in-out";
    slide.style.transform = "translateX(" + -currImg * size + "px)";
  } else {
    slide.style.transition = "none";
    currImg = totalImages - 1;
    slide.style.transform = "translateX(" + -currImg * size + "px)";
    setTimeout(() => {
      slide.style.transition = "transform 0.8s ease-in-out";
      currImg--;
      slide.style.transform = "translateX(" + -currImg * size + "px)";
    }, 50);
  }
});
