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

const testimonialsSMP = [
  {
    id: 1,
    name: "Rizki, Kelas 8 SMP",
    rating: 5,
    text: "Matematika yang dulu saya anggap sulit sekarang jadi lebih mudah dipahami. Guru les menjelaskan dengan metode yang sederhana dan banyak latihan soal.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Sari, Kelas 9 SMP",
    rating: 5,
    text: "Persiapan UNBK jadi lebih terarah dengan bimbingan guru les. Try out rutin membantu saya mengenali kelemahan dan memperbaikinya.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Dimas, Kelas 7 SMP",
    rating: 5,
    text: "Saya lebih percaya diri menjawab pertanyaan di kelas setelah ikut les privat. Guru les sangat sabar dalam menjelaskan materi IPA.",
    avatar: "/person-icon.webp",
  },
  {
    id: 4,
    name: "Lina, Kelas 9 SMP",
    rating: 5,
    text: "Nilai Bahasa Inggris saya naik signifikan setelah ikut les. Metode pembelajaran yang menyenangkan membuat saya tidak bosan.",
    avatar: "/person-icon.webp",
  },
  {
    id: 5,
    name: "Fajar, Kelas 8 SMP",
    rating: 5,
    text: "Les privat membantu saya memahami konsep IPS yang selama ini sulit saya ingat. Guru menggunakan peta minda yang memudahkan belajar.",
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

function SMPPage() {
  const [curriculum, setCurriculum] = useState("nasional");
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=smp&curriculum=${curriculum}&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    if (curriculum === "nasional") {
      return learningMode === "offline"
        ? "Sesi tatap muka langsung dengan guru profesional sesuai Kurikulum Nasional. Fokus pada pemahaman konsep dan persiapan ujian sekolah."
        : "Kelas interaktif via Zoom dengan modul digital Kurikulum Nasional. Pembelajaran menyeluruh untuk semua mata pelajaran SMP.";
    } else {
      return learningMode === "offline"
        ? "Sesi tatap muka langsung dengan guru profesional berpengalaman mengajar Kurikulum International. Materi Cambridge/IB untuk SMP."
        : "Kelas interaktif via Zoom dengan modul digital Kurikulum International. Pengajaran dalam bahasa Inggris dan materi standar global.";
    }
  };

  const getProgramImage = () => {
    if (curriculum === "nasional") {
      return learningMode === "offline"
        ? "/program-les3.webp"
        : "/program-les3.webp";
    } else {
      return learningMode === "offline"
        ? "/program-les3.webp"
        : "/program-les3.webp";
    }
  };

  const navigate = useNavigate();

  const handleLihatBiaya = () => {
    window.scrollTo(0, 0);
    navigate("/biaya-les", {
      state: {
        presetSelection: {
          curriculum: "nasional",
          program: "smp",
          subProgram: "",
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat SMP / Secondary School</h1>
          <p>
            Program khusus untuk siswa Sekolah Menengah Pertama dengan
            pendekatan belajar yang mendalam dan persiapan ujian yang
            terstruktur
          </p>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-header">
          <div className="testimonials-logo">
            <img src="/logo.webp" alt="Logo" />
          </div>
          <h2 className="testimonials-title">
            Ulasan Tentang Les Privat SMP Cakrawala EduCentre
          </h2>
          <div className="rating">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <span>4,5 / 5,0</span>
            <p>Total 42 ulasan</p>
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
                alt={`Les Privat SMP ${curriculum} ${learningMode}`}
                className="program-image"
              />
              <span className={`program-curriculum-badge ${curriculum}`}>
                {curriculum === "nasional" ? "🇮🇩 Nasional" : "🌍 Internasional"}
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">
                Les Privat SMP{" "}
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
                    Guru profesional spesialis SMP{" "}
                    {curriculum === "internasional" ? "berstandar global" : ""}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    {learningMode === "offline"
                      ? `Modul lengkap semua mapel & praktik langsung`
                      : `Modul digital interaktif & rekaman kelas`}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    {curriculum === "nasional"
                      ? "Kurikulum Merdeka/K13 terbaru"
                      : "Cambridge/IB Middle Years Programme"}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Persiapan ujian sekolah dan try out berkala</span>
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
            <h2>Tools Belajar untuk Siswa SMP</h2>
          </div>

          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">📊</div>
              <div className="tool-content">
                <h3>Bank Soal Ujian</h3>
                <p>
                  Kumpulan soal ujian sekolah, try out, dan prediksi UNBK untuk
                  semua mata pelajaran SMP.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🔬</div>
              <div className="tool-content">
                <h3>Modul Praktikum IPA</h3>
                <p>
                  Panduan praktikum IPA sederhana yang dapat dilakukan di rumah
                  untuk memahami konsep sains.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🗺️</div>
              <div className="tool-content">
                <h3>Peta Interaktif IPS</h3>
                <p>
                  Media pembelajaran geografi dan sejarah dengan peta interaktif
                  dan timeline sejarah.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">💬</div>
              <div className="tool-content">
                <h3>Audio Bahasa Inggris</h3>
                <p>
                  File audio percakapan bahasa Inggris untuk melatih listening
                  dan speaking skills.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">📈</div>
              <div className="tool-content">
                <h3>Analisis Progress Belajar</h3>
                <p>
                  Laporan perkembangan belajar detail dengan identifikasi
                  kelemahan dan rekomendasi perbaikan.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎯</div>
              <div className="tool-content">
                <h3>Strategi Mengerjakan Soal</h3>
                <p>
                  Teknik dan tips mengerjakan berbagai jenis soal ujian dengan
                  efektif dan efisien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program SMP</h2>
          <p>Apa kata siswa & orang tua tentang program SMP di Cakrawala?</p>
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
            {testimonialsSMP.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Les Privat SMP</h2>
            <p>
              Kami melayani berbagai area untuk program Les Privat SMP, baik
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

      {/* Gunakan komponen Tutor */}
      <Tutor />
    </div>
  );
}

export default SMPPage;
