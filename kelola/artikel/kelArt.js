        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('article-modal');
            const btnAdd = document.getElementById('tambah-artikel');
            const closeModal = document.querySelectorAll('.close-modal');
            
            // Buka modal saat tombol tambah diklik
            btnAdd.addEventListener('click', function() {
                modal.style.display = 'block';
            });
            
            // Tutup modal saat tombol close diklik
            closeModal.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    modal.style.display = 'none';
                });
            });
            
            // Tutup modal saat klik di luar modal
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
            
            // Submit form
            document.getElementById('article-form').addEventListener('submit', function(e) {
                e.preventDefault();
                // Tambahkan logika submit form disini
                alert('Artikel berhasil disimpan!');
                modal.style.display = 'none';
            });
        });