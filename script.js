const button = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
if (button && nav) {
  document.documentElement.classList.add('js');
  function closeMenu() { nav.classList.remove('open'); button.setAttribute('aria-expanded','false'); button.textContent = 'Menu'; }
  button.addEventListener('click', () => { const open = nav.classList.toggle('open'); button.setAttribute('aria-expanded', String(open)); button.textContent = open ? 'Close' : 'Menu'; });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); button.focus(); } });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
