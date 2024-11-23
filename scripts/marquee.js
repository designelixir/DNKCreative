document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>');

class Marquee extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    

    this.innerHTML = `
    <div class="marquee fade-in-after flex-center-start" onclick="controls('marquee')">
                    <div class="marquee-content flex-center-start">
                        <ul class="flex-center-start">
                            <li>Social Media Strategy</li>
                            <li>Content Planning</li>
                            <li>Content Creation</li>
                            
                            <li>User Generated Content</li>
                            
                            <li>Influencer Relations</li>
                        </ul>
                        <ul class="flex-center-start">
                            <li>Social Media Strategy</li>
                            <li>Content Planning</li>
                            <li>Content Creation</li>
                            
                            <li>User Generated Content</li>
                            
                            <li>Influencer Relations</li>
                        </ul>
                         <ul class="flex-center-start">
                            <li>Social Media Strategy</li>
                            <li>Content Planning</li>
                            <li>Content Creation</li>
                            
                            <li>User Generated Content</li>
                            
                            <li>Influencer Relations</li>
                        </ul>
                         <ul class="flex-center-start">
                            <li>Social Media Strategy</li>
                            <li>Content Planning</li>
                            <li>Content Creation</li>
                            
                            <li>User Generated Content</li>
                            
                            <li>Influencer Relations</li>
                        </ul>
                    </div>
                </div>
    `;

  }
}



// Define the custom element
customElements.define('marquee-component', Marquee);
document.addEventListener('DOMContentLoaded', () => {
    const marqueeContent = document.querySelector('.marquee-content');
    const speed = 20; // Adjust this value for faster or slower scrolling

    gsap.to(marqueeContent, {
        xPercent: -50, // Move the content left by 50% of its width
        ease: "linear",
        repeat: -1, // Infinite loop
        duration: speed, // Adjust duration for speed
    });
});