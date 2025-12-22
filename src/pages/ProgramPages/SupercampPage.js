import React, { useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../pages/ProgramPages.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MapComponents from "../../components/MapComponents";
import Tutor from "../../components/Tutor";
import { useNavigate } from "react-router-dom";

const testimonialsSuperCamp = [
  {
    id: 1,
    name: "Ahmad, Alumni SuperCamp UTBK",
    rating: 5,
    text: "3 minggu di SuperCamp bikin skor naik 200 poin! Sistem belajar full day bikin fokus banget.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Lisa, SuperCamp Kedokteran",
    rating: 5,
    text: "Selain materi akademik, mental training dan dinamika kelompok bikin lebih siap mental hadapi ujian.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Orang Tua Kevin",
    rating: 5,
    text: "Anak saya jadi lebih disiplin dan punya teman belajar yang solid. Progressnya luar biasa dalam waktu singkat.",
    avatar: "/person-icon.webp",
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i} className="star-small">
        ★
      </span>
    );
  }
  return stars;
};

function SupercampPage() {
  const [learningMode, setLearningMode] = useState("offline");
  const navigate = useNavigate();
  const [pdfLoading, setPdfLoading] = useState(true);
  const [pdfError, setPdfError] = useState(false);

  const handleDaftarClick = (paket) => {
    const programData = {
      program: "supercamp",
      package: paket.type,
      packageTitle: paket.name,
      price: paket.price,
      description: paket.description,
    };

    navigate("/daftar", { state: { programData } });
  };

  const handlePdfLoad = () => {
    setPdfLoading(false);
  };

  const handlePdfError = () => {
    setPdfLoading(false);
    setPdfError(true);
  };

  // Data paket SuperCamp sesuai gambar - 4 PAKET
  const supercampPackages = [
    {
      type: "horisons",
      name: "PAKET HORISONS",
      description: "PAKET SUPERCAMP (TANPA MENGINAP)",
      price: "Rp 13.500.000",
      features: [
        "Sistem belajar small class maks. 6 siswa",
        "Belajar 5 sesi setiap Hari Senin – Sabtu selama 4 Minggu",
        "Modul Belajar SNBT, UTUL UGM & Simak UI",
        "Worksheet Prediktif UTBK 2026",
        "Assessment Pra-Karantina",
        "Free Live Class Pra-Karantina",
        "Intensive Quiz dan drilling soal setiap hari",
        "Tryout Real SNBT, UTUL UGM & Simak UI",
        "Workshop TPS Mastery",
        "Workshop Math Mastery",
        "Motivation Training",
        "Progress Report Setiap Minggu",
        "Coaching Session – Sukses Masuk PTN",
        "Konsultasi Akademik Personal Masuk PTN Pilihan",
        "Tips & Trik Lulus Tes SNBT, UTUL UGM & SIMAK UI 2026",
        "Penginapan saat tes SNBT",
        "Free Biaya Pendaftaran SNBT 2026",
        "Analisa dan Evaluasi Hasil Belajar Setiap Hari",
        "Antar Jemput Lokasi SNBT JABODETABEK",
        "Free konsultasi dan Pendampingan Ujian Mandiri",
        "Souvenir Supercamp Cakrawala",
        "Akomodasi, dan coffee break 2x sehari",
      ],
    },
    {
      type: "galaxi",
      name: "PAKET GALAXI",
      description: "PAKET SUPERCAMP (MENGINAP VIP)",
      price: "Rp 27.500.000",
      features: [
        "Sistem belajar small class maks. 6 siswa",
        "Belajar 5 sesi setiap Hari Senin – Sabtu selama 4 Minggu",
        "Tempat Tinggal 1 Kamar 1 Siswa",
        "Modul Belajar SNBT, UTUL UGM & Simak UI",
        "Worksheet Prediktif Supercamp",
        "Assessment Pra-Karantina",
        "Free Live Class Pra-Karantina",
        "Intensive Quiz dan drilling soal setiap hari",
        "Tryout Real SNBT, UTUL UGM & Simak UI",
        "Workshop TPS Mastery",
        "Workshop Math Mastery",
        "Motivation Training",
        "Progress Report Setiap Minggu",
        "Coaching Session – Sukses Masuk PTN",
        "Konsultasi Akademik Personal Masuk PTN Pilihan",
        "Tips & Trik Lulus Tes SNBT, UTUL UGM & SIMAK UI 2026",
        "Penginapan saat tes SNBT",
        "Free Biaya Pendaftaran SNBT 2026",
        "Analisa dan Evaluasi Hasil Belajar Setiap Hari",
        "Antar Jemput Lokasi SNBT JABODETABEK",
        "Free konsultasi dan Pendampingan Ujian Mandiri",
        "Akomodasi, Makan, coffee break & Laundry Saat Karantina",
      ],
      popular: true,
    },
    {
      type: "universe",
      name: "PAKET UNIVERSE",
      description: "PAKET SUPERCAMP (MENGINAP VVIP)",
      price: "Rp 47.500.000",
      features: [
        "Sistem belajar small class maks. 6 siswa",
        "Belajar 5 sesi setiap Hari Senin – Sabtu selama 4 Minggu",
        "Tempat Tinggal 1 Kamar 1 Siswa",
        "Modul Belajar SNBT, UTUL UGM & Simak UI",
        "Worksheet Prediktif Supercamp",
        "Assessment Pra-Karantina",
        "Free Live Class Pra-Karantina",
        "Intensive Quiz dan drilling soal setiap hari",
        "Tryout Real SNBT, UTUL UGM & Simak UI",
        "Workshop TPS Mastery",
        "Workshop Math Mastery",
        "Motivation Training",
        "Progress Report Setiap Minggu",
        "Coaching Session – Sukses Masuk PTN",
        "Konsultasi Akademik Personal Masuk PTN Pilihan",
        "Tips & Trik Lulus Tes SNBT, UTUL UGM & SIMAK UI 2026",
        "Penginapan saat tes SNBT",
        "Free Biaya Pendaftaran SNBT 2026",
        "Analisa dan Evaluasi Hasil Belajar Setiap Hari",
        "Antar Jemput Lokasi SNBT JABODETABEK",
        "Free konsultasi dan Pendampingan Ujian Mandiri",
        "Akomodasi, Makan, coffee break & Laundry Saat Karantina",
      ],
    },
    {
      type: "medical",
      name: "PAKET MEDICAL",
      description: "PAKET SUPERCAMP FK PTN TOP 10",
      price: "Rp 70.000.000",
      features: [
        "Sistem belajar small class maks. 6 siswa",
        "Belajar 5 sesi setiap Hari Senin – Sabtu selama 4 Minggu",
        "Tempat Tinggal 1 Kamar 1 Siswa",
        "Modul Belajar SNBT, UTUL UGM & Simak UI",
        "Worksheet Prediktif Supercamp",
        "Assessment Pra-Karantina",
        "Free Live Class Pra-Karantina",
        "Intensive Quiz dan drilling soal setiap hari",
        "Tryout Real SNBT, UTUL UGM & Simak UI",
        "Workshop TPS Mastery",
        "Workshop Math Mastery",
        "Motivation Training",
        "Progress Report Setiap Minggu",
        "Coaching Session – Sukses Masuk PTN",
        "Konsultasi Akademik Personal Masuk PTN Pilihan",
        "Tips & Trik Lulus Tes SNBT, UTUL UGM & SIMAK UI 2026",
        "Penginapan saat tes SNBT",
        "Free Biaya Pendaftaran SNBT 2026",
        "Analisa dan Evaluasi Hasil Belajar Setiap Hari",
        "Antar Jemput Lokasi SNBT JABODETABEK",
        "Free konsultasi dan Pendampingan Ujian Mandiri",
        "Akomodasi, Makan, coffee break & Laundry Saat Karantina",
      ],
    },
  ];

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>SuperCamp Persiapan SNBT UTBK</h1>
          <p>
            Transformasi belajar intensif dengan sistem camp untuk percepatan
            pencapaian dalam waktu terbatas. Program Masuk UI ITB UGM IPB Unair
            ITS Undip Unpad & Perguruan Tinggi Negeri Favorit. Jalur UTBK SNBT,
            SIMAK UI, SIMAK KKI UI, UM UGM CBT, IUP UGM, UM UNDIP, IUP UNDIP, &
            Ujian Mandiri PTN.
          </p>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-header">
          <div className="testimonials-logo">
            <img src="/logo.webp" alt="Logo" />
          </div>

          <h2 className="testimonials-title">
            Ulasan Tentang Les Privat Cakrawala EduCentre
          </h2>

          <div className="rating">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <span>4,5 / 5,0</span>
            <p>Total 58 ulasan</p>
          </div>
        </div>
      </section>

      <section className="supercamp-brosur-section">
        <div className="supercamp-brosur-wrapper">
          <div className="supercamp-brosur-layout">
            {/* Brosur di sebelah kiri - Grid Atas Bawah */}
            <div className="supercamp-brosur-column">
              <div className="brosur-grid-container">
                <div className="brosur-grid">
                  {/* Brosur 1 */}
                  <div className="brosur-item">
                    <div className="brosur-card">
                      <img
                        src="/SUPERCAMP-1.webp"
                        alt="Brosur SuperCamp 1"
                        className="brosur-image"
                      />
                      <div className="brosur-overlay">
                        <span className="brosur-label">Brosur 1</span>
                      </div>
                    </div>
                  </div>

                  {/* Brosur 2 */}
                  <div className="brosur-item">
                    <div className="brosur-card">
                      <img
                        src="/SUPERCAMP-2.webp"
                        alt="Brosur SuperCamp 2"
                        className="brosur-image"
                      />
                      <div className="brosur-overlay">
                        <span className="brosur-label">Brosur 2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Jadwal di sebelah kanan */}
            <div className="supercamp-schedule-column">
              <div className="supercamp-schedule-card">
                <h3 className="supercamp-schedule-title">JADWAL BELAJAR</h3>

                <div className="supercamp-schedule-accordion">
                  {/* Weekdays Accordion */}
                  <div className="supercamp-schedule-accordion-item">
                    <div
                      className="supercamp-schedule-accordion-header"
                      onClick={(e) => {
                        const content = e.currentTarget.nextElementSibling;
                        const icon = e.currentTarget.querySelector(
                          ".supercamp-schedule-accordion-icon"
                        );
                        const isOpen = content.classList.contains("open");

                        // Close all other accordions
                        document
                          .querySelectorAll(
                            ".supercamp-schedule-accordion-content"
                          )
                          .forEach((item) => {
                            item.classList.remove("open");
                          });
                        document
                          .querySelectorAll(
                            ".supercamp-schedule-accordion-header"
                          )
                          .forEach((item) => {
                            item.classList.remove("active");
                          });
                        document
                          .querySelectorAll(
                            ".supercamp-schedule-accordion-icon"
                          )
                          .forEach((item) => {
                            item.style.transform = "rotate(0deg)";
                          });

                        // Toggle current accordion
                        if (!isOpen) {
                          content.classList.add("open");
                          e.currentTarget.classList.add("active");
                          icon.style.transform = "rotate(90deg)";
                        }
                      }}
                    >
                      <span className="supercamp-schedule-accordion-title">
                        Senin-Kamis
                      </span>
                      <span className="supercamp-schedule-accordion-icon">
                        ▶
                      </span>
                    </div>
                    <div className="supercamp-schedule-accordion-content">
                      <div className="supercamp-schedule-table-container">
                        <table className="supercamp-schedule-table">
                          <thead>
                            <tr>
                              <th>Waktu</th>
                              <th>Kegiatan</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>04:00–04:30</td>
                              <td>Wake Up</td>
                            </tr>
                            <tr>
                              <td>04:30–05:00</td>
                              <td>Shalat Subuh Berjamaah</td>
                            </tr>
                            <tr>
                              <td>05:00–06:00</td>
                              <td>Persiapan Belajar</td>
                            </tr>
                            <tr>
                              <td>06:00–07:00</td>
                              <td>Breakfast/Dhuha</td>
                            </tr>
                            <tr>
                              <td>07:00–08:00</td>
                              <td>Tryout</td>
                            </tr>
                            <tr>
                              <td>08:15–10:15</td>
                              <td>Sesi Belajar 1</td>
                            </tr>
                            <tr>
                              <td>10:15–10:30</td>
                              <td>Coffee Break</td>
                            </tr>
                            <tr>
                              <td>10:30–12:30</td>
                              <td>Sesi Belajar 2</td>
                            </tr>
                            <tr>
                              <td>12:30–13:30</td>
                              <td>Ishoma</td>
                            </tr>
                            <tr>
                              <td>13:45–15:45</td>
                              <td>Sesi Belajar 3</td>
                            </tr>
                            <tr>
                              <td>15:45–16:00</td>
                              <td>Coffee Break/Shalat Ashar</td>
                            </tr>
                            <tr>
                              <td>16:00–17:45</td>
                              <td>Sesi Belajar 4</td>
                            </tr>
                            <tr>
                              <td>17:45–19:30</td>
                              <td>Ishoma</td>
                            </tr>
                            <tr>
                              <td>19:30–21:30</td>
                              <td>Sesi Belajar 5</td>
                            </tr>
                            <tr>
                              <td>21:30–04:00</td>
                              <td>Istirahat/Sleep</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Jumat Accordion */}
                  <div className="supercamp-schedule-accordion-item">
                    <div
                      className="supercamp-schedule-accordion-header"
                      onClick={(e) => {
                        const content = e.currentTarget.nextElementSibling;
                        const icon = e.currentTarget.querySelector(
                          ".supercamp-schedule-accordion-icon"
                        );
                        const isOpen = content.classList.contains("open");

                        // Close all other accordions
                        document
                          .querySelectorAll(
                            ".supercamp-schedule-accordion-content"
                          )
                          .forEach((item) => {
                            item.classList.remove("open");
                          });
                        document
                          .querySelectorAll(
                            ".supercamp-schedule-accordion-header"
                          )
                          .forEach((item) => {
                            item.classList.remove("active");
                          });
                        document
                          .querySelectorAll(
                            ".supercamp-schedule-accordion-icon"
                          )
                          .forEach((item) => {
                            item.style.transform = "rotate(0deg)";
                          });

                        // Toggle current accordion
                        if (!isOpen) {
                          content.classList.add("open");
                          e.currentTarget.classList.add("active");
                          icon.style.transform = "rotate(90deg)";
                        }
                      }}
                    >
                      <span className="supercamp-schedule-accordion-title">
                        Jumat
                      </span>
                      <span className="supercamp-schedule-accordion-icon">
                        ▶
                      </span>
                    </div>
                    <div className="supercamp-schedule-accordion-content">
                      <div className="supercamp-schedule-table-container">
                        <table className="supercamp-schedule-table">
                          <thead>
                            <tr>
                              <th>Waktu</th>
                              <th>Kegiatan</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>04:00–04:30</td>
                              <td>Wake Up</td>
                            </tr>
                            <tr>
                              <td>04:30–05:00</td>
                              <td>Shalat Subuh Berjamaah</td>
                            </tr>
                            <tr>
                              <td>05:00–06:00</td>
                              <td>Persiapan Belajar</td>
                            </tr>
                            <tr>
                              <td>06:00–07:00</td>
                              <td>Breakfast/Dhuha</td>
                            </tr>
                            <tr>
                              <td>07:00–09:00</td>
                              <td>Sesi Belajar 1</td>
                            </tr>
                            <tr>
                              <td>09:00–11:00</td>
                              <td>Sesi Belajar 2</td>
                            </tr>
                            <tr>
                              <td>11:00–13:00</td>
                              <td>Ishoma</td>
                            </tr>
                            <tr>
                              <td>13:00–15:00</td>
                              <td>Sesi Belajar 3</td>
                            </tr>
                            <tr>
                              <td>15:00–15:30</td>
                              <td>Coffee Break/Shalat Ashar</td>
                            </tr>
                            <tr>
                              <td>16:00–17:45</td>
                              <td>Sesi Belajar 4</td>
                            </tr>
                            <tr>
                              <td>15:45–16:00</td>
                              <td>Coffee Break/Shalat Ashar</td>
                            </tr>
                            <tr>
                              <td>16:00–17:45</td>
                              <td>Sesi Belajar 4</td>
                            </tr>
                            <tr>
                              <td>17:45–19:30</td>
                              <td>Ishoma</td>
                            </tr>
                            <tr>
                              <td>19:30–21:30</td>
                              <td>Sesi Belajar 5</td>
                            </tr>
                            <tr>
                              <td>21:30–04:00</td>
                              <td>Istirahat/Sleep</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Sabtu Accordion */}
                  <div className="supercamp-schedule-accordion-item">
                    <div
                      className="supercamp-schedule-accordion-header"
                      onClick={(e) => {
                        const content = e.currentTarget.nextElementSibling;
                        const icon = e.currentTarget.querySelector(
                          ".supercamp-schedule-accordion-icon"
                        );
                        const isOpen = content.classList.contains("open");

                        // Close all other accordions
                        document
                          .querySelectorAll(
                            ".supercamp-schedule-accordion-content"
                          )
                          .forEach((item) => {
                            item.classList.remove("open");
                          });
                        document
                          .querySelectorAll(
                            ".supercamp-schedule-accordion-header"
                          )
                          .forEach((item) => {
                            item.classList.remove("active");
                          });
                        document
                          .querySelectorAll(
                            ".supercamp-schedule-accordion-icon"
                          )
                          .forEach((item) => {
                            item.style.transform = "rotate(0deg)";
                          });

                        // Toggle current accordion
                        if (!isOpen) {
                          content.classList.add("open");
                          e.currentTarget.classList.add("active");
                          icon.style.transform = "rotate(90deg)";
                        }
                      }}
                    >
                      <span className="supercamp-schedule-accordion-title">
                        Sabtu
                      </span>
                      <span className="supercamp-schedule-accordion-icon">
                        ▶
                      </span>
                    </div>
                    <div className="supercamp-schedule-accordion-content">
                      <div className="supercamp-schedule-table-container">
                        <table className="supercamp-schedule-table">
                          <thead>
                            <tr>
                              <th>Waktu</th>
                              <th>Kegiatan</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>04:00–04:30</td>
                              <td>Wake Up</td>
                            </tr>
                            <tr>
                              <td>04:30–05:00</td>
                              <td>Shalat Subuh Berjamaah</td>
                            </tr>
                            <tr>
                              <td>05:00–06:00</td>
                              <td>Persiapan Belajar</td>
                            </tr>
                            <tr>
                              <td>06:00–07:00</td>
                              <td>Breakfast/Dhuha</td>
                            </tr>
                            <tr>
                              <td>09:00–11:00</td>
                              <td>Tryout 1</td>
                            </tr>
                            <tr>
                              <td>11:00–13:00</td>
                              <td>Ishoma</td>
                            </tr>
                            <tr>
                              <td>13:00–15:00</td>
                              <td>Tryout 2</td>
                            </tr>
                            <tr>
                              <td>15:00–15:30</td>
                              <td>Coffee Break/Shalat Ashar</td>
                            </tr>
                            <tr>
                              <td>16:00–18:00</td>
                              <td>Pembahasan Tryout</td>
                            </tr>
                            <tr>
                              <td>18:00–19:30</td>
                              <td>Ishoma</td>
                            </tr>
                            <tr>
                              <td>19:30–21:00</td>
                              <td>Konsultasi/Sharing/Motivasi</td>
                            </tr>
                            <tr>
                              <td>21:00–04:00</td>
                              <td>Istirahat/Sleep</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas SuperCamp Section */}
      <section className="facilities-section">
        <div className="container">
          <div className="facilities-header">
            <h2>Fasilitas Unggulan SuperCamp</h2>
          </div>

          {/* Grid Fasilitas Ikon */}
          <div className="facilities-grid">
            <div className="tool-item">
              <div className="tool-icon">📚</div>
              <div className="tool-content">
                <h3>1 Hari 5 Sesi Belajar</h3>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🍽️</div>
              <div className="tool-content">
                <h3>Makan 3x Sehari dan Coffee Break 2x Sehari</h3>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🧺</div>
              <div className="tool-content">
                <h3>Laundry</h3>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">💻</div>
              <div className="tool-content">
                <h3>Tryout CBT, Modul dan Soal Prediksi</h3>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎤</div>
              <div className="tool-content">
                <h3>Workshop, Motivasi dan Konsultasi</h3>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🚌</div>
              <div className="tool-content">
                <h3>Pendampingan ke Lokasi Ujian</h3>
              </div>
            </div>
          </div>

          {/* Gallery Fasilitas */}
          <div className="facilities-gallery">
            <div className="gallery-header">
              <h3>Galeri Fasilitas SuperCamp</h3>
            </div>

            <div className="gallery-wrapper">
              {/* Single image row */}
              <figure className="gallery-row">
                <div className="gallery-image">
                  <img src="/fasilitas-1.webp" alt="Fasilitas SuperCamp 1" />
                </div>
              </figure>

              {/* Double image row */}
              <figure className="gallery-row">
                <div className="gallery-image">
                  <img src="/fasilitas-2.webp" alt="Fasilitas SuperCamp 2" />
                </div>
                <div className="gallery-image">
                  <img src="/fasilitas-3.webp" alt="Fasilitas SuperCamp 3" />
                </div>
              </figure>

              {/* Triple image row */}
              <figure className="gallery-row">
                <div className="gallery-image">
                  <img src="/fasilitas-4.webp" alt="Fasilitas SuperCamp 4" />
                </div>
                <div className="gallery-image">
                  <img src="/fasilitas-5.webp" alt="Fasilitas SuperCamp 5" />
                </div>
                <div className="gallery-image">
                  <img src="/fasilitas-6.webp" alt="Fasilitas SuperCamp 6" />
                </div>
              </figure>

              {/* Double image row */}
              <figure className="gallery-row">
                <div className="gallery-image">
                  <img src="/fasilitas-7.webp" alt="Fasilitas SuperCamp 7" />
                </div>
                <div className="gallery-image">
                  <img src="/fasilitas-8.webp" alt="Fasilitas SuperCamp 8" />
                </div>
              </figure>

              {/* Single image row */}
              <figure className="gallery-row">
                <div className="gallery-image">
                  <img src="/fasilitas-9.webp" alt="Fasilitas SuperCamp 9" />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Program Belajar Section */}
      <section className="program-learning">
        <div className="container">
          <div className="program-header">
            <h2>Target Pembelajaran</h2>
          </div>

          <div className="program-main-card">
            <div className="program-layout">
              <div className="program-content-grid">
                <div className="program-content-item">
                  <span className="program-number">1</span>
                  <div className="program-content">
                    Terget : Skor UTBK >610 dan lolos Top 10 Perguruan Tinggi
                    Negeri
                  </div>
                </div>

                <div className="program-content-item">
                  <span className="program-number">2</span>
                  <div className="program-content">
                    Masa Program : intensif 1 bulan (110 sesi belajar)
                  </div>
                </div>

                <div className="program-content-item">
                  <span className="program-number">3</span>
                  <div className="program-content">
                    Berbasis Islami : Siswa Putra dan Putri terpisah
                  </div>
                </div>

                <div className="program-content-item">
                  <span className="program-number">4</span>
                  <div className="program-content">Intensif SNBT 2026</div>
                </div>

                <div className="program-content-item">
                  <span className="program-number">5</span>
                  <div className="program-content">
                    Konsultasi Jurusan, PTN dan Evaluasi setiap hari
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Brochure Section - Simple Iframe */}
      <section className="pdf-brochure-section">
        <div className="container">
          <div className="pdf-brochure-header">
            <h2>Brosur SuperCamp</h2>
            <p>
              Lihat brosur lengkap SuperCamp atau download untuk informasi
              detail
            </p>
          </div>

          <div className="pdf-brochure-container">
            <div className="pdf-viewer-wrapper">
              <div className="pdf-viewer-header">
                <h3>Preview Brosur</h3>
                <div className="pdf-actions">
                  <a
                    href="/supercamp.pdf"
                    download="Brosur-SuperCamp-Cakrawala-EduCentre.pdf"
                    className="download-pdf-btn"
                  >
                    📥 Download PDF
                  </a>
                  <a
                    href="/supercamp.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="open-pdf-btn"
                  >
                    🔗 Buka di Tab Baru
                  </a>
                </div>
              </div>

              {/* Simple Iframe PDF Viewer */}
              <div className="simple-pdf-viewer">
                {pdfLoading && (
                  <div className="pdf-loading">
                    <div className="loading-spinner">⏳</div>
                    <p>Memuat brosur SuperCamp...</p>
                  </div>
                )}

                {pdfError ? (
                  <div className="pdf-error">
                    <div className="error-icon">⚠️</div>
                    <p>Gagal memuat preview brosur</p>
                    <p className="error-suggestion">
                      Silakan download PDF atau buka di tab baru
                    </p>
                  </div>
                ) : (
                  <iframe
                    src="/supercamp.pdf#view=FitH"
                    title="Brosur SuperCamp Cakrawala EduCentre"
                    width="100%"
                    height="600"
                    onLoad={handlePdfLoad}
                    onError={handlePdfError}
                    style={{
                      border: "none",
                      borderRadius: "8px",
                      display: pdfLoading ? "none" : "block",
                    }}
                  />
                )}
              </div>

              <div className="pdf-viewer-footer">
                <div className="pdf-info">
                  <span className="pdf-size">📄 Format: PDF</span>
                  <span className="pdf-pages">📖 8 Halaman Lengkap</span>
                  <span className="pdf-quality">🖨️ Siap Cetak</span>
                </div>
                <div className="pdf-note">
                  <p>
                    <strong>💡 Tips:</strong> Jika preview tidak muncul, gunakan
                    tombol "Buka di Tab Baru" atau download PDF untuk melihat
                    brosur lengkap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paket Program SuperCamp Section */}
      <section className="supercamp-pricing-section">
        <div className="container">
          <div className="pricing-header">
            <h2>PAKET PROGRAM</h2>
            <p>Pilih paket yang sesuai dengan kebutuhan belajar Anda</p>
          </div>

          <div className="supercamp-pricing-row">
            {supercampPackages.map((paket, index) => (
              <div
                key={paket.type}
                className={`pricing-card ${paket.popular ? "popular" : ""}`}
              >
                {paket.popular && <div className="popular-badge">POPULAR</div>}

                <div className="package-header">
                  <h3 className="package-name">{paket.name}</h3>
                  <p className="package-description">{paket.description}</p>
                  <div className="package-price">{paket.price}</div>
                  <div className="special-price-tag">Spesial Price</div>
                </div>

                <div className="package-features">
                  <h4>Benefit yang didapatkan:</h4>
                  <ul>
                    {paket.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`cta-button ${
                    paket.popular ? "primary" : "secondary"
                  }`}
                  onClick={() => handleDaftarClick(paket)}
                >
                  Daftar Sekarang
                </button>
              </div>
            ))}
          </div>

          <div className="special-offer-note">
            <p>*) Harga spesial hanya berlaku sampai 31 Desember 2025</p>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program SuperCamp</h2>
          <p>Kisah transformasi belajar dalam waktu singkat</p>
        </div>
        <div className="testimoniprogram-carousel">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonialsSuperCamp.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="testimoniprogram-card">
                  <div className="card-header">
                    <div className="rating-badge">{renderStars(t.rating)}</div>
                  </div>
                  <div className="card-body">
                    <p className="testimonial-text">"{t.text}"</p>
                  </div>
                  <div className="card-footer">
                    <h4>{t.name}</h4>
                    <span className="verified">✓ Terverifikasi</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="coverage-wilayah">
        <div className="container">
          <div className="coverage-header">
            <h2>Lokasi SuperCamp Cakrawala EduCentre</h2>
            <p>
              SuperCamp tersedia di lokasi strategis dengan fasilitas lengkap
              untuk mendukung proses belajar intensif
            </p>
          </div>
          <div className="coverage-map-full">
            <div className="map-container">
              <MapComponents />
            </div>
          </div>
        </div>
      </section>

      <Tutor />
    </div>
  );
}

export default SupercampPage;
