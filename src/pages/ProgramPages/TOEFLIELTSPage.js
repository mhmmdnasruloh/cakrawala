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

const testimonialsTOEFL = [
  {
    id: 1,
    name: "Sarah, Mahasiswa",
    rating: 5,
    text: "Dari skor TOEFL 450 jadi 587 dalam 3 bulan! Strategi time management dan tips listening-nya sangat membantu.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Rizky, Profesional",
    rating: 5,
    text: "Butuh IELTS 7.5 untuk apply beasiswa. Dalam 2 bulan berhasil dapat 7.5 berkat metode writing dan speaking yang diajarkan.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Andi, Fresh Graduate",
    rating: 5,
    text: "Simulasi tes yang mirip banget dengan yang asli bikin lebih percaya diri saat tes TOEFL iBT yang sebenarnya.",
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

function TOEFLIELTSPage() {
  const [testType, setTestType] = useState("toefl");
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=toefl&type=${testType}&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    return "Persiapan tes bahasa Inggris internasional TOEFL dan IELTS dengan metode terbaik untuk mencapai skor maksimal. Program dirancang khusus untuk menguasai strategi mengerjakan setiap section dengan efektif.";
  };

  const subjects = ["LISTENING", "READING", "SPEAKING", "WRITING"];

  const navigate = useNavigate();

  const handleLihatBiaya = () => {
    window.scrollTo(0, 0);
    navigate("/biaya-les", {
      state: {
        presetSelection: {
          curriculum: "internasional",
          program: "toeflIelts",
          subProgram: "",
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat TOEFL/IELTS Prep</h1>
          <p>
            Raih skor TOEFL/IELTS impian dengan metode persiapan terbaik dan
            strategi mengerjakan yang terbukti efektif
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
          {/* Toggle Test Type */}
          <div className="program-toggle">
            <button
              className={`toggle-btn ${testType === "toefl" ? "active" : ""}`}
              onClick={() => setTestType("toefl")}
            >
              📝 TOEFL
            </button>
            <button
              className={`toggle-btn ${testType === "ielts" ? "active" : ""}`}
              onClick={() => setTestType("ielts")}
            >
              🎯 IELTS
            </button>
          </div>

          <div className="program-card">
            <div className="program-image-section">
              <img
                src="/program-les8.webp"
                alt="Les Privat TOEFL/IELTS Prep"
                className="program-image"
              />
              <span className="program-curriculum-badge nasional">
                {testType.toUpperCase()}
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">Les Privat TOEFL/IELTS Prep</h3>

              <div className="program-meta">
                <span className="meta-item">⏱️ 2 jam/sesi</span>
                <span className="meta-item">📅 2-4 kali/minggu</span>
                <span className="meta-item">Semua Level</span>
              </div>

              <div className="program-description">
                <span className="icon">🎯</span>
                <span>{getProgramDescription()}</span>
              </div>

              {/* Subjects */}
              <div className="curriculum-features">
                <div className="curriculum-section">
                  <h4>SUBJECT</h4>
                  <div className="features-grid">
                    {subjects.map((subject, index) => (
                      <span key={index} className="feature-badge">
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
                    <span>Simulasi Tes Real</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Umpan Balik Personal</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Garansi Skor</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Jadwal Fleksibel</span>
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
              <strong>Target Skor:</strong> TOEFL 550+ / IELTS 6.5+ dengan
              garansi peningkatan skor minimal 50 poin (TOEFL) atau 0.5 band
              (IELTS)
            </p>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program TOEFL/IELTS</h2>
          <p>Kisah sukses meraih skor impian untuk studi dan karir</p>
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
            {testimonialsTOEFL.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Les Privat TOEFL/IELTS</h2>
            <p>
              Program persiapan TOEFL dan IELTS tersedia dengan pengajar
              berpengalaman dan materi terupdate sesuai perkembangan tes
              terbaru.
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

export default TOEFLIELTSPage;
