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

const testimonialsALevel = [
  {
    id: 1,
    name: "Kevin, IB Student",
    rating: 5,
    text: "Predicted score saya naik dari 35 jadi 41 berkat bimbingan di sini. Extended Essay guidance-nya sangat membantu!",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Rachel, A-Level Student",
    rating: 5,
    text: "Dari struggling di Further Maths jadi dapat A*. Gurunya benar-benar expert dan tahu cara menjelaskan konsep sulit.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Orang Tua Michelle",
    rating: 5,
    text: "Anak saya dapat tawaran dari Imperial College London berkat predicted score yang bagus. Bantuan aplikasi universitasnya sangat valuable.",
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

function LevelPage() {
  const [programType, setProgramType] = useState("alevel");
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=level&type=${programType}&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    return "Program khusus untuk siswa internasional yang mengikuti kurikulum A-Level, AS-Level, atau International Baccalaureate Diploma Programme. Pengajaran oleh tutor yang memahami kurikulum internasional dan berpengalaman membimbing siswa ke universitas top dunia.";
  };

  const subjects = [
    "Accounting",
    "Arabic",
    "Biology",
    "Business",
    "Chemistry",
    "Chinese - Language & Literature",
    "Economics",
    "English - Language & Literature",
    "French - Language & Literature",
    "Geography",
    "German - Language & Literature",
    "History",
    "Mathematics",
    "Mathematics - Further",
    "Physics",
    "Sociology",
  ];

  const navigate = useNavigate();

  const handleLihatBiaya = () => {
    window.scrollTo(0, 0);
    navigate("/biaya-les", {
      state: {
        presetSelection: {
          curriculum: "internasional",
          program: "ibDiploma",
          subProgram: "",
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat A/AS Level & IB DP</h1>
          <p>
            Bimbingan khusus untuk kurikulum internasional menuju kesuksesan di
            universitas top dunia
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
          {/* Toggle Program Type */}
          <div className="program-toggle">
            <button
              className={`toggle-btn ${
                programType === "alevel" ? "active" : ""
              }`}
              onClick={() => setProgramType("alevel")}
            >
              🎓 A/AS Level
            </button>
            <button
              className={`toggle-btn ${programType === "ib" ? "active" : ""}`}
              onClick={() => setProgramType("ib")}
            >
              🌍 IB DP
            </button>
          </div>

          <div className="program-card">
            <div className="program-image-section">
              <img
                src="/program-les5.webp"
                alt="Les Privat A/AS Level & IB DP"
                className="program-image"
              />
              <span className="program-curriculum-badge internasional">
                {programType === "alevel" ? "A-LEVEL" : "IB DIPLOMA"}
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">Les Privat A/AS Level & IB DP</h3>

              <div className="program-meta">
                <span className="meta-item">⏱️ 2-3 jam/sesi</span>
                <span className="meta-item">📅 2-4 kali/minggu</span>
                <span className="meta-item">Semua Level</span>
              </div>

              <div className="program-description">
                <span className="icon">🌍</span>
                <span>{getProgramDescription()}</span>
              </div>

              {/* Subjects */}
              <div className="curriculum-features">
                <div className="curriculum-section">
                  <h4>SUBJECT</h4>
                  <div className="subjects-grid">
                    {subjects.map((subject, index) => (
                      <span key={index} className="subject-item">
                        {subject}
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
                    <span>Pengajar Internasional</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Materi Original</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Prediksi Nilai</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Bantuan Aplikasi Universitas</span>
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
              <strong>Additional Support:</strong> Extended Essay guidance,
              Internal Assessment help, University application counseling, dan
              Predicted Grade optimization
            </p>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program A-Level & IB</h2>
          <p>Kisah sukses siswa menuju universitas top dunia</p>
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
            {testimonialsALevel.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Les Privat A-Level & IB</h2>
            <p>
              Program khusus untuk siswa sekolah internasional dengan pengajar
              yang memahami kurikulum Cambridge dan IB Diploma.
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

export default LevelPage;
