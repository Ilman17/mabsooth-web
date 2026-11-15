/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { products, BANNER, STORE_URL, waLink } from "@/lib/products";

const P = Object.fromEntries(products.map((p) => [p.slug, p]));

const looks = [
  ["oxford-panjang-putih", "Putih untuk Jumat"],
  ["oxford-pendek-navy", "Navy sehari-hari"],
  ["oxford-panjang-biru-muda", "Biru muda ke kantor"],
  ["oxford-pendek-abu", "Abu yang tenang"],
  ["oxford-panjang-navy", "Navy lengan panjang"],
  ["oxford-pendek-biru-muda", "Santai akhir pekan"],
  ["oxford-panjang-abu", "Abu untuk kajian"],
  ["oxford-pendek-putih", "Putih lengan pendek"],
];

const collections = [
  {
    no: "01",
    title: "OXFORD LENGAN PENDEK",
    desc: "Kerah shanghai, bahan oxford adem untuk dipakai setiap hari.",
    img: P["oxford-pendek-putih"].image,
    href: "/#produk",
  },
  {
    no: "02",
    title: "OXFORD LENGAN PANJANG",
    desc: "Rapi untuk Jumat, kantor, dan acara keluarga.",
    img: P["oxford-panjang-navy"].image,
    href: "/#produk",
  },
  {
    no: "03",
    title: "GROSIR & SERAGAM",
    desc: "Harga khusus untuk komunitas, masjid, dan seragam kantor.",
    img: BANNER,
    href: `${STORE_URL}/p/grosir.html`,
  },
];

