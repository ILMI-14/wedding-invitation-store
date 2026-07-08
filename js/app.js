// Product Data
const products = [
  {
    id: 1,
    name: 'Undangan Elegan Minimalis',
    category: 'Minimalis',
    description: 'Desain minimalis dengan sentuhan emas yang elegan',
    price: 75000,
    style: 'minimal',
    image: '💌',
    badge: 'Bestseller',
    quantity: 100
  },
  {
    id: 2,
    name: 'Undangan Klasik Romantis',
    category: 'Romantis',
    description: 'Desain klasik dengan ornamen bunga yang memukau',
    price: 85000,
    style: 'traditional',
    image: '💐',
    badge: 'Populer',
    quantity: 150
  },
  {
    id: 3,
    name: 'Undangan Mewah Premium',
    category: 'Mewah',
    description: 'Kemewahan terbaik dengan bahan berkualitas premium',
    price: 125000,
    style: 'luxury',
    image: '👑',
    badge: 'Premium',
    quantity: 50
  },
  {
    id: 4,
    name: 'Undangan Modern Kontemporer',
    category: 'Modern',
    description: 'Desain kontemporer dengan warna-warna berani',
    price: 95000,
    style: 'modern',
    image: '✨',
    badge: 'Trending',
    quantity: 80
  },
  {
    id: 5,
    name: 'Undangan Vintage Kuno',
    category: 'Vintage',
    description: 'Gaya vintage dengan sentuhan klasik yang timeless',
    price: 90000,
    style: 'traditional',
    image: '🎭',
    badge: 'Eksklusif',
    quantity: 60
  },
  {
    id: 6,
    name: 'Undangan Warna-Warni Ceria',
    category: 'Modern',
    description: 'Desain ceria dengan palet warna yang penuh kehidupan',
    price: 80000,
    style: 'modern',
    image: '🎨',
    badge: 'Baru',
    quantity: 120
  },
  {
    id: 7,
    name: 'Undangan Bunga Matahari',
    category: 'Romantis',
    description: 'Motif bunga matahari yang ceria dan cerahkan hari',
    price: 82000,
    style: 'traditional',
    image: '🌻',
    badge: 'Musiman',
    quantity: 90
  },
  {
    id: 8,
    name: 'Undangan Sakura Jepang',
    category: 'Tradisional',
    description: 'Terinspirasi dari budaya Jepang dengan motif sakura',
    price: 110000,
    style: 'traditional',
    image: '🌸',
    badge: 'Spesial',
    quantity: 40
  },
  {
    id: 9,
    name: 'Undangan Emas Berkilau',
    category: 'Mewah',
    description: 'Desain berkilau dengan aksen emas yang memukau',
    price: 130000,
    style: 'luxury',
    image: '✨',
    badge: 'Eksklusif',
    quantity: 45
  },
  {
    id: 10,
    name: 'Undangan Mawar Merah',
    category: 'Romantis',
    description: 'Romantis dengan motif mawar merah yang memesona',
    price: 88000,
    style: 'traditional',
    image: '🌹',
    badge: 'Populer',
    quantity: 130
  },
  {
    id: 11,
    name: 'Undangan Bunga Putih Elegan',
    category: 'Elegan',
    description: 'Kesederhanaan dan elegance dalam satu desain',
    price: 92000,
    style: 'minimal',
    image: '🤍',
    badge: 'Bestseller',
    quantity: 100
  },
  {
    id: 12,
    name: 'Undangan Berwarna Ombré',
    category: 'Modern',
    description: 'Gradasi warna yang smooth dan mempesona',
    price: 98000,
    style: 'modern',
    image: '🌈',
    badge: 'Baru',
    quantity: 70
  },
  {
    id: 13,
    name: 'Undangan Kristal Berkilau',
    category: 'Mewah',
    description: 'Efek kristal dan berkilau memberikan kesan mewah',
    price: 135000,
    style: 'luxury',
    image: '💎',
    badge: 'Premium',
    quantity: 35
  },
  {
    id: 14,
    name: 'Undangan Daun Hijau Segar',
    category: 'Minimalis',
    description: 'Segar dengan sentuhan daun hijau yang natural',
    price: 78000,
    style: 'minimal',
    image: '🍃',
    badge: 'Eco-Friendly',
    quantity: 110
  },
  {
    id: 15,
    name: 'Undangan Tengah Malam Misteri',
    category: 'Modern',
    description: 'Desain misterius dengan warna-warna gelap yang elegan',
    price: 100000,
    style: 'modern',
    image: '🌙',
    badge: 'Eksklusif',
    quantity: 55
  }
];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const sortPrice = document.getElementById('sort-price');
const filterStyle = document.getElementById('filter-style');
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart');
const productModal = document.getElementById('product-modal');
const closeModalBtn = document.getElementById('close-modal');

