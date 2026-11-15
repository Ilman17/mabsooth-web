"use client";
import { useState } from "react";
import Link from "next/link";
import { products, rupiah } from "@/lib/products";

const FILTERS = ["SEMUA", "LENGAN PENDEK", "LENGAN PANJANG"];

export default function ProductGrid() {
  const [filter, setFilter] = useState("SEMUA");
  const list = filter === "SEMUA" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <div className="filters">
        {FILTERS.map((f) => (
          <button key={f} className={f === filter ? "is-active" : ""} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className="grid">
        {list.map((p) => (
          <Link key={p.slug} href={`/produk/${p.slug}`} className="card">
            <div className="card__img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={`${p.name} ${p.color}`} loading="lazy" />
              <span className="card__tag">-{Math.round((1 - p.price / p.oldPrice) * 100)}%</span>
            </div>
            <div className="card__meta">
              <span>{p.code}</span>
              <span>{p.category}</span>
              <span className="card__price">
                <s>{rupiah(p.oldPrice)}</s> {rupiah(p.price)}
              </span>
            </div>
            <h3>{p.name.replace("Kemeja Shanghai ", "")}</h3>
            <p className="muted">Warna {p.color}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
