let menuOpen = false;

function toggleMenu() {
  const nextState = !menuOpen;

  if (nextState) {
    $('nav').animate({ right: 0 }, 300, 'swing');
  } else {
    $('nav').animate({ right: -320 }, 240, 'swing');
  }

  menuOpen = nextState;
  document.getElementById('hamburger')?.setAttribute('aria-expanded', String(menuOpen));
}

function closeMenu() {
  $('nav').animate({ right: -320 }, 240, 'swing');
  menuOpen = false;
  document.getElementById('hamburger')?.setAttribute('aria-expanded', 'false');
}