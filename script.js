// Reuseable Components
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

// Initialize all logic
document.addEventListener("DOMContentLoaded", () => {
    // Load header and footer
    loadComponent('/components/header.html', 'header');
    loadComponent('/components/footer.html', 'footer');


    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close-modal");

    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".details-btn");
        
        if (btn) {
            const card = btn.closest(".project-card");
            const hiddenContent = card.querySelector(".project-details-source");

            if (hiddenContent && modalBody) {
                modalBody.innerHTML = hiddenContent.innerHTML;
                modal.style.display = "flex";
                document.body.style.overflow = "hidden";
            }
        }
    });

    // Close Modal
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        };
    }

    // Close Modal on outside click
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
});