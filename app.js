// =============================================================================
// TUGAS MANDIRI JAVASCRIPT DASAR - PEMROGRAMAN INTERNET
// JUDUL PROYEK: PENGEMBANGAN SISTEM POIN & KEANGGOTAAN MEMBER KEDAI KOPI
// =============================================================================

// -----------------------------------------------------------------------------
// AKTIVITAS 1: SETUP BERKAS & INTEGRASI EKSTERNAL
// Mencetak salam pembuka sistem ke Console
// -----------------------------------------------------------------------------
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");
console.log("Skrip JavaScript berhasil terhubung!\n ");

// -----------------------------------------------------------------------------
// AKTIVITAS 2: VARIABEL & DIALOG INTERAKTIF
// - Konstanta NAMA_KEDAI
// - Variabel namaKasir dengan demonstrasi re-assign
// - alert() salam pop-up pembuka
// - prompt() nama pelanggan dengan pengkondisian if (namaPelanggan) { ... } else { ... }
//   dan nama default "Pelanggan Setia" jika kosong / dibatalkan
// -----------------------------------------------------------------------------
const NAMA_KEDAI = "kopi erjan ganteng";
let namaKasir = "Kak Eko";

console.log("Nama Kedai : " + NAMA_KEDAI);
console.log("Kasir Awal : " + namaKasir);

// Demonstrasi sifat mutabilitas variabel 'let' (re-assign)
namaKasir = "kasir herman";
console.log("Kasir Aktif: " + namaKasir);

// Salam pop-up pembuka via alert()
alert("Selamat datang di " + NAMA_KEDAI + "!");

// Dialog input nama pelanggan
let namaPelanggan = prompt("Masukkan nama Anda:");

if (namaPelanggan) {
  alert("Halo, " + namaPelanggan + "! Selamat datang di " + NAMA_KEDAI + ".");
  console.log("Pelanggan yang aktif: " + namaPelanggan);
} else {
  namaPelanggan = "Pelanggan Setia";
  alert("Halo, " + namaPelanggan + "! Selamat datang di " + NAMA_KEDAI + ".");
  console.log("Pelanggan yang aktif: " + namaPelanggan);
}
console.log("Kasir yang melayani: " + namaKasir + "\n ");

// -----------------------------------------------------------------------------
// AKTIVITAS 3: OPERASI ARITMATIKA AKUMULASI POIN BULAT
// - 3 variabel transaksi belanja (poinKopi, poinMakanan, poinMerchandise)
// - Penjumlahan bilangan bulat murni (integer) tanpa desimal/float
// - Tampilkan rincian perolehan poin pelanggan ke tab Console
// -----------------------------------------------------------------------------
let poinKopi = 45;
let poinMakanan = 35;
let poinMerchandise = 20;

let totalPoin = poinKopi + poinMakanan + poinMerchandise;

console.log("=== RINCIAN PEROLEHAN POIN " + namaPelanggan.toUpperCase() + " ===");
console.log("Poin Kopi        : " + poinKopi);
console.log("Poin Makanan     : " + poinMakanan);
console.log("Poin Merchandise : " + poinMerchandise);
console.log("Total Poin       : " + totalPoin + "\n ");

