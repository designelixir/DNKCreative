document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"><\/script>');
document.write('<script src="scripts/footer.js"></script>');
document.write('<script src="scripts/header.js"></script>');


document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const fullMenu = document.getElementById('fullMenu');
    let menuOpen = false; // Track the state of the menu

    // Initially hide the menu
    gsap.set(fullMenu, { y: '-100%', height: 0, autoAlpha: 0 });

    menuButton.addEventListener('click', function () {
        if (menuOpen) {
            // Slide the menu up and hide
            gsap.to(fullMenu, { duration: 0.5, y: '-100%', height: 0, autoAlpha: 0, ease: 'power2.inOut' });
        } else {
            // Slide the menu down and show
            gsap.to(fullMenu, { duration: 0.5, y: '0%', height: 'calc(100vh - 100px)', autoAlpha: 1, ease: 'power2.inOut' });
        }
        menuOpen = !menuOpen; // Toggle the menu state
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Select all elements you want to animate in order
    const fadeInElements = document.querySelectorAll('section > div, section > h1, section > h2, section > h3, section > p');

    // Loop through each element and apply GSAP animation
    fadeInElements.forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            y: 50, // slide in slightly from below
            duration: 1, // animation duration
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,  // when the element enters the viewport
                start: "top 80%", // adjust when the animation starts (80% of viewport height)
                toggleActions: "play none none none", // play the animation when it enters
            },
            delay: index * 0.3 // delay each element slightly for a sequential fade-in
        });
    });
});
