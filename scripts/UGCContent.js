class UGCGallery extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="ugc-container flex-start-end no-flex-grow">
        <div class="ugc-description flex-center-center no-flex-grow">
          <h1 class="ugc-description-text">What We've Done</h1>
        </div>
        <div class="ugc-gallery">
          <div class="ugc-wrapper"><img src='assets/ugc/ugc1.gif' class="ugc-video" alt="Snippet animation of Natura user generated content"/></div>
          <div class="ugc-wrapper"><img src='assets/ugc/ugc2.gif' class="ugc-video" alt="Snippet animation of Aveda user generated content"/></div>
          <div class="ugc-wrapper"><img src='assets/ugc/ugc3.gif' class="ugc-video" alt="Snippet animation of Smashburger user generated content"/></div>
          <div class="ugc-wrapper"><img src='assets/ugc/ugc4.webp' class="ugc-video" alt="Snippet animation of Nobull user generated content"/></div>
          <div class="ugc-wrapper"><img src='assets/ugc/ugc5.webp' class="ugc-video" alt="Snippet animation of Nobull user generated content"/></div>
          <div class="ugc-wrapper"><img src='assets/ugc/ugc6.webp' class="ugc-video" alt="Snippet animation of user generated content"/></div>
          <div class="ugc-wrapper"><img src='assets/ugc/ugc11.webp' class="ugc-video" alt="Snippet animation of user generated content"/></div>
          <div class="ugc-wrapper"><img src='assets/ugc/ugc7.webp' class="ugc-video" alt="Snippet animation of user generated content"/></div>
          <div class="ugc-wrapper"><img src='assets/ugc/ugc8.webp' class="ugc-video" alt="Snippet animation of user generated content"/></div>
          <div class="ugc-wrapper"><img src='assets/ugc/ugc9.webp' class="ugc-video" alt="Snippet animation of user generated content"/></div>
          <div class="ugc-wrapper"><img src='assets/ugc/ugc10.webp' class="ugc-video" alt="Snippet animation of user generated content"/></div>
          <div class="flex-center-center basic-padding">
            <a href="/DNKCreative/clients">
              <button class="silver">see more</button>
            </a>
          </div>
        </div>
      </div>
    `;
    // GSAP animations
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".ugc-container",
      start: "top -150", // When the top of .ugc-container hits the top of the viewport
      end: "bottom top", // When the bottom of .ugc-container leaves the top of the viewport
      onEnter: () => {
        // Add class to fix the position of .ugc-description
        document.querySelector(".ugc-description").classList.add("ugc-fixed");
      },
      onLeaveBack: () => {
        // Remove class to revert the position of .ugc-description
        document.querySelector(".ugc-description").classList.remove("ugc-fixed");
      },
    });
    
    
    



    const ugcWrappers = this.querySelectorAll('.ugc-wrapper');

ugcWrappers.forEach((wrapper) => {
  gsap.fromTo(
    wrapper,
    { opacity: 0, y: 50 }, // Starting state for fade-in
    {
      opacity: 1,
      y: 0, // Final state for fade-in
      duration: 1,
      scrollTrigger: {
        trigger: wrapper,
        start: "top 80%", // Fade in when the top of the element hits 80% of the viewport
        end: "top 90%", // Fade out when the bottom of the element exits the viewport
        onEnter: () => gsap.to(wrapper, { opacity: 1, y: 50, duration: 0.5 }), // Fade-in animation
        onLeaveBack: () => gsap.to(wrapper, { opacity: 0, y: -50, duration: 0.5 }), // Fade-out animation on scroll up
      },
    }
  );
});


  }
}
// Define the custom element
customElements.define('ugc-gallery', UGCGallery);
