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

// -----------------------------------------------------------------------------
// AKTIVITAS 4: PERCABANGAN IF-ELSE PENENTUAN TIER MEMBERSHIP
// -----------------------------------------------------------------------------
let tierMember = "";
let benefitMember = "";

if (totalPoin >= 100) {
  tierMember = "Tier Platinum";
  benefitMember = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (totalPoin >= 70) {
  tierMember = "Tier Gold";
  benefitMember = "Diskon 10% di setiap transaksi";
} else if (totalPoin >= 40) {
  tierMember = "Tier Silver";
  benefitMember = "Diskon 5% untuk menu minuman";
} else {
  tierMember = "Tier Bronze";
  benefitMember = "Member Reguler";
}

console.log("=== STATUS TIER MEMBERSHIP ===");
console.log("Tier Keanggotaan : " + tierMember);
console.log("Benefit Aktif    : " + benefitMember + "\n ");

// Ringkasan informasi via pop-up alert()
alert(
  "Ringkasan Informasi Member " + NAMA_KEDAI + ":\n" +
  "Kasir: " + namaKasir + "\n" +
  "Nama Pelanggan: " + namaPelanggan + "\n" +
  "Total Poin: " + totalPoin + "\n" +
  "Tier: " + tierMember + "\n" +
  "Benefit: " + benefitMember
);

// -----------------------------------------------------------------------------
// AKTIVITAS 5: FUNCTION MODULAR REUSABLE
// -----------------------------------------------------------------------------
function hitungTotalPoin(p1, p2, p3) {
  let total = p1 + p2 + p3;
  return total;
}

function tentukanTierMember(poin) {
  if (poin >= 100) {
    return "Tier Platinum (Benefit: Diskon 20% + Gratis 1 Minuman Signature)";
  } else if (poin >= 70) {
    return "Tier Gold (Benefit: Diskon 10% di setiap transaksi)";
  } else if (poin >= 40) {
    return "Tier Silver (Benefit: Diskon 5% untuk menu minuman)";
  } else {
    return "Tier Bronze (Benefit: Member Reguler)";
  }
}

console.log("=== SIMULASI FUNGSI MODULAR (REUSABILITY) ===");

// Simulasi Pelanggan B
let poinPelangganB = hitungTotalPoin(50, 30, 25);
let tierPelangganB = tentukanTierMember(poinPelangganB);
console.log("Pelanggan B -> Total Poin: " + poinPelangganB + " | " + tierPelangganB);

// Simulasi Pelanggan C
let poinPelangganC = hitungTotalPoin(20, 10, 5);
let tierPelangganC = tentukanTierMember(poinPelangganC);
console.log("Pelanggan C -> Total Poin: " + poinPelangganC + " | " + tierPelangganC + "\n ");
// -----------------------------------------------------------------------------
// AKTIVITAS 6: PENGELOLAAN ARRAY & PERULANGAN MENU REKOMENDASI
// -----------------------------------------------------------------------------
const menuRekomendasi = [
  "Espresso Single Origin",
  "Caramel Macchiato Ganteng",
  "Creamy Matcha Latte Erjan",
  "Butter Croissant Warm",
  "Signature Cold Brew Gula Aren"
];

console.log("=== MENU REKOMENDASI " + NAMA_KEDAI.toUpperCase() + " ===");
for (let i = 0; i < menuRekomendasi.length; i++) {
  console.log((i + 1) + ". " + menuRekomendasi[i]);
}

console.log("-----------------------------------------");
console.log("Total Menu Rekomendasi: " + menuRekomendasi.length + " menu");
console.log("=== SISTEM SELESAI DIEKSEKUSI ===");