import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MABSOOTH — Happy Moslem Wear",
  description:
    "Kemeja Shanghai Oxford pria muslim dari Mabsooth. Dijahit rapi, dipakai sering, awet bertahun-tahun.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="top">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
