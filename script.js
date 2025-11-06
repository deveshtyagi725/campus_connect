// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    const menuToggle = document.querySelector('.menu-toggle i');
    
    // Toggle between the hamburger icon and the close icon (X)
    if (navLinks.classList.contains('active')) {
        menuToggle.classList.remove('fa-bars');
        menuToggle.classList.add('fa-times');
    } else {
        menuToggle.classList.remove('fa-times');
        menuToggle.classList.add('fa-bars');
    }
}

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        // Check if the link is a valid section ID before attempting to scroll
        if (href.startsWith('#')) {
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Close menu on mobile after click
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle i');
        navLinks.classList.remove('active');
        menuToggle.classList.remove('fa-times');
        menuToggle.classList.add('fa-bars');
    });
});

// Handle form submission (placeholder function)
function handleSubmit(event) {
    event.preventDefault();
    alert('Your message has been received! We will connect with you shortly.');
    // In a real application, you would use fetch() or XMLHttpRequest here 
    // to send the form data to a backend server.
    
    // Optional: Clear the form after submission
    event.target.reset();
}