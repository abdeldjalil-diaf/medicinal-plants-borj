document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (!validateForm(formData)) {
                return;
            }
            
            // Show loading state
            showLoadingState();
            
            // Simulate form submission (in a real app, this would send data to a server)
            setTimeout(() => {
                hideLoadingState();
                showSuccessMessage();
                contactForm.reset();
            }, 1500);
        });
    }
    
    // Form validation
    function validateForm(data) {
        // Check for empty fields
        for (const [key, value] of Object.entries(data)) {
            if (!value.trim()) {
                showError(`Veuillez remplir le champ ${getFieldLabel(key)}`);
                return false;
            }
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showError('Veuillez entrer une adresse email valide');
            return false;
        }
        
        return true;
    }
    
    // Get human-readable field label
    function getFieldLabel(fieldName) {
        const labels = {
            'name': 'Nom',
            'email': 'Email',
            'subject': 'Sujet',
            'message': 'Message'
        };
        return labels[fieldName] || fieldName;
    }
    
    // Show error message
    function showError(message) {
        // Remove any existing alert
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Create error alert
        const alert = document.createElement('div');
        alert.className = 'alert alert-error';
        alert.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <span>${message}</span>
            <button class="close-alert">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Insert alert before form
        contactForm.insertAdjacentElement('beforebegin', alert);
        
        // Add animation
        setTimeout(() => {
            alert.classList.add('show');
        }, 10);
        
        // Add close button functionality
        const closeBtn = alert.querySelector('.close-alert');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                alert.classList.remove('show');
                setTimeout(() => {
                    alert.remove();
                }, 300);
            });
        }
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.classList.remove('show');
                setTimeout(() => {
                    if (alert.parentNode) {
                        alert.remove();
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // Show success message
    function showSuccessMessage() {
        // Remove any existing alert
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Create success alert
        const alert = document.createElement('div');
        alert.className = 'alert alert-success';
        alert.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Votre message a été envoyé avec succès! Nous vous répondrons dès que possible.</span>
            <button class="close-alert">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Insert alert before form
        contactForm.insertAdjacentElement('beforebegin', alert);
        
        // Add animation
        setTimeout(() => {
            alert.classList.add('show');
        }, 10);
        
        // Add close button functionality
        const closeBtn = alert.querySelector('.close-alert');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                alert.classList.remove('show');
                setTimeout(() => {
                    alert.remove();
                }, 300);
            });
        }
        
        // Auto-remove after 7 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.classList.remove('show');
                setTimeout(() => {
                    if (alert.parentNode) {
                        alert.remove();
                    }
                }, 300);
            }
        }, 7000);
    }
    
    // Show loading state
    function showLoadingState() {
        // Disable form
        const formElements = contactForm.elements;
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].disabled = true;
        }
        
        // Change submit button
        const submitButton = contactForm.querySelector('.submit-button');
        if (submitButton) {
            submitButton.innerHTML = `
                <div class="loading-spinner"></div>
                <span>Envoi en cours...</span>
            `;
        }
    }
    
    // Hide loading state
    function hideLoadingState() {
        // Enable form
        const formElements = contactForm.elements;
        for (let i = 0; i < formElements.length; i++) {
            formElements[i].disabled = false;
        }
        
        // Reset submit button
        const submitButton = contactForm.querySelector('.submit-button');
        if (submitButton) {
            submitButton.innerHTML = `
                <i class="fas fa-paper-plane"></i>
                <span>Envoyer le message</span>
            `;
        }
    }
    
    // Add CSS for alerts
    const alertStyles = document.createElement('style');
    alertStyles.innerHTML = `
        .alert {
            margin-bottom: 2rem;
            padding: 1rem;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 1rem;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
        }
        
        .alert.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .alert-error {
            background-color: #FEE2E2;
            color: #DC2626;
            border-left: 4px solid #DC2626;
        }
        
        .alert-success {
            background-color: #ECFDF5;
            color: #059669;
            border-left: 4px solid #059669;
        }
        
        .alert i {
            font-size: 1.5rem;
        }
        
        .alert span {
            flex: 1;
        }
        
        .close-alert {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            font-size: 1rem;
        }
    `;
    document.head.appendChild(alertStyles);
});