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

  const [activeClass, setActiveClass] = useState("online");
  const [activeProgram, setActiveProgram] = useState("tk");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    if (location.state?.presetSelection) {
      const { classType, program } = location.state.presetSelection;
      if (classType) setActiveClass(classType);
      if (program) setActiveProgram(program);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  }, [location.state]);

  const classData = {
    online: {
      title: "Kelas Online",
      icon: "💻"
    },
    offline: {
      title: "Kelas Offline",
      icon: "🏫"
    }
  };

  const programData = {
    tk: {
      name: "TK",
      icon: "🎨",
      gradeOptions: ["TK A", "TK B"]
    },
    sd: {
      name: "SD",
      icon: "📚",
      gradeOptions: ["Kelas 1", "Kelas 2", "Kelas 3", "Kelas 4", "Kelas 5", "Kelas 6"]
    },
    smp: {
      name: "SMP",
      icon: "📖",
      gradeOptions: ["Kelas 7", "Kelas 8", "Kelas 9"]
    },
    sma: {
      name: "SMA",
      icon: "🎓",
      gradeOptions: ["Kelas 10", "Kelas 11", "Kelas 12"]
    }
  };

  const priceData = {
    online: {
      tk: {
        bulanan: "Rp 100.000",
        semesteran: "Rp 550.000",
        tahunan: "Rp 1.000.000"
      },
      sd: {
        bulanan: "Rp 100.000",
        semesteran: "Rp 550.000",
        tahunan: "Rp 1.000.000"
      },
      smp: {
        bulanan: "Rp 150.000",
        semesteran: "Rp 800.000",
        tahunan: "Rp 1.500.000"
      },
      sma: {
        bulanan: "Rp 200.000",
        semesteran: "Rp 1.100.000",
        tahunan: "Rp 2.000.000"
      }
    },
    offline: {
      tk: {
        bulanan: "Rp 150.000",
        semesteran: "Rp 800.000",
        tahunan: "Rp 1.500.000"
      },
      sd: {
        bulanan: "Rp 200.000",
        semesteran: "Rp 1.100.000",
        tahunan: "Rp 2.000.000"
      },
      smp: {
        bulanan: "Rp 250.000",
        semesteran: "Rp 1.400.000",
        tahunan: "Rp 2.500.000"
      },
      sma: {
        bulanan: "Rp 350.000",
        semesteran: "Rp 1.900.000",
        tahunan: "Rp 3.500.000"
      }
    }
  };

  const packages = [
    {
      id: "bulanan",
      title: "BULANAN",
      name: "Paket Bulanan",
      duration: "1 Bulan",
      sessions: "8 Sesi",
      description: "Paket bulanan bimbel berkualitas"
    },
    {
      id: "semesteran",
      title: "SEMESTERAN",
      name: "Paket Semesteran",
      duration: "6 Bulan",
      sessions: "48 Sesi",
      description: "Paket semester dengan harga spesial"
    },
    {
      id: "tahunan",
      title: "TAHUNAN",
      name: "Paket Tahunan",
      duration: "12 Bulan",
      sessions: "96 Sesi",
      description: "Paket tahunan dengan harga terbaik"
    }
  ];

  const getCurrentPrices = () => {
    return priceData[activeClass][activeProgram] || {};
  };

  const handleDaftarClick = (pkg) => {
    const programInfo = {
      classType: activeClass,
      classTitle: classData[activeClass].title,
      program: activeProgram,
      programTitle: programData[activeProgram].name,
      package: pkg.id,
      packageTitle: pkg.name,
      price: getCurrentPrices()[pkg.id],
      gradeOptions: programData[activeProgram].gradeOptions
    };
    navigate("/daftar", { state: { programData: programInfo } });
  };

  const currentPrices = getCurrentPrices();

  return (
    <div className="cost-page-wrapper">
      <SEO
        title="Biaya Bimbel Online & Offline - Kelas Kelompok Terjangkau"
        description="Biaya bimbel online dan offline Cakrawala Educentre mulai Rp 100.000/bulan. Bimbel kelompok TK, SD, SMP, SMA dengan guru berkualitas dan fasilitas lengkap."
        url="/biaya-bimbel"
        keywords={['biaya bimbel', 'harga bimbel', 'bimbel murah', 'bimbel online', 'bimbel offline', 'les kelompok', 'bimbel sd', 'bimbel smp', 'bimbel sma']}
      />
      <div className="cost-page">
        <div className="cost-container">
          <h1 className="cost-title">Biaya Bimbel Online & Offline</h1>

          {/* Class Selection (Online/Offline) */}
          <div className="cost-curriculum-selection">
            <h2>Pilih Kelas</h2>
            <div className="cost-curriculum-buttons">
              <button
                className={`cost-curriculum-button ${activeClass === "online" ? "active" : ""}`}
                onClick={() => setActiveClass("online")}
              >
                💻 Online
              </button>
              <button
                className={`cost-curriculum-button ${activeClass === "offline" ? "active" : ""}`}
                onClick={() => setActiveClass("offline")}
              >
                🏫 Offline
              </button>
            </div>
          </div>

          {/* Program Selection (TK/SD/SMP/SMA) */}
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
              Biaya Bimbel {classData[activeClass].title} - {programData[activeProgram].name}
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
                        {pkg.duration} ({pkg.sessions})
                      </div>
                      <div className="cost-package-price">
                        {currentPrices[pkg.id]}
                      </div>
                      {pkg.id === "tahunan" && (
                        <div className="cost-discount-badge">Harga Terbaik</div>
                      )}
                      {pkg.id === "semesteran" && (
                        <div className="cost-discount-badge">Diskon Spesial</div>
                      )}
                    </div>
                    <p className="cost-package-description">
                      {pkg.description}
                    </p>
                    <ul className="cost-package-features">
                      <li>✅ Guru profesional dan berpengalaman</li>
                      <li>✅ Materi sesuai kurikulum nasional</li>
                      <li>✅ Laporan perkembangan belajar berkala</li>
                      <li>✅ Konsultasi gratis dengan orang tua</li>
                      <li>✅ Jadwal fleksibel sesuai kebutuhan</li>
                      <li>✅ Modul dan materi belajar lengkap</li>
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
                  const jabodetabekPrice = currentPrices[pkg.id];
                  const numericPrice = parseInt(jabodetabekPrice?.replace(/[^0-9]/g, '') || '0');
                  const outsidePrice = Math.round(numericPrice * 1.15);
                  const formattedOutsidePrice = `Rp ${outsidePrice.toLocaleString('id-ID')}`;

                  return (
                    <div key={`outside-${pkg.id}`} className="cost-pricing-card cost-card-outside">
                      <div className="cost-package-header">
                        <h1 className="cost-package-tittle">{pkg.title}</h1>
                        <h3 className="cost-package-name">{pkg.name}</h3>
                        <div className="cost-package-duration">
                          {pkg.duration} ({pkg.sessions})
                        </div>
                        <div className="cost-package-price">
                          {formattedOutsidePrice}
                        </div>
                        {pkg.id === "tahunan" && (
                          <div className="cost-discount-badge">Harga Terbaik</div>
                        )}
                        {pkg.id === "semesteran" && (
                          <div className="cost-discount-badge">Diskon Spesial</div>
                        )}
                      </div>
                      <p className="cost-package-description">
                        {pkg.description}
                      </p>
                      <ul className="cost-package-features">
                        <li>✅ Guru profesional dan berpengalaman</li>
                        <li>✅ Materi sesuai kurikulum nasional</li>
                        <li>✅ Laporan perkembangan belajar berkala</li>
                        <li>✅ Konsultasi gratis dengan orang tua</li>
                        <li>✅ Jadwal fleksibel sesuai kebutuhan</li>
                        <li>✅ Modul dan materi belajar lengkap</li>
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
                  <strong>Guru Berkualitas</strong>
                  <p>Guru profesional dan berpengalaman di bidangnya</p>
                </div>
              </div>
              <div className="cost-facility-item">
                <span className="cost-facility-icon">
                  {activeClass === "offline" ? "🏠" : "💻"}
                </span>
                <div>
                  <strong>
                    {activeClass === "offline" ? "Guru Datang ke Rumah" : "Belajar Online"}
                  </strong>
                  <p>
                    {activeClass === "offline"
                      ? "Kenyamanan belajar di lingkungan rumah sendiri"
                      : "Belajar dari rumah dengan platform interaktif"}
                  </p>
                </div>
              </div>
              <div className="cost-facility-item">
                <span className="cost-facility-icon">⏰</span>
                <div>
                  <strong>Jadwal Fleksibel</strong>
                  <p>Menyesuaikan dengan waktu luang siswa</p>
                </div>
              </div>
              <div className="cost-facility-item">
                <span className="cost-facility-icon">🔄</span>
                <div>
                  <strong>Ganti Guru Gratis</strong>
                  <p>Jika tidak cocok, bisa ganti guru tanpa biaya</p>
                </div>
              </div>
              <div className="cost-facility-item">
                <span className="cost-facility-icon">📊</span>
                <div>
                  <strong>Progress Report</strong>
                  <p>Laporan perkembangan belajar secara berkala</p>
                </div>
              </div>
              <div className="cost-facility-item">
                <span className="cost-facility-icon">💬</span>
                <div>
                  <strong>Konsultasi Gratis</strong>
                  <p>Konsultasi dengan orang tua dan wali</p>
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