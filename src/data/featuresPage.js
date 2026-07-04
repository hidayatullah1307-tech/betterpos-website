export const requirements = {
  pc: [
    { label: 'Sistem Operasi', min: 'Windows 10 (64-bit)', rec: 'Windows 11' },
    { label: 'RAM', min: '4 GB', rec: '8 GB' },
    { label: 'Penyimpanan', min: '500 MB', rec: '1 GB' },
    { label: 'Prosesor', min: 'Intel Core i3 / AMD Ryzen 3', rec: 'Core i5 / Ryzen 5' },
    { label: 'Browser', min: 'Chrome 90+ / Edge 90+', rec: 'Google Chrome terbaru' },
    { label: 'Internet', min: 'Tidak diperlukan', rec: 'Tetap tidak diperlukan' },
  ],
  pcTip: 'Sangat disarankan menggunakan UPS (Uninterruptible Power Supply) untuk melindungi data dari mati listrik mendadak.',
  android: [
    { label: 'Sistem Operasi', value: 'Android 8.0 (Oreo) ke atas' },
    { label: 'Koneksi', value: 'Perlu internet untuk monitoring jarak jauh' },
    { label: 'Perangkat', value: 'Smartphone atau tablet Android' },
  ],
  androidNote: 'Aplikasi Android khusus untuk pemilik toko — pantau penjualan, stok, dan laporan dari mana saja.',
}

export const features = [
  {
    id: 'kasir',
    title: 'Kasir yang Cepat dan Tidak Ribet',
    description: 'Tambah item, pilih metode bayar, selesai. Tampilan bisa disesuaikan: grid foto untuk toko yang produknya visual, list untuk yang butuh kecepatan tinggi di jam sibuk.',
  },
  {
    id: 'pembayaran',
    title: 'Bayar dengan Apa Saja',
    description: 'Tunai, kartu, QRIS, atau transfer bank — semua metode pembayaran tercatat otomatis. Tidak perlu buku catatan terpisah lagi.',
  },
  {
    id: 'diskon',
    title: 'Diskon Terkontrol, Bukan Sembarangan',
    description: 'Kasir bisa kasih diskon kecil sendiri. Diskon besar butuh PIN manager. Di atas batas tertentu, hanya owner yang bisa approve. Tidak ada lagi diskon yang hilang tanpa jejak.',
  },
  {
    id: 'shift',
    title: 'Shift yang Jujur dan Terukur',
    description: 'Setiap shift tercatat: siapa buka, jam berapa, uang awal berapa, dan selisih di akhir shift. Bukan sekadar total penjualan, tapi akuntabilitas yang sesungguhnya.',
  },
  {
    id: 'stok',
    title: 'Stok yang Selalu Akurat',
    description: 'Setiap transaksi otomatis mengurangi stok. Ada notifikasi kalau stok hampir habis. Bisa adjustment manual kalau ada selisih fisik. Tidak ada lagi stok yang dikira-kira.',
  },
  {
    id: 'import',
    title: 'Import Produk Sekali Klik',
    description: 'Punya ratusan atau ribuan produk? Upload satu file CSV, semua masuk sekaligus. Tidak perlu input satu per satu dari awal.',
  },
  {
    id: 'po',
    title: 'Purchase Order yang Lengkap',
    description: 'Buat PO ke supplier, catat cicilan pembayaran, lampirkan foto nota, dan terima barang langsung dari sistem — termasuk kalau supplier mengirim barang pengganti.',
  },
  {
    id: 'laporan',
    title: 'Laporan yang Langsung Bisa Dipakai',
    description: 'Filter transaksi by tanggal, kasir, atau metode bayar. Export ke CSV untuk dikirim ke akuntan. Cetak struk langsung dari browser tanpa software tambahan.',
  },
  {
    id: 'keuangan',
    title: 'Laba Bersih, Bukan Cuma Omzet',
    description: 'Financial overview menghitung omzet, total pembelian, dan laba bersih — dengan atau tanpa pajak. Tahu persis bisnis kamu untung atau rugi hari ini.',
  },
  {
    id: 'auditlog',
    title: 'Siapa Ngapain, Jam Berapa',
    description: 'Activity log mencatat setiap perubahan: edit produk, hapus transaksi, ubah harga. Kalau ada yang janggal, langsung ketahuan siapa yang melakukan dan kapan.',
  },
  {
    id: 'akses',
    title: 'Tiga Level Akses, Tidak Ada yang Bisa Main-main',
    description: 'Owner lihat dan kontrol segalanya. Manager kelola operasional harian. Kasir hanya bisa transaksi. Setiap orang bekerja sesuai perannya.',
  },
  {
    id: 'tampilan',
    title: 'Gelap atau Terang, Sesuai Selera',
    description: 'Dark mode dan light mode tersedia. Nyaman dipakai siang maupun malam, di ruangan terang atau redup.',
  },
  {
    id: 'bahasa',
    title: 'Dua Bahasa dalam Satu Aplikasi',
    description: 'Bahasa Indonesia dan English tersedia. Cocok untuk tim yang campuran atau toko yang melayani pelanggan dari berbagai latar belakang.',
  },
  {
    id: 'offline',
    title: 'Jalan Tanpa Internet, Selamanya',
    description: 'Data tersimpan di komputer sendiri. Tidak perlu WiFi, tidak perlu server cloud, tidak perlu khawatir koneksi putus di tengah transaksi.',
  },
  {
    id: 'backup',
    title: 'Backup Data Sendiri, Kapan Saja',
    description: 'Ekspor seluruh database kapan saja dalam hitungan detik. Data kamu ada di tangan kamu sendiri, bukan di server orang lain yang bisa tutup sewaktu-waktu.',
  },
]

