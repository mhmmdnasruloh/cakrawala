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

const testimonialsCoding = [
  {
    id: 1,
    name: "Rafi, 14 tahun",
    rating: 5,
    text: "Belajar coding di sini seru banget! Awalnya cuma iseng, sekarang udah bisa bikin game sederhana sendiri. Gurunya muda dan asik, jelasinnya mudah dimengerti.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Orang Tua Sarah",
    rating: 5,
    text: "Sarah jadi lebih kreatif dan logis dalam berpikir sejak ikut coding. Sekarang sering bikin animasi sederhana dan proud banget tunjukin ke keluarga.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Kevin, 16 tahun",
    rating: 5,
    text: "Dari nol sama sekali sekarang udah paham dasar-dasar programming. Materinya terstruktur dan project-based, jadi langsung praktek bikin program beneran.",
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

function CodingPage() {
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=coding&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    return "Program coding dirancang untuk memperkenalkan dunia programming kepada anak-anak dan remaja dengan metode yang menyenangkan. Mulai dari dasar-dasar algoritma hingga pembuatan aplikasi sederhana, dipandu oleh instruktur yang berpengalaman di bidang teknologi.";
  };

  // Fungsi untuk mendapatkan gambar berdasarkan mode
  const getProgramImage = () => {
    return learningMode === "online"
      ? "/program-coding.webp"
      : "/program-coding.webp";
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
          program: "coding",
          subProgram: "",
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat Coding</h1>
          <p>
            Bekali anak dengan skill masa depan melalui pembelajaran coding yang
            menyenangkan dan aplikatif
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
                alt="Les Privat Coding"
                className="program-image"
              />
              <span className="program-curriculum-badge nasional">
                {getBadgeText()}
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">Les Privat Coding</h3>

              <div className="program-meta">
                <span className="meta-item">⏱️ 1.5-2 jam/sesi</span>
                <span className="meta-item">📅 1-3 kali/minggu</span>
                <span className="meta-item">Usia 8-18 tahun</span>
              </div>

              <div className="program-description">
                <span className="icon">💻</span>
                <span>{getProgramDescription()}</span>
              </div>

              <div className="program-features">
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Instruktur praktisi IT berpengalaman</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Project-based learning dengan hasil nyata</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Kurikulum sesuai standar industri</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Portfolio project untuk masa depan</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Level dari Pemula hingga Lanjutan</span>
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
              <strong>Tools yang digunakan:</strong> Scratch, Python,
              JavaScript, HTML/CSS, React Native, dan tools development lainnya
              sesuai level
            </p>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program Coding</h2>
          <p>Pengalaman siswa belajar coding di Cakrawala</p>
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
            {testimonialsCoding.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Les Privat Coding</h2>
            <p>
              Kami melayani berbagai area untuk program Les Privat Coding, baik
              offline maupun online dengan pendekatan personalized learning.
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

export default CodingPage;
