const images = document.querySelectorAll('.carousel img');
const current = document.getElementById('current');
const texts = document.querySelectorAll(".text-item");
let index = 0;

// 更新所有图片和文字的状态
function updateImages() {
  // 清除所有图片 class
  images.forEach(img => img.classList.remove('active', 'prev', 'next'));
  // 清除所有文字 class
  texts.forEach(txt => txt.classList.remove('active'));

  // 当前图
  images[index].classList.add('active');
  current.src = images[index].src;

  // 当前文字
  texts[index].classList.add('active');

  // 左边图
  const prevIndex = (index - 1 + images.length) % images.length;
  images[prevIndex].classList.add('prev');

  // 右边图
  const nextIndex = (index + 1) % images.length;
  images[nextIndex].classList.add('next');
}

// 切换到上一张
function prevImage() {
  index = (index + 1) % images.length;
  updateImages();
}

// 切换到下一张
function nextImage() {
  index = (index - 1 + images.length) % images.length;
  updateImages();
}

// 初始化
updateImages();