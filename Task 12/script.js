let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;
let sliderImage = document.getElementById("sliderImage");

function showSlide() {
  sliderImage.src = images[currentIndex];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide();
}

showSlide();
