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

const testimonialsKedinasan = [
  {
    id: 1,
    name: "Rizky, Alumni IPDN",
    rating: 5,
    text: "Berhasil lolos IPDN berkat bimbingan intensif. Simulasi CAT dan latihan fisiknya sangat membantu persiapan tes.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Sari, STAN 2023",
    rating: 5,
    text: "Dari try out pertama masih di bawah passing grade, akhirnya bisa lolos STAN. Bank soal dan strategi mengerjakan sangat akurat.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Orang Tua Andi",
    rating: 5,
    text: "Anak saya berhasil masuk SMA Taruna Nusantara. Pengajar yang alumni kedinasan benar-benar paham kebutuhan tes.",
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

function KedinasanPage() {
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=kedinasan&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    if (learningMode === "online") {
      return "Kelas kedinasan online dengan pembelajaran interaktif melalui platform virtual. Program pelatihan berfokus pada pengembangan kompetensi untuk tes kedinasan dengan simulasi CAT digital, video conference, dan bank soal online yang terupdate.";
    } else {
      return "Kelas kedinasan offline dengan pembelajaran tatap muka langsung. Program pelatihan berfokus pada pengembangan kompetensi untuk tes kedinasan termasuk latihan fisik, simulasi CAT, dan bimbingan intensif dari alumni kedinasan yang berpengalaman.";
    }
  };

  const getProgramFeatures = () => {
    if (learningMode === "online") {
      return [
        "Kelas Virtual Interaktif",
        "Simulasi CAT Digital",
        "Video Pembelajaran",
        "Bank Soal Online",
        "Konsultasi via Video Call",
        "Latihan Fisik Mandiri dengan Panduan Video",
      ];
    } else {
      return [
        "Kelas Tatap Muka Langsung",
        "Simulasi CAT di Lab Komputer",
        "Latihan Fisik Terpantau",
        "Praktik Lapangan",
        "Bimbingan Personal",
        "Try Out Berbasis Paper",
      ];
    }
  };

  const getAdditionalBenefits = () => {
    if (learningMode === "online") {
      return [
        "Akses Materi 24/7",
        "Rekaman Kelas Tersedia",
        "Flexible Schedule",
        "Grup Diskusi Online",
      ];
    } else {
      return [
        "Lapangan Latihan Khusus",
        "Laboratorium Komputer",
        "Perpustakaan Koleksi Kedinasan",
        "Kelas Kondusif",
      ];
    }
  };

  const kurikulumItems = [
    "Matematika",
    "⁠IPA (Fisika, Kimia, Biologi)",
    "IPS",
    "Bahasa Indonesia",
    "Bahasa Inggris",
    "Keterampilan Fisik dan Olahraga",
  ];

  const navigate = useNavigate();

  const handleLihatBiaya = () => {
    window.scrollTo(0, 0);
    navigate("/biaya-les", {
      state: {
        presetSelection: {
          curriculum: "nasional",
          program: "kedinasan",
          subProgram: "",
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat Kedinasan</h1>
          <p>
            {learningMode === "online"
              ? "Persiapan tes kedinasan secara online dengan teknologi terkini dan pengajar alumni berpengalaman"
              : "Persiapan tes kedinasan secara offline dengan fasilitas lengkap dan latihan fisik terpantau"}
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
                src={
                  learningMode === "online"
                    ? "/program-kedinasan.webp"
                    : "/program-kedinasan.webp"
                }
                alt="Les Privat Kedinasan"
                className="program-image"
              />
              <span
                className={`program-curriculum-badge ${
                  learningMode === "online" ? "internasional" : "nasional"
                }`}
              >
                {learningMode === "online"
                  ? "KEDINASAN ONLINE"
                  : "KEDINASAN OFFLINE"}
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">
                Les Privat Kedinasan{" "}
                {learningMode === "online" ? "Online" : "Offline"}
              </h3>

              <div className="program-meta">
                <span className="meta-item">⏱️ 2-3 jam/sesi</span>
                <span className="meta-item">📅 4-6 kali/minggu</span>
                <span className="meta-item">SMP Kelas 9</span>
                <span
                  className={`meta-item ${
                    learningMode === "online" ? "online-badge" : "offline-badge"
                  }`}
                >
                  {learningMode === "online"
                    ? "💻 Online Class"
                    : "🏫 Offline Class"}
                </span>
              </div>

              <div className="program-description">
                <span className="icon">
                  {learningMode === "online" ? "💻" : "🎖️"}
                </span>
                <span>{getProgramDescription()}</span>
              </div>

              {/* Kurikulum */}
              <div className="curriculum-features">
                <div className="curriculum-section">
                  <h4>
                    KURIKULUM{" "}
                    {learningMode === "online" ? "DIGITAL" : "NASIONAL"}
                  </h4>
                  <div className="kedinasan-grid">
                    {kurikulumItems.map((item, index) => (
                      <div key={index} className="kedinasan-item">
                        <span className="kedinasan-icon">
                          {item.includes("Matematika")
                            ? "📐"
                            : item.includes("IPA")
                            ? "🔬"
                            : item.includes("IPS")
                            ? "📊"
                            : item.includes("Bahasa Indonesia")
                            ? "📖"
                            : item.includes("Bahasa Inggris")
                            ? "🔤"
                            : item.includes("Fisik")
                            ? "💪"
                            : "🎯"}
                        </span>
                        <span className="kedinasan-name">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fitur Khusus Mode */}
              <div className="program-benefits">
                <h4>Fitur {learningMode === "online" ? "Digital" : "Kelas"}</h4>
                <div className="benefits-grid">
                  {getProgramFeatures().map((feature, index) => (
                    <div key={index} className="benefit-item">
                      <span className="icon">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keunggulan Program */}
              <div className="program-benefits">
                <h4>Keunggulan Program</h4>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Pengajar Alumni Kedinasan</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Bank Soal Lengkap</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Simulasi CAT</span>
                  </div>
                  <div className="benefit-item">
                    <span className="icon">✓</span>
                    <span>Bimbingan Lengkap</span>
                  </div>
                  {getAdditionalBenefits().map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <span className="icon">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
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
                    🏫 Offline
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
              <strong>Target Sekolah:</strong> STAN, IPDN, POLTEKIP, POLTEKIM,
              STIS, STSN, STMKG, AKMIL, AKPOL, AAL, AAU, SMA Taruna Nusantara,
              dan sekolah kedinasan lainnya
            </p>
            <p className="mode-specific-info">
              {learningMode === "online"
                ? "💡 Kelas online tersedia dengan platform interaktif, rekaman sesi, dan akses materi 24/7"
                : "💡 Kelas offline tersedia di lokasi strategis dengan fasilitas lengkap dan lingkungan belajar yang kondusif"}
            </p>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program Kedinasan</h2>
          <p>
            Kisah sukses lolos sekolah kedinasan dan SMA semi militer favorit
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
            {testimonialsKedinasan.map((t) => (
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
            <h2>
              {learningMode === "online"
                ? "Cakupan Layanan Les Privat Kedinasan Online"
                : "Cakupan Wilayah Layanan Les Privat Kedinasan Offline"}
            </h2>
            <p>
              {learningMode === "online"
                ? "Program persiapan sekolah kedinasan online tersedia untuk seluruh Indonesia dengan pengajar alumni yang memahami seluk-beluk tes dan kebutuhan khusus"
                : "Program persiapan sekolah kedinasan offline tersedia di berbagai kota dengan pengajar alumni yang memahami seluk-beluk tes dan kebutuhan khusus"}
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

export default KedinasanPage;
