class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer class="flex-center-center black-bg flex-column basic-padding-small footer-container">
        <p class="white-text centered-text no-text-spacing">We&apos;re NYC-based but take our talents nationwide. </p>
        <a href="https://www.instagram.com/dnk_creative/" class="hover" target="_blank"><img src="assets/instagram.svg" style="height: 25px; margin: 15px 0 0;" /></a>
        
        </footer>
`;
  }
}

customElements.define('footer-component', Footer);