import KartuProdi from '@/components/kartuprodi';
import PengumumanKampus from '@/components/PengumumanKampus';

export default function HalamanEksperimen() {
  const daftarProdi = [
    {
      id: 1,
      namaProdi: 'Teknologi Informasi (TI)',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Full-Stack Web Developer, Cloud Engineer, Mobile App Developer'
    },
    {
      id: 2,
      namaProdi: 'Mekatronika & Robotika',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Automation Engineer, IoT Specialist, Robotics Programmer'
    },
    {
      id: 3,
      namaProdi: 'Bisnis Digital & Bahasa Jepang',
      jenjang: 'D3 / Vokasi',
      akreditasi: 'Baik Sekali',
      prospekKarir: 'Digital Marketer, IT Bridge Engineer (BrSE) Jepang, Business Analyst'
    }
  ];

  return (
    <main style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 20px' }}>
      {/* Bagian Hero Banner */}
      <section style={{
        backgroundColor: '#1e3a8a',
        color: 'white',
        padding: '36px',
        borderRadius: '12px',
        marginBottom: '32px'
      }}>
        <h1 style={{ margin: '0 0 12px 0', fontSize: '28px' }}>
          Selamat Datang di Portal Akademik Politeknik Takumi
        </h1>
        <p style={{ margin: 0, fontSize: '16px', color: '#dbeafe' }}>
          Mencetak talenta teknologi siap kerja dengan kurikulum berbasis industri dan arsitektur web modern.
        </p>
      </section>

      {/* Bagian Daftar Program Studi */}
      <h2 style={{ color: '#0f172a', marginBottom: '16px' }}>
        Pilihan Program Studi Unggulan
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {daftarProdi.map((item) => (
          <KartuProdi
            key={item.id}
            namaProdi={item.namaProdi}
            jenjang={item.jenjang}
            akreditasi={item.akreditasi}
            prospekKarir={item.prospekKarir}
          />
        ))}
      </div>
      <PengumumanKampus />
    </main>
  );
}