const atelier = [
  ["Bahan Oxford", "oxford-pendek-putih"],
  ["Kerah Shanghai", "oxford-panjang-navy"],
  ["Jahitan Rapi", "oxford-pendek-biru-muda"],
  ["Potongan Pas", "oxford-panjang-abu"],
  ["Warna Tenang", "oxford-pendek-abu"],
  ["Cek Dua Kali", "oxford-panjang-biru-muda"],
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <header className="hero">
        <Link href="/#produk" className="hero__side hero__side--left">
          <img src={P["oxford-pendek-putih"].image} alt="Kemeja Shanghai Oxford lengan pendek putih" />
          <span className="hero__tag">
            <span>LENGAN PENDEK</span>
            <span className="hero__tag-arrow">↗</span>
          </span>
        </Link>
        <div className="hero__center">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            HAPPY MOSLEM WEAR
          </span>
          <h1 className="hero__title">KEMEJA YANG DIJAHIT UNTUK AWET.</h1>
          <p className="hero__sub">Koleksi Shanghai Oxford, untuk ibadah, kerja, dan keseharian.</p>
          <Link href="/#produk" className="btn btn--hero">
            <span>LIHAT KOLEKSI</span>
            <span className="btn__arrow">↓</span>
          </Link>
        </div>
        <Link href="/#produk" className="hero__side hero__side--right">
          <img src={P["oxford-panjang-navy"].image} alt="Kemeja Shanghai Oxford lengan panjang navy" />
          <span className="hero__tag">
            <span>LENGAN PANJANG</span>
            <span className="hero__tag-arrow">↗</span>
          </span>
        </Link>
      </header>

      {/* LOOKBOOK */}
      <section className="section" id="lookbook">
        <div className="section__head">
          <div>
            <p className="label">(01) LOOKBOOK — SHANGHAI OXFORD</p>
            <h2>DELAPAN WARNA, SATU POTONGAN.</h2>
          </div>
          <a href={`${STORE_URL}/search?max-results=50`} target="_blank" rel="noreferrer" className="link">Lihat semua ↗</a>
        </div>
        <div className="looks">
          {looks.map(([slug, caption], i) => (
            <Link key={slug} href={`/produk/${slug}`} className="look">
              <div className="look__img">
                <img src={P[slug].image} alt={caption} loading="lazy" />
                <span className="look__hint">Lihat Detail →</span>
              </div>
              <span className="label">LOOK {String(i + 1).padStart(2, "0")}</span>
              <span className="look__caption">{caption}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <h2 className="statement__l">DIJAHIT RAPI.</h2>
        <div className="statement__img"><img src={BANNER} alt="Koleksi Mabsooth Oxford" loading="lazy" /></div>
        <div className="statement__r">
          <p className="statement__big">SERING DIPAKAI.</p>
          <p className="statement__big">AWET BERTAHUN.</p>
          <p className="muted">Bisa tukar ukuran kalau kurang pas.</p>
          <a className="link" href={`${STORE_URL}/p/product-exchange.html`} target="_blank" rel="noreferrer">KEBIJAKAN PENUKARAN ↗</a>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="section" id="koleksi">
        <h2 className="section__title">KOLEKSI</h2>
        <div className="collections">
          {collections.map((c) => (
            <a key={c.no} href={c.href} className="collection">
              <div className="collection__img"><img src={c.img} alt={c.title} loading="lazy" /></div>
              <div className="collection__meta"><span>{c.no}</span><span>MABSOOTH</span></div>
              <h3>{c.title}</h3>
              <p className="muted">{c.desc}</p>
              <span className="link">Lihat koleksi →</span>
            </a>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section" id="produk">
        <div className="section__head">
          <div>
            <p className="label">(03) PRODUK</p>
            <h2 className="serif">Dipakai sering, bukan semusim.</h2>
          </div>
        </div>
        <ProductGrid />
        <div className="section__foot">
          <p className="muted">Harga promo. Stok terbatas per warna dan ukuran.</p>
          <a className="link" href={`${STORE_URL}/search?max-results=50`} target="_blank" rel="noreferrer">Belanja semua produk ↗</a>
        </div>
      </section>

      {/* ATELIER */}
      <section className="atelier" id="atelier">
        <div className="atelier__intro">
          <div className="atelier__visual">
            <img src={BANNER} alt="Proses pembuatan kemeja Mabsooth" loading="lazy" />
            <p className="label">(04) WORKSHOP</p>
            <p>Dari Bogor, untuk seluruh Indonesia.</p>
          </div>
          <div className="atelier__text">
            <p className="label">(05) DIBUAT DENGAN TELITI</p>
            <h2>DIJAHIT DAN DICEK SATU PER SATU.</h2>
            <p className="muted">Setiap kemeja dipotong, dijahit, dan diperiksa sebelum dikirim ke rumah Anda.</p>
            <a className="btn" href={`${STORE_URL}/p/tentang-kami.html`} target="_blank" rel="noreferrer">TENTANG KAMI</a>
          </div>
        </div>
        <div className="atelier__strip">
          {atelier.map(([label, slug]) => (
            <figure key={label}>
              <img src={P[slug].image} alt={label} loading="lazy" />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* JOURNAL / TESTIMONI */}
      <a className="journal" href={`${STORE_URL}/p/baju-koko-putih.html`} target="_blank" rel="noreferrer">
        <div className="journal__img"><img src={P["oxford-pendek-putih"].image} alt="Tips memilih baju koko putih" loading="lazy" /></div>
        <div className="journal__text">
          <p className="label">(06) JURNAL</p>
          <p className="label">PANDUAN</p>
          <h3>TIPS MEMILIH BAJU KOKO PUTIH</h3>
          <p className="muted">Bahan, potongan, dan perawatan supaya putihnya tetap bersih.</p>
          <span className="link">Baca artikel ↗</span>
        </div>
      </a>

      {/* CATEGORY TILES */}
      <section className="tiles">
        {[
          ["PUTIH", `${STORE_URL}/search/label/Putih`, "oxford-pendek-putih"],
          ["NAVY", `${STORE_URL}/search/label/Navy`, "oxford-panjang-navy"],
          ["BIRU MUDA", `${STORE_URL}/search/label/Biru%20Muda`, "oxford-pendek-biru-muda"],
          ["ABU MUDA", `${STORE_URL}/search/label/Abu%20Muda`, "oxford-panjang-abu"],
        ].map(([t, href, slug]) => (
          <a key={t} href={href} target="_blank" rel="noreferrer" className="tile">
            <img src={P[slug].image} alt={t} loading="lazy" />
            <div><h3>{t}</h3><span>BELANJA ↗</span></div>
          </a>
        ))}
      </section>

      <a
        className="wa-float"
        href={waLink("Assalamu'alaikum, saya mau order Mabsooth.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Order via WhatsApp"
      >
        <svg className="wa-float__icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/>
        </svg>
        <span>ORDER VIA WHATSAPP</span>
      </a>
    </main>
  );
}
