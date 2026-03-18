const elements = document.querySelectorAll('.fade, .fade-left, .fade-right');

const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
showOnScroll();