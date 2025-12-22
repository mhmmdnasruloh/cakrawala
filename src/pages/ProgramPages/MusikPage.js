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

const testimonialsMusik = [
  {
    id: 1,
    name: "Rina, Pemula Piano",
    rating: 5,
    text: "Dari tidak bisa sama sekali, sekarang sudah bisa memainkan beberapa lagu sederhana. Guru sangat sabar dan metode pengajarannya menyenangkan.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Budi, Gitaris",
    rating: 5,
    text: "Teknik fingerstyle saya meningkat signifikan setelah belajar dengan guru yang kompeten. Materi disesuaikan dengan level dan minat saya.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Sari, Orang Tua Ananda Dito",
    rating: 5,
    text: "Anak saya sangat antusias belajar biola. Guru musiknya pandai membuat anak tetap fokus dan enjoy selama belajar.",
    avatar: "/person-icon.webp",
  },
  {
    id: 4,
    name: "Andi, Vokal",
    rating: 5,
    text: "Teknik pernafasan dan vokal saya semakin baik. Sekarang lebih percaya diri saat bernyanyi di depan umum.",
    avatar: "/person-icon.webp",
  },
  {
    id: 5,
    name: "Lina, Mahasiswi",
    rating: 5,
    text: "Belajar ukulele online ternyata menyenangkan. Guru bisa memberikan koreksi yang detail meskipun melalui online.",
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

function MusikPage() {
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=musik&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    if (learningMode === "offline") {
      return "Belajar musik secara tatap muka langsung dengan guru profesional. Pembelajaran berbagai alat musik dan vokal dengan metode praktik langsung.";
    } else {
      return "Kelas musik online via Zoom dengan guru berpengalaman. Cocok untuk yang membutuhkan fleksibilitas waktu dan lokasi.";
    }
  };

  const getProgramImage = () => {
    return learningMode === "offline"
      ? "/program-les9.webp"
      : "/program-les12.webp";
  };

  const navigate = useNavigate();

  const handleLihatBiaya = () => {
    window.scrollTo(0, 0);
    navigate("/biaya-les", {
      state: {
        presetSelection: {
          curriculum: "umum",
          program: "musik",
          subProgram: "",
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat Musik</h1>
          <p>
            Belajar musik privat dengan instruktur profesional untuk berbagai
            alat musik dan vokal. Pengembangan bakat musik dengan pendekatan
            personal.
          </p>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-header">
          <div className="testimonials-logo">
            <img src="/logo.webp" alt="Logo" />
          </div>
          <h2 className="testimonials-title">
            Ulasan Tentang Les Musik Cakrawala EduCentre
          </h2>
          <div className="rating">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <span>4,7 / 5,0</span>
            <p>Total 89 ulasan</p>
          </div>
        </div>
      </section>

      <section className="program-section">
        <div className="program-wrapper">
          <div className="program-card musik">
            <div className="program-image-section">
              <img
                src={getProgramImage()}
                alt={`Les Musik ${learningMode}`}
                className="program-image"
              />
              <span className="program-curriculum-badge musik">
                🎵 Program Musik
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">Les Privat Musik</h3>

              <div className="program-description">
                <span className="icon">🎵</span>
                <span>{getProgramDescription()}</span>
              </div>

              <div className="program-features">
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Guru musik profesional dan berpengalaman</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Berbagai pilihan alat musik dan vokal</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Materi teori dan praktik seimbang</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Kesempatan tampil dan ujian kenaikan level</span>
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
                    🎹 Offline
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
            <h2>Fasilitas dan Metode Pembelajaran Musik</h2>
          </div>

          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">🎹</div>
              <div className="tool-content">
                <h3>Alat Musik Lengkap</h3>
                <p>
                  Berbagai pilihan alat musik: piano, gitar, biola, drum, vokal,
                  dan banyak lainnya.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎼</div>
              <div className="tool-content">
                <h3>Modul Pembelajaran</h3>
                <p>
                  Buku panduan dan partitur musik yang disusun khusus untuk
                  setiap level dan alat musik.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎧</div>
              <div className="tool-content">
                <h3>Audio Learning</h3>
                <p>
                  File audio contoh permainan dan backing track untuk latihan di
                  rumah.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">📹</div>
              <div className="tool-content">
                <h3>Video Tutorial</h3>
                <p>
                  Rekaman video teknik dasar dan lanjutan yang bisa diakses
                  kapan saja.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🏆</div>
              <div className="tool-content">
                <h3>Sertifikat Kemajuan</h3>
                <p>
                  Sertifikat resmi untuk setiap kenaikan level sebagai apresiasi
                  pencapaian.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎪</div>
              <div className="tool-content">
                <h3>Konser Siswa</h3>
                <p>
                  Event pentas musik rutin untuk melatih kepercayaan diri dan
                  performance skill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program Musik</h2>
          <p>Apa kata siswa tentang program musik di Cakrawala?</p>
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
            {testimonialsMusik.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Les Musik</h2>
            <p>
              Kami melayani berbagai area untuk program Les Musik, baik secara
              tatap muka maupun online.
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

export default MusikPage;
