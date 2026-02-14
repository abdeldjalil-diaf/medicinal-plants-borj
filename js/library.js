// JavaScript for the Library page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init();
    
    // PDF viewer functionality
    const pdfModal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const closeModalBtn = document.getElementById('closeModal');
    const downloadPdfBtn = document.getElementById('downloadPdf');
    const previewButtons = document.querySelectorAll('.preview-btn');
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    // Sample PDF URLs - in a real site these would point to actual PDFs
    const pdfFiles = [
        {
            title: "Guide Complet des Plantes Médicinales",
            pdfUrl: "books/36 Healing Herbs The World's Best Medicinal Plants.pdf"
        },
        {
            title: "Herboristerie Moderne: Principes et Pratiques",
            url: "https://www.exemple.com/pdf/herboristerie-moderne.pdf"
        },
        {
            title: "Pharmacopée Traditionnelle Algérienne",
            url: "https://www.exemple.com/pdf/pharmacopee-algerienne.pdf"
        }
    ];
    
    // Open modal with PDF preview
    previewButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // For demo purposes, we'll show a placeholder instead of real PDFs
            // In a real application, you would use the actual PDF URL
            pdfViewer.src = "https://docs.google.com/gview?embedded=true&url=" + encodeURIComponent(pdfFiles[index].url);
            downloadPdfBtn.href = pdfFiles[index].url;
            
            pdfModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });
    
    // Direct download links
    downloadButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real application, this would trigger a download
            window.location.href = pdfFiles[index].url;
        });
    });
    
    // Close modal
    closeModalBtn.addEventListener('click', function() {
        pdfModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        pdfViewer.src = ""; // Clear the iframe source
    });
    
    // Close modal when clicking outside of it
    pdfModal.addEventListener('click', function(e) {
        if (e.target === pdfModal) {
            pdfModal.classList.remove('active');
            document.body.style.overflow = '';
            pdfViewer.src = "";
        }
    });
    
    // Prevent closing when clicking inside the modal content
    document.querySelector('.modal').addEventListener('click', function(e) {
        e.stopPropagation();
    });
});