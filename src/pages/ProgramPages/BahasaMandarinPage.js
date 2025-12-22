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

const testimonialsMandarin = [
  {
    id: 1,
    name: "Budi, Pengusaha",
    rating: 5,
    text: "Butuh Mandarin untuk bisnis dengan partner Tiongkok. Gurunya native speaker, jadi pronunciation-nya bagus dan kosa kata bisnis lengkap.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Lisa, Mahasiswi",
    rating: 5,
    text: "Persiapan HSK 4 berjalan lancar. Metode menghafal hanzi-nya efektif dan gurunya sabar banget ngajarin tones yang sulit.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Ahmad, Pelajar",
    rating: 5,
    text: "Awalnya susah banget bedain 4 tones, sekarang udah lebih percaya diri ngomong Mandarin. Belajarnya fun dengan games bahasa.",
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

function BahasaMandarinPage() {
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=bahasamandarin&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    return "Program les bahasa Mandarin dirancang khusus untuk menguasai bahasa Mandarin secara komprehensif. Mulai dari pengenalan karakter Hanzi, pengucapan 4 tones yang tepat, hingga percakapan untuk keperluan bisnis, studi, atau sehari-hari dengan pengajar berpengalaman.";
  };

  // Fungsi untuk mendapatkan gambar berdasarkan mode
  const getProgramImage = () => {
    return learningMode === "online"
      ? "/program-mandarin.webp"
      : "/program-mandarin.webp";
  };

  // Fungsi untuk mendapatkan badge text berdasarkan mode
  const getBadgeText = () => {
    return learningMode === "online" ? "ONLINE" : "OFFLINE";
  };

  const navigate = useNavigate();

  const handleLihatBiaya = () => {
    window.scrollTo(0, 0);
    navigate("/biaya-les", {
      state: {
        presetSelection: {
          curriculum: "umum",
          program: "bahasa",
          subProgram: "",
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat Bahasa Mandarin</h1>
          <p>
            Kuasai bahasa Mandarin dengan metode terbaik untuk bisnis, studi,
            atau komunikasi sehari-hari dengan pengajar berkualitas
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
          <div className="program-card">
            <div className="program-image-section">
              <img
                src={getProgramImage()}
                alt="Les Privat Bahasa Mandarin"
                className="program-image"
              />
              <span className="program-curriculum-badge nasional">
                {getBadgeText()}
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">Les Privat Bahasa Mandarin</h3>

              <div className="program-meta">
                <span className="meta-item">⏱️ 1.5-2 jam/sesi</span>
                <span className="meta-item">📅 2-3 kali/minggu</span>
                <span className="meta-item">Semua Usia</span>
              </div>

              <div className="program-description">
                <span className="icon">🇨🇳</span>
                <span>{getProgramDescription()}</span>
              </div>

              <div className="program-features">
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Pengajar native speaker atau berpengalaman</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Metode efektif menghafal karakter Hanzi</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Fokus pada pengucapan 4 tones yang tepat</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Persiapan ujian HSK dan business Chinese</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Level dari Dasar hingga Mahir</span>
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
              <strong>Fokus Pembelajaran:</strong> Pinyin, Tones, Hanzi,
              Grammar, Conversation, Reading, Writing, dan persiapan HSK
            </p>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program Bahasa Mandarin</h2>
          <p>Kisah sukses siswa dalam menguasai bahasa Mandarin</p>
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
            {testimonialsMandarin.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Les Privat Bahasa Mandarin</h2>
            <p>
              Program les bahasa Mandarin dengan pengajar berkualitas, tersedia
              untuk berbagai level dari pemula hingga persiapan ujian HSK.
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

export default BahasaMandarinPage;
