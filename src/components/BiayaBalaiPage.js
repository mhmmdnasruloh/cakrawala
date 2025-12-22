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

    const [activeProgram, setActiveProgram] = useState("k3lh");

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useLayoutEffect(() => {
        if (location.state?.presetSelection) {
            const { program } = location.state.presetSelection;
            if (program) setActiveProgram(program);
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0);
        }
    }, [location.state]);

    const programData = {
        k3lh: {
            name: "K3LH",
            icon: "🦺",
            gradeOptions: []
        },
        itsupport: {
            name: "IT Support",
            icon: "💻",
            gradeOptions: []
        },
        customerservice: {
            name: "Customer Service & Telemarketing",
            icon: "📞",
            gradeOptions: []
        },
        bahasainggris: {
            name: "Bahasa Inggris",
            icon: "🗣️",
            gradeOptions: []
        }
    };

    const packagesData = {
        k3lh: [
            {
                id: "inhouse-4hari",
                title: "IN HOUSE TRAINING",
                name: "4 Hari (In House Training)",
                duration: "4 Hari",
                sessions: "In House Training",
                price: "Rp 2.940.000",
                description: "Pelatihan K3LH di tempat perusahaan Anda"
            },
            {
                id: "gedung-4hari",
                title: "GEDUNG PELATIHAN",
                name: "4 Hari (Gedung Pelatihan/Hotel)",
                duration: "4 Hari",
                sessions: "Gedung Pelatihan/Hotel",
                price: "Rp 3.990.000",
                description: "Pelatihan K3LH di gedung pelatihan atau hotel"
            }
        ],
        itsupport: [
            {
                id: "4minggu",
                title: "4 MINGGU",
                name: "4 Minggu",
                duration: "4 Minggu",
                sessions: "12x Sesi (Jum'at, Sabtu, Minggu)",
                price: "Rp 1.150.000",
                description: "Pelatihan IT Support selama 4 minggu"
            },
            {
                id: "bootcamp-2bulan",
                title: "BOOTCAMP 2 BULAN",
                name: "2 Bulan (Bootcamp)",
                duration: "2 Bulan",
                sessions: "24x Sesi (Jum'at, Sabtu, Minggu)",
                price: "Rp 1.785.000",
                description: "Bootcamp IT Support intensif 2 bulan"
            },
            {
                id: "inhouse-1bulan",
                title: "IN HOUSE 1 BULAN",
                name: "1 Bulan (In House Training)",
                duration: "1 Bulan",
                sessions: "In House Training",
                price: "Rp 1.155.000",
                description: "Pelatihan IT Support di tempat Anda"
            }
        ],
        customerservice: [
            {
                id: "7hari",
                title: "PAKET 7 HARI",
                name: "7 Hari",
                duration: "7 Hari",
                sessions: "",
                price: "Rp 3.587.500",
                description: "Pelatihan Customer Service & Telemarketing 7 hari"
            }
        ],
        bahasainggris: [
            {
                id: "3bulan",
                title: "3 BULAN",
                name: "3 Bulan",
                duration: "3 Bulan",
                sessions: "36 Sesi (Jum'at, Sabtu, Minggu)",
                price: "Rp 4.217.500",
                description: "Pelatihan Bahasa Inggris 3 bulan"
            },
            {
                id: "6bulan",
                title: "6 BULAN",
                name: "6 Bulan",
                duration: "6 Bulan",
                sessions: "72 Sesi (Jum'at, Sabtu, Minggu)",
                price: "Rp 7.997.500",
                description: "Pelatihan Bahasa Inggris 6 bulan"
            }
        ]
    };

    const getCurrentPackages = () => {
        return packagesData[activeProgram] || [];
    };

    const handleDaftarClick = (pkg) => {
        const programInfo = {
            program: activeProgram,
            programTitle: programData[activeProgram].name,
            package: pkg.id,
            packageTitle: pkg.name,
            price: pkg.price,
            gradeOptions: programData[activeProgram].gradeOptions
        };
        navigate("/daftar", { state: { programData: programInfo } });
    };

    const currentPackages = getCurrentPackages();

    return (
        <div className="cost-page-wrapper">
            <SEO
                title="Biaya BLK & Sertifikasi - Pelatihan Kerja Bersertifikat"
                description="Biaya pelatihan kerja bersertifikat: K3LH, IT Support, Customer Service. Dapatkan sertifikasi resmi dengan harga terjangkau mulai Rp 1.150.000."
                url="/biaya-balai-latihan-kerja"
                keywords={['biaya blk', 'pelatihan kerja', 'sertifikasi k3lh', 'kursus it support', 'pelatihan customer service', 'sertifikat kerja']}
            />
            <div className="cost-page">
                <div className="cost-container">
                    <h1 className="cost-title">BLK & SERTIFIKASI</h1>

                    {/* Program Selection */}
                    <div className="cost-program-selection">
                        <h2>Pilih Program</h2>
                        <div className="cost-program-buttons">
                            {Object.keys(programData).map((program) => (
                                <button
                                    key={program}
                                    className={`cost-program-button ${activeProgram === program ? "active" : ""}`}
                                    onClick={() => setActiveProgram(program)}
                                >
                                    {programData[program].icon} {programData[program].name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Pricing Table */}
                    <div className="cost-pricing-section">
                        <h2 className="cost-pricing-title">
                            Biaya Pelatihan {programData[activeProgram].name}
                        </h2>

                        {/* Harga Jabodetabek */}
                        <div className="cost-area-section">
                            <h3 className="cost-area-title">
                                <span className="cost-area-icon">📍</span>
                                Harga Jabodetabek
                            </h3>
                            <p className="cost-area-subtitle">Jakarta, Bogor, Depok, Tangerang, Bekasi</p>
                            <div className={`cost-pricing-table ${currentPackages.length === 2 ? 'two-items' : currentPackages.length === 1 ? 'one-item' : ''}`}>
                                {currentPackages.map((pkg) => (
                                    <div key={pkg.id} className="cost-pricing-card">
                                        <div className="cost-package-header">
                                            <h1 className="cost-package-tittle">{pkg.title}</h1>
                                            <h3 className="cost-package-name">{pkg.name}</h3>
                                            <div className="cost-package-duration">
                                                {pkg.duration} {pkg.sessions && `(${pkg.sessions})`}
                                            </div>
                                            <div className="cost-package-price">
                                                {pkg.price}
                                            </div>
                                            <div className="cost-discount-badge">Terjangkau</div>
                                        </div>
                                        <p className="cost-package-description">
                                            {pkg.description}
                                        </p>
                                        <ul className="cost-package-features">
                                            <li>✅ Instruktur profesional dan berpengalaman</li>
                                            <li>✅ Materi sesuai standar industri</li>
                                            <li>✅ Sertifikat resmi setelah pelatihan</li>
                                            <li>✅ Konsultasi gratis dengan instruktur</li>
                                            <li>✅ Jadwal fleksibel sesuai kebutuhan</li>
                                            <li>✅ Modul dan materi pelatihan lengkap</li>
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
                            <div className={`cost-pricing-table ${currentPackages.length === 2 ? 'two-items' : currentPackages.length === 1 ? 'one-item' : ''}`}>
                                {currentPackages.map((pkg) => {
                                    const numericPrice = parseInt(pkg.price?.replace(/[^0-9]/g, '') || '0');
                                    const outsidePrice = Math.round(numericPrice * 1.15);
                                    const formattedOutsidePrice = `Rp ${outsidePrice.toLocaleString('id-ID')}`;

                                    return (
                                        <div key={`outside-${pkg.id}`} className="cost-pricing-card cost-card-outside">
                                            <div className="cost-package-header">
                                                <h1 className="cost-package-tittle">{pkg.title}</h1>
                                                <h3 className="cost-package-name">{pkg.name}</h3>
                                                <div className="cost-package-duration">
                                                    {pkg.duration} {pkg.sessions && `(${pkg.sessions})`}
                                                </div>
                                                <div className="cost-package-price">
                                                    {formattedOutsidePrice}
                                                </div>
                                                <div className="cost-discount-badge">Terjangkau</div>
                                            </div>
                                            <p className="cost-package-description">
                                                {pkg.description}
                                            </p>
                                            <ul className="cost-package-features">
                                                <li>✅ Instruktur profesional dan berpengalaman</li>
                                                <li>✅ Materi sesuai standar industri</li>
                                                <li>✅ Sertifikat resmi setelah pelatihan</li>
                                                <li>✅ Konsultasi gratis dengan instruktur</li>
                                                <li>✅ Jadwal fleksibel sesuai kebutuhan</li>
                                                <li>✅ Modul dan materi pelatihan lengkap</li>
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

                    {/* Additional Info */}
                    <div className="cost-additional-info">
                        <h3>Fasilitas dan Keuntungan</h3>
                        <div className="cost-facilities">
                            <div className="cost-facility-item">
                                <span className="cost-facility-icon">🎓</span>
                                <div>
                                    <strong>Instruktur Berkualitas</strong>
                                    <p>Instruktur profesional dan berpengalaman di bidangnya</p>
                                </div>
                            </div>
                            <div className="cost-facility-item">
                                <span className="cost-facility-icon">📜</span>
                                <div>
                                    <strong>Sertifikat Resmi</strong>
                                    <p>Mendapatkan sertifikat resmi setelah menyelesaikan pelatihan</p>
                                </div>
                            </div>
                            <div className="cost-facility-item">
                                <span className="cost-facility-icon">⏰</span>
                                <div>
                                    <strong>Jadwal Fleksibel</strong>
                                    <p>Menyesuaikan dengan waktu luang peserta</p>
                                </div>
                            </div>
                            <div className="cost-facility-item">
                                <span className="cost-facility-icon">🔄</span>
                                <div>
                                    <strong>Materi Update</strong>
                                    <p>Materi pelatihan selalu diperbarui sesuai industri</p>
                                </div>
                            </div>
                            <div className="cost-facility-item">
                                <span className="cost-facility-icon">📊</span>
                                <div>
                                    <strong>Progress Report</strong>
                                    <p>Laporan perkembangan pelatihan secara berkala</p>
                                </div>
                            </div>
                            <div className="cost-facility-item">
                                <span className="cost-facility-icon">💬</span>
                                <div>
                                    <strong>Konsultasi Gratis</strong>
                                    <p>Konsultasi dengan instruktur kapan saja</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhatsAppFloatingButton />
        </div>
    );
};

export default BiayaPage;