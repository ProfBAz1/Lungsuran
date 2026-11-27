# 🏷️ Lungsuran — Preloved & Handmade Lokal Terpercaya

**Lungsuran** adalah aplikasi web *Consumer-to-Consumer* (C2C) hiper-lokal yang menghubungkan warga sekitar untuk mewariskan barang *preloved* terawat sekaligus memasarkan karya kerajinan tangan (*handmade*) skala kecil. Dibangun dengan prinsip transparansi kondisi barang, tanpa ongkos kirim jarak jauh, serta sistem *Safe Meetup* (COD) berbasis verifikasi OTP Escrow.

---

## ✨ Fitur Utama

- **📍 Filter Radius Hiper-Lokal (`1 km – 15 km`)**
  Temukan barang dari tetangga atau lingkungan kampus terdekat menggunakan *slider* jarak maupun tombol pintas radius untuk menekan jejak karbon dan biaya pengiriman.
- **📸 Transparansi Radikal (*Real Pict* & Checklist Minus)**
  Setiap produk mewajibkan foto asli kamera tanpa filter, persentase kemulusan fisik, daftar periksa (*checklist*) kelengkapan, serta catatan kekurangan (*minus*) secara jujur di awal.
- **💬 Chat Negosiasi, Diskon Cepat & Sistem Barter**
  - **Tawar Harga (*Make an Offer*):** Dilengkapi tombol potong harga instan (`-5%`, `-10%`, `-15%`) atau input nominal khusus.
  - **Ajukan Barter:** Tukar barang dengan koleksi milik pribadi (mendukung unggah foto *real pict* barang tukar) maupun skema barter ditambah selisih uang tunai.
- **🛡️ Safe Meetup COD & Escrow 6-Digit OTP**
  Penjadwalan tatap muka di titik publik terverifikasi (minimarket ber-CCTV, area kampus, pos satpam) dengan kode OTP 6-digit unik untuk memastikan dana hanya cair setelah fisik barang dicek pembeli.
- **📱 Desain Responsif *Mobile-First***
  Dilengkapi bilah navigasi bawah (*bottom navigation bar*) pada perangkat seluler, penyimpanan lokal (`localStorage`), serta navigasi multi-halaman (*Katalog*, *Tentang Kami*, *Panduan Aman*, dan *Pusat Bantuan/FAQ*).
- **🔒 Arsitektur Keamanan Ketat**
  - **Anti-XSS DOM Rendering:** Seluruh data dinamis dirender murni menggunakan `document.createElement` dan `textContent` (bebas `innerHTML` berisiko).
  - **Security Headers (`vercel.json`):** Dilengkapi `Content-Security-Policy` (CSP), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Strict-Transport-Security`, dan `Permissions-Policy`.

---

## 🛠️ Teknologi yang Digunakan

| Lapisan | Teknologi |
| :--- | :--- |
| **Struktur & Markup** | HTML5 Semantik |
