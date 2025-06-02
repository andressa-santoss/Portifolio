document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.navmenu ul');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleBtn.classList.toggle('bi-list');
    toggleBtn.classList.toggle('bi-x');
  });

  document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      toggleBtn.classList.add('bi-list');
      toggleBtn.classList.remove('bi-x');
    });
  });
});
