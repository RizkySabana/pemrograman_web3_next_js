
import { Suspense } from "react";

export default function HalamanArsipDokumen({ params }) {
  return (
    <Suspense fallback={<p>Memuat arsip dokumen...</p>}>
      <KontenArsipDokumen params={params} />
    </Suspense>
  );
}

async function KontenArsipDokumen({ params }) {
  const { slug } = await params;

  return (
    <div
      style={{
        background: "#f8fafc",
        padding: "24px",
        borderRadius: "10px",
        border: "1px solid #cbd5e1",
      }}
    >
      <h2>Penjelajah Arsip Dokumen Kampus (Catch-All Route)</h2>

      <p
        style={{
          background: "#e2e8f0",
          padding: "10px",
          borderRadius: "6px",
          fontFamily: "monospace",
        }}
      >
        Lokasi Folder: Beranda / Dokumen /{" "}
        <strong>{slug.join(" / ")}</strong>
      </p>

      <h3>Rincian Segmen URL</h3>

      <ol>
        {slug.map((potonganUrl, index) => (
          <li key={index}>
            Level ke-{index + 1}: <strong>{potonganUrl}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}
