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

const testimonialsCalistung = [
  {
    id: 1,
    name: "Bunda Rina (Orang Tua Aisyah)",
    rating: 5,
    text: "Aisyah yang sebelumnya sulit fokus sekarang jadi antusias belajar. Gurunya sangat sabar dan metode belajarnya seru dengan banyak permainan. Dalam 2 bulan sudah bisa membaca kata sederhana!",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Pak Budi (Orang Tua Rafa)",
    rating: 5,
    text: "Rafa sekarang lebih percaya diri menulis dan berhitung. Guru lesnya kreatif banget, pakai media belajar yang menarik. Nilai plusnya, Rafa jadi disiplin karena jadwal belajarnya teratur.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Bunda Sari (Orang Tua Kenza)",
    rating: 5,
    text: "Kenza yang dulu malu-malu sekarang aktif bertanya dan berpendapat. Metode phonics-nya sangat membantu untuk persiapan sekolah internasional. Recommended banget!",
    avatar: "/person-icon.webp",
  },
  {
    id: 4,
    name: "Pak Andi (Orang Tua Bima)",
    rating: 5,
    text: "Bima jadi suka matematika setelah ikut les calistung. Gurunya bisa bikin belajar berhitung jadi menyenangkan seperti main game. Progress-nya terlihat dari laporan bulanan.",
    avatar: "/person-icon.webp",
  },
  {
    id: 5,
    name: "Bunda Maya (Orang Tua Naya)",
    rating: 5,
    text: "Naya sekarang bisa baca buku cerita sederhana sendiri. Awalnya sulit mengenal huruf, tapi dengan metode yang tepat dan kesabaran guru, sekarang sudah lancar membaca.",
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

function CalistungPage() {
  const [curriculum, setCurriculum] = useState("nasional");
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=calistung&curriculum=${curriculum}&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    if (curriculum === "nasional") {
      return learningMode === "offline"
        ? "Program Calistung dirancang untuk membangun fondasi membaca, menulis, dan berhitung anak sejak usia dini, dengan pendekatan yang menyenangkan dan dibimbing oleh guru profesional."
        : "Kelas interaktif via Zoom dengan modul digital Calistung. Belajar sambil bermain dengan metode yang disukai anak-anak, dipandu guru yang berpengalaman.";
    } else {
      return learningMode === "offline"
        ? "Program Calistung International dengan metode phonics dan pendekatan global. Membangun fondasi literasi dan numerasi yang kuat untuk persiapan sekolah internasional."
        : "Kelas online Calistung International dengan metode phonics interaktif. Pengajaran dalam bahasa Inggris dengan materi yang menyenangkan dan edukatif.";
    }
  };

  const getProgramImage = () => {
    return "/program-les1.webp";
  };

  const handleLihatBiaya = () => {
    // Scroll to top sebelum navigate
    window.scrollTo(0, 0);

    navigate("/biaya-les", {
      state: {
        presetSelection: {
          curriculum: "nasional",
          program: "calistung",
          subProgram: "",
        },
      },
    });
  };
  const navigate = useNavigate(); // IMPORTANT: Tambahkan ini

  return (
    <div className="program-page">
      {/* Konten Khusus Program Calistung */}
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat TK/K1/K2</h1>
          <p>
            Program Calistung dirancang untuk membangun fondasi membaca,
            menulis, dan berhitung anak sejak usia dini dengan pendekatan yang
            menyenangkan
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

      {/* Program Section dengan Layout Atas-Bawah */}
      <section className="program-section">
        <div className="program-wrapper">
          {/* Toggle Kurikulum (Nasional/Internasional) */}
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
            {/* Gambar di Atas */}
            <div className="program-image-section">
              <img
                src={getProgramImage()}
                alt={`Les Privat Calistung ${curriculum} ${learningMode}`}
                className="program-image"
              />
              <span className={`program-curriculum-badge ${curriculum}`}>
                {curriculum === "nasional" ? "🇮🇩 Nasional" : "🌍 Internasional"}
              </span>
            </div>

            {/* Konten di Bawah */}
            <div className="program-content-section">
              <h3 className="program-title">Les Privat TK/K1/K2</h3>

              <div className="program-meta">
                <span className="meta-item">⏱️ 1-2 jam/sesi</span>
                <span className="meta-item">📅 2-5 kali/minggu</span>
                <span className="meta-item">Semua Level</span>
              </div>

              <div className="program-description">
                <span className="icon">
                  {curriculum === "nasional" ? "🇮🇩" : "🌍"}
                </span>
                <span>{getProgramDescription()}</span>
              </div>

              {/* Fitur Kurikulum */}
              <div className="curriculum-features">
                <div className="curriculum-section">
                  <h4>
                    KURIKULUM{" "}
                    {curriculum === "nasional" ? "NASIONAL" : "INTERNASIONAL"}
                  </h4>
                  <div className="features-grid">
                    {curriculum === "nasional" ? (
                      <>
                        <span className="feature-badge">Membaca</span>
                        <span className="feature-badge">Menulis</span>
                        <span className="feature-badge">Berhitung</span>
                      </>
                    ) : (
                      <>
                        <span className="feature-badge">Phonics</span>
                        <span className="feature-badge">Reading</span>
                        <span className="feature-badge">Spelling</span>
                        <span className="feature-badge">Counting</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Keunggulan Program */}
              <div className="program-benefits">
                <h4>Keunggulan Program</h4>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Guru Berpengalaman</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Waktu Fleksibel</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Belajar di Rumah</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Laporan Berkala</span>
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

          {/* Info Tambahan di Bawah Card */}
          <div className="program-info-footer">
            <p>
              <strong>Garansi Kepuasan:</strong> Free trial pertama dan garansi
              ganti guru jika tidak cocok. Metode belajar disesuaikan dengan
              usia dan perkembangan anak.
            </p>
          </div>
        </div>
      </section>

      <section className="tools">
        <div className="container">
          <div className="tools-header">
            <h2>Tools Belajar Calistung yang Menyenangkan</h2>
          </div>

          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">🔤</div>
              <div className="tool-content">
                <h3>Kartu Huruf & Angka</h3>
                <p>
                  Kartu berwarna-warni dengan gambar menarik untuk membantu anak
                  mengenal huruf dan angka dengan cara yang menyenangkan.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🧩</div>
              <div className="tool-content">
                <h3>Puzzle Edukatif</h3>
                <p>
                  Puzzle kata dan angka yang dirancang khusus untuk melatih
                  motorik halus sekaligus mengenal konsep dasar calistung.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎵</div>
              <div className="tool-content">
                <h3>Lagu & Rima</h3>
                <p>
                  Koleksi lagu dan rima edukatif untuk membantu anak mengingat
                  huruf, angka, dan kata dengan mudah melalui musik.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">📚</div>
              <div className="tool-content">
                <h3>Buku Cerita Interaktif</h3>
                <p>
                  Buku cerita dengan ilustrasi menarik yang mendorong minat baca
                  anak dan memperkaya kosakata.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎨</div>
              <div className="tool-content">
                <h3>Media Kreatif</h3>
                <p>
                  Aktivitas menulis dan menggambar dengan berbagai media untuk
                  melatih motorik halus dan kreativitas.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎲</div>
              <div className="tool-content">
                <h3>Permainan Edukatif</h3>
                <p>
                  Berbagai permainan board game dan digital yang dirancang untuk
                  melatih kemampuan membaca, menulis, dan berhitung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Program Calistung */}
      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program Calistung</h2>
          <p>Apa kata orang tua tentang program Calistung di Cakrawala?</p>
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
            {testimonialsCalistung.map((t) => (
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

      {/* Section Cakupan Wilayah */}
      <section className="coverage-wilayah">
        <div className="container">
          <div className="coverage-header">
            <h2>Cakupan Wilayah Layanan Les Privat Calistung</h2>
            <p>
              Kami melayani berbagai area untuk program Les Privat Calistung,
              baik secara tatap muka maupun online. Berikut peta wilayah layanan
              kami:
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

export default CalistungPage;
