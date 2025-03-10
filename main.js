// Tool Categories Data
const categories = [
    {
        id: 'image-tools',
        name: 'Image Tools',
        icon: 'fa-image',
        description: 'Convert, resize, and manipulate images'
    },
    {
        id: 'seo-tools',
        name: 'SEO Tools',
        icon: 'fa-search',
        description: 'Optimize your website for search engines'
    },
    {
        id: 'text-tools',
        name: 'Text Tools',
        icon: 'fa-font',
        description: 'Text manipulation and analysis tools'
    },
    {
        id: 'developer-tools',
        name: 'Developer Tools',
        icon: 'fa-code',
        description: 'Tools for web developers and programmers'
    },
    {
        id: 'calculators',
        name: 'Calculators',
        icon: 'fa-calculator',
        description: 'Various calculators for different purposes'
    },
    {
        id: 'converters',
        name: 'Unit Converters',
        icon: 'fa-exchange-alt',
        description: 'Convert between different units'
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadCategories();
    loadTools();
    updateCurrentYear();
    initializeSearch();
});

// Load categories into the page
function loadCategories() {
    const container = document.getElementById('categories-container');
    if (!container) return;

    const categoriesHTML = categories.map(category => `
        <div class="col-md-4 col-lg-2">
            <div class="category-card">
                <i class="fas ${category.icon} category-icon"></i>
                <h3 class="h5">${category.name}</h3>
                <p class="text-muted small">${category.description}</p>
            </div>
        </div>
    `).join('');

    container.innerHTML = categoriesHTML;
}

// Load tools into the page
function loadTools() {
    const container = document.getElementById('tools-container');
    if (!container) return;

    // This will be populated with actual tools data
    fetch('js/tools-data.json')
        .then(response => response.json())
        .then(tools => {
            const toolsHTML = tools.map(tool => `
                <div class="col-md-4 col-lg-3 tool-item" data-category="${tool.category}">
                    <div class="card tool-card">
                        <div class="card-body">
                            <h5 class="card-title">${tool.name}</h5>
                            <p class="card-text">${tool.description}</p>
                            <a href="${tool.url}" class="btn btn-primary stretched-link">Use Tool</a>
                        </div>
                    </div>
                </div>
            `).join('');

            container.innerHTML = toolsHTML;
        })
        .catch(error => {
            console.error('Error loading tools:', error);
            container.innerHTML = '<div class="col-12"><p class="text-center">Error loading tools. Please try again later.</p></div>';
        });
}

// Update copyright year
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-tools');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const toolItems = document.querySelectorAll('.tool-item');

        toolItems.forEach(item => {
            const toolName = item.querySelector('.card-title').textContent.toLowerCase();
            const toolDescription = item.querySelector('.card-text').textContent.toLowerCase();
            
            if (toolName.includes(searchTerm) || toolDescription.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Add smooth scrolling for anchor links
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