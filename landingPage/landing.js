const cartItems = document.getElementById('cartItems');
const commentsList = document.getElementById('commentsList');
const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');

function addToCart(product) {
    const li = document.createElement('li');
    li.textContent = product;
    cartItems.appendChild(li);
}

commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const comment = commentInput.value.trim();
    if (comment) {
        const li = document.createElement('li');
        li.textContent = comment;
        commentsList.appendChild(li);
        commentInput.value = '';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && e.target !== hamburger) {
            navMenu.classList.remove('active');
        }
    });
    
    // Close menu when a nav item is clicked (for single page apps)
    document.querySelectorAll('.nav-menu a').forEach(item => {
        item.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});