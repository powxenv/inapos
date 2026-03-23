# INAPOS

English: [README.md](README.md)

Dokumentasi developer: [docs/README.md](docs/README.md) | Panduan kontribusi: [CONTRIBUTING.md](CONTRIBUTING.md)

INAPOS adalah aplikasi operasional toko untuk toko kecil, kios, dan warung. Aplikasi ini menggabungkan kasir, barang, stok, pelanggan, pembelian, pencatatan kas, pengeluaran, laporan, akses tim, sinkronisasi perangkat, dan alur kerja AI-first dalam satu workspace. Di aplikasi desktop, staf juga bisa menjalankan bagian operasional toko yang didukung langsung lewat chat dengan memakai data toko nyata, bukan tebakan.

README ini ditulis untuk pengguna produk. Isinya menjelaskan fungsi setiap bagian INAPOS, hal-hal yang bisa dilakukan saat ini, dan alur kerja harian yang paling penting.

## INAPOS Cocok Untuk Siapa

- Pemilik toko yang ingin mengelola penjualan dan operasional harian di satu tempat
- Kasir yang membutuhkan layar checkout cepat dan riwayat transaksi
- Tim retail kecil yang berbagi satu toko dan membutuhkan akses anggota yang sederhana
- Toko yang ingin memantau stok, pelanggan, dan laporan usaha ringan

## Masalah Apa yang Dibantu INAPOS

- Menjalankan checkout dari satu layar
- Mengelola barang, stok, pemasok, dan pembelian
- Melacak pelanggan dan belanja berulang
- Mencatat arus kas dan pengeluaran harian
- Meninjau aktivitas harian, peringatan, dan laporan usaha sederhana
- Berpindah antar toko jika Anda tergabung di lebih dari satu toko
- Menggunakan alur kerja chat AI-first untuk pertanyaan, ringkasan, dan aksi toko yang didukung

## Mulai Dari Sini

1. Buat akun atau masuk.
2. Beri nama toko Anda.
3. Tambahkan barang yang dijual di `Items`.
4. Isi jumlah stok dan reorder point di `Stock`.
5. Gunakan `Checkout` untuk menyimpan penjualan.
6. Pantau `Orders`, `Alerts`, dan `Reports` sepanjang hari.
7. Di aplikasi desktop, gunakan `Assistant` atau `Chat view` saat ingin bekerja lewat chat tanpa membuka layar modul satu per satu.

## Susunan Aplikasi

INAPOS memiliki tiga mode tampilan:

- `Full view`: workspace toko lengkap dengan semua modul
- `Checkout view`: tampilan kasir yang lebih fokus, hanya `Checkout` dan `Orders`
- `Chat view`: tampilan khusus asisten untuk kerja toko berbasis AI-first

Mode yang dipilih disimpan di perangkat saat ini.

Dalam `Full view`, modul dikelompokkan seperti ini:

- `Overview`: Dashboard, Alerts, Today
- `Sales`: Checkout, Orders, Customers, Offers
- `Products`: Items, Stock, Purchases, Suppliers
- `Finance`: Cash, Expenses, Reports
- `Store`: Team, This device, Store details, Assistant setup
- `Assistant`: workspace chat khusus

## Panduan Modul

### Overview

**Dashboard**

- Menampilkan total penjualan hari ini
- Menampilkan jumlah transaksi hari ini
- Menampilkan jumlah barang dengan stok rendah
- Menampilkan saldo kas saat ini
- Menampilkan status sinkronisasi perangkat
- Menampilkan daftar penjualan terbaru beserta nomor struk, waktu, metode pembayaran, dan total

**Alerts**

- Menyorot barang dengan stok rendah atau habis
- Menampilkan pesanan yang masih berjalan
- Memberi peringatan saat sinkronisasi perangkat mengalami masalah upload atau download

**Today**

- Menampilkan feed aktivitas hari ini dari penjualan, pembelian, pengeluaran, arus kas, dan penawaran
- Memberi ringkasan cepat tentang apa yang terjadi hari ini tanpa harus membuka semua modul

### Sales

**Checkout**

- Cari barang berdasarkan nama, SKU, atau satuan
- Tambahkan barang ke keranjang
- Kaitkan pelanggan yang sudah tersimpan bila diperlukan
- Pilih metode pembayaran: `Cash`, `Bank transfer`, atau `QRIS`
- Tinjau subtotal, total kuantitas, dan isi keranjang sebelum menyimpan
- Simpan penjualan dengan nomor transaksi

Saat penjualan disimpan, INAPOS juga:

- membuat data penjualan
- menyimpan item-item penjualan
- mengurangi stok
- memperbarui total belanja pelanggan yang dipilih

**Orders**

