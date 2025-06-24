document.addEventListener('DOMContentLoaded', function() {
    // Sidebar hamburger toggle
    const sidebar = document.querySelector('.sidebar');
    const sidebarHamburger = document.querySelector('.sidebar-hamburger');
    if (sidebar && sidebarHamburger) {
        sidebarHamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });
        document.addEventListener('click', function(e) {
            if (!sidebar.contains(e.target) && e.target !== sidebarHamburger) {
                sidebar.classList.remove('active');
            }
        });
        sidebar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('active');
            });
        });
    }
    
    const addUserBtn = document.getElementById('add-user-btn');
    const modal = document.getElementById('add-user-modal');
    const closeModal = document.querySelector('.close-modal');
    const cancelBtn = document.querySelector('.cancel-btn');
    
    addUserBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Form submission
    document.getElementById('add-user-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle form submission to your backend
        alert('Pengguna berhasil ditambahkan!');
        modal.style.display = 'none';
        // Reset form
        e.target.reset();
    });
});

// Add this to your existing JavaScript
function handleResponsiveTables() {
    const screenWidth = window.innerWidth;
    const tables = document.querySelectorAll('.users-table');
    
    tables.forEach(table => {
        if (screenWidth <= 480) {
            // Hide less important columns on very small screens
            const colsToHide = table.querySelectorAll('th:nth-child(5), td:nth-child(5)');
            colsToHide.forEach(col => {
                col.style.display = 'none';
            });
        } else {
            // Show all columns on larger screens
            const colsToShow = table.querySelectorAll('th, td');
            colsToShow.forEach(col => {
                col.style.display = '';
            });
        }
    });
}

// Run on load and on resize
document.addEventListener('DOMContentLoaded', function() {
    handleResponsiveTables();
    window.addEventListener('resize', handleResponsiveTables);
    
    // Your existing DOMContentLoaded code...
});

// Your existing JavaScript...