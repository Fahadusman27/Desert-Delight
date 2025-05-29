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