- Menyimpan daftar transaksi dan pesanan manual yang bisa dicari
- Memungkinkan penambahan, pengubahan, dan penghapusan order
- Melacak pelanggan, tanggal, metode pembayaran, status, dan total
- Mendukung status seperti draft, proses, siap diambil, selesai, dan dibatalkan

Metode pembayaran order meliputi `Cash`, `Bank transfer`, `QRIS`, dan `Pay later`.

**Customers**

- Tambah, ubah, cari, dan hapus pelanggan
- Simpan nama, nomor telepon, dan alamat
- Lihat total belanja setiap pelanggan
- Gunakan kembali pelanggan saat checkout

**Offers**

- Buat dan kelola penawaran toko dengan nama, status, tipe diskon, nilai, tanggal, dan catatan
- Menyimpan penawaran aktif dan yang direncanakan di satu tempat
- Cari, ubah, dan hapus penawaran

Penting: penawaran dicatat di INAPOS, tetapi belum diterapkan otomatis saat checkout pada versi saat ini.

### Products

**Items**

- Tambah dan ubah produk yang dijual
- Simpan harga jual, harga modal, SKU, barcode, kategori, dan satuan
- Cari berdasarkan nama, SKU, barcode, atau kategori
- Gunakan pilihan satuan praktis seperti `pcs`, `pack`, `dus`, `kg`, `liter`, `botol`, dan `sachet`

**Stock**

- Lihat semua produk dengan stok saat ini, reorder point, satuan, dan status stok
- Lihat apakah item berstatus `In stock`, `Running low`, atau `Out of stock`
- Cari berdasarkan nama barang, SKU, atau satuan
- Ubah stok dan reorder point dari setiap baris produk
- Tinjau ringkasan jumlah item yang terlacak, stok rendah, stok habis, dan stok sehat

**Purchases**

- Menyimpan catatan sederhana pembelian stok
- Simpan tanggal pembelian, nomor invoice, pemasok, status, dan total
- Gunakan status `Draft`, `Ordered`, dan `Received`
- Cari, ubah, dan hapus data pembelian

Penting: pembelian saat ini hanya berfungsi sebagai pencatatan. Menyimpan pembelian tidak otomatis menambah stok.

**Suppliers**

- Menyimpan daftar kontak pemasok
- Simpan nama pemasok, nomor telepon, kota, dan termin pembayaran
- Gunakan termin sederhana seperti `Cash`, `7 days`, `14 days`, dan `30 days`
- Cari, ubah, dan hapus pemasok

### Finance

**Cash**

- Melacak pemasukan dan pengeluaran kas secara manual
- Tambah, ubah, cari, dan hapus entri
- Simpan judul, tipe entri, nominal, tanggal, dan catatan opsional
- Lihat saldo kas saat ini, uang masuk hari ini, uang keluar hari ini, dan jumlah entri tersimpan

**Expenses**

- Mencatat pengeluaran harian di satu tempat
- Tambah, ubah, cari, dan hapus pengeluaran
- Simpan judul, kategori, nominal, dan tanggal
- Gunakan kategori seperti listrik, air, transport, kemasan, gaji, perawatan, dan lainnya
- Lihat total pengeluaran hari ini, total bulan ini, dan jumlah entri tersimpan

**Reports**

- Meninjau ringkasan penjualan, biaya, pengeluaran, kas, dan pembelian
- Berpindah antara `Today`, `Last 7 days`, `Last 30 days`, dan `This month`
- Lihat total penjualan, jumlah order, estimasi biaya barang, estimasi laba kotor, pengeluaran, estimasi sisa uang, dan total pembelian stok
- Lihat rincian metode pembayaran, kategori pengeluaran, dan produk terlaris
- Dapatkan ringkasan cepat seperti rata-rata nilai penjualan dan persentase penjualan yang habis untuk pengeluaran

Penting: laporan saat ini berbasis kartu dan tabel. Belum ada chart, export, print, atau laporan terjadwal.

### Store

Beberapa kontrol toko bersifat berbasis peran. `Store details` dan `This device` hanya terlihat untuk owner atau admin, dan aksi pengelolaan tim juga dibatasi untuk peran tersebut.

**Team**

- Lihat anggota saat ini dan undangan yang masih menunggu
- Undang orang lewat email sebagai `Admin` atau `Team member`
- Ubah peran, hapus anggota, dan batalkan undangan jika Anda punya akses admin

Anggota biasa tetap bisa melihat informasi tim, tetapi hanya owner dan admin yang dapat mengelolanya.

**This device**

- Lihat apakah perangkat sedang terhubung
- Lihat apakah perubahan lokal sedang dikirim
- Lihat apakah pembaruan sedang diunduh
- Ketahui apakah perangkat berstatus offline, checking, up to date, atau needs attention

