const navbar = document.querySelector('.navbar-wagon');
navbar.classList.add('navbar-wagon-transparent');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
      navbar.classList.remove('navbar-wagon-transparent');
    } else {
      navbar.classList.add('navbar-wagon-transparent');
    }
  });
}
