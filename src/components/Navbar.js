import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

// Icons
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

function Navbar() {
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const [isBiayaDropdownOpen, setIsBiayaDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const biayaDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const toggleProgramDropdown = () => {
    setIsProgramDropdownOpen(!isProgramDropdownOpen);
  };

  const toggleBiayaDropdown = () => {
    setIsBiayaDropdownOpen(!isBiayaDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Tutup dropdown ketika mobile menu ditutup
    if (isMobileMenuOpen) {
      setIsProgramDropdownOpen(false);
      setIsBiayaDropdownOpen(false);
    }
  };

  // Fungsi untuk membuka CakraApp di tab baru
  const handleLoginClick = () => {
    window.open("https://cakra-app-6777a.web.app/", "_blank");
    setIsMobileMenuOpen(false);
  };

  // Close dropdown ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProgramDropdownOpen(false);
      }
      if (
        biayaDropdownRef.current &&
        !biayaDropdownRef.current.contains(event.target)
      ) {
        setIsBiayaDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu ketika route berubah
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProgramDropdownOpen(false);
    setIsBiayaDropdownOpen(false);
  }, [location.pathname]);

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const isProgramActive = () => {
    return (
      location.pathname.startsWith("/program") ||
      location.pathname.startsWith("/bimbel")
    );
  };

  const isBiayaActive = () => {
    return location.pathname.startsWith("/biaya-les");
  };

  const isBlogActive = () => {
    return location.pathname.startsWith("/blog");
  };

  return (
    <nav className="cakra-navbar">
      <div
        className={`cakra-nav-container ${isMobileMenuOpen ? "mobile-active" : ""
          }`}
        ref={mobileMenuRef}
      >
        {/* Logo/Brand */}
        <div className="cakra-nav-brand">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Cakrawala EduCentre
          </Link>
        </div>

        {/* Hamburger Button untuk Mobile */}
        <button
          className={`cakra-hamburger-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu Items - Bagian Tengah */}
        <div className="cakra-nav-menu">
          <Link
            to="/"
            className={`cakra-nav-link ${isActiveLink("/") ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Program dengan Dropdown */}
          <div
            className={`cakra-nav-dropdown ${isProgramDropdownOpen ? "active" : ""
              }`}
            ref={dropdownRef}
          >
            <button
              className={`cakra-nav-link dropdown-toggle ${isProgramDropdownOpen || isProgramActive() ? "active" : ""
                }`}
              onClick={toggleProgramDropdown}
            >
              Program
              <span
                className={`cakra-dropdown-arrow ${isProgramDropdownOpen ? "rotate" : ""
                  }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`cakra-dropdown-menu ${isProgramDropdownOpen ? "active" : ""
                }`}
            >
              <div className="cakra-dropdown-content">
                <div className="cakra-dropdown-section">
                  <h4>Jenjang Pendidikan</h4>
                  <div className="cakra-dropdown-links">
                    <Link
                      to="/program/sd"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat SD
                    </Link>
                    <Link
                      to="/program/smp"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat SMP
                    </Link>
                    <Link
                      to="/program/sma"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat SMA
                    </Link>
                    <Link
                      to="/program/mengaji"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Mengaji
                    </Link>
                    <Link
                      to="/program/musik"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Musik
                    </Link>
                    <Link
                      to="/program/renang"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Renang
                    </Link>
                  </div>
                </div>

                <div className="cakra-dropdown-section">
                  <h4>Program Khusus</h4>
                  <div className="cakra-dropdown-links">
                    <Link
                      to="/program/calistung"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Calistung
                    </Link>
                    <Link
                      to="/program/coding"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Coding
                    </Link>
                    <Link
                      to="/program/bahasainggris"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Bahasa Inggris
                    </Link>
                    <Link
                      to="/program/bahasajerman"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Bahasa Jerman
                    </Link>
                    <Link
                      to="/program/bahasamandarin"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Bahasa Mandarin
                    </Link>
                    <Link
                      to="/program/bahasajepang"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Bahasa Jepang
                    </Link>
                    <Link
                      to="/program/masuk-sma"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Persiapan Masuk SMA Favorit
                    </Link>
                    <Link
                      to="/program/pelatihan-kerja"
                      onClick={() => setIsBiayaDropdownOpen(false)}
                    >
                      Pelatihan Kerja Dan Sertifikasi
                    </Link>
                    <Link
                      to="/program/bimbingan-skripsi"
                      onClick={() => setIsBiayaDropdownOpen(false)}
                    >
                      Bimbingan Skripsi
                    </Link>
                    <Link
                      to="/program/shadow-teacher"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Shadow Teacher
                    </Link>


                  </div>
                </div>

                <div className="cakra-dropdown-section">
                  <h4>Persiapan Tes</h4>
                  <div className="cakra-dropdown-links">
                    <Link
                      to="/program/toefl"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat TOEFL/IELTS
                    </Link>
                    <Link
                      to="/program/level"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat A/AS Level
                    </Link>
                    <Link
                      to="/program/tka"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Persiapan TKA
                    </Link>
                    <Link
                      to="/program/utbk"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Persiapan UTBK
                    </Link>
                    <Link
                      to="/program/kedinasan"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Kedinasan
                    </Link>
                    <Link
                      to="/program/supercamp"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Supercamp
                    </Link>
                    <Link
                      to="/program/lessimak-ujianmandiri"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les SIMAK UI
                    </Link>
                    <Link
                      to="/program/ujian-mandiri"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat Ujian Mandiri
                    </Link>
                  </div>
                </div>

                <div className="cakra-dropdown-section">
                  <h4>Program Lainnya</h4>
                  <div className="cakra-dropdown-links">
                    <Link
                      to="/bimbel"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Bimbel
                    </Link>
                  </div>
                </div>
              </div>

              <div className="cakra-dropdown-description">
                <div className="cakra-description-content">
                  <h4>
                    Guru Privat Berpengalaman dalam Kurikulum International dan
                    Nasional
                  </h4>
                  <p>
                    Cakrawala EduCentre memberikan layanan les privat dengan
                    guru-guru profesional dan berpengalaman yang datang langsung
                    ke rumah Anda. Layanan kami mencakup semua jenjang
                    pendidikan, dari TK hingga SMA, dengan fokus pada
                    pembelajaran one-on-one. Kami juga menyediakan guru yang
                    terbiasa mengajar dalam Bahasa Inggris (full
                    English/bilingual), menyesuaikan dengan kebutuhan dan
                    kurikulum sekolah siswa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/tentang-kami"
            className={`cakra-nav-link ${isActiveLink("/tentang-kami") ? "active" : ""
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tentang Kami
          </Link>

          {/* Dropdown Biaya Les */}
          <div
            className={`cakra-nav-dropdown ${isBiayaDropdownOpen ? "active" : ""
              }`}
            ref={biayaDropdownRef}
          >
            <button
              className={`cakra-nav-link dropdown-toggle ${isBiayaDropdownOpen || isBiayaActive() ? "active" : ""
                }`}
              onClick={toggleBiayaDropdown}
            >
              Biaya Les
              <span
                className={`cakra-dropdown-arrow ${isBiayaDropdownOpen ? "rotate" : ""
                  }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`cakra-dropdown-menu biaya-dropdown ${isBiayaDropdownOpen ? "active" : ""
                }`}
            >
              <div className="cakra-dropdown-content">
                <div className="cakra-dropdown-section">
                  <h4>Pilih Jenis Layanan</h4>
                  <div className="cakra-dropdown-links">
                    <Link
                      to="/biaya-les"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Privat
                    </Link>
                    <Link
                      to="/biaya-les-bimbel"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Les Bimbel
                    </Link>
                    <Link
                      to="/biaya-balai"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Balai latihan Kerja & Sertifikasi
                    </Link>
                    <Link
                      to="/biaya-skripsi"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Bimbingan Skripsi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog/Artikel */}
          <Link
            to="/blog"
            className={`cakra-nav-link ${isBlogActive() ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>

          {/* CakraKarir */}
          <Link
            to="/cakrakarir"
            className={`cakra-nav-link ${isActiveLink("/cakrakarir") ? "active" : ""
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CakraKarir
          </Link>
        </div>

        {/* Login CakraApp - Paling Kanan */}
        <div className="cakra-nav-actions">
          <button className="cakra-login-btn" onClick={handleLoginClick}>
            <span className="cakra-login-icon">
              <UserIcon />
            </span>
            <span className="cakra-login-text">Login CakraApp</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
