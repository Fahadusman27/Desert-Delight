        const addUserBtn = document.getElementById('add-user-btn');
        const modal = document.getElementById('add-user-modal');
        const closeModal = document.querySelector('.close-modal');
        const cancelBtn = document.querySelector('.cancel-btn');
        
        addUserBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
        
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        cancelBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Form submission
        document.getElementById('add-user-form').addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically handle form submission to your backend
            alert('Pengguna berhasil ditambahkan!');
            modal.style.display = 'none';
            // Reset form
            e.target.reset();
        });