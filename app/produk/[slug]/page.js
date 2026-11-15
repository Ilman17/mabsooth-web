/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct, rupiah, discount, waLink, STORE_URL } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  return { title: p ? `${p.name} ${p.color} — MABSOOTH` : "MABSOOTH" };
}

const SIZES = ["S", "M", "L", "XL", "XXL"];

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const siblings = products.filter((x) => x.name === p.name);
  const related = products.filter((x) => x.slug !== p.slug && x.color === p.color);

  return (
    <main className="pdp">
      <div className="pdp__gallery">
        <img src={p.image} alt={`${p.name} ${p.color}`} />
      </div>
      <div className="pdp__info">
        <Link href="/#produk" className="link">← Kembali ke produk</Link>
        <div className="card__meta" style={{ marginTop: 32 }}>
          <span>{p.code}</span><span>{p.category}</span><span>-{discount(p)}%</span>
        </div>
        <h1>{p.name}</h1>
        <p className="serif pdp__color">Warna {p.color}</p>
        <p className="pdp__price"><s>{rupiah(p.oldPrice)}</s> {rupiah(p.price)}</p>

        <p className="label">(WARNA)</p>
        <div className="swatches">
          {siblings.map((s) => (
            <Link key={s.slug} href={`/produk/${s.slug}`} className={s.slug === p.slug ? "is-active" : ""}>
              {s.color}
            </Link>
          ))}
        </div>

        <p className="label">(UKURAN)</p>
        <div className="swatches">
          {SIZES.map((s) => <span key={s}>{s}</span>)}
        </div>
        <a className="link" href={`${STORE_URL}/p/panduan-ukuran.html`} target="_blank" rel="noreferrer">Lihat size chart ↗</a>

        <div className="pdp__actions">
          <a className="btn" href={p.storeUrl} target="_blank" rel="noreferrer">BELI DI STORE</a>
          <a className="btn btn--ghost" href={waLink(`Assalamu'alaikum, saya mau order ${p.name} warna ${p.color} (${p.code}). Ukuran: `)} target="_blank" rel="noreferrer">
            PESAN VIA WHATSAPP
          </a>
        </div>

        <ul className="pdp__notes">
          <li><span>Bahan</span><span>Oxford</span></li>
          <li><span>Kerah</span><span>Shanghai</span></li>
          <li><span>Pembayaran</span><span>Transfer bank, e-wallet, COD</span></li>
          <li><span>Pengiriman</span><span>JNE, J&T, GoSend, Grab, POS, dll.</span></li>
          <li><span>Penukaran</span><span>Tersedia, lihat kebijakan</span></li>
        </ul>
      </div>

      {related.length > 0 && (
        <section className="section pdp__related">
          <p className="label">(LAINNYA)</p>
          <h2>WARNA {p.color.toUpperCase()} LAINNYA</h2>
          <div className="grid">
            {related.map((r) => (
              <Link key={r.slug} href={`/produk/${r.slug}`} className="card">
                <div className="card__img"><img src={r.image} alt={r.name} /></div>
                <div className="card__meta"><span>{r.code}</span><span>{r.category}</span><span className="card__price">{rupiah(r.price)}</span></div>
                <h3>{r.name.replace("Kemeja Shanghai ", "")}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
