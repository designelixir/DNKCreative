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

    this.innerHTML = `
    <header id="mainHeader" class="basic-padding flex-center-center ${headerClass}">
        <nav>
            <div id="navWrapper" class="flex-center-spacebetween">
                <a href="/" class="flex-center-start">
                    <img src="${logoSrc}" class="logo">
                </a>
                <button id="menuButton">
                    <span style="opacity: 0;">Menu</span>
                </button>
            </div>
            <div id="fullMenu" class="flex-center-center flex-column">
                <a id="Home" class="nav-link" href="/">Home</a>
                <a id="About" class="nav-link" href="/about">About</a>
                <a id="Services" class="nav-link" href="/services">Services</a>
                <a id="Clients" class="nav-link" href="/clients">Clients</a>
                <a id="Contact" class="nav-link" href="/contact">Contact</a>
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

// Define the custom element
customElements.define('header-component', Header);

document.addEventListener('DOMContentLoaded', function () {
  // Register the ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  const logo = document.querySelector('.logo'); // Target the logo specifically
  const mainHeader = document.querySelector('#mainHeader'); // Target the main header

  // Set the initial size of the logo
  gsap.set(logo, { scale: 1 });

  // Create the scroll-triggered animation
  ScrollTrigger.create({
      trigger: mainHeader,
      start: "top top", // Start when the top of the header reaches the top of the viewport
      end: "+=10", // Animation ends after scrolling 100px
      onUpdate: (self) => {
          if (self.direction === 1 && self.progress > 0) {
              // When scrolling down, shrink the logo and switch header class
              gsap.to(logo, {
                  height: '20px', // Scale down the logo
                  duration: 0.3, // Animation duration
                  ease: "power2.out"
              });
              mainHeader.classList.remove('basic-padding');
              mainHeader.classList.add('basic-padding-scroller');
          } else if (self.direction === -1 && self.progress === 0) {
              // When scrolling back to the top, restore the logo size and header class
              gsap.to(logo, {
                  height: '40px', // Reset the logo to original size
                  duration: 0.3,
                  ease: "power2.out"
              });
              mainHeader.classList.remove('basic-padding-scroller');
              mainHeader.classList.add('basic-padding');
          }
      }
  });
});
