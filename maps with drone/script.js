const images = document.querySelectorAll('.carousel img');
const current = document.getElementById('current');
let index = 0;

function showImage(i) {
  images.forEach(img => img.classList.remove('active'));
  images[i].classList.add('active');
  current.src = images[i].src;
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}