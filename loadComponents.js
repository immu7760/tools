// Function to load HTML components
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        document.getElementById(elementId).innerHTML = content;
    } catch (error) {
        console.error(`Error loading component from ${componentPath}:`, error);
        document.getElementById(elementId).innerHTML = '<div class="alert alert-danger">Error loading component</div>';
    }
}

// Load header and footer when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    // Load header
    loadComponent('header-placeholder', '/components/header.html');
    
    // Load footer
    loadComponent('footer-placeholder', '/components/footer.html');
}); 