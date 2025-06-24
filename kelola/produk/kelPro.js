document.addEventListener('DOMContentLoaded', function() {
            // Sidebar hamburger toggle
            const sidebar = document.querySelector('.sidebar');
            const sidebarHamburger = document.querySelector('.sidebar-hamburger');
            if (sidebar && sidebarHamburger) {
                sidebarHamburger.addEventListener('click', function(e) {
                    e.stopPropagation();
                    sidebar.classList.toggle('active');
                });
                document.addEventListener('click', function(e) {
                    if (!sidebar.contains(e.target) && e.target !== sidebarHamburger) {
                        sidebar.classList.remove('active');
                    }
                });
                sidebar.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        sidebar.classList.remove('active');
                    });
                });
            }
            
            function openTab(tabName) {
                // Sembunyikan semua tab content
                const tabContents = document.getElementsByClassName('tab-content');
                for (let i = 0; i < tabContents.length; i++) {
                    tabContents[i].classList.remove('active');
                }
                
                // Hapus kelas active dari semua tab
                const tabs = document.getElementsByClassName('tab');
                for (let i = 0; i < tabs.length; i++) {
                    tabs[i].classList.remove('active');
                }
                
                // Tampilkan tab content yang dipilih dan aktifkan tab-nya
                document.getElementById(tabName).classList.add('active');
                event.currentTarget.classList.add('active');
            }
            
            // Tambahkan event listener untuk tombol hapus
            const deleteButtons = document.querySelectorAll('.btn-delete');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function() {
                    if (confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
                        const row = this.closest('tr');
                        row.remove();
                        alert('Produk berhasil dihapus!');
                    }
                });
            });
        });