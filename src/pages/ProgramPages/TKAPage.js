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

const testimonialsTKA = [
  {
    id: 1,
    name: "Orang Tua Aliya (SD)",
    rating: 5,
    text: "Aliya diterima di SD favorit berkat bimbingan TKA. Soal-soal latihannya sangat mirip dengan tes sebenarnya.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Rendra, SMP",
    rating: 5,
    text: "Dari try out pertama cuma 60%, akhirnya bisa dapat 85% di tes TKA SMP Negeri favorit. Strategi mengerjakannya sangat membantu!",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Orang Tua Bima (SMA)",
    rating: 5,
    text: "Analisis kelemahan yang detail membuat belajar lebih terfokus. Sekarang Bima bisa masuk SMA unggulan yang diinginkan.",
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

function TKAPage() {
  const [studentLevel, setStudentLevel] = useState("sd");
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=tka&level=${studentLevel}&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    return "Persiapan khusus untuk Tes Kemampuan Akademik (TKA) bagi siswa SD, SMP, dan SMA yang ingin masuk sekolah favorit. Program dirancang untuk menguasai strategi mengerjakan soal TKA dengan efektif dan efisien.";
  };

  const mapelWajib = ["Matematika", "Bahasa Indonesia", "Bahasa Inggris"];

  const mapelPilihan = [
    "Matematika Tingkat Lanjut",
    "Fisika",
    "Kimia",
    "Biologi",
    "Ekonomi",
    "Sosiologi",
    "Geografi",
    "Sejarah",
    "Pendidikan Pancasila/PPKn",
    "Projek kreatif dan Kewirausahaan",
    "Bahasa Indonesia Tingkat Lanjut",
    "Bahasa Inggris Tingkat Lanjut",
    "Antropologi",
    "Bahasa Jepang",
    "Bahasa Mandarin",
    "Bahasa Korea",
    "Bahasa Arab",
    "Bahasa Prancis",
    "Bahasa Jerman",
  ];

  const navigate = useNavigate();

  const handleLihatBiaya = () => {
    window.scrollTo(0, 0);
    navigate("/biaya-les", {
      state: {
        presetSelection: {
          curriculum: "nasional",
          program: "sma",
          subProgram: "kelas-3",
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat Persiapan TKA</h1>
          <p>
            Sukseskan tes masuk sekolah favorit dengan persiapan TKA yang
            terarah dan strategis
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

      <section className="program-section">
        <div className="program-wrapper">
          {/* Toggle Student Level */}
          <div className="program-toggle">
            <button
              className={`toggle-btn ${studentLevel === "sd" ? "active" : ""}`}
              onClick={() => setStudentLevel("sd")}
            >
              👦 SD
            </button>
            <button
              className={`toggle-btn ${studentLevel === "smp" ? "active" : ""}`}
              onClick={() => setStudentLevel("smp")}
            >
              👧 SMP
            </button>
            <button
              className={`toggle-btn ${studentLevel === "sma" ? "active" : ""}`}
              onClick={() => setStudentLevel("sma")}
            >
              🎓 SMA
            </button>
          </div>

          <div className="program-card">
            <div className="program-image-section">
              <img
                src="/program-les6.webp"
                alt="Les Privat Persiapan TKA"
                className="program-image"
              />
              <span className="program-curriculum-badge nasional">
                {studentLevel.toUpperCase()}
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">Les Privat Persiapan TKA</h3>

              <div className="program-meta">
                <span className="meta-item">⏱️ 2 jam/sesi</span>
                <span className="meta-item">📅 3-5 kali/minggu</span>
                <span className="meta-item">Semua Level</span>
              </div>

              <div className="program-description">
                <span className="icon">🎯</span>
                <span>{getProgramDescription()}</span>
              </div>

              {/* Mapel Wajib dan Pilihan */}
              <div className="tka-subjects">
                <div className="subject-category">
                  <h4>MAPEL WAJIB</h4>
                  <div className="wajib-grid">
                    {mapelWajib.map((mapel, index) => (
                      <div key={index} className="mapel-item wajib">
                        <span className="mapel-icon">📚</span>
                        <span className="mapel-name">{mapel}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="subject-category">
                  <h4>MAPEL PILIHAN</h4>
                  <div className="pilihan-grid">
                    {mapelPilihan.map((mapel, index) => (
                      <div key={index} className="mapel-item pilihan">
                        <span className="mapel-icon">🔬</span>
                        <span className="mapel-name">{mapel}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Keunggulan Program */}
              <div className="program-benefits">
                <h4>Keunggulan Program</h4>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Bank Soal Lengkap</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Simulasi Berkala</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Analisis Kelemahan</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Strategi Mengerjakan</span>
                  </div>
                </div>
              </div>

              <div className="program-action-container">
                <div className="mode-toggle">
                  <button
                    className={`mode-btn ${
                      learningMode === "offline" ? "active" : ""
                    }`}
                    onClick={() => setLearningMode("offline")}
                  >
                    📚 Offline
                  </button>
                  <button
                    className={`mode-btn ${
                      learningMode === "online" ? "active" : ""
                    }`}
                    onClick={() => setLearningMode("online")}
                  >
                    💻 Online
                  </button>
                </div>

                <div className="program-cta">
                  {/* TOMBOL UTAMA */}
                  <button
                    className="program-btn"
                    type="button"
                    onClick={handleLihatBiaya}
                  >
                    🔍 Lihat Biaya & Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="program-info-footer">
            <p>
              <strong>Target:</strong> Peningkatan skor TKA minimal 30% dengan
              bank soal dari 50+ sekolah favorit dan prediksi soal tahun
              berjalan
            </p>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program Persiapan TKA</h2>
          <p>
            Kisah sukses masuk sekolah favorit berkat persiapan TKA yang tepat
          </p>
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
            {testimonialsTKA.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="testimoniprogram-card">
                  <div className="card-header">
                    {/* <img src={t.avatar} alt={t.name} className="avatar" /> */}
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
            <h2>Cakupan Wilayah Layanan Les Privat Persiapan TKA</h2>
            <p>
              Program persiapan TKA untuk berbagai level sekolah dengan materi
              yang disesuaikan dengan karakteristik tes masing-masing sekolah.
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

export default TKAPage;