export const faq = [
  {
    q: 'Harus pakai komputer atau laptop? Tidak bisa di HP?',
    a: 'Untuk kasir utama, BetterPOS dirancang untuk PC atau laptop karena layar yang lebih besar membuat proses transaksi lebih nyaman dan cepat. Tapi ada aplikasi terpisah di Android khusus untuk pemilik toko yang ingin monitoring dari HP.',
  },
  {
    q: 'Apakah data hilang kalau komputer mati mendadak?',
    a: 'Risiko ini memang ada pada semua aplikasi. Makanya kami sangat menyarankan pakai UPS agar komputer tidak langsung mati saat listrik padam. Untuk keamanan maksimal, lakukan backup rutin via fitur ekspor database.',
  },
  {
    q: 'Bisa dipakai di lebih dari satu komputer?',
    a: 'Saat ini BetterPOS berjalan di satu komputer dengan satu database lokal. Jika ingin multi-komputer dalam satu jaringan, fitur ini ada di roadmap pengembangan berikutnya.',
  },
  {
    q: 'Apa yang terjadi kalau internet mati saat pakai BetterPOS?',
    a: 'Tidak ada yang terjadi. BetterPOS tetap berjalan normal karena tidak butuh internet sama sekali. Transaksi, stok, dan laporan semua berjalan dari data lokal di komputer.',
  },
  {
    q: 'Apakah ada biaya tambahan setelah beli?',
    a: 'Tidak ada. Pembayaran sekali, pakai selamanya. Update selama 12 bulan pertama sudah termasuk dalam harga. Setelah itu kamu bisa tetap pakai versi yang ada atau perpanjang update tahunan.',
  },
  {
    q: 'Berapa lama proses setup dan instalasi?',
    a: 'Setup remote biasanya selesai dalam 30 sampai 60 menit. Itu sudah termasuk instalasi, input data toko, dan penjelasan cara pakai dasar.',
  },
  {
    q: 'Bagaimana cara backup data?',
    a: 'Ada tombol ekspor database di halaman pengaturan. Klik, pilih lokasi simpan, selesai. File backup bisa disimpan di flashdisk, Google Drive, atau mana saja yang kamu mau.',
  },
  {
    q: 'Kalau komputer rusak, apakah data bisa dipindah?',
    a: 'Bisa, selama kamu punya file backup terakhir. Import file backup ke komputer baru dan semua data kembali seperti semula.',
  },
]
