const IMG = (id, file) =>
  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/${id}/w1000/${file}`;

export const STORE_URL = "https://store.mabsooth.com";
export const WA_NUMBER = "6281395551214";
export const waLink = (text) =>
  `https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${encodeURIComponent(text)}`;

export const BANNER = "/images/banner-workshop.jpg";

export const products = [
  {
    slug: "oxford-pendek-putih",
    code: "OX-S01",
    category: "LENGAN PENDEK",
    name: "Kemeja Shanghai Oxford Pendek",
    color: "Putih",
    price: 129000,
    oldPrice: 279000,
    image: "/images/hero-oxford-pendek-putih.jpg",
    storeUrl: `${STORE_URL}/2022/10/oxford-pendek-putih.html`,
  },
  {
    slug: "oxford-pendek-navy",
    code: "OX-S02",
    category: "LENGAN PENDEK",
    name: "Kemeja Shanghai Oxford Pendek",
    color: "Biru Tua",
    price: 129000,
    oldPrice: 279000,
    image: IMG(
      "AVvXsEi_Bb42o0AcwUJctKmF-MhAIFBMN3D9oK5ZGsvZwI8Yoid5eeMpvM_Y-KJi3xqUcIS6Skb1dfrT6JqXcMhcqsvJ3GJvS6yUAeMVgNE36sNzvWTD_-tGfnv3-Nop33h9Li3jgdL7iIyVrLNZmowxMo9mcNpoUHPi8dyHkK6_zqaPGLf6Yg1Hi7jh_1AlyA",
      "OXF-13.png"
    ),
    storeUrl: `${STORE_URL}/2022/10/oxford-pendek-navy.html`,
  },
  {
    slug: "oxford-pendek-biru-muda",
    code: "OX-S03",
    category: "LENGAN PENDEK",
    name: "Kemeja Shanghai Oxford Pendek",
    color: "Biru Muda",
    price: 129000,
    oldPrice: 279000,
    image: IMG(
      "AVvXsEgfNvwg-BbWs16gwvrBKBSUdVNW9-w8kVgOtTrmJfVs4XulyFJ0EHC_-ENUQAK_oN0xYyWPARtLd3o9gkDl09ElUipmx2uNQt5oUuXeiYYMCqANOVbZGFyqahHJgo4fDvk5tuEVqH7sSGtEUVUpJ7l1EfckT62_LnYW1CL1yP480gkUrc3_79OVQtQ5Sg",
      "OXF-11.png"
    ),
    storeUrl: `${STORE_URL}/2022/10/oxford-pendek-biru-muda.html`,
  },
  {
    slug: "oxford-pendek-abu",
    code: "OX-S04",
    category: "LENGAN PENDEK",
    name: "Kemeja Shanghai Oxford Pendek",
    color: "Abu",
    price: 129000,
    oldPrice: 279000,
    image: IMG(
      "AVvXsEg8zPfHMGsxgaPohbICVUznXC4TtWISAowUuLIPxHasGNh_4BxWMbGPBx7WXZzKXk3kRr7Ee_VDDYDZsOBLz4fTxRl_rc8vV9l5QD7uahpqYrSIXXhUuN84eanWII6rBZhO2ZuW1FUMJvKW9jZLqkVvQRJv5eV8WsusARAQnjuFfiX_le0n6FzFfad6iw",
      "OXF-9.png"
    ),
    storeUrl: `${STORE_URL}/2022/10/oxford-pendek-abu.html`,
  },
  {
    slug: "oxford-panjang-putih",
    code: "OX-L01",
    category: "LENGAN PANJANG",
    name: "Kemeja Shanghai Oxford Panjang",
    color: "Putih",
    price: 139000,
    oldPrice: 299000,
    image: IMG(
      "AVvXsEiGZGU6DeeoWiEaRMApayO5R30dQ8iEZJ5UeaNjejtXqnXrfvAZoOPOGVEqm-HRP_r5kVgEQzmGCCq5SWoVQHmDPWhsmXiZEkHPye8KZ63VQRTS_bkxXgJLSz_ZW39uosNmb2-sAycCfNRXgWw5YMTy8pXvaYwtTX9ZZoruQEUBHRrQ_6RaIRJFSMgwwQ",
      "OXF-7.png"
    ),
    storeUrl: `${STORE_URL}/2022/10/oxford-panjang-putih.html`,
  },
  {
    slug: "oxford-panjang-navy",
    code: "OX-L02",
    category: "LENGAN PANJANG",
    name: "Kemeja Shanghai Oxford Panjang",
    color: "Biru Tua",
    price: 139000,
    oldPrice: 299000,
    image: "/images/hero-oxford-panjang-navy.jpg",
    storeUrl: `${STORE_URL}/2022/10/oxford-panjang-navy.html`,
  },
  {
    slug: "oxford-panjang-biru-muda",
    code: "OX-L03",
    category: "LENGAN PANJANG",
    name: "Kemeja Shanghai Oxford Panjang",
    color: "Biru Muda",
    price: 139000,
    oldPrice: 299000,
    image: IMG(
      "AVvXsEj9NHhPDmJ6piMEJ1PT0WXVKWRXpArKCJA_k7IxEHYW9HZuQQ0ioAShziz4ZSOhK5WxH_zG868rpRBjBudUtvQDvEXd3Clx7QCxee4qQX-p-7zv1QpY8cGiUb87toAUf6wk-bvdYtCHeJp_lYHOKNnnWCKhoPP2czPwBRv_92JrothYMsngC7kTBhGmCA",
      "OXF-3.png"
    ),
    storeUrl: `${STORE_URL}/2022/10/oxford-panjang-biru-muda.html`,
  },
  {
    slug: "oxford-panjang-abu",
    code: "OX-L04",
    category: "LENGAN PANJANG",
    name: "Kemeja Shanghai Oxford Panjang",
    color: "Abu",
    price: 139000,
    oldPrice: 299000,
    image: IMG(
      "AVvXsEipvykJYeXOkJnwk8iEauqcB2mBBUQ3ewniOCFin9UotF_rmy-biS9KFUvhTFVMaRED5yPvV9dvJILcLEG-QE4UYKdYM5zyUSkCMHcxAl7Ua-JAo48DJJTAjj0NO-sUISLp4ANd93kIvnZwY1AUy5Wl4UjjN4nJ6ibgrbfflyVnGd2UOPIrTQ_EspzxPg",
      "OXF-2.png"
    ),
    storeUrl: `${STORE_URL}/2022/10/oxford-panjang-abu.html`,
  },
];

export const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");
export const discount = (p) => Math.round((1 - p.price / p.oldPrice) * 100);
export const getProduct = (slug) => products.find((p) => p.slug === slug);
