// script.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".slider-container")
  const slide = document.querySelector(".image-container")

  // buttons
  const prev = document.querySelector("#prev")
  const next = document.querySelector("#next")

  // current slide no. and width of the slide
  let currImg = 0
  let size = container.clientWidth
  const totalImages = document.querySelectorAll(".image-item").length

  // Function to update slider size
  function updateSlider() {
    size = container.clientWidth
    slide.style.width = `${totalImages * size}px` // Set the width of the slide container
    document.querySelectorAll(".image-item").forEach((img) => {
      img.style.width = `${size}px` // Ensure each image item is the same width as the container
    })
    slide.style.transform = "translateX(" + -currImg * size + "px)"
  }

  // resizing
  window.addEventListener("resize", updateSlider)

  // initial setup
  window.addEventListener("load", updateSlider)

  // button listeners
  next.addEventListener("click", () => {
    if (currImg < totalImages - 1) {
      currImg++
      slide.style.transition = "transform 0.8s ease-in-out"
      slide.style.transform = "translateX(" + -currImg * size + "px)"
    } else {
      slide.style.transition = "transform 0.8s ease-in-out"
      currImg = 0
      slide.style.transform = "translateX(0px)"
    }
  })

  prev.addEventListener("click", () => {
    if (currImg > 0) {
      currImg--
      slide.style.transition = "transform 0.8s ease-in-out"
      slide.style.transform = "translateX(" + -currImg * size + "px)"
    } else {
      slide.style.transition = "transform 0.8s ease-in-out"
      currImg = totalImages - 1
      slide.style.transform = "translateX(" + -currImg * size + "px)"
    }
  })
})

prev.addEventListener("click", () => {
  if (currImg > 0) {
    currImg--
    slide.style.transition = "transform 0.8s ease-in-out"
    slide.style.transform = "translateX(" + -currImg * size + "px)"
  } else {
    slide.style.transition = "none"
    currImg = totalImages - 1
    slide.style.transform = "translateX(" + -currImg * size + "px)"
    setTimeout(() => {
      slide.style.transition = "transform 0.8s ease-in-out"
      currImg--
      slide.style.transform = "translateX(" + -currImg * size + "px)"
    }, 50)
  }
})
