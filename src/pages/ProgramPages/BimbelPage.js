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

const testimonialsBimbel = [
  {
    id: 1,
    name: "Ibu Sari, Orang Tua Siswa SD",
    rating: 5,
    text: "Anak saya yang kelas 3 SD jadi lebih semangat belajar setelah ikut bimbel ini. Gurunya sabar dan metode belajarnya fun! Nilai matematika naik drastis dari 70 jadi 95.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Bapak Ahmad, Orang Tua Siswa SMP",
    rating: 5,
    text: "Program bimbel SMP sangat membantu anak saya memahami konsep IPA dan Matematika. Sekarang dia lebih percaya diri menghadapi ulangan dan ranking di kelas meningkat!",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Rini Permata, Siswa SMA",
    rating: 5,
    text: "Bimbel online-nya fleksibel banget! Saya bisa belajar dari rumah dengan jadwal yang disesuaikan. Materi lengkap dan guru responsif menjawab pertanyaan di luar jam belajar.",
    avatar: "/person-icon.webp",
  },
  {
    id: 4,
    name: "Ibu Linda, Orang Tua Siswa TK",
    rating: 5,
    text: "Program bimbel TK-nya kreatif dan menyenangkan. Anak saya jadi lebih siap masuk SD, sudah bisa membaca dan berhitung dasar. Gurunya juga sangat mencintai anak-anak!",
    avatar: "/person-icon.webp",
  },
  {
    id: 5,
    name: "Dimas Pratama, Siswa SMP",
    rating: 5,
    text: "Sejak ikut bimbel offline, saya lebih paham pelajaran sekolah. Kelas kecil jadi bisa banyak tanya jawab. Nilai rapor saya naik semua mata pelajaran!",
    avatar: "/person-icon.webp",
  },
  {
    id: 6,
    name: "Ibu Dewi, Orang Tua Siswa SD",
    rating: 5,
    text: "Bimbel ini benar-benar membantu anak saya yang sempat kesulitan di pelajaran Bahasa Indonesia. Sekarang dia lancar membaca dan menulis, nilai ujiannya juga bagus!",
    avatar: "/person-icon.webp",
  },
  {
    id: 7,
    name: "Andi Kurniawan, Siswa SMA",
    rating: 5,
    text: "Program intensif persiapan ujian sangat terstruktur. Materi matematika dan fisika dijelaskan dengan detail. Alhamdulillah nilai UN saya memuaskan!",
    avatar: "/person-icon.webp",
  },
  {
    id: 8,
    name: "Bapak Hendra, Orang Tua Siswa SMP",
    rating: 5,
    text: "Sistem belajar hybrid (online & offline) sangat praktis. Anak saya bisa pilih sesuai kebutuhan. Gurunya profesional dan materi up to date dengan kurikulum sekolah.",
    avatar: "/person-icon.webp",
  },
  {
    id: 9,
    name: "Maya Anggraini, Siswa SMA",
    rating: 5,
    text: "Bimbel online-nya lengkap dengan video pembelajaran dan latihan soal. Bisa diulang-ulang sampai paham. Harganya juga terjangkau untuk pelajar!",
    avatar: "/person-icon.webp",
  },
  {
    id: 10,
    name: "Ibu Ratna, Orang Tua Siswa TK",
    rating: 5,
    text: "Anak saya yang tadinya pemalu jadi lebih aktif dan berani setelah ikut bimbel. Metode belajar sambil bermain sangat efektif untuk usia TK. Recommended!",
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

function BimbelPage() {
  const [classType, setClassType] = useState("offline");

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=bimbel&type=${classType}`;
  };

  const getProgramDescription = () => {
    if (classType === "offline") {
      return "Bimbingan belajar tatap muka langsung di lokasi dengan suasana kelas yang kondusif. Interaksi langsung dengan pengajar, diskusi kelompok, dan pembelajaran yang lebih personal untuk TK, SD, SMP, dan SMA dengan metode pembelajaran yang disesuaikan dengan kebutuhan setiap jenjang.";
    } else {
      return "Bimbingan belajar online yang fleksibel dan dapat diakses dari mana saja. Pembelajaran melalui video conference interaktif, materi digital lengkap, dan sistem pembelajaran modern untuk TK, SD, SMP, dan SMA. Cocok untuk siswa yang membutuhkan fleksibilitas waktu dan tempat belajar.";
    }
  };

  const getProgramImage = () => {
    return "/bimbel.webp";
  };

  const navigate = useNavigate();

  const handleLihatBiaya = () => {
    window.scrollTo(0, 0);
    navigate("/biaya-les-bimbel", {
      state: {
        presetSelection: {
          curriculum: "online",
          program: "tk",
          subProgram: classType,
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Bimbel TK, SD, SMP, SMA</h1>
          <p>
            Bimbingan belajar berkualitas untuk semua jenjang pendidikan dengan metode pembelajaran efektif, pengajar berpengalaman, dan fasilitas lengkap
          </p>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-header">
          <div className="testimonials-logo">
            <img src="/logo.webp" alt="Logo" />
          </div>
          <h2 className="testimonials-title">
            Ulasan Tentang Bimbel Cakrawala EduCentre
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
          {/* Toggle Kelas Offline / Kelas Online */}
          <div className="program-toggle">
            <button
              className={`toggle-btn ${classType === "offline" ? "active" : ""}`}
              onClick={() => setClassType("offline")}
            >
              🏫 Kelas Offline
            </button>
            <button
              className={`toggle-btn ${classType === "online" ? "active" : ""}`}
              onClick={() => setClassType("online")}
            >
              💻 Kelas Online
            </button>
          </div>

          <div className={`program-card ${classType}`}>
            {/* Gambar di Atas */}
            <div className="program-image-section">
              <img
                src={getProgramImage()}
                alt={`Bimbel ${classType}`}
                className="program-image"
              />
              <span className={`program-curriculum-badge ${classType}`}>
                {classType === "offline" ? "🏫 Offline" : "💻 Online"}
              </span>
            </div>

            {/* Konten di Bawah */}
            <div className="program-content-section">
              <h3 className="program-title">
                Bimbel TK, SD, SMP, SMA - Kelas {classType === "offline" ? "Offline" : "Online"}
              </h3>

              <div className="program-meta">
                <span className="meta-item">⏱️ 1.5-2 jam/sesi</span>
                <span className="meta-item">📅 2-3 kali/minggu</span>
                <span className="meta-item">🎯 TK, SD, SMP, SMA</span>
              </div>

              <div className="program-description">
                <span className="icon">
                  {classType === "offline" ? "🏫" : "💻"}
                </span>
                <span>{getProgramDescription()}</span>
              </div>

              {/* Fitur Program */}
              <div className="program-features">
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    {classType === "offline"
                      ? "Pembelajaran tatap muka dengan kelas interaktif"
                      : "Pembelajaran via video conference real-time"}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    {classType === "offline"
                      ? "Diskusi kelompok dan praktik langsung"
                      : "Akses materi digital & rekaman pembelajaran"}
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    Kurikulum sesuai dengan standar nasional
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    Modul dan bahan ajar lengkap untuk semua mata pelajaran
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    Tutor berpengalaman dan tersertifikasi
                  </span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>
                    Evaluasi berkala & laporan perkembangan belajar
                  </span>
                </div>
              </div>

              <div className="program-action-container">
                <div className="program-cta">
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
              <strong>
                {classType === "offline"
                  ? "Cakupan Materi Kelas Offline:"
                  : "Cakupan Materi Kelas Online:"}
              </strong>{" "}
              {classType === "offline"
                ? "Untuk TK (Calistung, motorik, kreativitas), SD (Matematika, IPA, Bahasa Indonesia, Bahasa Inggris), SMP (Matematika, IPA, Bahasa Indonesia, Bahasa Inggris, IPS), SMA (Matematika, Fisika, Kimia, Biologi, Bahasa Indonesia, Bahasa Inggris, Ekonomi, Geografi, Sejarah, Sosiologi). Pembelajaran tatap muka dengan interaksi langsung."
                : "Untuk TK (Calistung, motorik, kreativitas), SD (Matematika, IPA, Bahasa Indonesia, Bahasa Inggris), SMP (Matematika, IPA, Bahasa Indonesia, Bahasa Inggris, IPS), SMA (Matematika, Fisika, Kimia, Biologi, Bahasa Indonesia, Bahasa Inggris, Ekonomi, Geografi, Sejarah, Sosiologi). Pembelajaran online dengan platform digital interaktif."}
            </p>
          </div>
        </div>
      </section>

      <section className="tools">
        <div className="container">
          <div className="tools-header">
            <h2>Tools & Fasilitas Belajar</h2>
          </div>
          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">📚</div>
              <div className="tool-content">
                <h3>Modul Pembelajaran Lengkap</h3>
                <p>
                  Materi pembelajaran terstruktur dan lengkap sesuai kurikulum nasional untuk semua jenjang pendidikan.
                </p>
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">💻</div>
              <div className="tool-content">
                <h3>Platform Digital</h3>
                <p>
                  Akses ke platform pembelajaran online dengan video, latihan soal, dan quiz interaktif untuk semua siswa.
                </p>
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">📊</div>
              <div className="tool-content">
                <h3>Laporan Progress Belajar</h3>
                <p>
                  Laporan perkembangan belajar siswa secara berkala untuk monitoring dan evaluasi hasil belajar.
                </p>
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">📝</div>
              <div className="tool-content">
                <h3>Bank Soal Lengkap</h3>
                <p>
                  Ribuan soal latihan dengan berbagai tingkat kesulitan lengkap dengan pembahasan detail.
                </p>
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">🎯</div>
              <div className="tool-content">
                <h3>Try Out Berkala</h3>
                <p>
                  Simulasi ujian untuk mengukur kemampuan dan kesiapan siswa menghadapi ujian sekolah.
                </p>
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">👨‍🏫</div>
              <div className="tool-content">
                <h3>Konsultasi Pribadi</h3>
                <p>
                  Sesi konsultasi one-on-one dengan tutor untuk membahas kesulitan belajar dan strategi pembelajaran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Peserta Bimbel</h2>
          <p>
            Cerita sukses siswa dan orang tua yang puas dengan Cakrawala EduCentre
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
            {testimonialsBimbel.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="testimoniprogram-card">
                  <div className="card-header">
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
            <h2>Cakupan Wilayah Layanan Bimbel</h2>
            <p>
              Program bimbel TK, SD, SMP, dan SMA tersedia di berbagai wilayah dengan kualitas pengajaran terbaik dan hasil yang terbukti meningkatkan prestasi siswa.
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

export default BimbelPage;