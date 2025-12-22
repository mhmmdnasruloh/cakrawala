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

const testimonialsKerja = [
    {
        id: 1,
        name: "Rina Susanti, Fresh Graduate",
        rating: 5,
        text: "Setelah ikut pelatihan Digital Marketing, saya langsung dapat kerja di agency ternama. Materinya praktis dan langsung bisa dipake di dunia kerja nyata!",
        avatar: "/person-icon.webp",
    },
    {
        id: 2,
        name: "Budi Santoso, Career Switcher",
        rating: 5,
        text: "Dari background non-IT, sekarang saya jadi Web Developer. Instrukturnya sabar banget ngajarin dari nol. Bonus sertifikasinya juga diakui industri!",
        avatar: "/person-icon.webp",
    },
    {
        id: 3,
        name: "Dian Pratama, Karyawan",
        rating: 5,
        text: "Ikut pelatihan Data Analytics sambil kerja. Jadwalnya fleksibel dan materinya up-to-date. Sekarang gaji naik karena punya skill baru yang dibutuhin kantor.",
        avatar: "/person-icon.webp",
    },
    {
        id: 4,
        name: "Ahmad Fauzi, Entrepreneur",
        rating: 5,
        text: "Pelatihan Business Management-nya sangat membantu mengembangkan bisnis saya. Dapat insight langsung dari praktisi berpengalaman plus networking yang luas.",
        avatar: "/person-icon.webp",
    },
    {
        id: 5,
        name: "Siti Nurhaliza, Lulusan SMK",
        rating: 5,
        text: "Program Graphic Design-nya cocok banget buat pemula. Dari basic sampai advanced, plus langsung praktek bikin portfolio. Sekarang saya kerja sebagai freelance designer.",
        avatar: "/person-icon.webp",
    },
    {
        id: 6,
        name: "Eko Prasetyo, IT Professional",
        rating: 5,
        text: "Ambil sertifikasi Cloud Computing untuk upgrade skill. Materi sesuai standar internasional dan instruktur bersertifikat. Sangat worth it untuk career advancement!",
        avatar: "/person-icon.webp",
    },
    {
        id: 7,
        name: "Maya Putri, Content Creator",
        rating: 5,
        text: "Pelatihan Video Editing & Content Creation-nya keren! Belajar tools profesional dan strategi konten yang engaging. View konten saya naik drastis setelah ikut program ini.",
        avatar: "/person-icon.webp",
    },
    {
        id: 8,
        name: "Fajar Ramadan, Marketing Staff",
        rating: 5,
        text: "Program Social Media Marketing membuka wawasan baru tentang strategi digital. Dari teori sampai praktek campaign real, semua dijelaskan dengan detail dan mudah dipahami.",
        avatar: "/person-icon.webp",
    },
    {
        id: 9,
        name: "Linda Anggraini, Mahasiswa",
        rating: 5,
        text: "Ikut pelatihan UI/UX Design sambil kuliah. Dapat portofolio yang bagus dan sertifikat yang recognized. Sebelum lulus udah keburu dapat internship di startup!",
        avatar: "/person-icon.webp",
    },
    {
        id: 10,
        name: "Rizki Maulana, Pengusaha UMKM",
        rating: 5,
        text: "Program E-Commerce Management sangat praktis untuk bisnis online saya. Belajar optimasi toko online, marketing strategy, dan customer service yang efektif. Omset naik 200%!",
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

function PelatihanKerjaPage() {
    const [programType, setProgramType] = useState("kerja");

    const handleDaftarClick = () => {
        window.location.href = `/daftar?program=pelatihan-kerja&type=${programType}`;
    };

    const getProgramDescription = () => {
        if (programType === "kerja") {
            return "Pelatihan kerja intensif dengan praktik langsung bersama instruktur berpengalaman. Fokus pada skill yang dibutuhkan industri dengan metode hands-on dan studi kasus nyata. Tersedia kelas offline maupun online sesuai kebutuhan.";
        } else {
            return "Program sertifikasi profesional dengan standar internasional. Persiapan ujian sertifikasi lengkap dengan simulasi test dan bimbingan dari certified trainer. Dapatkan sertifikat yang diakui industri.";
        }
    };

    const getProgramImage = () => {
        return programType === "kerja" ? "/KERJA.webp" : "/KERJA.webp";
    };

    const navigate = useNavigate();

    const handleLihatBiaya = () => {
        window.scrollTo(0, 0);
        navigate("/biaya-balai", {
            state: {
                presetSelection: {
                    curriculum: "",
                    program: "",
                    subProgram: "",
                },
            },
        });
    };

    return (
        <div className="program-page">
            <section className="supercamp-hero">
                <div className="supercamp-hero-container">
                    <h1>Pelatihan Kerja & Sertifikasi Profesional</h1>
                    <p>
                        Tingkatkan skill dan kompetensi Anda dengan program pelatihan dan
                        sertifikasi yang diakui industri
                    </p>
                    <a
                        href="/Program Pelatihan Kerja (B2C) .pdf"
                        download="Program Pelatihan Kerja Cakrawala.pdf"
                        className="program-btn"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            marginTop: '20px',
                            textDecoration: 'none',
                            backgroundColor: '#2ecc71',
                            color: 'white',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        📥 Download Brosur PDF
                    </a>
                </div>
            </section>

            <section className="testimonials">
                <div className="testimonials-header">
                    <div className="testimonials-logo">
                        <img src="/logo.webp" alt="Logo" />
                    </div>
                    <h2 className="testimonials-title">
                        Ulasan Tentang Pelatihan Kerja Cakrawala EduCentre
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
                    {/* Toggle Program Kerja / Sertifikasi */}
                    <div className="program-toggle">
                        <button
                            className={`toggle-btn ${programType === "kerja" ? "active" : ""
                                }`}
                            onClick={() => setProgramType("kerja")}
                        >
                            💼 Balai Latihan Kerja
                        </button>
                        <button
                            className={`toggle-btn ${programType === "sertifikasi" ? "active" : ""
                                }`}
                            onClick={() => setProgramType("sertifikasi")}
                        >
                            🏆 Sertifikasi
                        </button>
                    </div>

                    <div className={`program-card ${programType}`}>
                        {/* Gambar di Atas */}
                        <div className="program-image-section">
                            <img
                                src={getProgramImage()}
                                alt={`Pelatihan ${programType}`}
                                className="program-image"
                            />
                            <span className={`program-curriculum-badge ${programType}`}>
                                {programType === "kerja" ? "💼 Pelatihan Kerja" : "🏆 Sertifikasi"}
                            </span>
                        </div>

                        {/* Konten di Bawah */}
                        <div className="program-content-section">
                            <h3 className="program-title">
                                {programType === "kerja"
                                    ? "Program Pelatihan Kerja"
                                    : "Program Sertifikasi Profesional"}
                            </h3>

                            <div className="program-description">
                                <span className="icon">
                                    {programType === "kerja" ? "💼" : "🏆"}
                                </span>
                                <span>{getProgramDescription()}</span>
                            </div>

                            {/* Fitur Program */}
                            <div className="program-features">
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {programType === "kerja"
                                            ? "Instruktur praktisi industri berpengalaman"
                                            : "Certified trainer dengan standar internasional"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {programType === "kerja"
                                            ? "Materi up-to-date sesuai kebutuhan industri"
                                            : "Persiapan ujian sertifikasi lengkap"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {programType === "kerja"
                                            ? "Praktek langsung dengan project real case"
                                            : "Simulasi ujian dan pembahasan soal"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {programType === "kerja"
                                            ? "Portfolio building untuk CV"
                                            : "Sertifikat resmi yang diakui industri"}
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        {programType === "kerja"
                                            ? "Networking dengan sesama peserta & mentor"
                                            : "Akses materi selamanya & konsultasi"}
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
                                {programType === "kerja"
                                    ? "Bidang Pelatihan:"
                                    : "Bidang Sertifikasi:"}
                            </strong>{" "}
                            {programType === "kerja"
                                ? "Digital Marketing, Web Development, Data Analytics, Graphic Design, UI/UX, Video Editing, Business Management, dan lainnya"
                                : "IT Certification (AWS, Google Cloud, Microsoft), Project Management (PMP), Digital Marketing, HR Management, dan lainnya"}
                        </p>
                    </div>
                </div>
            </section>

            <section className="tools">
                <div className="container">
                    <div className="tools-header">
                        <h2>
                            {programType === "kerja"
                                ? "Tools Pelatihan Kerja"
                                : "Tools Persiapan Sertifikasi"}
                        </h2>
                    </div>
                    <div className="tools-grid">
                        <div className="tool-item">
                            <div className="tool-icon">📚</div>
                            <div className="tool-content">
                                <h3>Modul Pembelajaran Terstruktur</h3>
                                <p>
                                    Materi lengkap yang disusun sistematis dari basic hingga
                                    advanced sesuai standar industri.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">🎥</div>
                            <div className="tool-content">
                                <h3>Video Tutorial HD</h3>
                                <p>
                                    Akses video pembelajaran berkualitas tinggi yang bisa ditonton
                                    berulang kali kapan saja.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">💻</div>
                            <div className="tool-content">
                                <h3>Hands-on Practice</h3>
                                <p>
                                    Project dan latihan praktis untuk mengasah skill dengan studi
                                    kasus nyata dari industri.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">📝</div>
                            <div className="tool-content">
                                <h3>Quiz & Assessment</h3>
                                <p>
                                    Evaluasi berkala untuk mengukur pemahaman dan progress belajar
                                    Anda secara objektif.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">👥</div>
                            <div className="tool-content">
                                <h3>Mentoring Session</h3>
                                <p>
                                    Konsultasi langsung dengan mentor berpengalaman untuk diskusi
                                    dan troubleshooting.
                                </p>
                            </div>
                        </div>
                        <div className="tool-item">
                            <div className="tool-icon">🎓</div>
                            <div className="tool-content">
                                <h3>Certificate of Completion</h3>
                                <p>
                                    Sertifikat resmi yang dapat digunakan untuk melengkapi CV dan
                                    portfolio profesional Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimoniprogram">
                <div className="testimoniprogram-header">
                    <h2>Testimoni Peserta Pelatihan</h2>
                    <p>
                        Apa kata alumni tentang program pelatihan kerja dan sertifikasi kami
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
                        {testimonialsKerja.map((t) => (
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
                        <h2>Cakupan Wilayah Layanan Pelatihan</h2>
                        <p>
                            Program pelatihan kerja dan sertifikasi tersedia di berbagai
                            wilayah, baik secara tatap muka maupun online dengan kualitas
                            terbaik.
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

export default PelatihanKerjaPage;