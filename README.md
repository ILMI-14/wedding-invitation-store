# 💐 Toko Undangan Pernikahan Terlengkap

Web e-commerce yang indah dan fungsional untuk menjual undangan pernikahan dengan berbagai kategori dan desain.

## ✨ Fitur Utama

### 🎨 Tema dan Kustomisasi
- **5 Tema Warna Berbeda:**
  - 🌹 Romantis (Merah-Gold)
  - ✨ Elegan (Putih-Silver)
  - 🎭 Vintage (Krem-Bronze)
  - 🌟 Modern (Biru-Gold)
  - 🌅 Sunset (Orange-Pink)

- **Mode Gelap/Terang:** Toggle otomatis antara mode siang dan malam
- **Penyimpanan Preferensi:** Tema dan mode disimpan di localStorage

### 🎬 Animasi dan Efek Visual
- Hati melayang di hero section
- Bunga-bunga bergerak floating
- Efek shine pada card produk
- Smooth transitions dan hover effects
- Animasi stagger untuk grid produk
- Pulse effect pada badge produk

### 🛍️ Fitur E-Commerce
- **15+ Kategori Undangan:** Berbagai pilihan gaya (Minimalis, Romantis, Mewah, Modern, Tradisional)
- **Harga Dinamis:** Setiap kategori memiliki harga berbeda
- **Pencarian:** Cari undangan berdasarkan nama, kategori, atau deskripsi
- **Filter:** Filter berdasarkan gaya desain
- **Sorting:** Urutkan dari harga terendah ke tertinggi atau sebaliknya
- **Detail Produk Modal:** Lihat informasi lengkap produk dalam modal popup
- **Keranjang Belanja:** Tambah, hapus, dan ubah jumlah item
- **Perhitungan Otomatis:** Subtotal, pajak (10%), dan total

### 📱 Responsive Design
- Bekerja sempurna di desktop, tablet, dan mobile
- Grid layout yang adaptif
- Navigation yang user-friendly

### 💾 Penyimpanan Data
- LocalStorage untuk menyimpan keranjang belanja
- Persisten tema dan mode pilihan pengguna

## 🚀 Cara Menggunakan

1. **Buka File:** Buka `index.html` di browser modern
2. **Pilih Tema:** Gunakan dropdown "Tema Warna" di header untuk mengubah skema warna
3. **Toggle Mode:** Klik tombol bulan/matahari untuk mengganti mode gelap/terang
4. **Cari Produk:** Gunakan search bar atau filter untuk menemukan undangan yang sesuai
5. **Lihat Detail:** Klik tombol "Lihat Detail" untuk informasi produk lengkap
6. **Tambah ke Keranjang:** Gunakan tombol "Tambah ke Keranjang" atau quick add
7. **Manage Keranjang:** Klik ikon keranjang untuk melihat, mengedit, atau checkout

## 📁 Struktur File

```
├── index.html           # File HTML utama
├── css/
│   ├── styles.css       # Style utama
│   ├── dark-theme.css   # Dark mode styles
│   └── animations.css   # Animasi dan keyframes
├── js/
│   ├── theme.js         # Manajemen tema dan dark mode
│   ├── app.js           # Logika aplikasi utama
│   └── cart.js          # Manajemen keranjang belanja
└── README.md            # File ini
```

## 🎨 Palet Warna

### Tema Romantis (Default)
- Primary: #c41e3a (Merah)
- Secondary: #ffd700 (Gold)
- Accent: #ff69b4 (Pink)

### Tema Elegan
- Primary: #f5f5f5 (Putih)
- Secondary: #c0c0c0 (Silver)
- Accent: #e6e6fa (Lavender)

### Tema Vintage
- Primary: #8b7355 (Brown)
- Secondary: #cd7f32 (Bronze)
- Accent: #f4e4c1 (Cream)

### Tema Modern
- Primary: #1a3a5c (Navy Blue)
- Secondary: #ffd700 (Gold)
- Accent: #4a90e2 (Light Blue)

### Tema Sunset
- Primary: #ff6b35 (Orange)
- Secondary: #ff8c42 (Light Orange)
- Accent: #ff1493 (Deep Pink)

## 🛠️ Teknologi

- **HTML5** - Markup struktur
- **CSS3** - Styling dan animasi
- **JavaScript (Vanilla)** - Interaktivitas dan logika
- **Font Awesome** - Icon library
- **LocalStorage API** - Penyimpanan data lokal

## 📋 Produk Default

Terdapat 15 produk undangan default dengan:
- Nama dan deskripsi unik
- Harga berbeda (75,000 - 135,000)
- Kategori beragam (Minimalis, Romantis, Mewah, Modern, Tradisional)
- Emoji representasi
- Badge khusus (Bestseller, Trending, Premium, dll)
- Stok tersedia

## 🎯 Fitur Masa Depan

- [ ] Integrasi backend untuk database produk dinamis
- [ ] Sistem pembayaran real
- [ ] User authentication dan account management
- [ ] Rating dan review produk
- [ ] Wishlist
- [ ] Notifikasi real-time
- [ ] Admin panel untuk manajemen produk
- [ ] Order history
- [ ] Social sharing

## 💡 Tips Penggunaan

1. **Harga dapat diubah:** Edit nilai `price` di array `products` di `js/app.js`
2. **Tambah produk baru:** Tambahkan object baru ke array `products`
3. **Kustomisasi warna:** Ubah nilai CSS variables di `:root` di `css/styles.css`
4. **Animasi:** Sesuaikan duration dan delay di `css/animations.css`

## 📱 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## 📝 License

Free to use and modify for personal and commercial projects.

## 💌 Catatan Khusus

Web ini dirancang dengan nuansa pernikahan yang elegan. Setiap elemen visual dipilih untuk mencerminkan keindahan dan keanggunan momen spesial pernikahan. Animasi hati dan bunga melayang memberikan sentuhan romantis yang membuat pengalaman berbelanja menjadi lebih menyenangkan.

---

**Dibuat dengan ❤️ untuk membuat momen spesial Anda lebih bermakna**