// script.js
document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  if(nav.classList.contains('open')){
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '24px';
    nav.style.top = '64px';
    nav.style.background = 'rgba(10,10,10,0.95)';
    nav.style.padding = '12px';
    nav.style.borderRadius = '12px';
  } else {
    nav.style.display = '';
    nav.style.position = '';
    nav.style.background = '';
    nav.style.padding = '';
  }
});
