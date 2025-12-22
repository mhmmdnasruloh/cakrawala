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

const testimonialsRenang = [
  {
    id: 1,
    name: "Ibu Anita, Orang Tua Ananda Rio",
    rating: 5,
    text: "Anak saya yang sebelumnya takut air sekarang sangat senang berenang. Pelatih sangat sabar dan metode pengajarannya menyenangkan untuk anak-anak.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Budi, Dewasa Pemula",
    rating: 5,
    text: "Dari tidak bisa berenang sama sekali, sekarang sudah bisa menguasai gaya bebas dan dada. Pelatih sangat profesional dan sabar.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Sari, Atlet Renang",
    rating: 5,
    text: "Teknik renang saya semakin baik setelah dilatih oleh pelatih profesional. Waktu tempuh saya untuk 100m gaya bebas membaik signifikan.",
    avatar: "/person-icon.webp",
  },
  {
    id: 4,
    name: "Pak Hendra, Karyawan",
    rating: 5,
    text: "Berenang menjadi kegiatan refreshing yang menyehatkan. Pelatih memahami kondisi saya sebagai pemula dewasa dengan baik.",
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

function RenangPage() {
  const [kategori, setKategori] = useState("anak");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=renang&kategori=${kategori}`;
  };

  const getProgramDescription = () => {
    return `Belajar renang untuk ${
      kategori === "anak" ? "anak-anak" : "dewasa"
    } dengan pelatih profesional. Pembelajaran dengan metode yang aman dan menyenangkan di kolam renang berkualitas.`;
  };

  const getProgramImage = () => {
    return "/program-les16.webp";
  };

  const navigate = useNavigate();

  const handleLihatBiaya = () => {
    window.scrollTo(0, 0);
    navigate("/biaya-les", {
      state: {
        presetSelection: {
          curriculum: "umum",
          program: "renang",
          subProgram: "",
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat Renang</h1>
          <p>
            Belajar renang dengan pelatih profesional di kolam renang
            berkualitas. Program aman dan menyenangkan untuk semua usia.
          </p>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-header">
          <div className="testimonials-logo">
            <img src="/logo.webp" alt="Logo" />
          </div>
          <h2 className="testimonials-title">
            Ulasan Tentang Les Renang Cakrawala EduCentre
          </h2>
          <div className="rating">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <span>4,5 / 5,0</span>
            <p>Total 67 ulasan</p>
          </div>
        </div>
      </section>

      <section className="program-section">
        <div className="program-wrapper">
          {/* Pilihan Kategori */}
          <div className="program-toggle">
            <button
              className={`toggle-btn ${kategori === "anak" ? "active" : ""}`}
              onClick={() => setKategori("anak")}
            >
              👶 Anak-anak
            </button>
            <button
              className={`toggle-btn ${kategori === "dewasa" ? "active" : ""}`}
              onClick={() => setKategori("dewasa")}
            >
              👨‍🎓 Dewasa
            </button>
          </div>

          <div className="program-card renang">
            <div className="program-image-section">
              <img
                src={getProgramImage()}
                alt={`Les Renang ${kategori}`}
                className="program-image"
              />
              <span className="program-curriculum-badge renang">
                🏊 Program Renang
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">
                Les Renang {kategori === "anak" ? "Anak-anak" : "Dewasa"}
              </h3>

              <div className="program-description">
                <span className="icon">🏊</span>
                <span>{getProgramDescription()}</span>
              </div>

              <div className="program-features">
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Pelatih renang bersertifikat dan berpengalaman</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Kolam renang berkualitas dengan fasilitas lengkap</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Rasio siswa:pelatih maksimal 4:1 untuk keamanan</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Asuransi kecelakaan dan perlengkapan keselamatan</span>
                </div>
              </div>

              <div className="program-action-container">
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
              <strong>Keamanan Terjamin:</strong> Pelatih bersertifikat CPR,
              asuransi kecelakaan, dan rasio siswa-pelatih yang aman untuk
              pembelajaran optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="tools">
        <div className="container">
          <div className="tools-header">
            <h2>Fasilitas dan Keunggulan Program Renang</h2>
          </div>

          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">🛟</div>
              <div className="tool-content">
                <h3>Safety First</h3>
                <p>
                  Sistem keamanan terpadu dengan pelatih bersertifikat CPR dan
                  perlengkapan keselamatan lengkap.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🌡️</div>
              <div className="tool-content">
                <h3>Kolam Berkualitas</h3>
                <p>
                  Kolam renang dengan sistem filtrasi modern, suhu air
                  terkontrol, dan kebersihan terjamin.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">👨‍🏫</div>
              <div className="tool-content">
                <h3>Metode Personal</h3>
                <p>
                  Pendekatan pembelajaran sesuai karakter dan kemampuan individu
                  setiap siswa.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">📊</div>
              <div className="tool-content">
                <h3>Progress Tracking</h3>
                <p>
                  Pemantauan perkembangan teknik renang melalui video analysis
                  dan evaluasi berkala.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🏆</div>
              <div className="tool-content">
                <h3>Sertifikat Kemahiran</h3>
                <p>
                  Sertifikat resmi untuk setiap level yang diselesaikan sebagai
                  bukti pencapaian kemampuan renang.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎯</div>
              <div className="tool-content">
                <h3>Program Kompetisi</h3>
                <p>
                  Untuk level lanjutan, tersedia program persiapan kompetisi
                  renang dengan pelatihan intensif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program Renang</h2>
          <p>
            Apa kata siswa dan orang tua tentang program renang di Cakrawala?
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
            {testimonialsRenang.map((t) => (
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
            <h2>Lokasi Kolam Renang yang Tersedia</h2>
            <p>
              Kami menyediakan kolam renang berkualitas di lokasi strategis
              untuk kenyamanan belajar Anda.
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

export default RenangPage;