Layar ini bersifat informasional. Belum ada tombol sinkronisasi manual atau alat manajemen perangkat.

**Store details**

- Ubah nama toko
- Simpan nomor telepon atau WhatsApp toko
- Simpan alamat toko
- Simpan catatan footer struk
- Pilih mata uang toko

Mata uang yang didukung:

- `IDR`
- `USD`
- `SGD`
- `EUR`
- `GBP`
- `JPY`

Mata uang toko yang dipilih digunakan di seluruh aplikasi saat toko tersebut dibuka.

**Assistant setup**

- Pilih apakah asisten menggunakan AI di perangkat atau AI online
- Pilih model default
- Cek ulang status setup
- Unduh model rekomendasi untuk perangkat
- Simpan atau hapus sign-in key untuk AI online

Setup asisten bersifat opsional. INAPOS tetap bisa dipakai normal tanpa fitur ini, tetapi aplikasi desktop membuka alur kerja AI-first.

### Assistant

Assistant adalah workspace terpisah untuk pertanyaan toko, bantuan terpandu, dan operasional toko berbasis AI-first.

Assistant dapat membantu untuk hal-hal seperti:

- merangkum penjualan hari ini
- menemukan stok yang perlu perhatian
- mencari produk terlaris
- meninjau pengeluaran terbesar
- menjelaskan cara kerja suatu alur
- memberi ide penawaran
- memeriksa produk, stok, pelanggan, pemasok, kas, pengeluaran, promosi, dan pembelian dari data toko yang aktif

Assistant juga punya tool data toko bawaan, sehingga dirancang untuk memakai data toko yang nyata, bukan menebak. Pada versi saat ini, assistant dapat membaca data toko dan menjalankan aksi toko yang didukung langsung lewat chat, termasuk:

- menambah, mengubah, dan menghapus produk
- menyesuaikan data stok
- menambah, mengubah, dan menghapus pelanggan
- menambah, mengubah, dan menghapus pemasok
- menambah, mengubah, dan menghapus entri kas
- menambah, mengubah, dan menghapus pengeluaran
- menambah, mengubah, dan menghapus promosi
- menambah, mengubah, dan menghapus pembelian
- membuat penjualan lengkap
- menghapus penjualan sambil memulihkan stok dan total belanja pelanggan yang terkait

Fitur chat assistant meliputi:

- chip pertanyaan cepat
- jawaban streaming
- jawaban berformat markdown
- `Enter` untuk kirim
- `Shift + Enter` untuk baris baru

Penting:

- Assistant bersifat spesifik per toko, jadi selalu bekerja dalam toko yang sedang Anda buka.
- Assistant adalah jalur utama untuk alur kerja AI-first pada produk saat ini.
- Banyak tugas toko yang didukung bisa diselesaikan sepenuhnya lewat chat tanpa membuka layar modul utama.
- Balasan assistant saat ini ditulis dalam bahasa Inggris sederhana.

## Alur Kerja Utama

### 1. Setup Pertama Kali

1. Daftar atau masuk.
2. Jika Anda belum punya toko, INAPOS akan meminta nama toko.
3. Setelah itu aplikasi akan membuka workspace toko Anda.

Pada versi saat ini tidak ada wizard onboarding panjang. Setup pertama sengaja dibuat singkat.

### 2. Alur Penjualan Harian

1. Tambahkan produk di `Items`.
2. Isi jumlah stok dan reorder point di `Stock`.
3. Simpan pelanggan di `Customers` jika ingin checkout pelanggan tetap lebih cepat.
4. Buka `Checkout`.
5. Cari barang, susun keranjang, pilih pembayaran, lalu simpan penjualan.
6. Tinjau penjualan selesai dan order manual di `Orders`.

### 3. Alur Stok dan Restock

1. Buka `Stock` untuk melihat stok sehat, rendah, atau habis.
2. Gunakan `Alerts` untuk melihat stok rendah secara cepat.
3. Perbarui jumlah stok per item.
4. Simpan data pemasok di `Suppliers`.
5. Catat pembelian stok di `Purchases`.

Penting: mencatat pembelian tidak otomatis menambah stok, jadi stok tetap harus diperbarui secara terpisah.

### 4. Alur Tinjauan Keuangan

1. Gunakan `Cash` untuk catatan uang masuk dan uang keluar manual.
2. Gunakan `Expenses` untuk biaya operasional harian.
3. Buka `Reports` untuk membandingkan penjualan, pengeluaran, pembelian, dan estimasi laba.
4. Gunakan `Today` untuk melihat timeline aktivitas hari ini.

### 5. Alur Multi-Toko

