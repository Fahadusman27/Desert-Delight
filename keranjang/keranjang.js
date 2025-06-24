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
        
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const input = this.parentElement.querySelector('.quantity-input');
                if (this.textContent === '+') {
                    input.value = parseInt(input.value) + 1;
                } else {
                    if (parseInt(input.value) > 1) {
                        input.value = parseInt(input.value) - 1;
                    }
                }
                updateCartSummary();
            });
        });
        
        // Fungsi untuk update ringkasan belanja
        function updateCartSummary() {
            // Di sini Anda bisa menambahkan logika untuk menghitung ulang total
            // berdasarkan jumlah produk yang diubah
            console.log('Jumlah produk diubah');
        }