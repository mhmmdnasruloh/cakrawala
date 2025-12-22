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

const testimonialsShadowTeacher = [
    {
        id: 1,
        name: "Bunda Rina, Orang Tua Siswa ABK",
        rating: 5,
        text: "Shadow Teacher dari Cakrawala sangat sabar dan memahami kebutuhan anak saya. Perkembangan fokus dan kemandirian anak sangat terlihat setelah 3 bulan pendampingan.",
        avatar: "/person-icon.webp",
    },
    {
        id: 2,
        name: "Pak Dedi, Ayah Siswa SD",
        rating: 5,
        text: "Anak saya yang awalnya kesulitan mengikuti instruksi di kelas, sekarang sudah bisa mandiri mengerjakan tugas. Terima kasih Shadow Teacher!",
        avatar: "/person-icon.webp",
    },
    {
        id: 3,
        name: "Ibu Sari, Orang Tua Siswa TK",
        rating: 5,
        text: "Komunikasi dengan guru kelas dan orang tua sangat baik. Laporan perkembangan harian sangat membantu kami memantau progress anak.",
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

function ShadowTeacherPage() {
    const navigate = useNavigate();

    const handleLihatBiaya = () => {
        window.scrollTo(0, 0);
        navigate("/biaya-les", {
            state: {
                presetSelection: {
                    curriculum: "internasional",
                    program: "shadowTeacher",
                    subProgram: "",
                },
            },
        });
    };

    const paketPendampingan = [
        {
            nama: "Basic Full Day",
            harga: "Rp 3.500.000/bulan",
            durasi: "20 hari/bulan",
            target: "Anak yang butuh pendampingan fokus & adaptasi ringan",
            fitur: [
                "Pendampingan selama jam sekolah",
                "Membantu mengikuti instruksi guru",
                "Penguatan kemandirian dasar",
                "Laporan singkat harian",
            ],
            icon: "🌱",
        },
        {
            nama: "Regular Full Day",
            harga: "Rp 4.000.000/bulan",
            durasi: "20 hari/bulan",
            target: "Anak berkebutuhan khusus ringan/sedang",
            fitur: [
                "Full pendampingan akademik & perilaku",
                "Membantu tugas, emosi, & interaksi sosial",
                "Koordinasi dengan guru kelas",
                "Laporan harian + evaluasi mingguan",
            ],
            icon: "🌿",
        },
        {
            nama: "Intensive Full Day",
            harga: "Rp 5.000.000/bulan",
            durasi: "20 hari/bulan",
            target: "ABK sedang-berat",
            fitur: [
                "Full pendampingan dari masuk-pulang sekolah",
                "Program individual (IEP sederhana)",
                "Pendampingan emosi & perilaku intensif",
                "Koordinasi guru & orang tua",
                "Laporan perkembangan lengkap",
                "Pendampingan sampai tugas sekolah",
            ],
            icon: "🌳",
        },
    ];

    return (
        <div className="program-page">
            <section className="supercamp-hero">
                <div className="supercamp-hero-container">
                    <h1>Shadow Teacher</h1>
                    <p>
                        Program pendampingan khusus untuk Anak Berkebutuhan Khusus (ABK) di sekolah.
                        Shadow Teacher membantu siswa fokus, adaptasi, dan berkembang optimal.
                    </p>
                </div>
            </section>

            <section className="testimonials">
                <div className="testimonials-header">
                    <div className="testimonials-logo">
                        <img src="/logo.webp" alt="Logo" />
                    </div>

                    <h2 className="testimonials-title">
                        Ulasan Tentang Shadow Teacher Cakrawala EduCentre
                    </h2>

                    <div className="rating">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <span>4,8 / 5,0</span>
                        <p>Total 24 ulasan</p>
                    </div>
                </div>
            </section>

            <section className="program-section">
                <div className="program-wrapper">
                    <div className="program-card">
                        <div className="program-image-section">
                            <img
                                src="/shadowteacher.webp"
                                alt="Shadow Teacher"
                                className="program-image"
                                onError={(e) => {
                                    e.target.src = "/program-les1.webp";
                                }}
                            />
                            <span className="program-curriculum-badge internasional">
                                SHADOW TEACHER ABK
                            </span>
                        </div>

                        <div className="program-content-section">
                            <h3 className="program-title">
                                Program Shadow Teacher
                            </h3>

                            <div className="program-meta">
                                <span className="meta-item">⏱️ Full Day</span>
                                <span className="meta-item">📅 20 hari/bulan</span>
                                <span className="meta-item">🎯 TK - SMA</span>
                                <span className="meta-item offline-badge">
                                    🏫 Di Sekolah
                                </span>
                            </div>

                            <div className="program-description">
                                <span className="icon">👨‍🏫</span>
                                <span>
                                    Shadow Teacher adalah pendamping khusus yang membantu anak berkebutuhan
                                    khusus (ABK) selama di sekolah. Pendamping akan membantu anak mengikuti
                                    pelajaran, berinteraksi dengan teman, dan mengembangkan kemandirian
                                    sesuai kemampuan masing-masing anak.
                                </span>
                            </div>



                            {/* Keunggulan Program */}
                            <div className="program-benefits">
                                <h4>Keunggulan Shadow Teacher</h4>
                                <div className="benefits-grid">
                                    <div className="benefit-item">
                                        <span className="icon">✓</span>
                                        <span>Pendamping Berpengalaman & Tersertifikasi</span>
                                    </div>
                                    <div className="benefit-item">
                                        <span className="icon">✓</span>
                                        <span>Koordinasi Rutin dengan Guru Kelas</span>
                                    </div>
                                    <div className="benefit-item">
                                        <span className="icon">✓</span>
                                        <span>Laporan Perkembangan Harian</span>
                                    </div>
                                    <div className="benefit-item">
                                        <span className="icon">✓</span>
                                        <span>Program Individual (IEP) Sesuai Kebutuhan</span>
                                    </div>
                                    <div className="benefit-item">
                                        <span className="icon">✓</span>
                                        <span>Pendampingan Emosi & Perilaku</span>
                                    </div>
                                    <div className="benefit-item">
                                        <span className="icon">✓</span>
                                        <span>Komunikasi Aktif dengan Orang Tua</span>
                                    </div>
                                    <div className="benefit-item">
                                        <span className="icon">✓</span>
                                        <span>Pengembangan Kemandirian Bertahap</span>
                                    </div>
                                    <div className="benefit-item">
                                        <span className="icon">✓</span>
                                        <span>Evaluasi Mingguan & Bulanan</span>
                                    </div>
                                </div>
                            </div>

                            <div className="program-action-container">
                                <div className="program-cta">
                                    <button
                                        className="program-btn"
                                        type="button"
                                        onClick={handleLihatBiaya}
                                    >
                                        🔍 Lihat Biaya & Daftar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="program-info-footer">
                        <p>
                            <strong>Untuk Siapa:</strong> Anak dengan ADHD, Autisme, Down Syndrome,
                            Keterlambatan Perkembangan, Gangguan Belajar Spesifik, dan kebutuhan khusus lainnya
                        </p>
                        <p className="mode-specific-info">
                            💡 Shadow Teacher akan hadir mendampingi anak selama jam sekolah berlangsung,
                            membantu anak beradaptasi dan berkembang dalam lingkungan sekolah reguler
                        </p>
                    </div>
                </div>
            </section>

            <section className="testimoniprogram">
                <div className="testimoniprogram-header">
                    <h2>Testimoni Shadow Teacher</h2>
                    <p>
                        Kisah sukses pendampingan anak berkebutuhan khusus di sekolah
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
                        {testimonialsShadowTeacher.map((t) => (
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
                        <h2>Cakupan Wilayah Layanan Shadow Teacher</h2>
                        <p>
                            Program Shadow Teacher tersedia di berbagai kota dengan pendamping
                            profesional yang siap membantu anak Anda berkembang optimal di sekolah
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

export default ShadowTeacherPage;
