        function getStarRating(rating) {
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;
            let stars = '';
            for (let i = 0; i < fullStars; i++) stars += '★';
            if (halfStar) stars += '★';
            for (let i = 0; i < 5 - Math.ceil(rating); i++) stars += '☆';
            return stars;
        }

        function filterProducts() {
            const categoryFilter = document.getElementById('category-filter').value;
            const sortFilter = document.getElementById('sort-filter').value;
            const searchInput = document.getElementById('search-input').value.toLowerCase();

            const products = Array.from(document.querySelectorAll('.product-card'));

            products.forEach(product => {
                const category = product.getAttribute('data-category');
                const name = product.getAttribute('data-name').toLowerCase();

                const matchCategory = categoryFilter === 'all' || category === categoryFilter;
                const matchSearch = name.includes(searchInput);

                if (matchCategory && matchSearch) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });

            if (sortFilter !== 'popular') {
                const container = document.getElementById('products-container');
                const sorted = [...products].filter(p => p.style.display !== 'none');

                sorted.sort((a, b) => {
                    const priceA = parseInt(a.getAttribute('data-price'));
                    const priceB = parseInt(b.getAttribute('data-price'));

                    if (sortFilter === 'low-high') return priceA - priceB;
                    if (sortFilter === 'high-low') return priceB - priceA;

                    return 0;
                });

                // Clear dan re-append sesuai urutan
                sorted.forEach(p => container.appendChild(p));
            }
        }

        document.getElementById('category-filter').addEventListener('change', filterProducts);
        document.getElementById('sort-filter').addEventListener('change', filterProducts);
        document.getElementById('search-input').addEventListener('input', filterProducts);
        document.querySelector('.search-box button').addEventListener('click', filterProducts);