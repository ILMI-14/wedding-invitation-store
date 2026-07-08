# 💐 Toko Undangan Pernikahan Premium

Web e-commerce modern untuk penjualan undangan pernikahan dengan desain elegan dan fitur lengkap.

## ✨ Fitur Utama

### 🎨 Desain & Tampilan
- Desain modern dan elegan terinspirasi dari our-wedding.link
- Animasi floating elements yang menarik
- 5 kategori produk berbeda (Minimalis, Romantis, Modern, Klasik, Mewah)
- 12 produk undangan dengan gambar emoji dan deskripsi lengkap

### 🌙 Dark Mode
- Toggle dark/light mode
- Tema disimpan di localStorage
- Transisi smooth antar tema

### 🛒 Shopping Cart
- Tambah/hapus produk
- Update jumlah quantity
- Perhitungan otomatis subtotal, pajak 10%, dan total
- Persisten cart di localStorage

### 🔍 Filter & Search
- Filter by kategori
- Search by nama atau deskripsi
- Sort by harga (rendah-tinggi atau sebaliknya)
- Sort by trending atau newest

### 📱 Responsive Design
- Mobile-first approach
- Responsive di semua ukuran layar
- Navigation yang user-friendly

### 📋 Sections
1. **Navigation** - Header dengan logo, menu, theme toggle, dan cart
2. **Hero** - Banner dengan CTA buttons dan floating elements
3. **Collections** - Grid produk dengan filter dan search
4. **Features** - 6 keunggulan bisnis
5. **Pricing** - 3 paket harga (Starter, Standar, Premium)
6. **Testimonials** - Review dari pelanggan
7. **Contact** - Formulir kontak dan info perusahaan
8. **Footer** - Links, social media, dan info bisnis

## 🚀 Cara Menggunakan

1. **Buka file** `index.html` di browser
2. **Jelajahi koleksi** undangan di section Collections
3. **Filter & Search** untuk menemukan produk yang sesuai
4. **Lihat detail** produk dengan klik tombol "Lihat"
5. **Tambah ke keranjang** dengan mengisi quantity dan klik button
6. **Manage keranjang** dengan klik icon shopping bag di navbar
7. **Toggle dark mode** dengan klik icon moon/sun

## 📁 Struktur File

```
├── index.html          # File HTML utama
├── css/
│   └── main.css       # Styling lengkap
├── js/
│   ├── main.js        # Logika aplikasi utama
│   ├── theme.js       # Dark mode toggle
│   └── cart.js        # Cart persistence
└── README.md          # File ini
```

## 🎨 Palet Warna

- **Primary**: #c41e3a (Merah)
- **Secondary**: #ffd700 (Gold)
- **Accent**: #ff69b4 (Pink)
- **Dark**: #1a1a1a (Hitam)
- **Light**: #f5f5f5 (Putih)
- **Text**: #333333 (Abu-abu Gelap)
- **Gray**: #888888 (Abu-abu)

## 📦 Produk Default

12 produk undangan dengan berbagai kategori:
- Minimalis (3 produk)
- Romantis (3 produk)
- Modern (2 produk)
- Klasik (2 produk)
- Mewah (2 produk)

Harga berkisar dari Rp 70.000 - Rp 150.000

## 🌐 Technologies

- **HTML5** - Markup
- **CSS3** - Styling dan animasi
- **JavaScript** - Interaktivitas
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Playfair Display, Poppins, Cormorant Garamond)
- **LocalStorage** - Data persistence

## 💡 Fitur Tambahan

### Modal
- Product detail modal dengan informasi lengkap
- Shopping cart modal dengan summary

### Notifikasi
- Toast notification saat item ditambahkan
- User feedback untuk setiap aksi

### Animations
- Floating elements di hero section
- Hover effects pada cards
- Smooth transitions
- Wave animation di hero

## 🔧 Customization

### Menambah Produk Baru
Edit array `products` di `js/main.js`:
```javascript
{
    id: 13,
    name: 'Nama Undangan',
    category: 'kategori',
    description: 'Deskripsi produk',
    price: 99000,
    image: '🎀',
    badge: 'Badge',
    stock: 100
}
```

### Mengubah Harga
Edit property `price` di masing-masing produk

### Mengubah Warna
Edit CSS variables di `css/main.css`:
```css
:root {
    --primary: #c41e3a;
    --secondary: #ffd700;
    --accent: #ff69b4;
}
```

## 📱 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## 📝 License

Free to use and modify for personal and commercial use.

---

**Dibuat dengan ❤️ untuk momen spesial Anda**