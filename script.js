// script.js — Interactivity

// === IMAGE SLIDER ===
const images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
let index = 0;

function showImage() {
  document.getElementById("sliderImage").src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

// === FORM VALIDATION ===
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name && email && message) {
    formMessage.textContent = " Thank you for contacting us!";
    formMessage.style.color = "green";
    this.reset();
  } else {
    formMessage.textContent = " Please fill out all fields.";
    formMessage.style.color = "red";
  }
});