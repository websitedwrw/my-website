// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Simple cart functionality
let cart = [];
document.querySelectorAll('.product-card a').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        let productName = this.previousElementSibling.previousElementSibling.innerText;
        cart.push(productName);
        alert(`${productName} added to cart!`);
    });
});
