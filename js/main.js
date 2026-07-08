// Product Data
const products = [
    {
        id: 1,
        name: '✨ Undangan Minimalis Elegan',
        category: 'minimalis',
        description: 'Desain minimalis modern dengan sentuhan emas yang elegan dan sophisticated',
        price: 75000,
        image: '💎',
        badge: '🌟 Bestseller',
        stock: 100
    },
    {
        id: 2,
        name: '💕 Undangan Romantis Premium',
        category: 'romantis',
        description: 'Desain romantis dengan ornamen bunga mawar merah yang memukau',
        price: 95000,
        image: '🌹',
        badge: '❤️ Populer',
        stock: 80
    },
    {
        id: 3,
        name: '🌟 Undangan Modern Kontemporer',
        category: 'modern',
        description: 'Desain modern dengan warna-warna berani dan layout yang fresh',
        price: 85000,
        image: '⭐',
        badge: '🔥 Trending',
        stock: 120
    },
    {
        id: 4,
        name: '👑 Undangan Klasik Mewah',
        category: 'klasik',
        description: 'Desain klasik dengan kemewahan terbaik dan finishing sempurna',
        price: 125000,
        image: '💍',
        badge: '💎 Premium',
        stock: 50
    },
    {
        id: 5,
        name: '🎭 Undangan Vintage Eksklusif',
        category: 'romantis',
        description: 'Gaya vintage dengan sentuhan klasik yang timeless dan elegan',
        price: 105000,
        image: '🎀',
        badge: '✨ Eksklusif',
        stock: 60
    },
    {
        id: 6,
        name: '🌸 Undangan Sakura Jepang',
        category: 'romantis',
        description: 'Terinspirasi dari budaya Jepang dengan motif sakura yang indah',
        price: 110000,
        image: '🌸',
        badge: '🎊 Spesial',
        stock: 45
    },
    {
        id: 7,
        name: '🌻 Undangan Bunga Liar',
        category: 'minimalis',
        description: 'Desain dengan motif bunga liar yang natural dan fresh',
        price: 80000,
        image: '🌼',
        badge: '⭐ Baru',
        stock: 90
    },
    {
        id: 8,
        name: '💎 Undangan Kristal Berkilau',
        category: 'mewah',
        description: 'Efek kristal berkilau memberikan kesan mewah dan istimewa',
        price: 150000,
        image: '💠',
        badge: '👑 Premium',
        stock: 35
    },
    {
        id: 9,
        name: '🏆 Undangan Emas Elegan',
        category: 'mewah',
        description: 'Desain berkilau dengan aksen emas yang memberikan kesan mewah',
        price: 135000,
        image: '✨',
        badge: '🎯 Eksklusif',
        stock: 40
    },
    {
        id: 10,
        name: '🤍 Undangan Putih Minimalis',
        category: 'minimalis',
        description: 'Kesederhanaan dan elegance dalam satu desain yang sempurna',
        price: 70000,
        image: '🕊️',
        badge: '🌟 Bestseller',
        stock: 150
    },
    {
        id: 11,
        name: '🌅 Undangan Sunset Romantis',
        category: 'modern',
        description: 'Warna sunset yang indah memberikan kesan romantis dan hangat',
        price: 90000,
        image: '🌅',
        badge: '🔥 Trending',
        stock: 75
    },
    {
        id: 12,
        name: '🌺 Undangan Bunga Putih Elegan',
        category: 'klasik',
        description: 'Bunga putih yang elegan menciptakan kesan pure dan graceful',
        price: 100000,
        image: '🌷',
        badge: '❤️ Populer',
        stock: 85
    }
];

let cart = [];
let currentProductId = null;

// DOM Elements
const invitationGrid = document.getElementById('invitation-grid');
const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');
const searchInput = document.getElementById('search-input');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const productModal = document.getElementById('product-modal');

