// components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  // Daftar seluruh provinsi di Indonesia
  const provinsiList = [
    "Aceh",
    "Sumatera Utara",
    "Sumatera Barat",
    "Riau",
    "Kepulauan Riau",
    "Jambi",
    "Bengkulu",
    "Sumatera Selatan",
    "Kepulauan Bangka Belitung",
    "Lampung",
    "Banten",
    "DKI Jakarta",
    "Jawa Barat",
    "Jawa Tengah",
    "DI Yogyakarta",
    "Jawa Timur",
    "Bali",
    "Nusa Tenggara Barat",
    "Nusa Tenggara Timur",
    "Kalimantan Barat",
    "Kalimantan Tengah",
    "Kalimantan Selatan",
    "Kalimantan Timur",
    "Kalimantan Utara",
    "Sulawesi Utara",
    "Gorontalo",
    "Sulawesi Tengah",
    "Sulawesi Barat",
    "Sulawesi Selatan",
    "Sulawesi Tenggara",
    "Maluku",
    "Maluku Utara",
    "Papua Barat",
    "Papua",
    "Papua Selatan",
    "Papua Tengah",
    "Papua Pegunungan",
  ];

  // Social media links
  const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/company/cakrawalaeducentre/",
    instagram: "https://www.instagram.com/cakrawalaeducentre.id/",
    facebook: "https://www.facebook.com/share/16n2Yu84x5/",
    youtube: "https://www.youtube.com/@CakrawalaEducentre",
    tiktok:
      "https://www.tiktok.com/@cakrawalaeducentre.id?_r=1&_t=ZS-91KPtheCfIK",
  };

  // Fungsi untuk scroll ke atas ketika link diklik
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Fungsi untuk handle social media click
  const handleSocialMediaClick = (platform) => {
    window.open(socialMediaLinks[platform], "_blank");
  };

  // Bagi provinsi jadi 2
  const halfLength = Math.ceil(provinsiList.length / 2);
  const provinsiKolom1 = provinsiList.slice(0, halfLength);
  const provinsiKolom2 = provinsiList.slice(halfLength);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Kolom Kiri */}
        <div className="footer-left">
          <img src="/logo.webp" alt="Logo Cakrawala" className="footer-logo" />
          <h3>
            PUSAT LES PRIVAT <br /> CAKRAWALA EDUCENTRE
          </h3>
          <p>
            Jl Siti 2 Jl Bayan II No 7 RT 002 RW 008 Mustikajaya <br />
            Kec Mustika Jaya Kota Bks Jawa Barat 17158 <br />
            Indonesia
          </p>
          <p>0813 - 2486 - 8790</p>
          <p>admin@cakrawalaeducentre.com</p>

          {/* Sosmed */}
          <div className="footer-social">
            <a
              href="#"
              aria-label="LinkedIn"
              onClick={(e) => {
                e.preventDefault();
                handleSocialMediaClick("linkedin");
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              onClick={(e) => {
                e.preventDefault();
                handleSocialMediaClick("instagram");
              }}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              onClick={(e) => {
                e.preventDefault();
                handleSocialMediaClick("facebook");
              }}
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              onClick={(e) => {
                e.preventDefault();
                handleSocialMediaClick("youtube");
              }}
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              onClick={(e) => {
                e.preventDefault();
                handleSocialMediaClick("tiktok");
              }}
            >
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
          </div>
        </div>

        {/* Kolom Wilayah 1 */}
        <div className="footer-col footer-wilayah">
          <h4>Wilayah Les Privat</h4>
          <ul>
            {provinsiKolom1.map((provinsi, index) => (
              <li key={index}>
                <span className="wilayah-item">Les Privat {provinsi}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom Wilayah 2 */}
        <div className="footer-col footer-wilayah">
          <h4>Wilayah Les Privat</h4>
          <ul>
            {provinsiKolom2.map((provinsi, index) => (
              <li key={index}>
                <span className="wilayah-item">Les Privat {provinsi}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom Layanan Les Privat */}
        <div className="footer-col footer-layanan">
          <h4>Layanan Les Privat</h4>
          <ul>
            <li>
              <Link to="/program/sd" onClick={handleLinkClick}>
                Les Privat SD
              </Link>
            </li>
            <li>
              <Link to="/program/smp" onClick={handleLinkClick}>
                Les Privat SMP
              </Link>
            </li>
            <li>
              <Link to="/program/sma" onClick={handleLinkClick}>
                Les Privat SMA
              </Link>
            </li>
            <li>
              <Link to="/program/mengaji" onClick={handleLinkClick}>
                Les Privat Mengaji
              </Link>
            </li>
            <li>
              <Link to="/program/musik" onClick={handleLinkClick}>
                Les Privat Musik
              </Link>
            </li>
            <li>
              <Link to="/program/renang" onClick={handleLinkClick}>
                Les Privat Renang
              </Link>
            </li>
            <li>
              <Link to="/program/calistung" onClick={handleLinkClick}>
                Les Privat Calistung
              </Link>
            </li>
            <li>
              <Link to="/program/coding" onClick={handleLinkClick}>
                Les Privat Coding
              </Link>
            </li>
            <li>
              <Link to="/program/kedinasan" onClick={handleLinkClick}>
                Les Privat Kedinasan
              </Link>
            </li>
            <li>
              <Link to="/program/bahasainggris" onClick={handleLinkClick}>
                Les Privat Bahasa Inggris
              </Link>
            </li>
            <li>
              <Link to="/program/bahasajerman" onClick={handleLinkClick}>
                Les Privat Bahasa Jerman
              </Link>
            </li>
            <li>
              <Link to="/program/bahasamandarin" onClick={handleLinkClick}>
                Les Privat Bahasa Mandarin
              </Link>
            </li>
            <li>
              <Link to="/program/bahasajepang" onClick={handleLinkClick}>
                Les Privat Bahasa Jepang
              </Link>
            </li>
            <li>
              <Link to="/program/masuk-sma" onClick={handleLinkClick}>
                Persiapan Masuk MAN IC
              </Link>
            </li>
            <li>
              <Link to="/program/toefl" onClick={handleLinkClick}>
                Les Privat TOEFL/IELTS
              </Link>
            </li>
            <li>
              <Link to="/program/level" onClick={handleLinkClick}>
                Les Privat Level Test
              </Link>
            </li>
            <li>
              <Link to="/program/tka" onClick={handleLinkClick}>
                Les Privat TKA
              </Link>
            </li>
            <li>
              <Link to="/program/utbk" onClick={handleLinkClick}>
                Les Privat UTBK
              </Link>
            </li>
            <li>
              <Link to="/program/supercamp" onClick={handleLinkClick}>
                Supercamp
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom Kanan */}
        <div className="footer-col footer-tentang">
          <h4>Tentang Kami</h4>
          <ul>
            <li>
              <Link to="/tentang-kami" onClick={handleLinkClick}>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/biaya-les" onClick={handleLinkClick}>
                Biaya Les
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleLinkClick}>
                Blog & Artikel
              </Link>
            </li>
            <li>
              <Link to="/cakrakarir" onClick={handleLinkClick}>
                CakraKarir
              </Link>
            </li>
            <li>
              <Link to="/daftar" onClick={handleLinkClick}>
                Daftar
              </Link>
            </li>
          </ul>
          <br />
          <h4>Program Bimbel</h4>
          <ul>
            <li>
              <Link to="/bimbel" onClick={handleLinkClick}>
                Program Reguler
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Maps di bawah sendiri */}
      <div className="footer-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7056906077146!2d107.02817861056964!3d-6.302347193660483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f6fd27912db%3A0x5f0b5b2cf0be5252!2sCakrawala%20Educentre!5e0!3m2!1sid!2sid!4v1734581400000!5m2!1sid!2sid"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Peta Lokasi Cakrawala EduCentre"
        ></iframe>
      </div>
    </footer>
  );
}

export default Footer;