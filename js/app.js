function getSiteNavigation() {
  return document.getElementById('site-nav');
}

function toggleMenu() {
  const navigation = getSiteNavigation();
  const hamburger = document.getElementById('hamburger');

  if (!navigation || !hamburger) return;

  const isOpen = navigation.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
}

function closeMenu() {
  const navigation = getSiteNavigation();
  const hamburger = document.getElementById('hamburger');

  navigation?.classList.remove('open');
  hamburger?.setAttribute('aria-expanded', 'false');
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});
