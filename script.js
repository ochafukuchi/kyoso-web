// ボタンを押すと「研究の概要」セクションへなめらかにスクロールする処理
const overviewButton = document.getElementById('scroll-overview');
const overviewSection = document.getElementById('overview');
const resultsButton = document.getElementById('scroll-results');
const resultsSection = document.getElementById('results');

overviewButton.addEventListener('click', () => {
  overviewSection.scrollIntoView({ behavior: 'smooth' });
});

resultsButton.addEventListener('click', () => {
  if (resultsSection) {
    resultsSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// ページ内のカードを下からふわっと表示させるアニメーション
const animatedElements = document.querySelectorAll('.card-hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('card-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(element => {
  observer.observe(element);
});

// ページ読み込み後に、すでに表示範囲にある要素にもアニメーションを適用
window.addEventListener('load', () => {
  animatedElements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('card-visible');
    }
  });
});
