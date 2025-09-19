const images = document.querySelectorAll('.carousel img');
const current = document.getElementById('current');
const texts = document.querySelectorAll(".text-item");
let index = 0;

// 更新所有图片和文字的状态
function updateImages() {
  // 清除所有图片 class
  images.forEach(img => img.classList.remove('active', 'prev', 'next'));

  // 当前图片
  images[index].classList.add('active');
  current.src = images[index].src;

  // ---------- 文字淡出 → 再淡入 ----------
  const activeText = document.querySelector(".text-item.active");

  if (activeText) {
    // 旧文字执行淡出
    activeText.classList.remove("active");
    activeText.classList.add("fade-out");

    activeText.addEventListener("animationend", () => {
      // 淡出完成后隐藏
      activeText.classList.remove("fade-out");
      activeText.style.display = "none";

      // 新文字显示并淡入
      texts[index].style.display = "block";
      texts[index].classList.add("active");
    }, { once: true });
  } else {
    // 第一次直接显示
    texts[index].style.display = "block";
    texts[index].classList.add("active");
  }

  // ---------- 左右预览图 ----------
  const prevIndex = (index - 1 + images.length) % images.length;
  images[prevIndex].classList.add('prev');

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