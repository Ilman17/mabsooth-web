"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { STORE_URL } from "@/lib/products";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--solid" : ""}`} aria-label="Main">
      <div className="nav__left">
        <Link href="/#produk">SHOP</Link>
        <Link href="/#koleksi">KOLEKSI</Link>
        <Link href="/#lookbook">LOOKBOOK</Link>
        <Link href="/#atelier">ATELIER</Link>
      </div>
      <Link href="/" className="nav__logo">MABSOOTH</Link>
      <div className="nav__right">
        <a href={`${STORE_URL}/p/panduan-ukuran.html`} target="_blank" rel="noreferrer">SIZE CHART</a>
        <a href={`${STORE_URL}/p/grosir.html`} target="_blank" rel="noreferrer">GROSIR</a>
        <a href={STORE_URL} target="_blank" rel="noreferrer">STORE ↗</a>
      </div>
      <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? "TUTUP" : "MENU"}
      </button>
      {open && (
        <div className="nav__mobile" onClick={() => setOpen(false)}>
          <Link href="/#produk">Shop</Link>
          <Link href="/#koleksi">Koleksi</Link>
          <Link href="/#lookbook">Lookbook</Link>
          <Link href="/#atelier">Atelier</Link>
          <a href={`${STORE_URL}/p/panduan-ukuran.html`}>Size Chart</a>
          <a href={`${STORE_URL}/p/grosir.html`}>Grosir</a>
          <a href={STORE_URL}>Store ↗</a>
        </div>
      )}
    </nav>
  );
}
