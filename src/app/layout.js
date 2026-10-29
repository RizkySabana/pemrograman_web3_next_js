import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
// import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portal Akademik Politeknik Takumi",
  description:
    "Portal akademik Politeknik Takumi untuk informasi program studi, pengumuman kampus, dan layanan akademik.",
};

export default function RootLayout({ children }) {
return (
    <html lang="id">
      <body style={{ margin: 0, fontFamily: 'Segoe UI, sans-serif' }}>
        <header style={{ background: '#1e3a8a', color: 'white', padding: '14px 28px', display: 'flex', justifyContent: 'space-between' }}>
          <strong>🏛️ SIAKAD POLITEKNIK TAKUMI</strong>
          <nav style={{ display: 'flex', gap: '18px' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Beranda</Link>
            <Link href="/mahasiswa" style={{ color: 'white', textDecoration: 'none' }}>Direktori Mahasiswa</Link>
            <Link href="/dokumen/2026/kurikulum" style={{ color: 'white', textDecoration: 'none' }}>Arsip Dokumen</Link>
            <Link href="/dashboard" style={{ color: '#fde047', textDecoration: 'none', fontWeight: 'bold' }}>Dashboard KRS</Link>
          </nav>
        </header>

        <div style={{ padding: '24px', maxWidth: '960px', margin: '0 auto' }}>
          {children}
        </div>
        <footer
  style={{
    background: "#1e3a8a",
    color: "white",
    textAlign: "center",
    padding: "20px",
    marginTop: "32px",
  }}
>
  <p style={{ margin: 0 }}>
    © 2026 Politeknik Takumi. Portal Akademik.
  </p>
</footer>
      </body>
    </html>
  );
}

