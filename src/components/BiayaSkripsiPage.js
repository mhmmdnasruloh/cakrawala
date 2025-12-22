import React, { useState, useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";
import "./BiayaPage.css";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";

const BiayaPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const packages = [
        {
            id: "konsultasi-dasar",
            title: "KONSULTASI DASAR",
            name: "Konsultasi Dasar",
            duration: "3x Pertemuan",
            price: "Rp 500.000",
            description: "Penentuan judul & bimbingan awal/arah penelitian",
            features: [
                "Penentuan judul skripsi",
                "Bimbingan awal/arah penelitian",
                "3x pertemuan konsultasi",
                "Panduan metodologi dasar"
            ]
        },
        {
            id: "paket-proposal",
            title: "PAKET PROPOSAL",
            name: "Paket Bab I-III (Proposal)",
            duration: "15x Pertemuan",
            price: "Rp 1.000.000",
            description: "Bimbingan Bab 1-3 dengan revisi & konsultasi berkelanjutan",
            features: [
                "Bimbingan Bab 1 - Bab 3",
                "Revisi & konsultasi berkelanjutan",
                "15x pertemuan intensif",
                "Review dan koreksi proposal"
            ]
        },
        {
            id: "paket-analisis",
            title: "PAKET ANALISIS",
            name: "Paket Analisis & Bab 4",
            duration: "5x Pertemuan Zoom",
            price: "Rp 850.000",
            description: "Untuk yang sudah punya data - analisis data & penyusunan Bab 4",
            features: [
                "Analisis data (SPSS/Excel/Kualitatif)",
                "Penyusunan Bab 4",
                "5x pertemuan zoom",
                "Interpretasi hasil penelitian"
            ]
        },
        {
            id: "paket-lengkap",
            title: "PAKET LENGKAP",
            name: "Paket Skripsi Lengkap (Bab 1-5)",
            duration: "20x Pertemuan Zoom",
            price: "Rp 2.500.000",
            description: "Pembimbingan lengkap semua bab dengan PPT sidang",
            features: [
                "Semua Bab (1-5) lengkap",
                "Revisi berulang tanpa batas",
                "Saran naskah sidang",
                "PPT sidang profesional",
                "20x pertemuan zoom"
            ],
            isBestValue: true
        },
        {
            id: "paket-sidang",
            title: "PERSIAPAN SIDANG",
            name: "Paket Persiapan Sidang",
            duration: "3x Pertemuan",
            price: "Rp 500.000",
            description: "Persiapan akhir menghadapi sidang skripsi",
            features: [
                "Revisi akhir skripsi",
                "Simulasi tanya jawab",
                "Tips & trik lulus sidang",
                "3x pertemuan persiapan"
            ]
        }
    ];

    const addons = [
        {
            id: "proofreading",
            name: "Proofreading Skripsi",
            price: "Rp 200.000",
            description: "Pengecekan grammar, typo, dan format"
        },
        {
            id: "slide-ppt",
            name: "Pembuatan Slide Presentasi",
            price: "Rp 200.000",
            description: "Slide presentasi profesional untuk sidang"
        },
        {
            id: "simulasi-extra",
            name: "Simulasi Sidang Extra (1x)",
            price: "Rp 200.000",
            description: "Latihan simulasi sidang tambahan"
        }
    ];

    const handleDaftarClick = (pkg) => {
        const programInfo = {
            program: "bimbingan-skripsi",
            programTitle: "Bimbingan Skripsi",
            package: pkg.id,
            packageTitle: pkg.name,
            price: pkg.price,
            gradeOptions: []
        };
        navigate("/daftar", { state: { programData: programInfo } });
    };

    return (
        <div className="cost-page-wrapper">
            <SEO
                title="Biaya Bimbingan Skripsi - Jasa Bimbingan Tesis Profesional"
                description="Biaya bimbingan skripsi dan tesis mulai Rp 500.000. Konsultasi judul, bimbingan Bab 1-5, analisis data SPSS, dan persiapan sidang dengan pembimbing berpengalaman."
                url="/biaya-bimbingan-skripsi"
                keywords={['biaya bimbingan skripsi', 'jasa bimbingan skripsi', 'jasa tesis', 'konsultasi skripsi', 'bimbingan proposal', 'analisis data spss', 'bimbingan sidang']}
            />
            <div className="cost-page">
                <div className="cost-container">
                    <h1 className="cost-title">BIMBINGAN SKRIPSI</h1>

                    {/* Pricing Table */}
                    <div className="cost-pricing-section">
                        <h2 className="cost-pricing-title">
                            Paket Bimbingan Skripsi
                        </h2>

                        {/* Harga Jabodetabek */}
                        <div className="cost-area-section">
                            <h3 className="cost-area-title">
                                <span className="cost-area-icon">📍</span>
                                Harga Jabodetabek
                            </h3>
                            <p className="cost-area-subtitle">Jakarta, Bogor, Depok, Tangerang, Bekasi</p>
                            <div className="cost-pricing-table">
                                {packages.map((pkg) => (
                                    <div key={pkg.id} className="cost-pricing-card">
                                        <div className="cost-package-header">
                                            <h1 className="cost-package-tittle">{pkg.title}</h1>
                                            <h3 className="cost-package-name">{pkg.name}</h3>
                                            <div className="cost-package-duration">
                                                {pkg.duration}
                                            </div>
                                            <div className="cost-package-price">
                                                {pkg.price}
                                            </div>
                                            {pkg.isBestValue ? (
                                                <div className="cost-discount-badge">Best Value</div>
                                            ) : (
                                                <div className="cost-discount-badge">Terjangkau</div>
                                            )}
                                        </div>
                                        <p className="cost-package-description">
                                            {pkg.description}
                                        </p>
                                        <ul className="cost-package-features">
                                            {pkg.features && pkg.features.map((feature, index) => (
                                                <li key={index}>✅ {feature}</li>
                                            ))}
                                        </ul>
                                        <button
                                            className="cost-cta-button"
                                            onClick={() => handleDaftarClick(pkg)}
                                        >
                                            Daftar Sekarang
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Harga Luar Jabodetabek */}
                        <div className="cost-area-section cost-area-outside">
                            <h3 className="cost-area-title">
                                <span className="cost-area-icon">🌏</span>
                                Harga di Luar Jabodetabek
                            </h3>
                            <p className="cost-area-subtitle">Bandung, Surabaya, Yogyakarta, dan kota lainnya</p>
                            <div className="cost-pricing-table">
                                {packages.map((pkg) => {
                                    // Harga sama dengan Jabodetabek
                                    const formattedOutsidePrice = pkg.price;

                                    return (
                                        <div key={`outside-${pkg.id}`} className="cost-pricing-card cost-card-outside">
                                            <div className="cost-package-header">
                                                <h1 className="cost-package-tittle">{pkg.title}</h1>
                                                <h3 className="cost-package-name">{pkg.name}</h3>
                                                <div className="cost-package-duration">
                                                    {pkg.duration}
                                                </div>
                                                <div className="cost-package-price">
                                                    {formattedOutsidePrice}
                                                </div>
                                                {pkg.isBestValue ? (
                                                    <div className="cost-discount-badge">Best Value</div>
                                                ) : (
                                                    <div className="cost-discount-badge">Terjangkau</div>
                                                )}
                                            </div>
                                            <p className="cost-package-description">
                                                {pkg.description}
                                            </p>
                                            <ul className="cost-package-features">
                                                {pkg.features && pkg.features.map((feature, index) => (
                                                    <li key={index}>✅ {feature}</li>
                                                ))}
                                            </ul>
                                            <button
                                                className="cost-cta-button"
                                                onClick={() => handleDaftarClick(pkg)}
                                            >
                                                Daftar Sekarang
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Addons Section */}
                    <div className="cost-pricing-section">
                        <h2 className="cost-pricing-title">Layanan Tambahan (Addons)</h2>
                        <div className="cost-pricing-table">
                            {addons.map((addon) => (
                                <div key={addon.id} className="cost-pricing-card">
                                    <div className="cost-package-header">
                                        <h3 className="cost-package-name">{addon.name}</h3>
                                        <div className="cost-package-price">{addon.price}</div>
                                    </div>
                                    <p className="cost-package-description">{addon.description}</p>
                                    <button
                                        className="cost-cta-button"
                                        onClick={() => handleDaftarClick(addon)}
                                    >
                                        Tambahkan
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="cost-additional-info">
                        <h3>Fasilitas dan Keuntungan</h3>
                        <div className="cost-facilities">
                            <div className="cost-facility-item">
                                <span className="cost-facility-icon">🎓</span>
                                <div>
                                    <strong>Pembimbing Berkualitas</strong>
                                    <p>Pembimbing profesional dan berpengalaman</p>
                                </div>
                            </div>
                            <div className="cost-facility-item">
                                <span className="cost-facility-icon">💻</span>
                                <div>
                                    <strong>Konsultasi Fleksibel</strong>
                                    <p>Bimbingan online dan offline sesuai kebutuhan</p>
                                </div>
                            </div>
                            <div className="cost-facility-item">
                                <span className="cost-facility-icon">⏰</span>
                                <div>
                                    <strong>Jadwal Fleksibel</strong>
                                    <p>Menyesuaikan dengan waktu luang mahasiswa</p>
                                </div>
                            </div>
                            <div className="cost-facility-item">
                                <span className="cost-facility-icon">🔄</span>
                                <div>
                                    <strong>Revisi Unlimited</strong>
                                    <p>Revisi dan koreksi sampai skripsi selesai</p>
                                </div>
                            </div>
                            <div className="cost-facility-item">
                                <span className="cost-facility-icon">📊</span>
                                <div>
                                    <strong>Progress Tracking</strong>
                                    <p>Monitoring perkembangan skripsi berkala</p>
                                </div>
                            </div>
                            <div className="cost-facility-item">
                                <span className="cost-facility-icon">💬</span>
                                <div>
                                    <strong>Konsultasi Gratis</strong>
                                    <p>Konsultasi dan diskusi kapan saja dibutuhkan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhatsAppFloatingButton />
        </div >
    );
};

export default BiayaPage;