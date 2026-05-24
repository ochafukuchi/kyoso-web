// ページ内リンクをクリックしたときに、対象セクションへスムーススクロールする処理
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
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
