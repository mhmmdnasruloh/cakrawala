import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // IMPORTANT: Tambahkan ini
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../pages/ProgramPages.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MapComponents from "../../components/MapComponents";
import Tutor from "../../components/Tutor";

const testimonialsInggris = [
  {
    id: 1,
    name: "Dina, 25 tahun",
    rating: 5,
    text: "Dari nervous speaking English, sekarang lebih percaya diri. Metode pengajarannya fun dan praktis, langsung praktek conversation.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Rizky, SMA Kelas 11",
    rating: 5,
    text: "Nilai English di sekolah naik signifikan. Gurunya patient banget dan materi yang diajarin relevan sama pelajaran sekolah.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Ibu Anita (Profesional)",
    rating: 5,
    text: "Butuh English untuk kerja, dalam 3 bulan udah lebih lancar presentasi dan meeting dengan client internasional. Very recommended!",
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

function BahasaInggrisPage() {
  const [learningMode, setLearningMode] = useState("offline");
  const handleLihatBiaya = () => {
    // Scroll to top sebelum navigate
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
  const navigate = useNavigate(); // IMPORTANT: Tambahkan ini

  // FUNCTION LAMA: Tetap dipertahankan untuk opsi daftar langsung (jika masih diperlukan)
  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=bahasainggris&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    return "Program les bahasa Inggris dirancang untuk meningkatkan kemampuan berbahasa Inggris dari dasar hingga mahir. Fokus pada practical English untuk percakapan sehari-hari, akademik, maupun profesional dengan metode komunikatif yang efektif.";
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat Bahasa Inggris</h1>
          <p>
            Tingkatkan kemampuan bahasa Inggris Anda dengan metode pembelajaran
            yang praktis dan aplikatif untuk berbagai kebutuhan
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
                src="/program-les10.webp"
                alt="Les Privat Bahasa Inggris"
                className="program-image"
              />
              <span className="program-curriculum-badge nasional">
                BAHASA INGGRIS
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">Les Privat Bahasa Inggris</h3>

              <div className="program-meta">
                <span className="meta-item">⏱️ 1.5-2 jam/sesi</span>
                <span className="meta-item">📅 2-4 kali/minggu</span>
                <span className="meta-item">Semua Usia</span>
              </div>

              <div className="program-description">
                <span className="icon">🇬🇧</span>
                <span>{getProgramDescription()}</span>
              </div>

              <div className="program-features">
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Pengajar berpengalaman dan certified</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Focus on speaking and communication skills</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Customized materials sesuai kebutuhan</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Practical English for real-life situations</span>
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
                  {/* TOMBOL DIUBAH: dari "Daftar" menjadi "Lihat Selengkapnya" */}
                  <button
                    className="program-btn"
                    type="button"
                    onClick={handleLihatBiaya} // FUNCTION DIUBAH
                  >
                    🔍 Lihat Biaya & Selengkapnya
                  </button>

                  {/* OPSIONAL: Tombol daftar langsung bisa dihapus atau dipertahankan */}
                  {/* <button
                    className="program-btn secondary"
                    type="button"
                    onClick={handleDaftarClick}
                  >
                    📝 Daftar Langsung
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="program-info-footer">
            <p>
              <strong>Fokus Pembelajaran:</strong> Conversation, Grammar,
              Vocabulary, Pronunciation, Reading, Writing, dan Listening skills
            </p>
          </div>
        </div>
      </section>

      {/* ... bagian lainnya tetap sama ... */}
      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program Bahasa Inggris</h2>
          <p>Kisah sukses siswa dalam menguasai bahasa Inggris</p>
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
            {testimonialsInggris.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Les Privat Bahasa Inggris</h2>
            <p>
              Program les bahasa Inggris tersedia untuk berbagai level dan usia,
              dengan pengajar yang berpengalaman di bidangnya.
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

export default BahasaInggrisPage;
