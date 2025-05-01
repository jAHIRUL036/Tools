// Load header and footer
document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    // Load footer
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});

// Tool search functionality
const toolSearch = document.getElementById('toolSearch');
if (toolSearch) {
    toolSearch.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const toolCards = document.querySelectorAll('.tool-card');
        
        toolCards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-text').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Tool categories data
const toolCategories = {
    'image-tools': [
        { name: 'Image to PNG Converter', icon: 'fa-image', description: 'Convert images to PNG format' },
        { name: 'Image to JPG Converter', icon: 'fa-image', description: 'Convert images to JPG format' },
        // Add more tools...
    ],
    'seo-tools': [
        { name: 'Meta Tag Generator', icon: 'fa-tags', description: 'Generate meta tags for your website' },
        { name: 'Keyword Density Checker', icon: 'fa-search', description: 'Check keyword density in your content' },
        // Add more tools...
    ],
    // Add more categories...
};

// Function to load tools for a category
function loadTools(category) {
    const tools = toolCategories[category] || [];
    const container = document.querySelector('.featured-tools .row');
    
    if (container) {
        container.innerHTML = tools.map(tool => `
            <div class="col-md-4 mb-4">
                <div class="card tool-card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <i class="fas ${tool.icon}"></i> ${tool.name}
                        </h5>
                        <p class="card-text">${tool.description}</p>
                        <a href="/tools/${category}/${tool.name.toLowerCase().replace(/\s+/g, '-')}" 
                           class="btn btn-primary">Use Tool</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Handle category navigation
document.addEventListener('click', function(e) {
    if (e.target.matches('.category-link')) {
        e.preventDefault();
        const category = e.target.dataset.category;
        loadTools(category);
    }
});

// Ad management
function loadAds() {
    const adContainers = document.querySelectorAll('.ad-container');
    adContainers.forEach(container => {
        // Add your ad loading logic here
        // Example: Google AdSense code
    });
}

// Initialize ads
document.addEventListener('DOMContentLoaded', loadAds);

// Mobile menu toggle
document.addEventListener('click', function(e) {
    if (e.target.matches('.navbar-toggler')) {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.toggle('show');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 