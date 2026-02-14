document.addEventListener('DOMContentLoaded', function() {
    // Get container for plants
    const plantsContainer = document.getElementById('plants-container');
    const paginationContainer = document.getElementById('pagination');
    const searchInput = document.getElementById('plant-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Set up pagination
    let currentPage = 1;
    const plantsPerPage = 9;
    let filteredPlants = [...plantsDatabase];
    
    // Check for search query in URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery) {
        searchInput.value = searchQuery;
        filterPlantsBySearch(searchQuery);
    } else {
        // Initial display
        displayPlants(currentPage);
        setupPagination();
    }
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim().toLowerCase();
            filterPlantsBySearch(searchTerm);
        });
    }
    
    // Filter buttons functionality
    if (filterButtons) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterCategory = this.getAttribute('data-filter');
                filterPlantsByCategory(filterCategory);
            });
        });
    }
    
    // Filter plants by search term
    function filterPlantsBySearch(searchTerm) {
        if (searchTerm === '') {
            filteredPlants = [...plantsDatabase];
        } else {
            filteredPlants = plantsDatabase.filter(plant => {
                return (
                    plant.name.toLowerCase().includes(searchTerm) ||
                    plant.scientific.toLowerCase().includes(searchTerm) ||
                    plant.localName.toLowerCase().includes(searchTerm) ||
                    plant.properties.toLowerCase().includes(searchTerm)
                );
            });
        }
        
        currentPage = 1;
        displayPlants(currentPage);
        setupPagination();
        
        // Update filter buttons - select "all" when searching
        filterButtons.forEach(btn => btn.classList.remove('active'));
        const allButton = document.querySelector('.filter-btn[data-filter="all"]');
        if (allButton) allButton.classList.add('active');
    }
    
    // Filter plants by category
    function filterPlantsByCategory(category) {
        if (category === 'all') {
            filteredPlants = [...plantsDatabase];
        } else {
            filteredPlants = plantsDatabase.filter(plant => {
                return plant.categories.includes(category);
            });
        }
        
        currentPage = 1;
        displayPlants(currentPage);
        setupPagination();
    }
    
    // Display plants for current page
    function displayPlants(page) {
        if (!plantsContainer) return;
        
        // Calculate pagination
        const start = (page - 1) * plantsPerPage;
        const end = page * plantsPerPage;
        const paginatedPlants = filteredPlants.slice(start, end);
        
        // Clear container
        plantsContainer.innerHTML = '';
        
        // Display message if no plants found
        if (paginatedPlants.length === 0) {
            plantsContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-leaf"></i>
                    <h3>Aucune plante trouvée</h3>
                    <p>Essayez avec un terme de recherche différent ou un autre filtre.</p>
                </div>
            `;
            return;
        }
        
        // Create plant cards
        paginatedPlants.forEach((plant, index) => {
            const plantCard = createPlantCard(plant, index);
            plantsContainer.appendChild(plantCard);
        });
        
        // Initialize AOS on new elements
        AOS.refresh();
    }
    
    // Create plant card element
    function createPlantCard(plant, index) {
        const card = document.createElement('div');
        card.className = 'plant-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 100).toString());
        
        card.innerHTML = `
            <div class="plant-image">
                <img src="${plant.image}" alt="${plant.name}">
                <div class="plant-overlay">
                    <button class="view-details" data-id="${plant.id}">Voir Détails</button>
                </div>
            </div>
            <div class="plant-info">
                <h3>${plant.name}</h3>
                <p>${plant.scientific}</p>
                <div class="plant-local-name">
                    <span>${plant.localName}</span>
                </div>
                <div class="plant-tags">
                    ${plant.categories.map(category => `<span>${getCategoryLabel(category)}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Add click event to view details button
        setTimeout(() => {
            const detailsBtn = card.querySelector('.view-details');
            if (detailsBtn) {
                detailsBtn.addEventListener('click', () => {
                    showPlantDetails(plant.id);
                });
            }
        }, 100);
        
        return card;
    }
    
    // Set up pagination controls
    function setupPagination() {
        if (!paginationContainer) return;
        
        const totalPages = Math.ceil(filteredPlants.length / plantsPerPage);
        paginationContainer.innerHTML = '';
        
        // No need for pagination if only one page
        if (totalPages <= 1) return;
        
        // Add previous button
        if (currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
            prevButton.addEventListener('click', () => {
                currentPage--;
                displayPlants(currentPage);
                setupPagination();
                // Scroll to top of plants section
                document.querySelector('.plants-catalog').scrollIntoView({ behavior: 'smooth' });
            });
            paginationContainer.appendChild(prevButton);
        }
        
        // Add page buttons
        const maxButtons = 5; // Maximum number of page buttons to show
        let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
        let endPage = Math.min(totalPages, startPage + maxButtons - 1);
        
        // Adjust if at end of range
        if (endPage - startPage + 1 < maxButtons) {
            startPage = Math.max(1, endPage - maxButtons + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayPlants(currentPage);
                setupPagination();
                // Scroll to top of plants section
                document.querySelector('.plants-catalog').scrollIntoView({ behavior: 'smooth' });
            });
            
            paginationContainer.appendChild(pageButton);
        }
        
        // Add next button
        if (currentPage < totalPages) {
            const nextButton = document.createElement('button');
            nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
            nextButton.addEventListener('click', () => {
                currentPage++;
                displayPlants(currentPage);
                setupPagination();
                // Scroll to top of plants section
                document.querySelector('.plants-catalog').scrollIntoView({ behavior: 'smooth' });
            });
            paginationContainer.appendChild(nextButton);
        }
    }
    
    // Get human-readable category label
    function getCategoryLabel(category) {
        const labels = {
            'digestive': 'Digestive',
            'respiratory': 'Respiratoire',
            'anti-inflammatory': 'Anti-inflammatoire',
            'immunity': 'Immunité'
        };
        return labels[category] || category;
    }
    
    // Show plant details in modal
    function showPlantDetails(plantId) {
        const plant = plantsDatabase.find(p => p.id === plantId);
        if (!plant) return;
        
        // Create modal HTML
        const modalHTML = `
            <div class="modal-overlay">
                <div class="modal">
                    <button class="close-modal">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="modal-header">
                        <h2>${plant.name} <span class="local-name">(${plant.localName})</span></h2>
                        <p>${plant.scientific}</p>
                    </div>
                    <div class="modal-body">
                        <div class="modal-image">
                            <img src="${plant.image}" alt="${plant.name}">
                        </div>
                        <div class="modal-content">
                            <div class="plant-info-detail">
                                <h3>Information</h3>
                                <p><strong>Famille:</strong> ${plant.family}</p>
                                <p><strong>Partie(s) utilisée(s):</strong> ${plant.usedParts}</p>
                                <div class="categories-tags">
                                    ${plant.categories.map(category => `<span>${getCategoryLabel(category)}</span>`).join('')}
                                </div>
                            </div>
                            <h3>Propriétés et Usage</h3>
                            <p>${plant.properties}</p>
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
});