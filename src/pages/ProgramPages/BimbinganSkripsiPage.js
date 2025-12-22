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

const testimonialsSkripsi = [
    {
        id: 1,
        name: "Andi Pratama, Mahasiswa Teknik",
        rating: 5,
        text: "Pembimbing sangat membantu dalam menyusun metodologi penelitian. Skripsi saya selesai tepat waktu dan dapat nilai A!",
        avatar: "/person-icon.webp",
    },
    {
        id: 2,
        name: "Siti Nurhaliza, Mahasiswa Ekonomi",
        rating: 5,
        text: "Dari proposal sampai sidang, dibimbing dengan detail. Cara menjelaskannya mudah dipahami dan sabar banget.",
        avatar: "/person-icon.webp",
    },
    {
        id: 3,
        name: "Rudi Hartono, Mahasiswa Psikologi",
        rating: 5,
        text: "Terbantu banget dalam analisis data SPSS. Pembimbing juga kasih feedback cepat untuk setiap revisi draft.",
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

function BimbinganSkripsiPage() {
    const navigate = useNavigate();

    const handleDaftarClick = () => {
        window.location.href = `/daftar?program=bimbingan-skripsi`;
    };

    const getProgramDescription = () => {
        return "Program bimbingan skripsi dirancang untuk membantu mahasiswa menyelesaikan tugas akhir dengan efektif. Mulai dari penyusunan proposal, metodologi penelitian, analisis data, hingga persiapan sidang dengan bimbingan intensif dari pembimbing berpengalaman.";
    };

    const handleLihatBiaya = () => {
        window.scrollTo(0, 0);
        navigate("/biaya-skripsi", {
            state: {
                presetSelection: {
                    curriculum: "",
                    program: "bimbingan-skripsi",
                    subProgram: "",
                },
            },
        });
    };

    return (
        <div className="program-page">
            <section className="supercamp-hero">
                <div className="supercamp-hero-container">
                    <h1>Bimbingan Skripsi</h1>
                    <p>
                        Selesaikan skripsi Anda dengan bimbingan intensif dari pembimbing
                        berpengalaman, dari proposal hingga sidang akhir
                    </p>
                </div>
            </section>

            <section className="testimonials">
                <div className="testimonials-header">
                    <div className="testimonials-logo">
                        <img src="/logo.webp" alt="Logo" />
                    </div>
                    <h2 className="testimonials-title">
                        Ulasan Tentang Bimbingan Skripsi Cakrawala EduCentre
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
                                src="/skripsi.webp"
                                alt="Bimbingan Skripsi"
                                className="program-image"
                            />
                            <span className="program-curriculum-badge nasional">
                                BIMBINGAN
                            </span>
                        </div>

                        <div className="program-content-section">
                            <h3 className="program-title">Bimbingan Skripsi</h3>

                            <div className="program-meta">
                                <span className="meta-item">⏱️ 2 jam/sesi</span>
                                <span className="meta-item">📅 Fleksibel sesuai kebutuhan</span>
                                <span className="meta-item">🎓 Mahasiswa S1</span>
                            </div>

                            <div className="program-description">
                                <span className="icon">📚</span>
                                <span>{getProgramDescription()}</span>
                            </div>

                            <div className="program-features">
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        Pembimbing berpengalaman dari berbagai disiplin ilmu
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        Bantuan penyusunan proposal dan kerangka penelitian
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>
                                        Konsultasi metodologi dan teknik analisis data
                                    </span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>Review dan revisi draft BAB per BAB</span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>Persiapan presentasi dan simulasi sidang</span>
                                </div>
                                <div className="feature-item">
                                    <span className="icon">✅</span>
                                    <span>Tersedia untuk semua jurusan dan program studi</span>
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
                            <strong>Cakupan Bimbingan:</strong> Proposal, Metodologi
                            Penelitian, Pengumpulan Data, Analisis Data (SPSS, R, Excel),
                            Penulisan Laporan, Persiapan Sidang
                        </p>
                    </div>
                </div>
            </section>

            <section className="testimoniprogram">
                <div className="testimoniprogram-header">
                    <h2>Testimoni Bimbingan Skripsi</h2>
                    <p>
                        Pengalaman mahasiswa dalam menyelesaikan skripsi bersama kami
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
                        {testimonialsSkripsi.map((t) => (
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
                        <h2>Cakupan Wilayah Layanan Bimbingan Skripsi</h2>
                        <p>
                            Program bimbingan skripsi tersedia untuk mahasiswa dari berbagai
                            perguruan tinggi dengan metode bimbingan yang efektif dan
                            terstruktur.
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

export default BimbinganSkripsiPage;