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
        <div className="hero__word" aria-hidden="true">MABSOOTH</div>
        <Link href="/#produk" className="hero__side">
          <img src={P["oxford-pendek-putih"].image} alt="Kemeja Shanghai Oxford lengan pendek putih" />
          <span className="hero__tag">LENGAN PENDEK</span>
        </Link>
        <div className="hero__center">
          <p className="label">HAPPY MOSLEM WEAR</p>
          <h1>KEMEJA YANG DIJAHIT UNTUK AWET.</h1>
          <p className="hero__sub">Koleksi Shanghai Oxford, untuk ibadah, kerja, dan keseharian.</p>
          <Link href="/#produk" className="btn">LIHAT KOLEKSI</Link>
        </div>
        <Link href="/#produk" className="hero__side">
          <img src={P["oxford-panjang-navy"].image} alt="Kemeja Shanghai Oxford lengan panjang navy" />
          <span className="hero__tag">LENGAN PANJANG</span>
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
              <div className="look__img"><img src={P[slug].image} alt={caption} loading="lazy" /></div>
              <span className="label">LOOK {String(i + 1).padStart(2, "0")}</span>
              <span>{caption}</span>
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

      <a className="wa-float" href={waLink("Assalamu'alaikum, saya mau order Mabsooth.")} target="_blank" rel="noreferrer">
        WHATSAPP
      </a>
    </main>
  );
}
