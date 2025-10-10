
ScrollReveal({
    distance: '60px', // Elements will move 60px 
    duration: 1200,   // Transition duration of 1.2 seconds
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', // Custom smooth easing
    reset: false      // Set to true if you want animations to repeat every time you scroll past
});

// Apply Fade-Up animation to elements as they scroll into view

// 1. Banner Content
ScrollReveal().reveal('.banner h2, .banner h1', {
    origin: 'top', // Fade down from the top
    interval: 100
});

// 2. Banner Flex Items (Video and Text)
ScrollReveal().reveal('.banner .video', {
    origin: 'left', // Slide in from the left
    delay: 300
});
ScrollReveal().reveal('.banner .pera', {
    origin: 'right', // Slide in from the right
    delay: 300
});

// 3. Banner 2 (Images)
ScrollReveal().reveal('.banner-2 .heading h3, .banner-2 .heading p', {
    origin: 'top',
    delay: 100
});
ScrollReveal().reveal('.banner-2 .images', {
    origin: 'bottom',
    interval: 150 // Stagger the appearance of the images
});

// 4. Products (Banner 3)
ScrollReveal().reveal('.banner-3 .heading', {
    origin: 'top',
    delay: 100
});
ScrollReveal().reveal('.banner-3 .product', {
    origin: 'bottom',
    interval: 100 // Stagger the product cards smoothly
});

// 5. FAQ Section (Banner 4)
ScrollReveal().reveal('.banner-4 .heading', {
    origin: 'top',
    delay: 100
});
ScrollReveal().reveal('.banner-4 .bloker', {
    origin: 'bottom',
    interval: 50 // Stagger the FAQ blocks
});

// 6. Footer Elements
ScrollReveal().reveal('footer .sec-1, footer .copy', {
    origin: 'bottom',
    interval: 100
});
