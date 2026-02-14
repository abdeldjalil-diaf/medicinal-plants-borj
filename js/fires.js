// JavaScript for the Fires page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init();
    
    // Slider functionality for case studies
    const slider = document.querySelector('.case-studies-slider');
    const slides = document.querySelectorAll('.case-study-card');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;
    
    // Initially hide all slides except the first one
    for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected slide and activate corresponding dot
        slides[index].style.display = 'grid';
        dots[index].classList.add('active');
        
        // Update current slide index
        currentSlide = index;
    }
    
    // Previous slide button
    prevBtn.addEventListener('click', function() {
        let prevSlide = currentSlide - 1;
        if (prevSlide < 0) prevSlide = slides.length - 1;
        showSlide(prevSlide);
        resetInterval();
    });
    
    // Next slide button
    nextBtn.addEventListener('click', function() {
        let nextSlide = currentSlide + 1;
        if (nextSlide >= slides.length) nextSlide = 0;
        showSlide(nextSlide);
        resetInterval();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
            resetInterval();
        });
    });
    
    // Auto-advance slides
    function startInterval() {
        slideInterval = setInterval(function() {
            let nextSlide = currentSlide + 1;
            if (nextSlide >= slides.length) nextSlide = 0;
            showSlide(nextSlide);
        }, 7000); // Change slide every 7 seconds
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }
    
    // Start the auto-advance
    startInterval();
    
    // Rehabilitation cards hover effect
    const rehabCards = document.querySelectorAll('.rehabilitation-card');
    
    rehabCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add a subtle floating animation
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove the floating animation
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip empty anchors
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
});