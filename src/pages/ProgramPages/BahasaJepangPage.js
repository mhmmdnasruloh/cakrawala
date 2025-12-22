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

const testimonialsJepang = [
  {
    id: 1,
    name: "Rina, Calon Peserta Magang",
    rating: 5,
    text: "Persiapan magang ke Jepang jadi lebih mudah dengan les ini. Gurunya ngajarin keigo (bahasa sopan) yang penting untuk kerja di Jepang.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Dito, Anime Lover",
    rating: 5,
    text: "Dulu cuma bisa dengar dari anime, sekarang udah bisa ngomong dasar-dasar Jepang. Seru banget bisa paham lyrics lagu Jepang!",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Maya, Mahasiswa Sastra",
    rating: 5,
    text: "Butuh persiapan JLPT N3. Metode belajar kanji-nya sistematis dan gurunya berpengalaman ngajar untuk ujian JLPT.",
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

function BahasaJepangPage() {
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=bahasajepang&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    return "Program les bahasa Jepang dirancang untuk menguasai bahasa Jepang secara menyeluruh. Mulai dari huruf Hiragana, Katakana, Kanji, hingga tata bahasa dan percakapan untuk berbagai keperluan seperti studi, kerja, atau persiapan ujian JLPT dengan metode pembelajaran yang efektif.";
  };

  // Fungsi untuk mendapatkan gambar berdasarkan mode
  const getProgramImage = () => {
    return learningMode === "online"
      ? "/program-jepang.webp"
      : "/program-jepang.webp";
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
          <h1>Les Privat Bahasa Jepang</h1>
          <p>
            Pelajari bahasa Jepang dengan metode terstruktur untuk berbagai
            keperluan mulai dari hobi hingga persiapan karir di Jepang
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
                alt="Les Privat Bahasa Jepang"
                className="program-image"
              />
              <span className="program-curriculum-badge nasional">
                {getBadgeText()}
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">Les Privat Bahasa Jepang</h3>

              <div className="program-meta">
                <span className="meta-item">⏱️ 1.5-2 jam/sesi</span>
                <span className="meta-item">📅 2-3 kali/minggu</span>
                <span className="meta-item">Semua Usia</span>
              </div>

              <div className="program-description">
                <span className="icon">🇯🇵</span>
                <span>{getProgramDescription()}</span>
              </div>

              <div className="program-features">
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Pengajar berpengalaman atau lulusan Jepang</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Metode sistematis belajar Kanji dan grammar</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Fokus pada percakapan dan listening comprehension</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Persiapan ujian JLPT dan business Japanese</span>
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
              <strong>Fokus Pembelajaran:</strong> Hiragana, Katakana, Kanji,
              Grammar, Conversation, Reading, Listening, dan persiapan JLPT
            </p>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program Bahasa Jepang</h2>
          <p>Pengalaman siswa dalam mempelajari bahasa dan budaya Jepang</p>
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
            {testimonialsJepang.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Les Privat Bahasa Jepang</h2>
            <p>
              Program les bahasa Jepang dengan pendekatan komprehensif, tersedia
              untuk berbagai level dari pemula hingga persiapan JLPT N1.
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

export default BahasaJepangPage;
