
import { Suspense } from "react";

const dataMataKuliah = [
  {
    kode: "PW3",
    nama: "Pemrograman Web 3",
    sks: 3,
    semester: 3,
  },
  {
    kode: "BD2",
    nama: "Basis Data 2",
    sks: 2,
    semester: 3,
  },
  {
    kode: "RPL2",
    nama: "Rekayasa Perangkat Lunak 2",
    sks: 2,
    semester: 3,
  },
];

export default function DetailMataKuliah({ params }) {
  return (
    <Suspense fallback={<p>Memuat detail mata kuliah...</p>}>
      <KontenDetailMataKuliah params={params} />
    </Suspense>
  );
}

async function KontenDetailMataKuliah({ params }) {
  const { kode } = await params;

  const mataKuliah = dataMataKuliah.find(
    (item) => item.kode === kode
  );

  if (!mataKuliah) {
    return <h2>Mata kuliah tidak ditemukan.</h2>;
  }

  return (
    <section>
      <h2>Detail Mata Kuliah</h2>
      <p>Kode: {mataKuliah.kode}</p>
      <p>Nama: {mataKuliah.nama}</p>
      <p>SKS: {mataKuliah.sks}</p>
      <p>Semester: {mataKuliah.semester}</p>
    </section>
  );
}
