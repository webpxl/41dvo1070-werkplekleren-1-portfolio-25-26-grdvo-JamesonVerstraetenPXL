// Reusable Compontents
async function loadComponent(url, elementSelector) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load ${url}: ${response.statusText}`);
        }
        const html = await response.text();
        const element = document.querySelector(elementSelector);
        
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error("Error loading component:", error);
    }
}

// Initialize components
document.addEventListener("DOMContentLoaded", () => {
    loadComponent('/components/header.html', 'header');
    loadComponent('/components/footer.html', 'footer');
});