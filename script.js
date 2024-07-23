// Function to load HTML content
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(error => {
            console.warn(`Error loading ${file}: ${error}`);
        });
}

// Load navbar and footer
document.addEventListener('DOMContentLoaded', function() {
    loadHTML('html/navbar.html', 'navbar-placeholder');
    loadHTML('html/footer.html', 'footer-placeholder');
});