import { STORE_URL, waLink } from "@/lib/products";

const marquee = [
  "KEMEJA SHANGHAI OXFORD",
  "DIJAHIT DI BOGOR",
  "BISA COD",
  "PENUKARAN UKURAN",
  "KIRIM KE SELURUH INDONESIA",
];

export default function Footer() {
  const items = [...marquee, ...marquee, ...marquee, ...marquee];
  return (
    <footer className="footer">
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {items.map((t, i) => (
            <span key={i}>{t}<i>✦</i></span>
          ))}
        </div>
      </div>

      <div className="footer__grid">
        <div className="footer__cta">
          <p className="label">(WHATSAPP)</p>
          <h3>TANYA UKURAN, STOK & GROSIR.</h3>
          <a className="btn btn--light" href={waLink("Assalamu'alaikum, saya mau tanya produk Mabsooth.")} target="_blank" rel="noreferrer">
            CHAT ADMIN
          </a>
        </div>
        <div>
          <p className="label">(SHOP)</p>
          <a href="/#produk">Lengan Pendek</a>
          <a href="/#produk">Lengan Panjang</a>
          <a href={`${STORE_URL}/search?max-results=50`} target="_blank" rel="noreferrer">Semua Produk</a>
          <a href={`${STORE_URL}/p/panduan-ukuran.html`} target="_blank" rel="noreferrer">Size Chart</a>
          <a href={`${STORE_URL}/p/grosir.html`} target="_blank" rel="noreferrer">Grosir</a>
        </div>
        <div>
          <p className="label">(INFO)</p>
          <a href={`${STORE_URL}/p/tentang-kami.html`} target="_blank" rel="noreferrer">Tentang Kami</a>
          <a href={`${STORE_URL}/p/apa-kata-mereka.html`} target="_blank" rel="noreferrer">Apa Kata Mereka</a>
          <a href={`${STORE_URL}/p/cara-pemesanan.html`} target="_blank" rel="noreferrer">Cara Pemesanan</a>
          <a href={`${STORE_URL}/p/info-pengiriman.html`} target="_blank" rel="noreferrer">Info Pengiriman</a>
          <a href={`${STORE_URL}/p/product-exchange.html`} target="_blank" rel="noreferrer">Pengembalian & Penukaran</a>
        </div>
        <div>
          <p className="label">(KUNJUNGI)</p>
          <a href="https://g.page/mabsooth/" target="_blank" rel="noreferrer">Ruko Sentra Pancasan No.12A, Jl. Aria Suriawinata, Bogor Barat</a>
          <a href="mailto:sales@mabsooth.com">sales@mabsooth.com</a>
          <a href="tel:+6287818811742">+62 878 1881 1742</a>
          <span className="muted">09:00–17:00 WIB (Senin–Sabtu)</span>
          <div className="footer__social">
            <a href="https://www.instagram.com/mabsooth/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@mabsooth" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://www.facebook.com/mabsooth" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://youtu.be/VYXOqQ5NjmQ" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer__giant">MABSOOTH</div>
      <div className="footer__bottom">
        <span>© 2026 MABSOOTH. HAPPY MOSLEM WEAR.</span>
        <a href="#top">KEMBALI KE ATAS ↑</a>
      </div>
    </footer>
  );
}
