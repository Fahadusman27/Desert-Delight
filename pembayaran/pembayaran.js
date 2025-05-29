        document.querySelectorAll('.payment-option').forEach(option => {
            option.addEventListener('click', function() {
                // Hapus kelas selected dari semua opsi
                document.querySelectorAll('.payment-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Tambahkan kelas selected ke opsi yang diklik
                this.classList.add('selected');
                
                // Pilih radio button yang sesuai
                const radio = this.querySelector('input[type="radio"]');
                radio.checked = true;
            });
        });
        
        // Fungsi untuk validasi form sebelum submit
        document.querySelector('.btn-primary').addEventListener('click', function(e) {
            const form = document.querySelector('.checkout-form');
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value) {
                    field.style.borderColor = 'red';
                    isValid = false;
                } else {
                    field.style.borderColor = '#ddd';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Silakan lengkapi semua field yang wajib diisi!');
            } else {
                // Lanjutkan proses pembayaran
                alert('Pembayaran berhasil diproses!');
                // window.location.href = 'thank-you.html';
            }
        });