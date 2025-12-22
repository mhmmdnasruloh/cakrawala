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

const testimonialsUTBK = [
  {
    id: 1,
    name: "Rina, Kedokteran UI",
    rating: 5,
    text: "Dari try out pertama 600an, akhirnya dapat 738! Tips dan trik time management untuk TPS sangat membantu banget.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Dito, Teknik ITB",
    rating: 5,
    text: "Pembahasan soal yang detail bikin paham konsep, bukan sekedar hafalan. Konsultasi jurusan juga membantu pilihan yang tepat.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Sari, Akuntansi UGM",
    rating: 5,
    text: "Try out rutin setiap minggu bikin terbiasa dengan tekanan waktu. Simulasi UTBK yang realistik sangat prepare mental.",
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

function UTBKPage() {
  const [jurusan, setJurusan] = useState("saintek");
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=utbk&jurusan=${jurusan}&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    return "Program intensif persiapan Ujian Tulis Berbasis Komputer (UTBK) untuk masuk perguruan tinggi negeri. Fokus pada penguasaan materi, strategi mengerjakan, dan management waktu untuk meraih skor maksimal.";
  };

  const getMataUji = () => {
    if (jurusan === "saintek") {
      return ["TPA SAINTEK", "TPS"];
    } else {
      return ["TPA SOSHUM", "TPS"];
    }
  };

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
          <h1>Les Privat Persiapan UTBK</h1>
          <p>
            Raih PTN impian dengan persiapan UTBK intensif dan strategi
            mengerjakan yang terbukti efektif
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
          {/* Toggle Jurusan */}
          <div className="program-toggle">
            <button
              className={`toggle-btn ${jurusan === "saintek" ? "active" : ""}`}
              onClick={() => setJurusan("saintek")}
            >
              🔬 Saintek
            </button>
            <button
              className={`toggle-btn ${jurusan === "soshum" ? "active" : ""}`}
              onClick={() => setJurusan("soshum")}
            >
              📊 Soshum
            </button>
          </div>

          <div className="program-card">
            <div className="program-image-section">
              <img
                src="/program-les7.webp"
                alt="Les Privat Persiapan UTBK"
                className="program-image"
              />
              <span className="program-curriculum-badge nasional">
                {jurusan.toUpperCase()}
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">Les Privat Persiapan UTBK</h3>

              <div className="program-meta">
                <span className="meta-item">⏱️ 2.5-3 jam/sesi</span>
                <span className="meta-item">📅 5-7 kali/minggu</span>
                <span className="meta-item">Semua Level</span>
              </div>

              <div className="program-description">
                <span className="icon">🎯</span>
                <span>{getProgramDescription()}</span>
              </div>

              {/* Mata Uji */}
              <div className="curriculum-features">
                <div className="curriculum-section">
                  <h4>MATA UJI</h4>
                  <div className="features-grid">
                    {getMataUji().map((uji, index) => (
                      <span key={index} className="feature-badge">
                        {uji}
                      </span>
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
                    <span>Try Out Rutin</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Pembahasan Soal</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Tips dan Trik</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Konsultasi Pilihan Jurusan</span>
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
              <strong>Target Skor:</strong> Rata-rata peningkatan skor 100-150
              poin dengan intensitas belajar yang optimal dan strategi time
              management yang efektif
            </p>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program Persiapan UTBK</h2>
          <p>Kisah sukses meraih PTN impian berkat strategi UTBK yang tepat</p>
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
            {testimonialsUTBK.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Les Privat Persiapan UTBK</h2>
            <p>
              Program intensif UTBK dengan pengajar berpengalaman dan materi
              update sesuai perkembangan soal terbaru
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

export default UTBKPage;
