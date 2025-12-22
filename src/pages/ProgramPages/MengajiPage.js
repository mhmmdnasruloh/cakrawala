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

const testimonialsMengaji = [
  {
    id: 1,
    name: "Ibu Sari, Orang Tua Ananda Raka",
    rating: 5,
    text: "Anak saya yang sebelumnya kesulitan membaca Iqra sekarang sudah lancar membaca Al-Qur'an. Guru mengaji sangat sabar dan metode pengajarannya menyenangkan.",
    avatar: "/person-icon.png",
  },
  {
    id: 2,
    name: "Budi, Dewasa Pemula",
    rating: 5,
    text: "Sebagai orang dewasa yang baru belajar mengaji, guru sangat memahami kondisi saya. Metode bertahap membuat saya tidak merasa terbebani.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Lina, Mahasiswi",
    rating: 5,
    text: "Saya ingin memperbaiki tajwid dan makhraj huruf. Alhamdulillah setelah ikut les, bacaan Al-Qur'an saya semakin bagus dan benar.",
    avatar: "/person-icon.png",
  },
  {
    id: 4,
    name: "Pak Ahmad, Karyawan",
    rating: 5,
    text: "Jadwal fleksibel sangat membantu saya sebagai karyawan. Guru bisa menyesuaikan waktu mengaji setelah pulang kerja.",
    avatar: "/person-icon.png",
  },
  {
    id: 5,
    name: "Ibu Dewi, Ibu Rumah Tangga",
    rating: 5,
    text: "Sekarang saya bisa mengajarkan anak-anak mengaji dengan benar setelah ikut les privat ini. Ilmu yang sangat bermanfaat.",
    avatar: "/person-icon.png",
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

function MengajiPage() {
  const [kategori, setKategori] = useState("anak");
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=mengaji&kategori=${kategori}&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    if (learningMode === "offline") {
      return `Sesi mengaji tatap muka langsung dengan ustadz/ustadzah profesional untuk ${
        kategori === "anak" ? "anak-anak" : "dewasa"
      }. Pembelajaran dengan metode yang sesuai.`;
    } else {
      return `Kelas mengaji online via Zoom/Google Meet untuk ${
        kategori === "anak" ? "anak-anak" : "dewasa"
      }. Cocok untuk yang membutuhkan fleksibilitas waktu.`;
    }
  };

  const getProgramImage = () => {
    return learningMode === "offline"
      ? "/program-les11.png"
      : "/program-les12.webp";
  };

  const navigate = useNavigate();

  const handleLihatBiaya = () => {
    window.scrollTo(0, 0);
    navigate("/biaya-les", {
      state: {
        presetSelection: {
          curriculum: "umum",
          program: "mengaji",
          subProgram: "",
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat Mengaji (Anak-anak & Dewasa)</h1>
          <p>
            Membantu siswa belajar membaca Al-Qur'an dengan tartil dan memahami
            dasar-dasar ilmu tajwid. Pembelajaran disesuaikan dengan usia dan
            kemampuan.
          </p>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-header">
          <div className="testimonials-logo">
            <img src="/logo.webp" alt="Logo" />
          </div>
          <h2 className="testimonials-title">
            Ulasan Tentang Les Mengaji Cakrawala EduCentre
          </h2>
          <div className="rating">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <span>4,8 / 5,0</span>
            <p>Total 73 ulasan</p>
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

          <div className="program-card mengaji">
            <div className="program-image-section">
              <img
                src={getProgramImage()}
                alt={`Les Mengaji ${kategori} ${learningMode}`}
                className="program-image"
              />
              <span className="program-curriculum-badge mengaji">
                📖 Program Mengaji
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">
                Les Mengaji {kategori === "anak" ? "Anak-anak" : "Dewasa"}
              </h3>

              <div className="program-description">
                <span className="icon">📖</span>
                <span>{getProgramDescription()}</span>
              </div>

              <div className="program-features">
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Ustadz/ustadzah kompeten dan bersanad</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    {kategori === "anak"
                      ? "Metode Iqra/Baghdadiyah"
                      : "Tahsin dan Tajwid"}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    {kategori === "anak"
                      ? "Pendekatan fun learning"
                      : "Pendekatan intensif"}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Laporan perkembangan bacaan secara berkala</span>
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
                    🕌 Offline
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
            <h2>Metode dan Materi Pembelajaran Mengaji</h2>
          </div>

          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">📘</div>
              <div className="tool-content">
                <h3>Metode Iqra</h3>
                <p>
                  Pembelajaran sistematis dari pengenalan huruf hijaiyah hingga
                  lancar membaca Al-Qur'an untuk pemula.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎵</div>
              <div className="tool-content">
                <h3>Tajwid Praktis</h3>
                <p>
                  Pengenalan hukum tajwid dasar dengan metode mudah dipahami
                  melalui contoh dan praktik langsung.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🧩</div>
              <div className="tool-content">
                <h3>Fun Learning (Anak)</h3>
                <p>
                  Metode belajar sambil bermain dengan flashcard, lagu islami,
                  dan permainan edukatif untuk anak-anak.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">📱</div>
              <div className="tool-content">
                <h3>Digital Mushaf</h3>
                <p>
                  Akses mushaf digital dengan fitur audio untuk memudahkan
                  pembelajaran online dan offline.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎯</div>
              <div className="tool-content">
                <h3>Tahsin Terstruktur</h3>
                <p>
                  Program perbaikan bacaan secara bertahap dengan evaluasi
                  berkala dan target pencapaian jelas.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🏆</div>
              <div className="tool-content">
                <h3>Sertifikat Kemajuan</h3>
                <p>
                  Penghargaan dan sertifikat untuk memotivasi siswa dalam
                  menyelesaikan setiap level pembelajaran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program Mengaji</h2>
          <p>
            Apa kata siswa & orang tua tentang program mengaji di Cakrawala?
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
            {testimonialsMengaji.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Les Mengaji</h2>
            <p>
              Kami melayani berbagai area untuk program Les Mengaji, baik secara
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

export default MengajiPage;
