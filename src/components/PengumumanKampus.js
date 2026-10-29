
const daftarPengumuman = [
  {
    id: 1,
    judul: 'Jadwal Ujian Akhir Semester',
    tanggal: '10 November 2026',
    kategori: 'Penting',
    deskripsi:
      'Mahasiswa diharapkan memeriksa jadwal ujian akhir semester melalui portal akademik.'
  },
  {
    id: 2,
    judul: 'Pengisian Kartu Rencana Studi',
    tanggal: '2 November 2026',
    kategori: 'Akademik',
    deskripsi:
      'Mahasiswa diminta melakukan pengisian KRS sesuai jadwal yang telah ditentukan.'
  },
  {
    id: 3,
    judul: 'Pendaftaran Kegiatan Kemahasiswaan',
    tanggal: '5 November 2026',
    kategori: 'Kemahasiswaan',
    deskripsi:
      'Mahasiswa dapat mendaftarkan diri untuk mengikuti kegiatan kemahasiswaan kampus.'
  }
];

export default function PengumumanKampus() {
  return (
    <section style={{ marginTop: '40px' }}>
      <h2 style={{ color: '#0f172a', marginBottom: '16px' }}>
        Pengumuman Kampus
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px'
      }}>
        {daftarPengumuman.map((item) => (
          <article
            key={item.id}
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '20px',
              backgroundColor: '#ffffff'
            }}
          >
            <span style={{
              display: 'inline-block',
              padding: '5px 10px',
              borderRadius: '6px',
              backgroundColor:
                item.kategori === 'Penting'
                  ? '#fee2e2'
                  : item.kategori === 'Akademik'
                    ? '#dbeafe'
                    : '#dcfce7',
              color:
                item.kategori === 'Penting'
                  ? '#b91c1c'
                  : item.kategori === 'Akademik'
                    ? '#1d4ed8'
                    : '#166534',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {item.kategori}
            </span>

            <h3 style={{
              color: '#1e293b',
              fontSize: '18px',
              margin: '14px 0 8px'
            }}>
              {item.judul}
            </h3>

            <p style={{
              color: '#64748b',
              fontSize: '13px',
              marginBottom: '12px'
            }}>
              Tanggal: {item.tanggal}
            </p>

            <p style={{
              color: '#475569',
              fontSize: '14px',
              lineHeight: '1.6',
              margin: 0
            }}>
              {item.deskripsi}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
