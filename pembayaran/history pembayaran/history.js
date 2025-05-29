        // Fungsi untuk filter transaksi
        document.getElementById('status-filter').addEventListener('change', function() {
            const status = this.value;
            const transactions = document.querySelectorAll('.transaction-item');
            
            transactions.forEach(transaction => {
                const transactionStatus = transaction.querySelector('.transaction-status').classList;
                
                if (status === 'all' || 
                    (status === 'completed' && transactionStatus.contains('status-completed')) ||
                    (status === 'pending' && transactionStatus.contains('status-pending')) ||
                    (status === 'failed' && transactionStatus.contains('status-failed'))) {
                    transaction.style.display = 'block';
                } else {
                    transaction.style.display = 'none';
                }
            });
        });
        
        // Fungsi untuk tombol aksi
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const action = this.textContent;
                const transactionId = this.closest('.transaction-item').querySelector('.transaction-id').textContent;
                
                if (action === 'Lihat Detail') {
                    alert(`Melihat detail transaksi ${transactionId}`);
                    // window.location.href = `order-detail.html?id=${transactionId.replace('ID: #', '')}`;
                } else if (action === 'Beli Lagi') {
                    alert(`Menambahkan produk dari transaksi ${transactionId} ke keranjang`);
                } else if (action === 'Bayar Sekarang') {
                    alert(`Mengarahkan ke pembayaran untuk transaksi ${transactionId}`);
                    // window.location.href = `payment.html?id=${transactionId.replace('ID: #', '')}`;
                } else if (action === 'Batalkan') {
                    if (confirm(`Apakah Anda yakin ingin membatalkan transaksi ${transactionId}?`)) {
                        alert(`Transaksi ${transactionId} telah dibatalkan`);
                    }
                } else if (action === 'Coba Lagi') {
                    alert(`Mengulangi pembayaran untuk transaksi ${transactionId}`);
                    // window.location.href = `payment.html?id=${transactionId.replace('ID: #', '')}`;
                } else if (action === 'Hapus') {
                    if (confirm(`Apakah Anda yakin ingin menghapus transaksi ${transactionId} dari riwayat?`)) {
                        alert(`Transaksi ${transactionId} telah dihapus`);
                    }
                }
            });
        });