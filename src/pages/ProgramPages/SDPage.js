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

const testimonialsSD = [
  {
    id: 1,
    name: "Adit, Kelas 4 SD",
    rating: 5,
    text: "Sejak ikut les privat ini, saya jadi lebih suka belajar Matematika. Biasanya saya takut kalau ada soal cerita, tapi sekarang saya bisa mengerjakannya dengan percaya diri. Guru selalu memberikan contoh yang mirip dengan kehidupan sehari-hari, jadi saya cepat paham dan merasa belajar itu menyenangkan.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Nisa, Kelas 5 SD",
    rating: 5,
    text: "Awalnya saya sulit membaca cepat dan sering tertinggal saat pelajaran di kelas. Setelah ikut les, saya jadi lebih lancar membaca, bahkan guru di sekolah bilang kemampuan saya meningkat pesat. Saya juga jadi lebih rajin membaca cerita di rumah karena metode belajarnya seru dan tidak membosankan.",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Raka, Kelas 6 SD",
    rating: 5,
    text: "Saya paling susah menghafal rumus IPA, tapi di sini saya diajari dengan cara praktikum sederhana. Guru membawa benda-benda sehari-hari untuk menjelaskan, jadi saya langsung mengerti konsepnya. Sekarang saya malah sering jadi yang pertama menjawab pertanyaan IPA di kelas.",
    avatar: "/person-icon.webp",
  },
  {
    id: 4,
    name: "Dewi, Kelas 3 SD",
    rating: 5,
    text: "Saya biasanya cepat bosan kalau belajar, tapi di les privat ini gurunya sabar banget dan suka kasih permainan edukatif. Jadi belajar itu seperti main sambil belajar. Hasilnya, nilai ulangan saya yang dulu rata-rata sekarang selalu naik, terutama di Matematika dan Bahasa Indonesia.",
    avatar: "/person-icon.webp",
  },
  {
    id: 5,
    name: "Fajar, Kelas 5 SD",
    rating: 5,
    text: "Saya dulu suka grogi kalau disuruh maju ke depan kelas. Tapi setelah ikut les privat, saya lebih percaya diri. Gurunya sering memberikan kesempatan untuk presentasi kecil-kecilan, jadi saya terbiasa berbicara di depan orang lain. Sekarang saya tidak malu lagi kalau ditunjuk guru di sekolah.",
    avatar: "/person-icon.webp",
  },
  {
    id: 6,
    name: "Putri, Kelas 2 SD",
    rating: 5,
    text: "Saya senang sekali belajar di sini karena banyak gambar dan warna-warna di modulnya. Saya jadi cepat mengerti pelajaran membaca dan menulis. Guru juga sering memberi saya stiker bintang kalau bisa menyelesaikan tugas dengan baik. Jadi saya semakin semangat belajar setiap hari.",
    avatar: "/person-icon.webp",
  },
  {
    id: 7,
    name: "Rico, Kelas 6 SD",
    rating: 5,
    text: "Saya ikut les privat ini untuk persiapan ujian akhir. Latihannya banyak sekali, mulai dari soal ulangan harian sampai soal ujian sekolah. Awalnya memang terasa berat, tapi lama-lama saya terbiasa dan hasil try out saya semakin bagus. Sekarang saya lebih tenang menghadapi ujian.",
    avatar: "/person-icon.webp",
  },
  {
    id: 8,
    name: "Maya, Kelas 4 SD",
    rating: 5,
    text: "Saya suka pelajaran Bahasa Inggris, tapi dulu saya sering bingung dengan grammar. Di les ini saya diajari dengan lagu dan permainan bahasa, jadi lebih mudah mengingat kata-kata baru. Sekarang saya bisa bercakap-cakap sederhana dalam Bahasa Inggris dengan lebih lancar.",
    avatar: "/person-icon.webp",
  },
  {
    id: 9,
    name: "Doni, Kelas 5 SD",
    rating: 5,
    text: "Saya dulu sering malas belajar karena merasa pelajaran sulit. Tapi guru les selalu memberi motivasi dan menjelaskan pelajaran dengan sabar. Lama-lama saya jadi punya kebiasaan belajar setiap hari. Nilai rapor saya naik, dan orang tua saya bangga sekali dengan perubahan ini.",
    avatar: "/person-icon.webp",
  },
  {
    id: 10,
    name: "Lina, Kelas 3 SD",
    rating: 5,
    text: "Di les privat ini, saya bisa bertanya apa saja yang tidak saya mengerti di sekolah. Gurunya tidak pernah marah, malah menjelaskan sampai saya paham betul. Saya jadi tidak takut salah lagi. Sekarang saya merasa lebih siap saat ada ulangan mendadak di sekolah.",
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

function SDPage() {
  const [curriculum, setCurriculum] = useState("nasional");
  const [learningMode, setLearningMode] = useState("offline");

  const handleDaftarClick = () => {
    // Arahkan ke form pendaftaran dengan parameter kurikulum dan mode
    window.location.href = `/daftar?program=sd&curriculum=${curriculum}&mode=${learningMode}`;
  };

  const getProgramDescription = () => {
    if (curriculum === "nasional") {
      return learningMode === "offline"
        ? "Sesi tatap muka langsung dengan guru profesional sesuai Kurikulum Nasional. Materi disesuaikan dengan kurikulum Kemendikbud dan modul cetak lengkap."
        : "Kelas interaktif via Zoom dengan modul digital Kurikulum Nasional. Fleksibel waktu belajar dan akses rekaman kelas sesuai standar pendidikan Indonesia.";
    } else {
      return learningMode === "offline"
        ? "Sesi tatap muka langsung dengan guru profesional berpengalaman mengajar Kurikulum International. Materi Cambridge/IB dengan modul berbahasa Inggris."
        : "Kelas interaktif via Zoom dengan modul digital Kurikulum International. Pengajaran dalam bahasa Inggris dan materi standar global.";
    }
  };

  const getProgramImage = () => {
    if (curriculum === "nasional") {
      return learningMode === "offline"
        ? "/program-les2.webp"
        : "/program-les2.webp";
    } else {
      return learningMode === "offline"
        ? "/program-les2.webp"
        : "/program-les2.webp";
    }
  };

  const navigate = useNavigate();

  const handleLihatBiaya = () => {
    window.scrollTo(0, 0);
    navigate("/biaya-les", {
      state: {
        presetSelection: {
          curriculum: "nasional",
          program: "sd",
          subProgram: "",
        },
      },
    });
  };

  return (
    <div className="program-page">
      {/* Konten Khusus Program SD */}
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Les Privat SD / Primary School</h1>
          <p>
            Program khusus untuk siswa Sekolah Dasar dengan pendekatan belajar
            yang menyenangkan
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
              className={`toggle-btn ${curriculum === "nasional" ? "active" : ""
                }`}
              onClick={() => setCurriculum("nasional")}
            >
              🇮🇩 Kurikulum Nasional
            </button>
            <button
              className={`toggle-btn ${curriculum === "internasional" ? "active" : ""
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
                alt={`Les Privat SD ${curriculum} ${learningMode}`}
                className="program-image"
              />
              <span className={`program-curriculum-badge ${curriculum}`}>
                {curriculum === "nasional" ? "🇮🇩 Nasional" : "🌍 Internasional"}
              </span>
            </div>

            {/* Konten di Bawah */}
            <div className="program-content-section">
              <h3 className="program-title">
                Les Privat SD{" "}
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

              {/* Fitur Program */}
              <div className="program-features">
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    Guru profesional berpengalaman{" "}
                    {curriculum === "internasional" ? "berstandar global" : ""}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    {learningMode === "offline"
                      ? `Modul ${curriculum === "internasional"
                        ? "berbahasa Inggris"
                        : "cetak lengkap"
                      } & praktik langsung`
                      : `Modul digital interaktif ${curriculum === "internasional"
                        ? "berbahasa Inggris"
                        : ""
                      } & rekaman kelas`}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    {curriculum === "nasional"
                      ? "Kurikulum Kemendikbud terbaru"
                      : "Cambridge/IB Curriculum"}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    Laporan perkembangan berkala{" "}
                    {curriculum === "internasional"
                      ? "dalam bahasa Inggris"
                      : ""}
                  </span>
                </div>
              </div>

              <div className="program-action-container">
                <div className="mode-toggle">
                  <button
                    className={`mode-btn ${learningMode === "offline" ? "active" : ""
                      }`}
                    onClick={() => setLearningMode("offline")}
                  >
                    📚 Offline
                  </button>
                  <button
                    className={`mode-btn ${learningMode === "online" ? "active" : ""
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
              ganti guru jika tidak cocok
            </p>
          </div>
        </div>
      </section>

      <section className="tools">
        <div className="container">
          <div className="tools-header">
            <h2>Tools Belajar untuk Siswa SD</h2>
          </div>

          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">✏️</div>
              <div className="tool-content">
                <h3>Buku Latihan Matematika Dasar</h3>
                <p>
                  Latihan soal interaktif yang membantu siswa memahami konsep
                  dasar Matematika dengan lebih menyenangkan.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">📖</div>
              <div className="tool-content">
                <h3>Modul Membaca & Menulis</h3>
                <p>
                  Materi membaca dan menulis yang disusun sesuai kurikulum,
                  lengkap dengan ilustrasi berwarna agar lebih menarik.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🧩</div>
              <div className="tool-content">
                <h3>Game Edukasi</h3>
                <p>
                  Puzzle, kuis, dan permainan edukatif yang membantu
                  meningkatkan konsentrasi sekaligus melatih logika anak.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎧</div>
              <div className="tool-content">
                <h3>Audio Pembelajaran</h3>
                <p>
                  File audio untuk membantu anak belajar dengan cara mendengar,
                  cocok untuk memperkuat daya ingat.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">🎨</div>
              <div className="tool-content">
                <h3>Media Kreatif</h3>
                <p>
                  Kegiatan menggambar dan mewarnai yang dirancang untuk
                  mengembangkan kreativitas dan imajinasi siswa SD.
                </p>
              </div>
            </div>

            <div className="tool-item">
              <div className="tool-icon">📝</div>
              <div className="tool-content">
                <h3>Worksheet Harian</h3>
                <p>
                  Lembar kerja harian untuk melatih keterampilan akademik
                  sekaligus membentuk kebiasaan belajar mandiri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Program SD */}
      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Program SD</h2>
          <p>Apa kata siswa & orang tua tentang program SD di Cakrawala?</p>
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
            {testimonialsSD.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Les Privat SD</h2>
            <p>
              Kami melayani berbagai area untuk program Les Privat SD, baik
              secara tatap muka maupun online. Berikut peta wilayah layanan
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

export default SDPage;
