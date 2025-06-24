        function searchArticles() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const articles = document.querySelectorAll('.article-item');
            let found = false;
            articles.forEach(article => {
                const title = article.querySelector('.article-title').textContent.toLowerCase();
                const desc = article.querySelector('.article-desc').textContent.toLowerCase();
                const match = title.includes(query) || desc.includes(query);
                article.style.display = match ? 'flex' : 'none';
                if (match) found = true;
            });

            if (!found) {
                document.getElementById('articleList').innerHTML = '<li>Tidak ada artikel ditemukan.</li>';
            }
        }

        document.getElementById('searchInput').addEventListener('input', searchArticles);

        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            if (hamburger && navMenu) {
                hamburger.addEventListener('click', function(e) {
                    e.stopPropagation();
                    navMenu.classList.toggle('active');
                });
                document.addEventListener('click', function(e) {
                    if (!navMenu.contains(e.target) && e.target !== hamburger) {
                        navMenu.classList.remove('active');
                    }
                });
                navMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        navMenu.classList.remove('active');
                    });
                });
            }
        }); 