// Render Products
function renderProducts(productsToShow = products) {
    invitationGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        invitationGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; font-size: 18px; color: #999;">🔍 Tidak ada produk yang ditemukan</div>';
        return;
    }
    
    productsToShow.forEach(product => {
        const card = document.createElement('div');
        card.className = 'invitation-card';
        card.innerHTML = `
            <div class="card-image">
                ${product.image}
                <span class="card-badge">${product.badge}</span>
            </div>
            <div class="card-content">
                <div class="card-category">${product.category}</div>
                <h3 class="card-title">${product.name}</h3>
                <p class="card-description">${product.description}</p>
                <div class="card-footer">
                    <div class="card-price">Rp ${product.price.toLocaleString('id-ID')}</div>
                    <div class="card-action">
                        <button class="btn-view" onclick="openProductModal(${product.id})">Lihat</button>
                        <button class="btn-add" onclick="quickAddToCart(${product.id})">+</button>
                    </div>
                </div>
            </div>
        `;
        invitationGrid.appendChild(card);
    });
}

// Filter and Sort
function filterAndSort() {
    let filtered = [...products];
    
    // Category filter
    const category = categoryFilter.value;
    if (category) {
        filtered = filtered.filter(p => p.category === category);
    }
    
    // Search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sort
    const sortValue = sortFilter.value;
    switch(sortValue) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filtered.reverse();
            break;
    }
    
    renderProducts(filtered);
}

categoryFilter.addEventListener('change', filterAndSort);
sortFilter.addEventListener('change', filterAndSort);
searchInput.addEventListener('input', filterAndSort);

// Open Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProductId = productId;
    document.getElementById('detail-img').textContent = product.image;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-desc').textContent = product.description;
    document.getElementById('detail-category').textContent = product.category.toUpperCase();
    document.getElementById('detail-stock').textContent = `📦 Stok: ${product.stock}`;
    document.getElementById('detail-price').textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
    document.getElementById('qty-input').value = 1;
    
    productModal.classList.add('show');
}

// Quantity Controls
document.getElementById('qty-minus').addEventListener('click', () => {
    const input = document.getElementById('qty-input');
    if (input.value > 1) input.value--;
});

document.getElementById('qty-plus').addEventListener('click', () => {
    document.getElementById('qty-input').value++;
});

// Add to Cart
function addToCart() {
    const product = products.find(p => p.id === currentProductId);
    if (!product) return;
    
    const quantity = parseInt(document.getElementById('qty-input').value);
    const existingItem = cart.find(item => item.id === currentProductId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    updateCart();
    closeModal('product-modal');
    showNotification(`✅ ${product.name} ditambahkan ke keranjang!`);
}

function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification(`✅ ${product.name} ditambahkan ke keranjang!`);
}

// Update Cart UI
function updateCart() {
    // Update badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-badge').textContent = totalItems;
    
    // Update cart items display
    const cartItemsList = document.getElementById('cart-items-list');
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<div style="text-align: center; padding: 40px; color: #999;"><p style="font-size: 48px; margin-bottom: 10px;">🛍️</p><p>Keranjang belanja Anda kosong</p></div>';
    } else {
        cartItemsList.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-image">${item.image}</div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                    <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
                        <button onclick="updateCartQty(${index}, -1)" style="border: none; background: none; cursor: pointer; font-size: 16px;">➖</button>
                        <span>${item.quantity}x</span>
                        <button onclick="updateCartQty(${index}, 1)" style="border: none; background: none; cursor: pointer; font-size: 16px;">➕</button>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})" style="border: none; background: none; cursor: pointer; font-size: 20px; color: #e74c3c;">❌</button>
            </div>
        `).join('');
    }
    
    updateCartSummary();
}

function updateCartQty(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            removeFromCart(index);
        } else {
            updateCart();
        }
    }
}

function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1);
    updateCart();
    showNotification(`🗑️ ${item.name} dihapus dari keranjang`);
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
    document.getElementById('tax').textContent = `Rp ${Math.round(tax).toLocaleString('id-ID')}`;
    document.getElementById('total').textContent = `Rp ${Math.round(total).toLocaleString('id-ID')}`;
}

// Modal Functions
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

cartBtn.addEventListener('click', () => {
    cartModal.classList.add('show');
});

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #c41e3a, #ff69b4);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideDown 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Handle form submit
function handleSubmit(event) {
    event.preventDefault();
    showNotification('📧 Pesan Anda telah terkirim! Terima kasih telah menghubungi kami.');
    event.target.reset();
}

// Initialize
renderProducts();
updateCart();

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-20px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);