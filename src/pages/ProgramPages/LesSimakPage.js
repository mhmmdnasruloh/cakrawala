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

const testimonialsSimakUI = [
    {
        id: 1,
        name: "Andi Pratama, Lolos FK UI 2024",
        rating: 5,
        text: "Alhamdulillah lolos SIMAK UI Fakultas Kedokteran! Materi yang diajarkan sangat fokus ke soal-soal SIMAK. Tryout rutin bikin saya terbiasa dengan pola soal dan time management saat ujian.",
        avatar: "/person-icon.webp",
    },
    {
        id: 2,
        name: "Siti Nurhaliza, Lolos FH UI 2024",
        rating: 5,
        text: "Gurunya berpengalaman banget, banyak yang alumni UI sendiri. Strategi menjawab soal TPA dan kemampuan penalaran yang diajarkan sangat membantu. Sekarang saya mahasiswi Hukum UI!",
        avatar: "/person-icon.webp",
    },
    {
        id: 3,
        name: "Raka Aditya, Lolos FT UI 2024",
        rating: 5,
        text: "Program superintensif menjelang SIMAK benar-benar worth it. Drilling soal matematika dan fisika yang detail plus pembahasan lengkap bikin saya makin pede. Akhirnya lolos Teknik Elektro UI!",
        avatar: "/person-icon.webp",
    },
    {
        id: 4,
        name: "Dina Aulia, Lolos FEB UI 2024",
        rating: 5,
        text: "Dari kelas 12 sudah ikut bimbingan SIMAK UI di sini. Materi terstruktur, tryout berkala, dan analisis hasil tryout yang detail banget. Sekarang saya kuliah Akuntansi di UI, mimpi jadi nyata!",
        avatar: "/person-icon.webp",
    },
    {
        id: 5,
        name: "Fajar Ramadhan, Lolos Psikologi UI 2024",
        rating: 5,
        text: "Bimbingan untuk TPA-nya the best! Strategi eliminasi jawaban dan tips time management sangat aplikatif. Plus motivasi dari mentornya bikin saya semangat terus belajar sampai hari H.",
        avatar: "/person-icon.webp",
    },
    {
        id: 6,
        name: "Maya Putri, Lolos FISIP UI 2024",
        rating: 5,
        text: "Tryout SIMAK UI-nya mirip banget sama aslinya, jadi pas hari H ga kaget. Materi Bahasa Indonesia dan Bahasa Inggris dikupas tuntas. Alhamdulillah lolos Ilmu Komunikasi UI!",
        avatar: "/person-icon.webp",
    },
    {
        id: 7,
        name: "Budi Santoso, Lolos Teknik Sipil UI 2024",
        rating: 5,
        text: "Ikut program intensif 6 bulan sebelum SIMAK. Bank soal yang diberikan sangat lengkap dan up to date. Gurunya sabar menjelaskan konsep yang belum paham. Sekarang saya mahasiswa UI!",
        avatar: "/person-icon.webp",
    },
    {
        id: 8,
        name: "Linda Wijaya, Lolos Farmasi UI 2024",
        rating: 5,
        text: "Materi Kimia dan Biologi untuk SIMAK dibahas dengan sangat detail. Latihan soal yang banyak bikin saya terlatih. Tryout mingguan juga membantu tracking progress. Akhirnya diterima di Farmasi UI!",
        avatar: "/person-icon.webp",
    },
    {
        id: 9,
        name: "Rizki Maulana, Lolos Sastra Inggris UI 2024",
        rating: 5,
        text: "Program persiapan SIMAK Kelas Internasional UI sangat membantu! Materi bahasa Inggris advanced dan TPA dalam bahasa Inggris dilatih intensif. Sekarang saya kuliah di UI program internasional.",
        avatar: "/person-icon.webp",
    },
    {
        id: 10,
        name: "Dewi Lestari, Lolos Arsitektur UI 2024",
        rating: 5,
        text: "Bimbingan untuk TPA Spasial sangat terstruktur. Materi matematika dasar sampai advanced dibahas lengkap. Gurunya juga kasih tips-tips khusus untuk lolos jurusan saingan ketat kayak Arsitektur.",
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

function SimakUIPage() {
    const [classType, setClassType] = useState("regular");

    const handleDaftarClick = () => {
        window.location.href = `/daftar?program=simak-ui&type=${classType}`;
    };

    const getProgramDescription = () => {
        if (classType === "regular") {
            return "Program persiapan SIMAK UI Kelas Regular yang komprehensif dengan fokus pada penguasaan materi TPA, Kemampuan Dasar, dan Kemampuan IPA/IPS. Bimbingan intensif dengan metode pembelajaran terstruktur, tryout berkala, dan pembahasan soal mendalam untuk memaksimalkan peluang lolos UI.";
        } else {
            return "Program persiapan SIMAK UI Kelas Internasional (KKI) dengan materi ujian dalam Bahasa Inggris. Fokus pada Academic English, Critical Thinking, dan subject-specific tests. Dibimbing oleh instruktur berpengalaman dengan standar internasional untuk meningkatkan peluang diterima di program internasional UI.";
        }
    };

    const getProgramImage = () => {
        return "/simakui.webp";
    };

    const navigate = useNavigate();

    const handleLihatBiaya = () => {
        window.scrollTo(0, 0);
        navigate("/biaya-les", {
            state: {
                presetSelection: {
                    curriculum: "internasional",
                    program: "simakui",
                    subProgram: "",
                },
            },
        });
    };

    return (
        <div className="program-page">
            <section className="supercamp-hero">
                <div className="supercamp-hero-container">
                    <h1>Les SIMAK UI Regular/Internasional</h1>
                    <p>
                        Persiapan optimal untuk SIMAK UI dengan bimbingan intensif, tryout
                        berkala, dan strategi jitu lolos Universitas Indonesia
                    </p>
                </div>
            </section>

            <section className="testimonials">
                <div className="testimonials-header">
                    <div className="testimonials-logo">
                        <img src="/logo.webp" alt="Logo" />
                    </div>
                    <h2 className="testimonials-title">
                        Ulasan Tentang Les SIMAK UI Cakrawala EduCentre
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
                    {/* Toggle Kelas Regular / Kelas Internasional */}
                    <div className="program-toggle">
                        <button
                            className={`toggle-btn ${classType === "regular" ? "active" : ""
                                }`}
                            onClick={() => setClassType("regular")}
                        >
                            📚 Kelas Regular
                        </button>
                        <button
                            className={`toggle-btn ${classType === "internasional" ? "active" : ""
                                }`}
                            onClick={() => setClassType("internasional")}
                        >
                            🌍 Kelas Internasional
                        </button>
                    </div>

                    <div className={`program-card ${classType}`}>
                        {/* Gambar di Atas */}
                        <div className="program-image-section">
                            <img
                                src={getProgramImage()}
                                alt={`Les SIMAK UI ${classType}`}
                                className="program-image"
                            />
                            <span className={`program-curriculum-badge ${classType}`}>
                                {classType === "regular" ? "📚 Regular" : "🌍 Internasional"}
                            </span>
                        </div>

                        {/* Konten di Bawah */}
                        <div className="program-content-section">
                            <h3 className="program-title">
                                Les SIMAK UI{" "}
                                {classType === "regular"
                                    ? "Kelas Regular"
                                    : "Kelas Internasional (KKI)"}
                            </h3>

                            <div className="program-meta">
                                <span className="meta-item">⏱️ 2-3 jam/sesi</span>
                                <span className="meta-item">📅 3-4 kali/minggu</span>
                                <span className="meta-item">🎯 Siswa SMA/Alumni</span>
                            </div>

                            <div className="program-description">
                                <span className="icon">
                                    {classType === "regular" ? "📚" : "🌍"}
                                </span>
                                <span>{getProgramDescription()}</span>
                            </div>

                            {/* Fitur Program */}
                            <div className="program-features">
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {classType === "regular"
                                            ? "Materi TPA, Kemampuan Dasar, IPA/IPS lengkap"
                                            : "Materi ujian dalam Bahasa Inggris (Academic English)"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {classType === "regular"
                                            ? "Tryout SIMAK UI berkala dengan sistem CBT"
                                            : "Critical Thinking & Reasoning Test preparation"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {classType === "regular"
                                            ? "Drilling soal & pembahasan mendalam"
                                            : "Subject-specific test (Math, Science, Social)"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {classType === "regular"
                                            ? "Strategi time management & eliminasi jawaban"
                                            : "International standard teaching & materials"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {classType === "regular"
                                            ? "Bimbingan dari alumni UI & instruktur berpengalaman"
                                            : "Bimbingan dari native/bilingual instructors"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        Analisis hasil tryout & konsultasi pemilihan jurusan
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
                                {classType === "regular"
                                    ? "Cakupan Materi:"
                                    : "Cakupan Materi KKI:"}
                            </strong>{" "}
                            {classType === "regular"
                                ? "TPA (Verbal, Numerik, Figural), Kemampuan Dasar (Matematika Dasar, B.Indonesia, B.Inggris), Kemampuan IPA (Matematika, Fisika, Kimia, Biologi) / IPS (Ekonomi, Geografi, Sejarah, Sosiologi)"
                                : "Academic English Proficiency, Critical Thinking & Reasoning, Mathematics, Natural Sciences, Social Sciences (English medium)"}
                        </p>
                    </div>
                </div>
            </section>

            <section className="tools">
                <div className="container">
                    <div className="tools-header">
                        <h2>Tools Persiapan SIMAK UI</h2>
                    </div>
                    <div className="tools-grid">
                        <div className="tool-item">
                            <div className="tool-icon">📚</div>
                            <div className="tool-content">
                                <h3>Modul Lengkap SIMAK UI</h3>
                                <p>
                                    Materi pembelajaran terstruktur untuk semua komponen ujian
                                    SIMAK UI sesuai dengan kisi-kisi terbaru.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">💻</div>
                            <div className="tool-content">
                                <h3>Tryout CBT System</h3>
                                <p>
                                    Simulasi ujian Computer Based Test yang mirip dengan ujian
                                    SIMAK UI asli untuk adaptasi sistem.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">📊</div>
                            <div className="tool-content">
                                <h3>Analisis Hasil Tryout</h3>
                                <p>
                                    Laporan detail mengenai performa, kekuatan, dan area yang
                                    perlu ditingkatkan setelah setiap tryout.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">📝</div>
                            <div className="tool-content">
                                <h3>Bank Soal SIMAK UI</h3>
                                <p>
                                    Ribuan soal latihan dengan tingkat kesulitan bervariasi
                                    lengkap dengan pembahasan detail.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">🎯</div>
                            <div className="tool-content">
                                <h3>Strategi Smart Solution</h3>
                                <p>
                                    Teknik dan trik khusus untuk mengerjakan soal SIMAK UI dengan
                                    cepat dan akurat.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">👨‍🏫</div>
                            <div className="tool-content">
                                <h3>Mentoring Session</h3>
                                <p>
                                    Konsultasi pribadi dengan mentor untuk strategi belajar,
                                    motivasi, dan pemilihan jurusan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimoniprogram">
                <div className="testimoniprogram-header">
                    <h2>Testimoni Peserta Les SIMAK UI</h2>
                    <p>
                        Cerita sukses siswa yang lolos SIMAK UI bersama Cakrawala EduCentre
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
                        {testimonialsSimakUI.map((t) => (
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
                        <h2>Cakupan Wilayah Layanan Les SIMAK UI</h2>
                        <p>
                            Program persiapan SIMAK UI tersedia di berbagai wilayah dengan
                            kualitas pengajaran terbaik dan track record lolos yang terbukti.
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

export default SimakUIPage;