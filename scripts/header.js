document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>');

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const navType = this.getAttribute('data-style') || 'black'; // default to black if no data-style
    const activePage = this.getAttribute('data-nav') || 'Home'; // default to Home if no data-nav

    // Set the class of mainHeader based on data-style
    const headerClass = navType === 'white' ? 'white-bg' : 'black-bg';

    // Set the logo source based on navType
    const logoSrc = navType === 'white' ? 'assets/dnk-creative-logo-black.svg' : 'assets/dnk-creative-logo-white.svg';
    const menuSrc = navType === 'white' ? 'assets/menu-black.svg' : 'assets/menu-white.svg';
    const menuCloseSrc = navType === 'white' ? 'assets/x-black.svg' : 'assets/x-white.svg';
    const menuColor = navType === 'white' ? "white" : "black";

    this.innerHTML = `
    <header id="mainHeader" class="basic-padding flex-center-center ${headerClass}">
        <nav>
            <div id="navWrapper" class="flex-center-spacebetween">
                <a href="/DNKCreative/" class="flex-center-start">
                    <img src="${logoSrc}" class="logo">
                </a>
                <button id="menuButton">
                    <img id="menuButtonSrc" src="${menuSrc}" alt="menu">
                </button>
            </div>
            <div id="fullMenu" class="flex-center-center flex-column" style="background-color: ${menuColor}">
                <a id="Home" class="nav-link" href="/DNKCreative/">Home</a>
                <a id="About" class="nav-link" href="/DNKCreative/about">About</a>
                <a id="Clients" class="nav-link" href="/DNKCreative/clients">Clients</a>
                <a id="Contact" class="nav-link" href="/DNKCreative/contact">Contact</a>
            </div>
        </nav>
    </header>
    `;

    // Add active-link class to the correct nav item
    const activeLink = this.querySelector(`#${activePage}`);
    if (activeLink) {
      activeLink.classList.add('active-link');
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menuButton');
  const fullMenu = document.getElementById('fullMenu');
  const menuButtonSrc = document.getElementById('menuButtonSrc');
  const menuSrc = menuButtonSrc.getAttribute('src');
  const menuCloseSrc = menuSrc === 'assets/menu-black.svg' ? 'assets/x-black.svg' : 'assets/x-white.svg';
  let menuOpen = false; // Track the state of the menu

  // Initially hide the menu
  gsap.set(fullMenu, { y: '-100%', height: 0, autoAlpha: 0 });

  menuButton.addEventListener('click', function () {
      if (menuOpen) {
          // Slide the menu up and hide, switch to menu icon
          gsap.to(fullMenu, { duration: 0.5, y: '-100%', height: 0, autoAlpha: 0, ease: 'power2.inOut' });
          menuButtonSrc.src = menuSrc;
      } else {
          // Slide the menu down and show, switch to close icon
          gsap.to(fullMenu, { duration: 0.5, y: '0%', height: 'calc(100vh - 100px)', autoAlpha: 1, ease: 'power2.inOut' });
          menuButtonSrc.src = menuCloseSrc;
      }
      menuOpen = !menuOpen; // Toggle the menu state
  });
});

// Define the custom element
customElements.define('header-component', Header);
