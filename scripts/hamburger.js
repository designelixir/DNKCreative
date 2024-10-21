class Hamburger extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const navType = this.getAttribute('data-style') || 'black'; // default to black if no data-style
      const activePage = this.getAttribute('data-nav') || 'Home'; // default to Home if no data-nav
  
      // Set the class of mainHeader based on data-style
      const headerClass = navType === 'white' ? 'white-bg' : 'black-bg';
  
      // Set the logo source based on navType
      const menuSrc = navType === 'white' ? 'assets/menu-black.svg' : 'assets/menu-white.svg';
  
      this.innerHTML = `
      <header id="mainHeader" class="basic-padding flex-center-center">
          <nav>
              <div id="navWrapper" class="flex-center-end">
                  <button id="menuButton" style="background-image: url(${menuSrc})">
                      <span style="opacity: 0;">Menu</span>
                  </button>
              </div>
              <div id="fullMenu" class="flex-center-center flex-column">
                  <a id="Home" class="nav-link" href="/DNKCreative/">Home</a>
                  <a id="About" class="nav-link" href="/DNKCreative/about">About</a>
                  <a id="Services" class="nav-link" href="/DNKCreative/services">Services</a>
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
  
  // Define the custom element
  customElements.define('hamburger-component', Hamburger);
  document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>');