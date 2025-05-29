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