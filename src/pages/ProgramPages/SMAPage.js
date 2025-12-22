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

const testimonialsSMA = [
  {
    id: 1,
    name: "Andi, Kelas 12 SMA",
    rating: 5,
    text: "Persiapan UTBK jadi lebih terstruktur dengan bimbingan guru les. Try out rutin membantu saya meningkatkan skor secara signifikan.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Dewi, Kelas 11 SMA",
    rating: 5,
    text: "Guru les sangat membantu dalam memahami materi yang kompleks. Metode pengajaran yang sistematis dan mudah dipahami.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Raka, Kelas 10 SMA",
    rating: 5,
    text: "Transisi dari SMP ke SMA lebih smooth berkat bimbingan les privat. Konsep-konsep sulit jadi lebih mudah dipahami.",
    avatar: "/person-icon.webp",
  },
  {
    id: 4,
    name: "Sari, Kelas 12 SMA",
    rating: 5,
    text: "Nilai rapor saya meningkat drastis setelah ikut les privat. Guru-guru di Cakrawala sangat kompeten dan perhatian.",
    avatar: "/person-icon.webp",
  },
  {
    id: 5,
    name: "Fajar, Kelas 11 SMA",
    rating: 5,
    text: "Fisika dan Matematika yang dulu menakutkan sekarang jadi menyenangkan. Guru les pandai membuat analogi yang mudah dimengerti.",
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

function SMAPage() {
  const [curriculum, setCurriculum] = useState("nasional");
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=sma&curriculum=${curriculum}&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    if (curriculum === "nasional") {
      return learningMode === "offline"
        ? "Sesi tatap muka langsung dengan guru profesional spesialis SMA. Fokus pada pemahaman konsep dan persiapan UTBK."
        : "Kelas interaktif via Zoom dengan modul digital Kurikulum Nasional untuk SMA.";
    } else {
      return learningMode === "offline"
        ? "Sesi tatap muka langsung dengan guru profesional berpengalaman mengajar Kurikulum International untuk SMA."
        : "Kelas interaktif via Zoom dengan modul digital Kurikulum International untuk SMA.";
    }
  };

  const getProgramImage = () => {
    if (curriculum === "nasional") {
      return learningMode === "offline"
        ? "/program-les4.webp"
        : "/program-les4.webp";
    } else {
      return learningMode === "offline"
        ? "/program-les4.webp"
        : "/program-les4.webp";
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
          subProgram: "",
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat SMA / Junior College</h1>
          <p>
            Program intensif untuk siswa SMA dengan fokus pada persiapan masuk
            perguruan tinggi dan penguasaan materi yang kompleks
          </p>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-header">
          <div className="testimonials-logo">
            <img src="/logo.webp" alt="Logo" />
          </div>
          <h2 className="testimonials-title">
            Ulasan Tentang Les Privat SMA Cakrawala EduCentre
          </h2>
          <div className="rating">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <span>4,5 / 5,0</span>
            <p>Total 65 ulasan</p>
          </div>
        </div>
      </section>

      <section className="program-section">
        <div className="program-wrapper">
          <div className="program-toggle">
            <button
              className={`toggle-btn ${
                curriculum === "nasional" ? "active" : ""
              }`}
              onClick={() => setCurriculum("nasional")}
            >
              🇮🇩 Kurikulum Nasional
            </button>
            <button
              className={`toggle-btn ${
                curriculum === "internasional" ? "active" : ""
              }`}
              onClick={() => setCurriculum("internasional")}
            >
              🌍 Kurikulum Internasional
            </button>
          </div>

          <div className={`program-card ${curriculum}`}>
            <div className="program-image-section">
              <img
                src={getProgramImage()}
                alt={`Les Privat SMA ${curriculum} ${learningMode}`}
                className="program-image"
              />
              <span className={`program-curriculum-badge ${curriculum}`}>
                {curriculum === "nasional" ? "🇮🇩 Nasional" : "🌍 Internasional"}
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">
                Les Privat SMA{" "}
                {curriculum === "nasional"
                  ? "Kurikulum Nasional"
                  : "Kurikulum Internasional"}
              </h3>

              <div className="program-description">
                <span className="icon">
                  {curriculum === "nasional" ? "🇮🇩" : "🌍"}
                </span>
                <span>{getProgramDescription()}</span>
              </div>

              <div className="program-features">
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    Guru profesional spesialis SMA{" "}
                    {curriculum === "internasional" ? "berstandar global" : ""}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    {learningMode === "offline"
                      ? `Modul lengkap semua mapel SMA & praktik langsung`
                      : `Modul digital interaktif & rekaman kelas`}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Persiapan UTBK/SBMPTN dan try out berkala</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Konsultasi pemilihan jurusan perguruan tinggi</span>
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
              <strong>Garansi Kepuasan:</strong> Free trial pertama dan garansi
              ganti guru jika tidak cocok
            </p>
          </div>
        </div>
      </section>

      <section className="tools">
        <div className="container">
          <div className="tools-header">
            <h2>Tools Belajar untuk Siswa SMA</h2>
          </div>

          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">📚</div>
              <div className="tool-content">
                <h3>Bank Soal UTBK</h3>
                <p>
                  Ribuan soal UTBK tahun-tahun sebelumnya lengkap dengan
                  pembahasan detail dan tips pengerjaan.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">📊</div>
              <div className="tool-content">
                <h3>Analisis Try Out</h3>
                <p>
                  Sistem analisis hasil try out yang mendetail untuk
                  mengidentifikasi kelemahan dan kekuatan siswa.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎯</div>
              <div className="tool-content">
                <h3>Strategi Pengerjaan Soal</h3>
                <p>
                  Teknik khusus mengerjakan soal HOTS (High Order Thinking
                  Skills) dan manajemen waktu ujian.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">💻</div>
              <div className="tool-content">
                <h3>Simulasi UTBK Online</h3>
                <p>
                  Simulasi ujian berbasis komputer yang mirip dengan sistem UTBK
                  asli untuk melatih adaptasi.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">📈</div>
              <div className="tool-content">
                <h3>Progress Tracking</h3>
                <p>
                  Pemantauan perkembangan belajar secara real-time dengan grafik
                  dan rekomendasi perbaikan.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎓</div>
              <div className="tool-content">
                <h3>Konsultasi Karir</h3>
                <p>
                  Bimbingan pemilihan jurusan dan kampus berdasarkan minat,
                  bakat, dan potensi siswa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program SMA</h2>
          <p>Apa kata siswa & orang tua tentang program SMA di Cakrawala?</p>
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
            {testimonialsSMA.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Les Privat SMA</h2>
            <p>
              Kami melayani berbagai area untuk program Les Privat SMA, baik
              secara tatap muka maupun online.
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

export default SMAPage;
