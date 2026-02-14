// JavaScript for the Diseases page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init();
    
    // Tab functionality for disease categories
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.dataset.tab;
            
            // Remove active class from all buttons and hide all content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.style.display = 'none');
            
            // Add active class to clicked button and show corresponding content
            this.classList.add('active');
            document.getElementById(target).style.display = 'block';
            
            // Refresh AOS animations when switching tabs
            AOS.refresh();
        });
    });
    
    // Disease detail expansion (for mobile view)
    const diseaseCards = document.querySelectorAll('.disease-card');
    
    diseaseCards.forEach(card => {
        // Add click event only on mobile viewports
        if (window.innerWidth < 768) {
            card.addEventListener('click', function() {
                const details = this.querySelector('.disease-details');
                const isExpanded = details.style.maxHeight;
                
                // Reset all cards
                diseaseCards.forEach(c => {
                    c.querySelector('.disease-details').style.maxHeight = null;
                    c.classList.remove('expanded');
                });
                
                // Expand clicked card if it wasn't already expanded
                if (!isExpanded) {
                    details.style.maxHeight = details.scrollHeight + 'px';
                    this.classList.add('expanded');
                }
            });
        }
    });
    
    // Responsive behavior adjustments
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            // Remove mobile-specific behaviors when viewport is larger
            diseaseCards.forEach(card => {
                card.querySelector('.disease-details').style.maxHeight = null;
                card.classList.remove('expanded');
                
                // Remove click event listeners (not straightforward in this example)
                // In a real application, you might use named functions to remove them properly
            });
        }
    });
});