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