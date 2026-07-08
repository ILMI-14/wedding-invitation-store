// Cart UI Management

function updateCartUI() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = document.querySelector('.cart-count');
  const cartItemsContainer = document.getElementById('cart-items');

  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  // Update cart items display
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: #999;">
        <p style="font-size: 48px; margin-bottom: 15px;">🛒</p>
        <p>Keranjang belanja Anda kosong</p>
        <p style="font-size: 12px; margin-top: 10px;">Mulai berbelanja untuk menambahkan produk</p>
      </div>
    `;
  } else {
    cartItemsContainer.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <div class="cart-item-image">${item.image}</div>
        <div class="cart-item-details">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
          <div class="cart-item-quantity">
            <button onclick="updateCartItemQuantity(${index}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="updateCartItemQuantity(${index}, 1)">+</button>
          </div>
        </div>
        <span class="cart-item-remove" onclick="removeFromCart(${index})">×</span>
      </div>
    `).join('');
  }

  updateCartSummary();
}

function updateCartItemQuantity(index, change) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart[index]) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      removeFromCart(index);
      return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  }
}

function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const removedItem = cart[index];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
  showNotification(`${removedItem.name} dihapus dari keranjang`);
}

function updateCartSummary() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  document.getElementById('subtotal').textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
  document.getElementById('tax').textContent = `Rp ${Math.round(tax).toLocaleString('id-ID')}`;
  document.getElementById('total').textContent = `Rp ${Math.round(total).toLocaleString('id-ID')}`;
}

// Checkout
const checkoutBtn = document.querySelector('.checkout-btn');
checkoutBtn.addEventListener('click', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (cart.length === 0) {
    showNotification('Keranjang Anda masih kosong!');
    return;
  }

  // Simulate checkout
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.1;
  showNotification(`Pesanan Anda untuk Rp ${Math.round(total).toLocaleString('id-ID')} sedang diproses!`);
  
  // Clear cart after checkout
  setTimeout(() => {
    localStorage.removeItem('cart');
    updateCartUI();
    document.getElementById('cart-modal').classList.remove('show');
    showNotification('Terima kasih telah berbelanja! 💕');
  }, 2000);
});

// Notification function (imported from app.js context)
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

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', updateCartUI);