- Pindah toko dari store picker di header
- Buat toko baru dari menu header yang sama
- Kelola setiap toko secara terpisah dalam workspace masing-masing

### 6. Alur Kerja AI-First

1. Buka `Assistant` atau pindah ke `Chat view` di aplikasi desktop.
2. Ajukan pertanyaan berbasis data toko nyata atau beri instruksi tindakan yang diinginkan.
3. Biarkan assistant memeriksa data, merangkum kondisi usaha, atau menjalankan aksi toko yang didukung.
4. Tetap di chat jika ingin terus bekerja tanpa membuka layar modul utama.

Alur ini paling cocok untuk pengguna yang ingin mengelola produk, stok, penjualan, dan operasional harian toko dengan bahasa alami, bukan lewat navigasi UI.

## Preferensi dan Personalisasi

### Profil

- Ubah nama tampilan Anda dari menu pengguna
- Lihat email akun Anda di sana

### Bahasa

- Pilih `English` atau `Bahasa Indonesia`
- Pilihan bahasa disimpan di perangkat saat ini
- Format tanggal, angka, dan tampilan mengikuti bahasa yang dipilih

### Mata Uang

- Mata uang adalah pengaturan toko, bukan preferensi per pengguna
- Mata uang toko dipilih di `Store details`
- Harga dan total mengikuti mata uang toko yang sedang aktif

### Mode Aplikasi

- Berpindah antara `Full view`, `Checkout view`, dan `Chat view`
- Pilihan ini disimpan di perangkat saat ini

## Opsi Alur Kerja AI

INAPOS mendukung dua mode alur kerja AI:

- `On-device AI` dengan Ollama
- `Online AI` dengan OpenRouter

### On-device AI

- Berjalan melalui Ollama
- Memungkinkan pemilihan model lokal yang sudah terpasang
- Menyertakan model rekomendasi awal: `qwen3.5:0.8b`
- Menampilkan progres unduhan model di aplikasi

### Online AI

- Menggunakan OpenRouter
- Memungkinkan pemilihan model text gratis yang tersedia
- Membutuhkan sign-in key OpenRouter yang disimpan di perangkat

### Hal yang Perlu Diketahui

- Alur kerja AI-first bersifat opsional.
- Runtime AI saat ini hanya bekerja di aplikasi desktop.
- Sisa workspace toko tetap berjalan sebagai aplikasi local-first dengan sinkronisasi perangkat.
- On-device AI membutuhkan Ollama yang terpasang dan berjalan, dengan minimal satu model tersedia.
- Online AI membutuhkan OpenRouter key yang tersimpan.

## Bahasa, Mata Uang, dan Pembayaran

### Bahasa yang didukung

- English
- Bahasa Indonesia

### Mata uang toko yang didukung

- IDR
- USD
- SGD
- EUR
- GBP
- JPY

### Metode pembayaran yang tersedia saat ini

- Checkout: Cash, Bank transfer, QRIS
- Orders: Cash, Bank transfer, QRIS, Pay later

## Perangkat, Sinkronisasi, dan Ketersediaan

- INAPOS menyimpan data toko di perangkat lalu menyinkronkannya di latar belakang
- Modul `This device` menampilkan kesehatan koneksi, upload, dan download
- Status sinkronisasi bisa menampilkan `Offline`, `Checking`, `Up to date`, atau `Needs attention`
- Sinkronisasi latar belakang berjalan otomatis pada versi saat ini

Runtime AI secara khusus hanya tersedia di desktop. Sisa workspace disusun sebagai aplikasi toko local-first dengan sinkronisasi perangkat dan perpindahan antar toko pada bagian produk lainnya.

## Catatan Batasan Penting

Hal-hal ini penting diketahui sebelum Anda mengandalkan suatu alur:

- `Offers` dicatat di aplikasi tetapi belum otomatis diterapkan saat checkout
- `Purchases` belum menambah stok secara otomatis
- `Orders` saat ini belum menampilkan detail item per order
- `Reports` hanya menyediakan rentang tanggal bawaan
- `Reports` belum mendukung export, print, atau penjadwalan
- `This device` hanya menampilkan status sinkronisasi, belum menyediakan kontrol sinkronisasi manual
- Bahasa adalah satu-satunya preferensi pengguna di dialog preferensi saat ini

## Ringkasnya

INAPOS adalah workspace toko ringan untuk berjualan, memantau stok, mengelola operasional harian, dan melihat kesehatan usaha retail kecil. Kekuatan utamanya ada pada penggunaan harian sebagai alat local-first all-in-one untuk checkout, pemantauan stok, pencatatan keuangan sederhana, dan visibilitas toko, dengan alur kerja AI-first di aplikasi desktop untuk pengguna yang ingin menjalankan operasional toko yang didukung langsung lewat chat.
