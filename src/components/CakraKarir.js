// pages/CakraKarir.js
import React, { useState } from "react";
import "./CakraKarir.css";

const CakraKarir = () => {
  const [selectedJob, setSelectedJob] = useState(1);

  const jobListings = [
    {
      id: 1,
      title: "Sales & Marketing Executive",
      company: "Cakrawala Educentre",
      location: "Bekasi, Jawa Barat",
      salary: "Rp 6.000.000 - Rp 10.000.000",
      type: "Full-time",
      experience: "1+ tahun (Fresh graduate dipertimbangkan)",
      posted: "2 hari yang lalu",
      description:
        "Sebagai Sales & Marketing Executive, Anda akan menjadi ujung tombak pertumbuhan Cakrawala Educentre. Tugas utama Anda adalah memperkenalkan program bimbingan belajar dan pelatihan, membangun relasi dengan sekolah, serta memastikan tercapainya target pendaftaran siswa baru.",
      responsibilities: [
        "Menyusun strategi promosi dan kampanye marketing (online & offline)",
        "Melakukan pendekatan dan presentasi ke sekolah-sekolah untuk kerja sama B2B",
        "Membangun hubungan jangka panjang dengan mitra sekolah dan orang tua",
        "Mengelola database calon siswa dan melakukan follow-up aktif",
        "Membuat laporan penjualan dan analisis hasil promosi setiap bulan",
        "Berkolaborasi dengan tim konten dan sosial media untuk mendukung kegiatan marketing digital",
      ],
      qualifications: [
        "Pendidikan minimal D3/S1 dari jurusan apa pun (diutamakan Marketing, Komunikasi, Manajemen)",
        "Berpengalaman di bidang sales/marketing minimal 1 tahun (fresh graduate dipertimbangkan)",
        "Memiliki kemampuan komunikasi, negosiasi, dan presentasi yang baik",
        "Berorientasi pada target dan hasil",
        "Energik, percaya diri, dan mampu bekerja dalam tim",
        "Memiliki kendaraan pribadi menjadi nilai tambah",
      ],
    },
    {
      id: 2,
      title: "Social Media Specialist",
      company: "Cakrawala Educentre",
      location: "Bekasi, Jawa Barat",
      salary: "Rp 5.500.000 - Rp 8.500.000",
      type: "Full-time",
      experience: "1+ tahun",
      posted: "1 hari yang lalu",
      description:
        "Sebagai Social Media Specialist, Anda akan bertanggung jawab mengelola dan mengembangkan citra digital Cakrawala Educentre di berbagai platform sosial media. Anda akan menciptakan strategi konten yang menarik, edukatif, dan relevan bagi siswa serta orang tua.",
      responsibilities: [
        "Mengembangkan strategi konten media sosial (Instagram, TikTok, YouTube, dan lainnya)",
        "Membuat kalender konten bulanan yang sesuai dengan agenda promosi dan akademik",
        "Mendesain konten visual sederhana (menggunakan Canva atau software lain)",
        "Menulis caption dan copywriting yang menarik serta SEO-friendly",
        "Memantau engagement, analisis performa, dan melakukan optimasi posting",
        "Bekerja sama dengan tim desain dan marketing untuk kampanye digital",
      ],
      qualifications: [
        "Minimal pendidikan D3/S1 (Komunikasi, Marketing, Desain, atau sejenisnya)",
        "Memahami tren media sosial dan algoritma platform terkini",
        "Terampil dalam pembuatan konten, editing video, dan storytelling digital",
        "Kreatif, up to date, dan memiliki kepekaan estetika visual",
        "Dapat bekerja dengan deadline dan dalam tim",
        "Pengalaman minimal 1 tahun di bidang digital marketing lebih disukai",
      ],
    },
    {
      id: 3,
      title: "Website Developer",
      company: "Cakrawala Educentre",
      location: "Remote",
      salary: "Rp 8.000.000 - Rp 12.000.000",
      type: "Full-time",
      experience: "1+ tahun",
      posted: "3 hari yang lalu",
      description:
        "Sebagai Website Developer, Anda akan mengelola tampilan dan performa website resmi Cakrawala Educentre. Anda bertanggung jawab menjaga agar informasi di website selalu up to date, user-friendly, dan memiliki performa SEO yang optimal.",
      responsibilities: [
        "Mengembangkan, memelihara, dan memperbarui website lembaga",
        "Mengintegrasikan sistem pendaftaran, formulir, dan database internal",
        "Mengoptimalkan performa website untuk kecepatan dan SEO",
        "Bekerja sama dengan tim konten untuk publikasi artikel dan berita terbaru",
        "Melakukan troubleshooting jika terjadi error teknis",
        "Menjaga keamanan data dan server website",
      ],
      qualifications: [
        "Pendidikan minimal D3/S1 di bidang IT, Informatika, atau Sistem Informasi",
        "Menguasai HTML, CSS, JavaScript, dan framework (misalnya React/Next.js atau WordPress)",
        "Memahami konsep UI/UX dan responsive design",
        "Memiliki pengalaman membuat atau mengelola website organisasi/perusahaan",
        "Teliti, disiplin, dan memiliki kemampuan problem-solving yang baik",
        "Memahami SEO dan Google Analytics menjadi nilai tambah",
      ],
    },
    {
      id: 4,
      title: "Admin & Finance Staff",
      company: "Cakrawala Educentre",
      location: "Bekasi, Jawa Barat",
      salary: "Rp 4.500.000 - Rp 6.500.000",
      type: "Full-time",
      experience: "1+ tahun",
      posted: "5 hari yang lalu",
      description:
        "Posisi ini bertanggung jawab dalam pengelolaan administrasi kantor dan pencatatan keuangan operasional. Anda akan menjadi bagian penting dalam memastikan kegiatan akademik dan administratif berjalan efisien dan tertib.",
      responsibilities: [
        "Mengelola data siswa, pembayaran, dan laporan administrasi lembaga",
        "Membuat laporan keuangan rutin (harian, mingguan, bulanan)",
        "Mencatat transaksi kas masuk dan keluar secara akurat",
        "Mengelola dokumen penting dan arsip kantor",
        "Berkoordinasi dengan tim operasional dan manajemen",
        "Membantu proses audit internal",
      ],
      qualifications: [
        "Pendidikan minimal D3/S1 Akuntansi, Administrasi, atau Manajemen",
        "Menguasai Microsoft Office, terutama Excel dan Word",
        "Berpengalaman dalam pembukuan dan laporan keuangan",
        "Jujur, teliti, dan bertanggung jawab",
        "Dapat bekerja secara mandiri maupun tim",
        "Pengalaman minimal 1 tahun di posisi serupa diutamakan",
      ],
    },
    {
      id: 5,
      title: "Tutor In-House (Matematika, Bahasa Inggris, IPA)",
      company: "Cakrawala Educentre",
      location: "Bekasi, Jawa Barat",
      salary: "Rp 4.000.000 - Rp 7.000.000 + Bonus",
      type: "Part-time/Full-time",
      experience: "Fresh graduate welcome",
      posted: "1 minggu yang lalu",
      description:
        "Tutor In-House akan menjadi bagian dari tim akademik Cakrawala Educentre yang fokus memberikan pengajaran berkualitas kepada siswa SMP dan SMA. Tutor diharapkan mampu mengajar dengan metode interaktif, menyenangkan, dan berorientasi pada hasil belajar siswa.",
      responsibilities: [
        "Mengajar sesuai bidang keahlian dan kurikulum Cakrawala Educentre",
        "Membuat rencana pembelajaran dan evaluasi siswa",
        "Memberikan laporan perkembangan belajar siswa kepada manajemen dan orang tua",
        "Membuat dan mengembangkan bahan ajar kreatif",
        "Berpartisipasi dalam pelatihan tutor internal untuk peningkatan kualitas",
        "Menjaga kedisiplinan dan etika profesional saat mengajar",
      ],
      qualifications: [
        "Mahasiswa semester akhir atau lulusan S1 dari jurusan terkait",
        "Memiliki kemampuan mengajar dengan pendekatan interaktif dan komunikatif",
        "Menguasai materi akademik sesuai bidang (Matematika, Bahasa Inggris, IPA, dll)",
        "Sabar, bertanggung jawab, dan berkomitmen pada kualitas pengajaran",
        "Berpengalaman mengajar bimbel atau sekolah menjadi nilai tambah",
      ],
    },
    {
      id: 6,
      title: "Content Writer Edukasi",
      company: "Cakrawala Educentre",
      location: "Remote",
      salary: "Rp 4.500.000 - Rp 7.500.000",
      type: "Full-time",
      experience: "1+ tahun",
      posted: "3 hari yang lalu",
      description:
        "Sebagai Content Writer Edukasi, Anda akan bertanggung jawab membuat konten edukatif yang menarik dan informatif untuk berbagai platform Cakrawala Educentre.",
      responsibilities: [
        "Menulis artikel edukasi untuk blog dan website",
        "Membuat konten untuk media sosial yang informatif dan engaging",
        "Mengembangkan materi pembelajaran dan modul",
        "Bekerja sama dengan tim akademik untuk memastikan akurasi konten",
        "Melakukan riset topik pendidikan terkini",
      ],
      qualifications: [
        "Pendidikan minimal D3/S1 di bidang Pendidikan, Bahasa, atau komunikasi",
        "Memiliki kemampuan menulis yang excellent dalam Bahasa Indonesia",
        "Memahami dunia pendidikan dan kurikulum Indonesia",
        "Kreatif dan mampu menulis untuk berbagai audiens",
        "Berpengalaman di bidang content writing lebih disukai",
      ],
    },
    {
      id: 7,
      title: "Customer Service Officer",
      company: "Cakrawala Educentre",
      location: "Bekasi, Jawa Barat",
      salary: "Rp 4.000.000 - Rp 6.000.000",
      type: "Full-time",
      experience: "Fresh graduate welcome",
      posted: "4 hari yang lalu",
      description:
        "Sebagai Customer Service Officer, Anda akan menjadi frontliner yang melayani pertanyaan dan kebutuhan orang tua serta calon siswa Cakrawala Educentre.",
      responsibilities: [
        "Melayani pertanyaan via telepon, WhatsApp, dan email",
        "Melakukan follow-up calon siswa",
        "Mengelola database pelanggan",
        "Memberikan informasi tentang program dan layanan",
        "Menangani keluhan dan memberikan solusi",
      ],
      qualifications: [
        "Pendidikan minimal D3 segala jurusan",
        "Kemampuan komunikasi yang baik",
        "Ramah, sabar, dan customer-oriented",
        "Mampu bekerja dalam tim",
        "Pengalaman di customer service menjadi nilai tambah",
      ],
    },
  ];

  const selectedJobData =
    jobListings.find((job) => job.id === selectedJob) || jobListings[0];

  // Fungsi untuk membuat email dengan template yang lengkap
  const createEmailTemplate = (job) => {
    const subject = `Lamaran Posisi ${job.title} - [Nama Lengkap Anda]`;
    const body = `Kepada Yth.,
Bapak/Ibu HRD Cakrawala Educentre
di Tempat

Dengan hormat,

Saya yang bertanda tangan di bawah ini:

Nama Lengkap: [Tulis nama lengkap Anda]
Email: [Tulis alamat email Anda]
No. Telepon: [Tulis nomor telepon Anda]
Pendidikan Terakhir: [Tulis pendidikan terakhir]
Jurusan: [Tulis jurusan]

Dengan ini saya mengajukan lamaran untuk posisi ${job.title} di Cakrawala Educentre.

Saya memiliki kualifikasi dan pengalaman yang sesuai dengan kebutuhan untuk posisi ini. Saya tertarik untuk bergabung dengan Cakrawala Educentre karena [sebutkan alasan singkat mengapa tertarik bergabung].

Berikut adalah dokumen yang saya lampirkan:
1. Curriculum Vitae (CV)
2. Foto terbaru
3. Scan ijazah dan transkrip nilai
4. Sertifikat pendukung (jika ada)
5. Portofolio (jika diperlukan)

Saya siap untuk mengikuti proses seleksi lebih lanjut. Terima kasih atas perhatian Bapak/Ibu.

Hormat saya,

[Nama Lengkap Anda]`;

    return `mailto:admin@cakrawalaeducentre.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="cakrakarir-page">
      {/* Main Content */}
      <div className="career-main">
        <div className="container">
          <div className="page-title">
            <h2>Lowongan di Cakrawala Educentre</h2>
          </div>

          <div className="career-layout">
            {/* Left Sidebar - Job List */}
            <div className="career-sidebar">
              <div className="job-list">
                {jobListings.map((job) => (
                  <div
                    key={job.id}
                    className={`job-item ${
                      selectedJob === job.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedJob(job.id)}
                  >
                    <div className="job-item-header">
                      <h4 className="job-title">{job.title}</h4>
                    </div>
                    <p className="company-name">{job.company}</p>
                    <div className="job-meta">
                      <span className="location">{job.location}</span>
                      <span className="salary">{job.salary}</span>
                    </div>
                    <div className="job-footer">
                      <span className="posted-date">{job.posted}</span>
                      <span className="view-details">Lihat detail →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Job Details */}
            <div className="career-content">
              {selectedJobData && (
                <div className="job-detail">
                  <div className="job-detail-header">
                    <div className="job-main-info">
                      <h1>{selectedJobData.title}</h1>
                      <p className="company">{selectedJobData.company}</p>
                      <div className="job-tags">
                        <span className="tag location">
                          {selectedJobData.location}
                        </span>
                        <span className="tag salary">
                          {selectedJobData.salary}
                        </span>
                        <span className="tag type">{selectedJobData.type}</span>
                      </div>
                    </div>
                    <div className="job-actions">
                      <a
                        href={createEmailTemplate(selectedJobData)}
                        className="btn-apply"
                      >
                        Lamar Sekarang
                      </a>
                    </div>
                  </div>

                  <div className="job-detail-content">
                    <section className="detail-section">
                      <h3>Deskripsi Pekerjaan</h3>
                      <p>{selectedJobData.description}</p>
                    </section>

                    <section className="detail-section">
                      <h3>Tanggung Jawab</h3>
                      <ul>
                        {selectedJobData.responsibilities.map((resp, index) => (
                          <li key={index}>{resp}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="detail-section">
                      <h3>Kualifikasi</h3>
                      <ul>
                        {selectedJobData.qualifications.map((qual, index) => (
                          <li key={index}>{qual}</li>
                        ))}
                      </ul>
                    </section>

                    <section className="detail-section">
                      <h3>Benefit</h3>
                      <div className="benefits-list">
                        <div className="benefit-item">
                          Gaji kompetitif & bonus kinerja
                        </div>
                        <div className="benefit-item">
                          Sertifikat pengalaman kerja
                        </div>
                        <div className="benefit-item">
                          Peluang pengembangan karier
                        </div>
                        <div className="benefit-item">
                          Lingkungan kerja edukatif
                        </div>
                      </div>
                    </section>

                    <section className="detail-section">
                      <h3>Lokasi Kerja</h3>
                      <p>
                        <strong>Cakrawala Educentre</strong>
                        <br />
                        Jl. Siti 2, Jl. Bayan No 7, Ciketing, Mustika Jaya,
                        Bekasi Timur
                      </p>
                    </section>

                    {/* Section Cara Melamar */}
                    <section className="apply-section">
                      <h3>Cara Melamar</h3>
                      <div className="apply-instructions">
                        <p>
                          <strong>Kirim lamaran Anda ke:</strong>
                        </p>
                        <div className="contact-info">
                          <strong>Email: </strong>
                          <a href="mailto:admin@cakrawalaeducentre.com">
                            admin@cakrawalaeducentre.com
                          </a>
                        </div>

                        <div className="requirements">
                          <h4>Dokumen yang Perlu Disiapkan:</h4>
                          <ul>
                            <li>Curriculum Vitae (CV) terbaru</li>
                            <li>Foto terbaru</li>
                            <li>Scan ijazah dan transkrip nilai</li>
                            <li>Scan sertifikat pendukung (jika ada)</li>
                            <li>Portofolio (untuk posisi tertentu)</li>
                            <li>Surat lamaran (opsional)</li>
                          </ul>
                        </div>

                        <div className="email-template">
                          <h4>Format Subjek Email:</h4>
                          <div className="template-example">
                            <code>
                              Lamaran Posisi {selectedJobData.title} - [Nama
                              Lengkap Anda]
                            </code>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakraKarir;
