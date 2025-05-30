        document.addEventListener('DOMContentLoaded', function() {
            const cart = [];
            const cartBtn = document.getElementById('cart-btn');
            const cartModal = document.getElementById('cart-modal');
            const closeModal = document.querySelector('.close-modal');
            const clearCartBtn = document.getElementById('clear-cart');
            const checkoutBtn = document.getElementById('checkout');
            const cartItemsContainer = document.getElementById('cart-items');
            const cartTotalElement = document.getElementById('cart-total');
            const cartCountElement = document.getElementById('cart-count');
            const addToCartButtons = document.querySelectorAll('.add-to-cart');

            // Buka modal keranjang
            cartBtn.addEventListener('click', function() {
                cartModal.style.display = 'flex';
                updateCartDisplay();
            });

            // Tutup modal keranjang
            closeModal.addEventListener('click', function() {
                cartModal.style.display = 'none';
            });

            // Tutup modal saat klik di luar
            window.addEventListener('click', function(event) {
                if (event.target === cartModal) {
                    cartModal.style.display = 'none';
                }
            });

            // Kosongkan keranjang
            clearCartBtn.addEventListener('click', function() {
                cart.length = 0;
                updateCartDisplay();
                updateCartCount();
            });

            // Proses checkout
            checkoutBtn.addEventListener('click', function() {
                if (cart.length === 0) {
                    alert('Keranjang belanja Anda kosong!');
                } else {
                    alert('Terima kasih telah berbelanja! Total pembayaran: Rp ' + calculateTotal());
                    cart.length = 0;
                    updateCartDisplay();
                    updateCartCount();
                    cartModal.style.display = 'none';
                }
            });

            // Tambahkan item ke keranjang
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const name = this.getAttribute('data-name');
                    const price = parseInt(this.getAttribute('data-price'));
                    const img = this.getAttribute('data-img');

                    // Cek apakah item sudah ada di keranjang
                    const existingItem = cart.find(item => item.name === name);
                    if (existingItem) {
                        existingItem.quantity += 1;
                    } else {
                        cart.push({
                            name,
                            price,
                            img,
                            quantity: 1
                        });
                    }

                    updateCartCount();
                    showAddedToCartMessage(name);
                });
            });

            // Hitung total belanja
            function calculateTotal() {
                return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            }

            // Update tampilan keranjang
            function updateCartDisplay() {
                cartItemsContainer.innerHTML = '';
                
                if (cart.length === 0) {
                    cartItemsContainer.innerHTML = '<p>Keranjang belanja Anda kosong.</p>';
                    cartTotalElement.textContent = '0';
                    return;
                }

                cart.forEach(item => {
                    const cartItemElement = document.createElement('div');
                    cartItemElement.className = 'cart-item';
                    cartItemElement.innerHTML = `
                        <div class="cart-item-info">
                            <div class="cart-item-img">
                                <img src="${item.img}" alt="${item.name}">
                            </div>
                            <div>
                                <div class="cart-item-name">${item.name}</div>
                                <div class="cart-item-price">Rp ${item.price.toLocaleString()} x ${item.quantity}</div>
                            </div>
                        </div>
                        <div>
                            <button class="remove-item" data-name="${item.name}">Hapus</button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(cartItemElement);
                });

                // Tambahkan event listener untuk tombol hapus
                document.querySelectorAll('.remove-item').forEach(button => {
                    button.addEventListener('click', function() {
                        const itemName = this.getAttribute('data-name');
                        const itemIndex = cart.findIndex(item => item.name === itemName);
                        
                        if (itemIndex !== -1) {
                            if (cart[itemIndex].quantity > 1) {
                                cart[itemIndex].quantity -= 1;
                            } else {
                                cart.splice(itemIndex, 1);
                            }
                            updateCartDisplay();
                            updateCartCount();
                        }
                    });
                });

                cartTotalElement.textContent = calculateTotal().toLocaleString();
            }

            // Update jumlah item di keranjang
            function updateCartCount() {
                const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
                cartCountElement.textContent = totalItems;
            }

            // Tampilkan pesan ketika item ditambahkan
            function showAddedToCartMessage(itemName) {
                const message = document.createElement('div');
                message.style.position = 'fixed';
                message.style.bottom = '20px';
                message.style.right = '20px';
                message.style.backgroundColor = '#4CAF50';
                message.style.color = 'white';
                message.style.padding = '15px';
                message.style.borderRadius = '5px';
                message.style.zIndex = '1000';
                message.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
                message.textContent = `${itemName} telah ditambahkan ke keranjang!`;
                
                document.body.appendChild(message);
                
                setTimeout(() => {
                    message.style.opacity = '0';
                    message.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => {
                        document.body.removeChild(message);
                    }, 500);
                }, 2000);
            }
        });