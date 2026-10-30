
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveNav() {
  const pathname = usePathname();
  const href = "/matakuliah";

  // Sembunyikan navigasi ketika berada di halaman daftar mata kuliah
  if (pathname === href) {
    return null;
  }

  return (
    <nav style={{ marginBottom: "24px" }}>
      <Link
        href={href}
        style={{
          display: "inline-block",
          padding: "10px 14px",
          borderRadius: "6px",
          textDecoration: "none",
          color: "white",
          background: "#1e3a8a",
          fontWeight: "bold",
        }}
      >
        ← Daftar Mata Kuliah
      </Link>
    </nav>
  );
}
