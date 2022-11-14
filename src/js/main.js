const btn = document.querySelector('.menu-toggler');

if (btn) {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('active');
  });
}
