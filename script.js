
window.onload = () => {
  populateSelectors();
  filterShops();
};

function toggleMenu(el) {
  document.querySelector('.nav-links').classList.toggle('active');
  el.classList.toggle('active');
}

window.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".hero-image");

  images.forEach(img => img.style.display = "none");
  images[0].style.display = "block";

  function showImage(index) {
    images.forEach(img => img.style.display = "none");
    images[index].style.display = "block";
  }

// 虫眼鏡で切り替え
document.querySelector(".N").addEventListener("mouseenter", () => showImage(1));        // 名城食堂
document.querySelector(".TOWER").addEventListener("mouseenter", () => showImage(4));    // タワー
document.querySelector(".BEKARY").addEventListener("mouseenter", () => showImage(2));   // ベーカリー
document.querySelector(".SUGAKIYA").addEventListener("mouseenter", () => showImage(3)); // スガキヤ
document.querySelector(".GAISYOKU").addEventListener("mouseenter", () => showImage(5)); // 外食
});

  document.addEventListener("DOMContentLoaded", function () {
    const titleAnim = document.getElementById("title-animation");

    const hasSeenAnimation = sessionStorage.getItem("seenAnimation");

    if (!hasSeenAnimation) {
      titleAnim.style.display = "flex";

      setTimeout(() => {
        titleAnim.style.display = "none";
        sessionStorage.setItem("seenAnimation", "true");
      }, 3000);
    } else {
      titleAnim.style.display = "none";
    }
  });