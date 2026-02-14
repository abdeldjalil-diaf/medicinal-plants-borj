// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Search functionality (homepage)
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    if (searchInput && searchButton) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Plant details modal functionality for homepage
    setupPlantDetailsButtons();
});

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') return;

    // Redirect to plants page with search query
    window.location.href = `plantes.html?search=${encodeURIComponent(searchTerm)}`;
}

// Plant details functionality
function setupPlantDetailsButtons() {
    const detailButtons = document.querySelectorAll('.view-details');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const plantName = button.getAttribute('data-plant');
            if (plantName) {
                showPlantModal(plantName);
            } else {
                // Fallback if data attribute is not set
                const plantCard = button.closest('.plant-card');
                const plantTitle = plantCard.querySelector('h3').textContent;
                showPlantModal(plantTitle.toLowerCase());
            }
        });
    });
}

// Plant modal functionality
function showPlantModal(plantName) {
    // Plant data (in a real app, this would come from a database)
    const plantData = {
        'camomille': {
            name: 'Camomille',
            scientific: 'Anthemis nobilis',
            image: 'images/babounj.jpg',
            description: 'La camomille est une plante médicinale connue pour ses propriétés calmantes et anti-inflammatoires.',
            benefits: [
                'Aide à la digestion',
                'Propriétés calmantes et relaxantes',
                'Anti-inflammatoire naturel',
                'Soulage les maux de tête',
                'Aide à réduire l\'anxiété'
            ],
            usage: 'Infusion à base de fleurs séchées, huile essentielle, compresses.',
            precautions: 'Peut provoquer des réactions allergiques chez certaines personnes. Consulter un médecin avant utilisation pendant la grossesse.'
        },
        'thym': {
            name: 'Origan',
            scientific: 'Origanum Vulgare',
            image: 'images/za3tar.jpg',
            description: 'L\'origan est une plante aromatique aux propriétés antiseptiques et antioxydantes remarquables.',
            benefits: [
                'Soutien du système respiratoire',
                'Puissant antiseptique naturel',
                'Propriétés antioxydantes',
                'Aide à la digestion',
                'Soulage les douleurs musculaires'
            ],
            usage: 'Infusion, huile essentielle, assaisonnement culinaire.',
            precautions: 'À utiliser avec modération pendant la grossesse. Éviter l\'utilisation thérapeutique sans avis médical.'
        },
        'gingembre': {
            name: 'Gingembre',
            scientific: 'Zingiber officinale',
            image: 'images/zanjabil.jpg',
            description: 'Le gingembre est une racine aux propriétés anti-inflammatoires et digestives reconnues depuis des millénaires.',
            benefits: [
                'Stimule la digestion',
                'Réduit les nausées et les vomissements',
                'Propriétés anti-inflammatoires',
                'Renforce le système immunitaire',
                'Aide à réduire les douleurs articulaires'
            ],
            usage: 'Infusion, poudre, racine fraîche dans l\'alimentation, huile essentielle.',
            precautions: 'Peut interférer avec certains médicaments anticoagulants. Consulter un médecin en cas de troubles de la coagulation.'
        },
        'romarin': {
            name: 'romarin',
            scientific: 'Salvia rosmarinus',
            image: 'images/iklil.jpg',
            description: 'Le romarin est reconnu pour stimuler l\’immunité, faciliter la digestion et revitaliser l\’organisme.',
            benefits: [
                'Renforce le système immunitaire',
                'Facilite la digestion',
                'Améliore la circulation sanguine',
                'Possède des propriétés antioxydantes',
            ],
            usage: 'Infusion, huile essentielle, aromate culinaire, inhalation.',
            precautions: 'À utiliser avec modération, déconseillé aux femmes enceintes et aux personnes épileptiques.'
        }
    };

    // Get plant data or use default if not found
    const plant = plantData[plantName] || {
        name: 'Plante Médicinale',
        scientific: 'Nom scientifique',
        image: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg',
        description: 'Description de la plante et ses usages traditionnels.',
        benefits: ['Propriété 1', 'Propriété 2', 'Propriété 3'],
        usage: 'Information sur l\'utilisation de la plante.',
        precautions: 'Précautions d\'emploi importantes.'
    };

    // Create modal HTML
    const modalHTML = `
        <div class="modal-overlay">
            <div class="modal">
                <button class="close-modal">
                    <i class="fas fa-times"></i>
                </button>
                <div class="modal-header">
                    <h2>${plant.name}</h2>
                    <p>${plant.scientific}</p>
                </div>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${plant.image}" alt="${plant.name}">
                    </div>
                    <div class="modal-content">
                        <p>${plant.description}</p>
                        <h3>Bienfaits</h3>
                        <ul>
                            ${plant.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                        </ul>
                        <h3>Utilisation</h3>
                        <p>${plant.usage}</p>
                        <h3>Précautions</h3>
                        <p>${plant.precautions}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add active class after a small delay for animation
    setTimeout(() => {
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay) modalOverlay.classList.add('active');
    }, 10);

    // Close modal functionality
    const closeModal = () => {
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            // Remove from DOM after animation completes
            setTimeout(() => {
                modalOverlay.remove();
            }, 500);
        }
    };

    // Close button event
    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close when clicking outside modal
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}