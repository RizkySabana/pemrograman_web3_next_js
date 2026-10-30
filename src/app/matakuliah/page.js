
import Link from "next/link";

const daftarMataKuliah = [
  {
    kode: "PW3",
    nama: "Pemrograman Web 3",
  },
  {
    kode: "BD2",
    nama: "Basis Data 2",
  },
  {
    kode: "RPL2",
    nama: "Rekayasa Perangkat Lunak 2",
  },
];

export default function MataKuliahPage() {
  return (
    <section>
      <h2>Daftar Mata Kuliah</h2>
      <p>Pilih mata kuliah untuk melihat detailnya.</p>

      <ul>
        {daftarMataKuliah.map((mataKuliah) => (
          <li key={mataKuliah.kode}>
            <Link href={`/matakuliah/${mataKuliah.kode}`}>
              {mataKuliah.kode} - {mataKuliah.nama}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
