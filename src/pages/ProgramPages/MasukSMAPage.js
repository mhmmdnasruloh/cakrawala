import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../pages/ProgramPages.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MapComponents from "../../components/MapComponents";
import Tutor from "../../components/Tutor";
import { useNavigate } from "react-router-dom";

const testimonialsPersiapanSMA = [
  {
    id: 1,
    name: "Andi Pratama, Lolos MAN IC 2024",
    rating: 5,
    text: "Alhamdulillah lolos MAN IC! Program persiapannya sangat intensif dan materi soal-soalnya mirip banget sama tes aslinya. Gurunya juga sabar ngajarin strategi jawab cepat.",
    avatar: "/person-icon.webp",
  },
  {
    id: 2,
    name: "Siti Nurhaliza, Lolos Labschool 2024",
    rating: 5,
    text: "Try out rutin dan pembahasan lengkap bikin saya makin pede. Strategi menjawab soal yang diajarkan sangat membantu waktu tes. Sekarang saya siswa Labschool!",
    avatar: "/person-icon.webp",
  },
  {
    id: 3,
    name: "Rudi Hartono, Lolos BPK Penabur 2024",
    rating: 5,
    text: "Bimbingan personal dari mentor sangat membantu. Materi logika dan penalaran dikupas tuntas. Alhamdulillah diterima di BPK Penabur dengan nilai memuaskan!",
    avatar: "/person-icon.webp",
  },
  {
    id: 4,
    name: "Dewi Lestari, Lolos NJIS 2024",
    rating: 5,
    text: "Program ini benar-benar bikin saya siap menghadapi tes NJIS. Latihan soal khusus setiap sekolah sangat membantu. Mental juga dilatih jadi gak nervous saat tes!",
    avatar: "/person-icon.webp",
  },
  {
    id: 5,
    name: "Fajar Ramadhan, Lolos MAN IC 2024",
    rating: 5,
    text: "Modul eksklusif dan try out berkala bikin saya terbiasa dengan sistem tes. Gurunya juga kasih tips-tips khusus yang gak ada di tempat lain. Highly recommended!",
    avatar: "/person-icon.webp",
  },
  {
    id: 6,
    name: "Maya Putri, Lolos Labschool 2024",
    rating: 5,
    text: "Lingkungan belajarnya seru dan supportif! Teman-teman sekelas juga sama-sama semangat. Alhamdulillah usaha keras dibayar dengan diterima di Labschool!",
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

function PersiapanSMAPage() {
  const navigate = useNavigate();

  const handleDaftarClick = () => {
    window.location.href = `/daftar?program=persiapan-sma-favorit`;
  };

  const getProgramDescription = () => {
    return "Program persiapan khusus untuk masuk sekolah unggulan seperti MAN IC, Labschool, NJIS, dan BPK Penabur dengan sistem belajar intensif dan garansi keterima. Dibimbing oleh mentor berpengalaman dengan metode pembelajaran yang terbukti efektif.";
  };

  const handleLihatBiaya = () => {
    window.scrollTo(0, 0);
    navigate("/biaya-les", {
      state: {
        presetSelection: {
          curriculum: "nasional",
          program: "smafavorite",
          subProgram: "",
        },
      },
    });
  };

  return (
    <div className="program-page">
      <section className="supercamp-hero">
        <div className="supercamp-hero-container">
          <h1>Persiapan Masuk SMA Favorit</h1>
          <p>
            Program persiapan intensif untuk masuk sekolah unggulan dengan
            sistem belajar terstruktur dan garansi keterima
          </p>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-header">
          <div className="testimonials-logo">
            <img src="/logo.webp" alt="Logo" />
          </div>
          <h2 className="testimonials-title">
            Ulasan Tentang Program Persiapan Masuk SMA Favorit Cakrawala
            EduCentre
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
                src="/sekolah.webp"
                alt="Persiapan Masuk SMA Favorit"
                className="program-image"
              />
              <span className="program-curriculum-badge nasional">
                📚 KURIKULUM NASIONAL
              </span>
            </div>

            <div className="program-content-section">
              <h3 className="program-title">
                Persiapan Masuk SMA Favorit (MAN IC, Labschool, NJIS, BPK
                Penabur)
              </h3>

              <div className="program-meta">
                <span className="meta-item">⏱️ 2-3 jam/sesi</span>
                <span className="meta-item">📅 3-4 kali/minggu</span>
                <span className="meta-item">🎯 Siswa SMP Kelas 9</span>
              </div>

              <div className="program-description">
                <span className="icon">🎓</span>
                <span>{getProgramDescription()}</span>
              </div>

              <div className="program-features">
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Penguasaan Materi Akademik Inti</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Latihan Soal Khusus Setiap Sekolah</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Pembelajaran Intensif Logika & Penalaran</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Try Out Berkala (Simulasi Tes Asli)</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Kelas Strategi Menjawab Soal</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Penguatan Mental & Skill Psikotes</span>
                </div>
                <div className="feature-item">
                  <span className="icon">✅</span>
                  <span>Bimbingan Personal Mentor</span>
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
              <strong>Keuntungan Program:</strong> Lebih Siap Menghadapi Tes
              Masuk Sekolah Unggulan • Bimbingan Personal 1 Siswa 1 Mentor •
              Materi Lengkap Sesuai Kurikulum Seleksi • Try Out Rutin + Analisis
              Nilai Lengkap • Peningkatan Kecepatan & Ketepatan Menjawab •
              Mulai Terbiasa dengan Sistem Tes Sekolah Favorit • Meningkatkan
              Kepercayaan Diri • Lingkungan Belajar yang Seru & Supportif •
              Akses Modul Eksklusif
            </p>
          </div>
        </div>
      </section>

      <section className="tools">
        <div className="container">
          <div className="tools-header">
            <h2>Tools & Fasilitas Persiapan Masuk SMA Favorit</h2>
          </div>
          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">📚</div>
              <div className="tool-content">
                <h3>Modul Eksklusif</h3>
                <p>
                  Materi pembelajaran khusus yang disesuaikan dengan pola soal
                  setiap sekolah unggulan target.
                </p>
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">💻</div>
              <div className="tool-content">
                <h3>Simulasi Tes CBT</h3>
                <p>
                  Latihan dengan sistem Computer Based Test untuk adaptasi
                  dengan sistem ujian sekolah favorit.
                </p>
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">📊</div>
              <div className="tool-content">
                <h3>Analisis Hasil Try Out</h3>
                <p>
                  Laporan detail performa siswa dengan analisis kekuatan dan
                  area yang perlu ditingkatkan.
                </p>
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">📝</div>
              <div className="tool-content">
                <h3>Bank Soal Lengkap</h3>
                <p>
                  Ribuan soal latihan dari berbagai sekolah unggulan dengan
                  pembahasan detail dan strategi cepat.
                </p>
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">🎯</div>
              <div className="tool-content">
                <h3>Strategi Smart Solution</h3>
                <p>
                  Teknik dan trik khusus untuk mengerjakan soal dengan cepat,
                  tepat, dan efisien sesuai waktu yang tersedia.
                </p>
              </div>
            </div>
            <div className="tool-item">
              <div className="tool-icon">👨‍🏫</div>
              <div className="tool-content">
                <h3>Mentoring Personal</h3>
                <p>
                  Sesi konsultasi pribadi dengan mentor untuk strategi belajar,
                  motivasi, dan persiapan mental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimoniprogram">
        <div className="testimoniprogram-header">
          <h2>Testimoni Siswa yang Lolos SMA Favorit</h2>
          <p>
            Cerita sukses siswa yang berhasil masuk sekolah unggulan bersama
            Cakrawala EduCentre
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
            {testimonialsPersiapanSMA.map((t) => (
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
            <h2>Cakupan Wilayah Layanan Persiapan Masuk SMA Favorit</h2>
            <p>
              Program persiapan masuk SMA favorit tersedia di berbagai wilayah
              dengan track record lolos yang terbukti dan metode pembelajaran
              intensif.
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

export default PersiapanSMAPage;