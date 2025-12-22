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

const testimonialsBimbel = [
    {
        id: 1,
        name: "Orang Tua Andi, Siswa SD",
        rating: 5,
        text: "Anak saya sangat senang belajar di Cakrawala. Nilainya meningkat signifikan dan lebih percaya diri.",
        avatar: "/person-icon.webp",
    },
    {
        id: 2,
        name: "Sari, Siswa SMA Kelas 12",
        rating: 5,
        text: "Berkat bimbel di Cakrawala, saya berhasil lolos PTN favorit. Tutor-tutornya sangat berpengalaman!",
        avatar: "/person-icon.webp",
    },
    {
        id: 3,
        name: "Budi, Siswa SMP Kelas 9",
        rating: 5,
        text: "Metode pembelajarannya menyenangkan dan mudah dipahami. Sekarang saya lebih paham pelajaran sekolah.",
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
    const navigate = useNavigate();

    const handleDaftarClick = (level) => {
        const programData = {
            program: "bimbel",
            level: level,
            packageTitle: `Bimbel ${level.toUpperCase()}`,
            description: `Program bimbingan belajar untuk jenjang ${level.toUpperCase()}`,
        };

        navigate("/biaya-les-bimbel", { state: { programData } });
    };

    const handleWhatsApp = () => {
        window.open("https://wa.me/6281324868790", "_blank");
    };

    // Data jenjang bimbel
    const bimbelLevels = [
        {
            level: "tk",
            name: "TK",
            icon: "👶",
            price: "Rp 100.000",
            features: [
                "Calistung (Membaca, Menulis, Berhitung)",
                "Sempoa & Matematika Dasar",
                "English for Kids",
                "Pengembangan Motorik Halus",
                "Lokasi Strategis & Aman",
            ],
            details: {
                sesi: "12 Sesi belajar",
                jadwal: "3x Seminggu",
                durasi: "60 menit per sesi",
            },
        },
        {
            level: "sd",
            name: "SD",
            icon: "👦",
            price: "Rp 100.000",
            features: [
                "Semua Mata Pelajaran & Intensive TKA",
                "Klinik Tugas & PR Sekolah",
                "Laporan Perkembangan Belajar",
                "Modul Belajar Lengkap",
                "Lokasi Strategis & Nyaman",
            ],
            details: {
                sesi: "12 Sesi belajar",
                jadwal: "3x Seminggu",
                durasi: "90 menit per sesi",
            },
        },
        {
            level: "smp",
            name: "SMP",
            icon: "👨‍🎓",
            price: "Rp 150.000",
            features: [
                "Semua Mata Pelajaran & Intensive TKA",
                "Klinik Tugas & Persiapan Ujian",
                "Laporan Perkembangan Belajar",
                "Modul Belajar Terupdate",
                "Lokasi Strategis & Ber-AC",
            ],
            details: {
                sesi: "12 Sesi belajar",
                jadwal: "3x Seminggu",
                durasi: "90 menit per sesi",
            },
        },
        {
            level: "sma",
            name: "SMA",
            icon: "👩‍🎓",
            price: "Rp 200.000",
            features: [
                "Intensive TKA, UTBK & Ujian Mandiri",
                "Klinik Tugas & Konsultasi Belajar",
                "Laporan Perkembangan Berkala",
                "Modul Belajar dan Bank Soal",
                "Lokasi Strategis & Full AC",
            ],
            details: {
                sesi: "12 Sesi belajar",
                jadwal: "3x Seminggu",
                durasi: "90 menit per sesi",
            },
        },
    ];

    return (
        <div className="program-page">
            {/* Hero Section */}
            <section className="supercamp-hero">
                <div className="supercamp-hero-container">
                    <h1>Program Bimbel Online Cakrawala EduCentre</h1>
                    <p>
                        Bimbingan belajar komprehensif untuk semua jenjang pendidikan dari
                        TK sampai SMA. Dengan tutor profesional, metode pembelajaran
                        interaktif, dan kurikulum yang disesuaikan untuk membantu siswa
                        mencapai potensi akademik terbaik mereka.
                    </p>
                </div>
            </section>

            {/* Testimonials Header */}
            <section className="testimonials">
                <div className="testimonials-header">
                    <div className="testimonials-logo">
                        <img src="/logo.webp" alt="Logo Cakrawala EduCentre" />
                    </div>

                    <h2 className="testimonials-title">
                        Ulasan Tentang Bimbel Cakrawala EduCentre
                    </h2>

                    <div className="rating">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <span>4,8 / 5,0</span>
                        <p>Total 127 ulasan</p>
                    </div>
                </div>
            </section>

            {/* Brosur Section */}
            <section className="supercamp-brosur-section">
                <div className="supercamp-brosur-wrapper">
                    <div className="supercamp-brosur-layout">
                        {/* Brosur di sebelah kiri */}
                        <div className="supercamp-brosur-column">
                            <div className="supercamp-brosur-container">
                                <img
                                    src="/Bimbel.webp"
                                    alt="Brosur Program Bimbel Cakrawala EduCentre"
                                    className="supercamp-brosur-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fasilitas Program Section */}
            <section className="facilities-section">
                <div className="container">
                    <div className="facilities-header">
                        <h2>Keunggulan Program Bimbel Kami</h2>
                    </div>

                    {/* Grid Fasilitas Ikon */}
                    <div className="facilities-grid">
                        <div className="tool-item">
                            <div className="tool-icon">👨‍🏫</div>
                            <div className="tool-content">
                                <h3>Tutor Profesional & Berpengalaman</h3>
                            </div>
                        </div>

                        <div className="tool-item">
                            <div className="tool-icon">📚</div>
                            <div className="tool-content">
                                <h3>Modul Belajar Lengkap & Terupdate</h3>
                            </div>
                        </div>

                        <div className="tool-item">
                            <div className="tool-icon">🎯</div>
                            <div className="tool-content">
                                <h3>Kurikulum Sesuai Kebutuhan Siswa</h3>
                            </div>
                        </div>

                        <div className="tool-item">
                            <div className="tool-icon">📊</div>
                            <div className="tool-content">
                                <h3>Laporan Perkembangan Berkala</h3>
                            </div>
                        </div>

                        <div className="tool-item">
                            <div className="tool-icon">💬</div>
                            <div className="tool-content">
                                <h3>Konsultasi Belajar Gratis</h3>
                            </div>
                        </div>

                        <div className="tool-item">
                            <div className="tool-icon">❄️</div>
                            <div className="tool-content">
                                <h3>Ruangan Nyaman Ber-AC</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Learning Section */}
            <section className="program-learning">
                <div className="container">
                    <div className="program-header">
                        <h2>Target Pembelajaran</h2>
                    </div>

                    <div className="program-main-card">
                        <div className="program-layout">
                            <div className="program-content-grid">
                                <div className="program-content-item">
                                    <span className="program-number">1</span>
                                    <div className="program-content">
                                        <strong>Peningkatan Nilai Akademik</strong>
                                        Meningkatkan pemahaman konsep dan nilai akademik di sekolah
                                    </div>
                                </div>

                                <div className="program-content-item">
                                    <span className="program-number">2</span>
                                    <div className="program-content">
                                        <strong>Penguatan Fondasi Belajar</strong>
                                        Membangun dasar pengetahuan yang kuat untuk jenjang
                                        pendidikan berikutnya
                                    </div>
                                </div>

                                <div className="program-content-item">
                                    <span className="program-number">3</span>
                                    <div className="program-content">
                                        <strong>Persiapan Ujian & Tes</strong>
                                        Mempersiapkan siswa menghadapi ujian sekolah, TKA, UTBK, dan
                                        tes lainnya
                                    </div>
                                </div>

                                <div className="program-content-item">
                                    <span className="program-number">4</span>
                                    <div className="program-content">
                                        <strong>Pengembangan Karakter</strong>
                                        Menumbuhkan rasa percaya diri, disiplin, dan tanggung jawab
                                        dalam belajar
                                    </div>
                                </div>

                                <div className="program-content-item">
                                    <span className="program-number">5</span>
                                    <div className="program-content">
                                        <strong>Metode Belajar Menyenangkan</strong>
                                        Proses belajar yang interaktif dan tidak membosankan
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Paket Program Section */}
            <section className="supercamp-pricing-section">
                <div className="container">
                    <div className="pricing-header">
                        <h2>PROGRAM BIMBINGAN BELAJAR</h2>
                        <p>Pilih jenjang pendidikan yang sesuai untuk putra/putri Anda</p>
                    </div>

                    <div className="supercamp-pricing-row">
                        {bimbelLevels.map((level, index) => (
                            <div key={level.level} className="pricing-card">
                                <div className="package-header">
                                    <h3 className="package-name">{level.name}</h3>
                                    <div className="package-details">
                                        <div className="detail-item">
                                            <span className="detail-icon">📅</span>
                                            <span>{level.details.sesi}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-icon">⏰</span>
                                            <span>{level.details.jadwal}</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-icon">🕒</span>
                                            <span>{level.details.durasi}</span>
                                        </div>
                                    </div>
                                    <div className="package-price">{level.price}</div>
                                    <div className="special-price-tag">Special Price</div>
                                </div>

                                <div className="package-features">
                                    <h4>Fasilitas:</h4>
                                    <ul>
                                        {level.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <span className="feature-icon">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    className="cta-button secondary"
                                    onClick={() => handleDaftarClick(level.level)}
                                >
                                    Daftar Sekarang
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="special-offer-note">
                        <p>*) Biaya sudah termasuk modul belajar dan konsultasi</p>
                    </div>
                </div>
            </section>

            {/* Testimoni Section */}
            <section className="testimoniprogram">
                <div className="testimoniprogram-header">
                    <h2>Testimoni Program Bimbel</h2>
                    <p>Kisah sukses siswa dan orang tua yang bergabung dengan kami</p>
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

            {/* Coverage Area Section */}
            <section className="coverage-wilayah">
                <div className="container">
                    <div className="coverage-header">
                        <h2>Lokasi Belajar Offline</h2>
                        <p>
                            Program bimbel offline tersedia di wilayah Bekasi dan sekitarnya
                            dengan fasilitas belajar yang nyaman dan kondusif
                        </p>
                    </div>
                    <div className="coverage-map-full">
                        <div className="map-container">
                            <MapComponents />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tutor Section */}
            <Tutor />
        </div>
    );
}

export default BimbelPage;
