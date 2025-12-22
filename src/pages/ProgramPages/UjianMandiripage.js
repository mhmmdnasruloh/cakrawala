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

const testimonialsUjianMandiri = [
    {
        id: 1,
        name: "Arief Setiawan, Lolos ITB 2024",
        rating: 5,
        text: "Alhamdulillah lolos UTBK dan Ujian Mandiri ITB Teknik Informatika! Bimbingannya sangat fokus ke pola soal masing-masing PTN. Strategi mengerjakan soal yang diajarkan sangat efektif.",
        avatar: "/person-icon.webp",
    },
    {
        id: 2,
        name: "Dinda Puspita, Lolos UGM 2024",
        rating: 5,
        text: "Program persiapan Ujian Mandiri UGM-nya top! Materi Kemampuan Dasar dan TPA dibahas tuntas. Tryout yang mirip soal asli bikin saya confident saat hari H. Sekarang mahasiswi Psikologi UGM!",
        avatar: "/person-icon.webp",
    },
    {
        id: 3,
        name: "Raka Prasetya, Lolos UNAIR 2024",
        rating: 5,
        text: "Ikut les persiapan Ujian Mandiri UNAIR Kedokteran. Drilling soal saintek intensif dan pembahasan detail dari tutor yang kompeten. Hasilnya, saya lolos di pilihan pertama!",
        avatar: "/person-icon.webp",
    },
    {
        id: 4,
        name: "Bella Kusuma, Lolos UNDIP 2024",
        rating: 5,
        text: "Bimbingan untuk Ujian Mandiri PTN sangat terstruktur. Bank soal lengkap dari berbagai PTN favorit. Gurunya juga update info terbaru setiap PTN. Akhirnya lolos Akuntansi UNDIP!",
        avatar: "/person-icon.webp",
    },
    {
        id: 5,
        name: "Farhan Ahmad, Lolos UNPAD 2024",
        rating: 5,
        text: "Program superintensif menjelang Ujian Mandiri benar-benar membantu. Materi TPS dan TKA dibahas lengkap. Tips dan trik dari pengajar sangat aplikatif. Sekarang mahasiswa Hukum UNPAD!",
        avatar: "/person-icon.webp",
    },
    {
        id: 6,
        name: "Nabila Putri, Lolos ITS 2024",
        rating: 5,
        text: "Les persiapan Ujian Mandiri ITS-nya sangat detail untuk saintek. Materi Matematika, Fisika, dan Kimia dikupas habis. Tryout setiap minggu bikin saya terlatih. Alhamdulillah lolos Teknik Kimia ITS!",
        avatar: "/person-icon.webp",
    },
    {
        id: 7,
        name: "Yoga Pratama, Lolos UB 2024",
        rating: 5,
        text: "Persiapan Ujian Mandiri UB sangat komprehensif. Dari TPS sampai TKA semua dibahas. Analisis tryout yang detail membantu saya fokus ke materi yang perlu ditingkatkan. Sekarang mahasiswa Teknik Elektro UB!",
        avatar: "/person-icon.webp",
    },
    {
        id: 8,
        name: "Citra Dewi, Lolos UNHAS 2024",
        rating: 5,
        text: "Bimbingan untuk berbagai Ujian Mandiri PTN sangat fleksibel. Bisa fokus ke PTN tertentu atau prepare banyak PTN sekaligus. Materinya lengkap dan up to date. Lolos Kedokteran UNHAS!",
        avatar: "/person-icon.webp",
    },
    {
        id: 9,
        name: "Rizal Mahendra, Lolos UNSOED 2024",
        rating: 5,
        text: "Program persiapan Ujian Mandiri dengan sistem privat sangat efektif. Bisa custom materi sesuai kebutuhan. Gurunya sabar dan menguasai materi. Progress saya meningkat pesat, akhirnya lolos Farmasi UNSOED!",
        avatar: "/person-icon.webp",
    },
    {
        id: 10,
        name: "Anisa Rahman, Lolos UNDIP 2024",
        rating: 5,
        text: "Les Privat Ujian Mandiri ini sangat membantu persiapan saya. Materi disesuaikan dengan pola soal PTN yang dituju. Tryout bervariasi dari berbagai PTN. Sekarang mahasiswi Ilmu Komunikasi UNDIP!",
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

function UjianMandiriPage() {
    const [curriculum, setCurriculum] = useState("regular");

    const handleDaftarClick = () => {
        window.location.href = `/daftar?program=ujian-mandiri&curriculum=${curriculum}`;
    };

    const getProgramDescription = () => {
        if (curriculum === "regular") {
            return "Program persiapan Ujian Mandiri PTN (Perguruan Tinggi Negeri) yang komprehensif untuk berbagai universitas favorit seperti ITB, UGM, UNAIR, UNDIP, UNPAD, ITS, UB, dan PTN lainnya. Fokus pada penguasaan materi TPS (Tes Potensi Skolastik), TKA (Tes Kompetensi Akademik), dan pola soal spesifik masing-masing PTN dengan bimbingan intensif dan tryout berkala.";
        } else {
            return "Program persiapan Ujian Mandiri untuk Program Internasional di PTN terkemuka dengan materi ujian dalam Bahasa Inggris. Fokus pada Academic English Proficiency, Critical Thinking, Reasoning Test, dan subject-specific assessment. Dibimbing oleh instruktur berpengalaman dengan standar internasional untuk memaksimalkan peluang diterima di program internasional PTN favorit.";
        }
    };

    const getProgramImage = () => {
        return "/study.webp";
    };

    const navigate = useNavigate();

    const handleLihatBiaya = () => {
        window.scrollTo(0, 0);
        navigate("/biaya-les", {
            state: {
                presetSelection: {
                    curriculum: "nasional",
                    program: "ujianmandiri",
                    subProgram: "",
                },
            },
        });
    };

    return (
        <div className="program-page">
            <section className="supercamp-hero">
                <div className="supercamp-hero-container">
                    <h1>Les Privat Ujian Mandiri Regular/Internasional</h1>
                    <p>
                        Persiapan optimal untuk Ujian Mandiri PTN favorit dengan bimbingan
                        privat intensif, materi terstruktur, dan tryout berkala
                    </p>
                </div>
            </section>

            <section className="testimonials">
                <div className="testimonials-header">
                    <div className="testimonials-logo">
                        <img src="/logo.webp" alt="Logo" />
                    </div>
                    <h2 className="testimonials-title">
                        Ulasan Tentang Les Privat Ujian Mandiri Cakrawala EduCentre
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
                            className={`toggle-btn ${curriculum === "regular" ? "active" : ""
                                }`}
                            onClick={() => setCurriculum("regular")}
                        >
                            🇮🇩 Kelas Regular
                        </button>
                        <button
                            className={`toggle-btn ${curriculum === "internasional" ? "active" : ""
                                }`}
                            onClick={() => setCurriculum("internasional")}
                        >
                            🌍 Kelas Internasional
                        </button>
                    </div>

                    <div className={`program-card ${curriculum}`}>
                        {/* Gambar di Atas */}
                        <div className="program-image-section">
                            <img
                                src={getProgramImage()}
                                alt={`Les Privat Ujian Mandiri ${curriculum}`}
                                className="program-image"
                            />
                            <span className={`program-curriculum-badge ${curriculum}`}>
                                {curriculum === "regular" ? "🇮🇩 Regular" : "🌍 Internasional"}
                            </span>
                        </div>

                        {/* Konten di Bawah */}
                        <div className="program-content-section">
                            <h3 className="program-title">
                                Les Privat Ujian Mandiri{" "}
                                {curriculum === "regular"
                                    ? "Kelas Regular"
                                    : "Kelas Internasional"}
                            </h3>

                            <div className="program-meta">
                                <span className="meta-item">⏱️ 2-3 jam/sesi</span>
                                <span className="meta-item">📅 3-5 kali/minggu</span>
                                <span className="meta-item">🎯 Siswa SMA/Alumni</span>
                            </div>

                            <div className="program-description">
                                <span className="icon">
                                    {curriculum === "regular" ? "🇮🇩" : "🌍"}
                                </span>
                                <span>{getProgramDescription()}</span>
                            </div>

                            {/* Fitur Program */}
                            <div className="program-features">
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {curriculum === "regular"
                                            ? "Materi TPS & TKA lengkap sesuai pola soal PTN"
                                            : "Materi ujian dalam Bahasa Inggris (Academic English)"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {curriculum === "regular"
                                            ? "Tryout Ujian Mandiri dari berbagai PTN favorit"
                                            : "Critical Thinking & Reasoning Test preparation"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {curriculum === "regular"
                                            ? "Fokus ke PTN pilihan (ITB, UGM, UNAIR, dll)"
                                            : "Subject-specific tests (Math, Science, Social)"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {curriculum === "regular"
                                            ? "Drilling soal & strategi smart solution"
                                            : "International standard materials & assessment"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {curriculum === "regular"
                                            ? "Bimbingan privat 1-on-1 atau small group"
                                            : "Native/bilingual instructors berpengalaman"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>Analisis hasil tryout & konsultasi strategi PTN</span>
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
                                {curriculum === "regular"
                                    ? "PTN yang Dipersiapkan:"
                                    : "Program Internasional PTN:"}
                            </strong>{" "}
                            {curriculum === "regular"
                                ? "ITB, UGM, UI, UNAIR, UNDIP, UNPAD, ITS, UB, UNHAS, UNSOED, UNRI, UNSRI, dan PTN favorit lainnya"
                                : "UI KKI, ITB International Program, UGM International, ITS International, UNAIR International, dan program internasional PTN lainnya"}
                        </p>
                    </div>
                </div>
            </section>

            <section className="tools">
                <div className="container">
                    <div className="tools-header">
                        <h2>Tools Persiapan Ujian Mandiri PTN</h2>
                    </div>
                    <div className="tools-grid">
                        <div className="tool-item">
                            <div className="tool-icon">📚</div>
                            <div className="tool-content">
                                <h3>Modul Lengkap TPS & TKA</h3>
                                <p>
                                    Materi pembelajaran terstruktur untuk TPS dan TKA sesuai
                                    dengan kisi-kisi dan pola soal PTN favorit.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">💻</div>
                            <div className="tool-content">
                                <h3>Tryout Multi-PTN</h3>
                                <p>
                                    Simulasi ujian dari berbagai PTN favorit (ITB, UGM, UNAIR,
                                    dll) untuk adaptasi pola soal.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">📊</div>
                            <div className="tool-content">
                                <h3>Analisis Performa Detail</h3>
                                <p>
                                    Laporan lengkap mengenai hasil tryout, kekuatan, dan area yang
                                    perlu improvement.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">📝</div>
                            <div className="tool-content">
                                <h3>Bank Soal PTN</h3>
                                <p>
                                    Ribuan soal latihan dari berbagai PTN dengan pembahasan
                                    mendalam dan strategi cepat.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">🎯</div>
                            <div className="tool-content">
                                <h3>Strategi Per-PTN</h3>
                                <p>
                                    Tips dan trik khusus untuk mengerjakan soal Ujian Mandiri
                                    masing-masing PTN secara efektif.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">👨‍🏫</div>
                            <div className="tool-content">
                                <h3>Mentoring Privat</h3>
                                <p>
                                    Konsultasi personal dengan tutor untuk strategi belajar,
                                    pemilihan PTN & jurusan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimoniprogram">
                <div className="testimoniprogram-header">
                    <h2>Testimoni Peserta Les Ujian Mandiri</h2>
                    <p>
                        Cerita sukses siswa yang lolos Ujian Mandiri PTN bersama Cakrawala
                        EduCentre
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
                        {testimonialsUjianMandiri.map((t) => (
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
                        <h2>Cakupan Wilayah Layanan Les Privat Ujian Mandiri</h2>
                        <p>
                            Program persiapan Ujian Mandiri PTN tersedia di berbagai wilayah
                            dengan track record lolos yang terbukti dan pengajar berkualitas.
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

export default UjianMandiriPage;