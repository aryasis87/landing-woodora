/* ==========================================================================
   Woodora — bengkel furnitur kayu solid yang dibuat sesuai ukuran.
   Satu sumber isi untuk beranda, katalog, gambar kerja, dan panduan kayu.
   Nama, ukuran, harga, dan waktu produksi adalah contoh purwarupa desain.
   ========================================================================== */

export const SITE = 'https://landing-woodora.vercel.app';
export const rp = (n) => `Rp ${n.toLocaleString('id-ID')}`;

// Jenis kayu: warna dasar & serat untuk contoh CSS, skala 1–5.
export const KAYU = [
  { slug: 'jati', nama: 'Jati', latin: 'Tectona grandis', asal: 'Jawa Tengah (perhutani bersertifikat)', dasar: '#a26b3a', serat: '#7a4c25', keras: 4, stabil: 5, harga: 5, cocok: 'Meja makan, kursi, dan perabot yang sering kena air', catatan: 'Mengandung minyak alami, tahan rayap, warnanya makin gelap keemasan seiring waktu.' },
  { slug: 'mahoni', nama: 'Mahoni', latin: 'Swietenia mahagoni', asal: 'Jawa Timur', dasar: '#8a4a32', serat: '#64301d', keras: 3, stabil: 4, harga: 3, cocok: 'Lemari, rak buku, dan meja kerja', catatan: 'Serat halus dan lurus, mudah diukir, warnanya cokelat kemerahan.' },
  { slug: 'sungkai', nama: 'Sungkai', latin: 'Peronema canescens', asal: 'Sumatra & Kalimantan', dasar: '#c9a271', serat: '#9c7646', keras: 3, stabil: 3, harga: 2, cocok: 'Rak terbuka, panel dinding, dan meja samping', catatan: 'Coraknya tegas seperti jati muda; harga lebih bersahabat.' },
  { slug: 'mindi', nama: 'Mindi', latin: 'Melia azedarach', asal: 'Jawa Barat', dasar: '#b88457', serat: '#8b5a33', keras: 2, stabil: 3, harga: 1, cocok: 'Kursi ringan, kotak simpan, dan perabot anak', catatan: 'Ringan dan mudah diolah; perlu lapisan pelindung yang baik.' },
  { slug: 'sonokeling', nama: 'Sonokeling', latin: 'Dalbergia latifolia', asal: 'Jawa Tengah (hutan rakyat bersertifikat)', dasar: '#4e2f22', serat: '#2c1912', keras: 5, stabil: 4, harga: 5, cocok: 'Aksen: bingkai, gagang, dan meja kopi kecil', catatan: 'Sangat keras dan gelap; dipakai hemat sebagai aksen, bukan badan perabot.' },
];

// Katalog: dimensi dalam cm untuk gambar kerja tampak depan & samping.
export const KATALOG = [
  { slug: 'meja-makan-semarang', nama: 'Meja Makan Semarang', ruang: 'Ruang makan', p: 180, l: 90, t: 75, kayu: ['jati', 'mahoni'], mulai: 7900000, minggu: 6, kaki: 'lurus', ringkas: 'Untuk enam orang. Tebal daun meja 3,5 cm, sambungan pasak tanpa sekrup terlihat.' },
  { slug: 'bangku-panjang', nama: 'Bangku Panjang Lesehan', ruang: 'Ruang makan', p: 160, l: 38, t: 45, kayu: ['jati', 'sungkai', 'mindi'], mulai: 2600000, minggu: 4, kaki: 'lurus', ringkas: 'Pasangan meja makan, atau dipakai sendiri di ujung tempat tidur.' },
  { slug: 'kursi-lengkung', nama: 'Kursi Sandaran Lengkung', ruang: 'Ruang makan', p: 48, l: 52, t: 78, kayu: ['jati', 'mahoni'], mulai: 1850000, minggu: 5, kaki: 'kursi', ringkas: 'Sandaran dilengkungkan dari satu papan, dudukan kulit sintetis atau anyaman rotan.' },
  { slug: 'rak-buku-terbuka', nama: 'Rak Buku Terbuka', ruang: 'Ruang kerja', p: 120, l: 35, t: 180, kayu: ['mahoni', 'sungkai'], mulai: 5400000, minggu: 5, kaki: 'panel', ringkas: 'Lima tingkat, sekat bisa dipindah. Dibuat sesuai lebar dinding Anda.' },
  { slug: 'meja-kerja-lipat', nama: 'Meja Kerja Dinding', ruang: 'Ruang kerja', p: 100, l: 50, t: 74, kayu: ['mahoni', 'sungkai', 'mindi'], mulai: 3200000, minggu: 4, kaki: 'lurus', ringkas: 'Meja kerja dangkal untuk kamar sempit, laci tipis untuk kabel dan dokumen.' },
  { slug: 'meja-kopi-bundar', nama: 'Meja Kopi Bundar', ruang: 'Ruang tamu', p: 80, l: 80, t: 40, kayu: ['jati', 'sonokeling'], mulai: 2900000, minggu: 4, kaki: 'serong', ringkas: 'Daun meja bundar 80 cm, kaki tiga yang miring keluar supaya tidak goyang di lantai tidak rata.' },
];

export const kayuBySlug = (s) => KAYU.find((k) => k.slug === s);
export const katalogBySlug = (s) => KATALOG.find((k) => k.slug === s);

export const PROSES = [
  ['Ukur di rumah Anda', 'Kami datang mengukur ruang, pintu masuk, dan tangga — supaya perabotnya muat sampai ke tempatnya.'],
  ['Gambar kerja', 'Anda menerima gambar kerja bertanda ukuran dan pilihan kayu sebelum satu papan pun dipotong.'],
  ['Dibuat di bengkel', 'Empat sampai enam minggu, tergantung perabot. Foto progres dikirim setiap minggu.'],
  ['Diantar & dipasang', 'Diantar dengan mobil kami sendiri, dipasang, dan dicek kerataannya di lantai Anda.'],
];

export const FAQ = [
  { t: 'Dari mana kayunya?', j: 'Dari pemasok bersertifikat legalitas kayu (SVLK) dan hutan rakyat yang kami kunjungi. Setiap perabot disertai catatan asal kayunya.' },
  { t: 'Apakah ukurannya bisa diubah?', j: 'Bisa — itulah inti layanan kami. Ukuran di katalog hanyalah titik awal; gambar kerja dibuat ulang sesuai ruang Anda.' },
  { t: 'Bagaimana dengan kayu yang memuai dan menyusut?', j: 'Kayu dikeringkan sampai kadar air 10–12% dan disambung dengan cara yang memberi ruang gerak. Retak rambut akibat cuaca kami perbaiki gratis selama tiga tahun.' },
  { t: 'Berapa uang muka yang diminta?', j: 'Lima puluh persen setelah gambar kerja disetujui, sisanya setelah perabot terpasang di rumah Anda.' },
];
