
let menuOpen = false;

function toggleMenu() {
  if(!menuOpen) { // open the menu
    $('nav').animate({
      right: 0
    }, 300, 'swing');
  }
  else { // close the menu
    $('nav').animate({
      right: -300
    }, 240, 'swing');
  }
  // toggle the menu state
  menuOpen = !menuOpen;
} // toggleMenu()

function closeMenu() {
  $('nav').animate({
    right: -300
  }, 240, 'swing');
  menuOpen = false;
} // closeMenu()