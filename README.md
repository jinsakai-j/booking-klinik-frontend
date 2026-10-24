# Booking Klinik Sejahtera

Aplikasi untuk mengelola janji temu pasien di klinik. Dalam aplikasi ini
pasien bisa membuat janji temu baru, mengubah jadwal yang sudah dibuat,
dan melihat rincian appointment.

Project ini adalah versi React dari tugas web sebelumnya. Frontend-nya
dibuat pakai Vite, jadi untuk menjalankan cukup install dependency lalu
`npm run dev`, nanti terbuka di http://localhost:5173.

Data yang disimpan berupa data pasien (nama, NIK, tanggal lahir, jenis
kelamin, nomor HP) dan data appointment (dokter, tanggal, jam, metode
bayar, keluhan, dan status).

Untuk tahap ini baru dibuat kerangka project React, isinya masih judul
aplikasi saja. Component dan fitur lainnya ditambahkan di update
berikutnya.

Rajaa Azharul Hanafi - 103022400116


## Update week6

Sudah dibuat versi React menggunakan Vite. Aplikasi ini punya 5 komponen: Header, RingkasanJanji, FormJanjiTemu, DaftarJanji, dan KartuJanjiTemu. Daftar janji disimpan sebagai state di App.jsx dan ditampilkan dengan .map() menggunakan key unik. Form tambah janji dibuat sebagai controlled component, tombol Tambah menambahkan data baru dengan status awal Menunggu. Jika daftar masih kosong akan muncul teks "Belum ada data Janji Temu". Tampilan sudah diatur sedikit biar lebih rapi dan menyesuaikan layar kecil.

Link repository: https://github.com/jinsakai-j/booking-klinik-frontend
