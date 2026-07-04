const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function setPressed() {
  toggle.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark');
}
setPressed();

toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  setPressed();
});