// Render Products
function renderProducts(productsToRender = products) {
  productsGrid.innerHTML = '';
  
  if (productsToRender.length === 0) {
    productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px;"><p style="font-size: 18px; color: #999;">Tidak ada produk yang sesuai dengan pencarian Anda</p></div>';
    return;
  }
  
  productsToRender.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <div class="product-image" style="cursor: pointer;" onclick="openProductModal(${product.id})">
        ${product.image}
        <span class="product-badge">${product.badge}</span>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-meta">
          <span class="style-tag">${product.style}</span>
          <span style="font-size: 12px; color: #666;">Stok: ${product.quantity}</span>
        </div>
        <div class="product-price">Rp ${product.price.toLocaleString('id-ID')}</div>
        <div class="product-actions">
          <button class="btn-primary" onclick="openProductModal(${product.id})">
            <i class="fas fa-eye"></i> Lihat Detail
          </button>
          <button class="btn-secondary" onclick="quickAddToCart(${product.id})">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    `;
    productsGrid.appendChild(productCard);
  });
}

// Filter & Sort Functions
function filterAndSortProducts() {
  let filtered = products;

  // Search filter
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm)
    );
  }

  // Style filter
  const selectedStyle = filterStyle.value;
  if (selectedStyle) {
    filtered = filtered.filter(p => p.style === selectedStyle);
  }

  // Sort
  const sortValue = sortPrice.value;
  if (sortValue === 'low-to-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'high-to-low') {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

// Event Listeners for Filter
searchBtn.addEventListener('click', filterAndSortProducts);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    filterAndSortProducts();
  }
});
sortPrice.addEventListener('change', filterAndSortProducts);
filterStyle.addEventListener('change', filterAndSortProducts);

// Product Modal Functions
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-description').textContent = product.description;
  document.getElementById('modal-image').textContent = product.image;
  document.getElementById('modal-style').textContent = product.style;
  document.getElementById('modal-quantity').textContent = `Stok: ${product.quantity}`;
  document.getElementById('modal-price').textContent = `Rp ${product.price.toLocaleString('id-ID')}`;
  document.getElementById('quantity').value = 1;
  document.getElementById('quantity').dataset.productId = productId;

  productModal.classList.add('show');
}

closeModalBtn.addEventListener('click', () => {
  productModal.classList.remove('show');
});

productModal.addEventListener('click', (e) => {
  if (e.target === productModal) {
    productModal.classList.remove('show');
  }
});

// Quantity Controls in Modal
const quantityInput = document.getElementById('quantity');
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus = document.getElementById('qty-plus');

qtyMinus.addEventListener('click', () => {
  const current = parseInt(quantityInput.value);
  if (current > 1) {
    quantityInput.value = current - 1;
  }
});

qtyPlus.addEventListener('click', () => {
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

quantityInput.addEventListener('input', (e) => {
  if (e.target.value < 1) {
    e.target.value = 1;
  }
});

// Add to Cart
const addToCartModalBtn = document.getElementById('add-to-cart-modal');
addToCartModalBtn.addEventListener('click', () => {
  const productId = parseInt(document.getElementById('quantity').dataset.productId);
  const quantity = parseInt(document.getElementById('quantity').value);
  addToCart(productId, quantity);
  productModal.classList.remove('show');
});

function quickAddToCart(productId) {
  addToCart(productId, 1);
}

// Cart Functions
function addToCart(productId, quantity) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find(item => item.id === productId);

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

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
  showNotification(`${product.name} ditambahkan ke keranjang!`);
}

// Notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #c41e3a, #ff69b4);
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    z-index: 10000;
    animation: slideInDown 0.3s ease;
    font-weight: 500;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideInUp 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Cart Modal
cartIcon.addEventListener('click', () => {
  cartModal.classList.add('show');
});

closeCartBtn.addEventListener('click', () => {
  cartModal.classList.remove('show');
});

cartModal.addEventListener('click', (e) => {
  if (e.target === cartModal) {
    cartModal.classList.remove('show');
  }
});

// Initialize
renderProducts();
updateCartUI();