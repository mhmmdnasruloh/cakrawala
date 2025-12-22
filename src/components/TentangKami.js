import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";
import {
  FaChevronRight,
  FaChevronDown,
  FaStar,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Tutor from "./Tutor";
import "./TentangKami.css";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";

const accordionData = [
  {
    title: "Konsultasi Pendidikan Gratis dengan Ahli",
    content:
      "Cakrawala Educentre menyediakan layanan konsultasi pendidikan gratis bersama tim ahli untuk membantu orang tua menentukan program belajar yang paling sesuai dengan kebutuhan dan tujuan anak.",
  },
  {
    title: "Memilih Tutor Sendiri",
    content:
      "Orang tua dan siswa diberi kebebasan untuk memilih tutor yang sesuai dengan preferensi, gaya belajar, serta kecocokan karakter anak, sehingga proses pembelajaran lebih nyaman dan efektif.",
  },
  {
    title: "Modul Pembelajaran Interaktif Cakrawala",
    content:
      "Setiap siswa mendapatkan modul pembelajaran interaktif yang disusun sesuai kurikulum nasional maupun internasional, dilengkapi dengan latihan soal, studi kasus, dan materi tambahan yang menarik.",
  },
  {
    title: "Garansi Jaminan Ganti Tutor jika tidak cocok",
    content:
      "Kami memberikan garansi penggantian tutor tanpa biaya tambahan apabila siswa merasa kurang cocok, sehingga kualitas dan kenyamanan belajar tetap terjamin.",
  },
  {
    title: "Laporan Hasil Belajar Siswa (LHBS)",
    content:
      "Setiap periode pembelajaran, orang tua menerima Laporan Hasil Belajar Siswa (LHBS) yang berisi perkembangan akademik, keaktifan, serta rekomendasi peningkatan belajar.",
  },
];

function TentangKami() {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();
  const tutorsSectionRef = useRef(null);

  // Effect untuk handle scroll ke judul tutors ketika ada hash #tutors
  useEffect(() => {
    if (location.hash === "#tutors") {
      setTimeout(() => {
        const tutorsTitleElement = document.getElementById("tutors-title");
        if (tutorsTitleElement) {
          const navbarHeight = 80;
          const elementTop =
            tutorsTitleElement.getBoundingClientRect().top + window.pageYOffset;
          const scrollToPosition = elementTop - navbarHeight;

          window.scrollTo({
            top: scrollToPosition,
            behavior: "smooth",
          });

          const tutorSection = tutorsTitleElement.closest(
            ".tentangkami-tutor-section"
          );
          if (tutorSection) {
            tutorSection.classList.add("tentangkami-highlight-section");
            setTimeout(() => {
              tutorSection.classList.remove("tentangkami-highlight-section");
            }, 2000);
          }
        } else {
          const tutorsSection = document.querySelector(
            ".tentangkami-tutor-section"
          );
          if (tutorsSection) {
            const sectionTop = tutorsSection.offsetTop - 80;
            window.scrollTo({
              top: sectionTop,
              behavior: "smooth",
            });
          }
        }
      }, 300);
    }
  }, [location.hash]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="tentangkami-page">
      <SEO
        title="Tentang Kami - Profil Cakrawala Educentre"
        description="Cakrawala Educentre adalah lembaga les privat terpercaya di bawah PT. Indo Prestasi Utama. Menyediakan guru berkualitas untuk kurikulum Nasional & Internasional dengan garansi ganti tutor."
        url="/tentang-kami"
        keywords={['tentang cakrawala', 'profil les privat', 'lembaga bimbel', 'tutor berkualitas', 'les privat terpercaya', 'bimbingan belajar jakarta']}
      />
      {/* Hero Section Tentang Kami - SIMPLE VERSION */}
      <section className="tentangkami-hero">
        <div className="tentangkami-container">
          <div className="tentangkami-hero-content">
            <div className="tentangkami-hero-badge">
              <span>Tentang Kami</span>
            </div>
            <h1>Tentang Cakrawala Educentre</h1>
            <div className="tentangkami-hero-description">
              <p>
                <strong>Cakrawala Educentre</strong> dapat menjadi solusi Les
                Privat terpercaya bagi Mom's and Dad's. Layanan les privat
                akademik yang tersedia mulai dari anak usia dini (calistung),
                SD, SMP, SMA, hingga layanan les privat untuk non-akademik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apa Itu Cakrawala Section */}
      <section className="tentangkami-about-section">
        <div className="tentangkami-container">
          <div className="tentangkami-about-content">
            <h2>Apa Itu Cakrawala Educentre?</h2>
            <div className="tentangkami-about-grid">
              <div className="tentangkami-legal-badge">
                <img src="/logo.webp" alt="Legalitas Resmi Cakrawala" />
              </div>

              <div className="tentangkami-about-text">
                <p>
                  <strong>Cakrawala EduCentre</strong> adalah merek dari lembaga
                  penyedia jasa pendidikan di bawah naungan{" "}
                  <strong> PT. INDO PRESTASI UTAMA</strong>, yang bergerak dalam
                  layanan les privat akademik maupun non-akademik dengan sistem
                  pembelajaran offline maupun online. Berfokus pada kurikulum
                  Nasional dan Internasional. Dengan akte pendirian Nomor 233
                  Tanggal 25 September 2025 yang dibuat oleh EKA ASTRI MAERISA
                  S.H., M.H., M.KN., dan SURAT KEPUTUSAN MENTERI HUKUM DAN HAK
                  ASASI MANUSIA REPUBLIK INDONESIA{" "}
                  <strong>NOMOR AHU-0082358.AH.01.01.TAHUN 2025</strong> TANGGAL
                  25 September 2025
                </p>
              </div>
            </div>
          </div>

          {/* Visi Misi */}
          <div className="tentangkami-vision-mission">
            <div className="tentangkami-vm-grid">
              <div className="tentangkami-vision-card">
                <h3>Visi Kami</h3>
                <p>
                  Menjadi lembaga pendidikan privat yang terpercaya,
                  profesional, dan inovatif dalam mendampingi siswa meraih
                  prestasi akademik maupun non-akademik, serta membentuk
                  generasi berkarakter unggul.
                </p>
              </div>

              <div className="tentangkami-mission-card">
                <h3>Misi Kami</h3>
                <ul>
                  <li>
                    Menjadi sahabat belajar siswa dengan memberikan layanan
                    pembelajaran yang efektif, fleksibel, dan sesuai kebutuhan.
                  </li>
                  <li>
                    Menyediakan tutor profesional dan berpengalaman sesuai
                    bidangnya.
                  </li>
                  <li>
                    Memberikan fasilitas pembelajaran yang terstruktur, mulai
                    dari modul hingga laporan hasil belajar.
                  </li>
                  <li>
                    Menghadirkan metode pembelajaran yang edukatif, interaktif,
                    dan disesuaikan dengan gaya belajar siswa.
                  </li>
                  <li>
                    Membantu siswa mengembangkan potensi akademik maupun
                    keterampilan non-akademik (bahasa, seni, olahraga, dan
                    keagamaan).
                  </li>
                  <li>
                    Menjadi mitra orang tua dalam memantau dan mendukung
                    perkembangan belajar anak.
                  </li>
                  <li>
                    Menciptakan transformasi pendidikan dengan meningkatkan
                    motivasi belajar dan menumbuhkan rasa percaya diri siswa.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="tentangkami-ceo-section">
        <div className="tentangkami-container">
          <div className="tentangkami-ceo-content">
            <div className="tentangkami-ceo-header">
              <h2>Pesan dari CEO</h2>
            </div>

            <div className="tentangkami-ceo-grid">
              <div className="tentangkami-ceo-quote">
                <div className="tentangkami-quote-container">
                  <div className="tentangkami-quote-icon">❝</div>
                  <blockquote className="tentangkami-ceo-message">
                    "Di Cakrawala EduCentre, kami percaya bahwa setiap anak
                    memiliki potensi unik yang layak didampingi dengan penuh
                    perhatian. Melalui pembelajaran personal dan fleksibel, kami
                    hadir sebagai mitra orang tua dalam membentuk generasi yang
                    percaya diri, cerdas, dan berkarakter."
                  </blockquote>
                  <div className="tentangkami-quote-author">
                    <div className="tentangkami-author-photo">
                      <img
                        src="/tutors/tutor4.jpg"
                        alt="Ms. Citarani Anggraeni - CEO Cakrawala Educentre"
                      />
                    </div>
                    <div className="tentangkami-author-info">
                      <h4>Ms. Citarani Anggraeni</h4>
                      <p>CEO Cakrawala Educentre</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tentangkami-ceo-media">
                <div className="tentangkami-media-container">
                  <div className="tentangkami-youtube-embed">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/cGqLAMOjig4"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="tentangkami-youtube-channel">
                    <div className="tentangkami-channel-info">
                      <div className="tentangkami-channel-details">
                        <h4>Cakrawala Educentre Channel</h4>
                        <p>Subscribe untuk video edukasi terbaru</p>
                        <a
                          href="https://www.youtube.com/@CakrawalaEducentre"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tentangkami-subscribe-btn"
                        >
                          Subscribe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tentangkami-program-section">
        <div className="tentangkami-container">
          <div className="tentangkami-program-grid">
            <div className="tentangkami-program-left">
              <h2>
                Guru Privat Berpengalaman Dalam Kurikulum International Dan
                Kurikulum Nasional
              </h2>
              <p>
                Cakrawala memberikan layanan les privat dengan guru
                berpengalaman datang ke rumah dari jenjang pendidikan TK, SD,
                SMP dan SMA. Kami fokus pada <em>one on one learning</em>.
                Selain itu, kami juga menyediakan guru yang terbiasa mengajar
                dengan full english ataupun bilingual, menyesuaikan kurikulum
                sekolah siswa-siswi peserta didik.
              </p>
            </div>

            <div className="tentangkami-program-right">
              <div className="tentangkami-accordion">
                {accordionData.map((item, index) => (
                  <div key={index} className="tentangkami-accordion-block">
                    <button
                      className={`tentangkami-accordion-item ${activeIndex === index ? "tentangkami-active" : ""
                        }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span>{item.title}</span>
                      <span className="tentangkami-accordion-icon">
                        {activeIndex === index ? (
                          <FaChevronDown />
                        ) : (
                          <FaChevronRight />
                        )}
                      </span>
                    </button>
                    <div
                      className={`tentangkami-accordion-content ${activeIndex === index ? "tentangkami-show" : ""
                        }`}
                    >
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutors Section */}
      <section ref={tutorsSectionRef} className="tentangkami-tutors-anchor">
        <div className="tentangkami-tutors-header-anchor" id="tutors"></div>
        <Tutor showAll={true} />
      </section>

      {/* Poster Recruitment Section */}
      <section className="tentangkami-poster-section">
        <div className="tentangkami-container">
          <div className="tentangkami-poster-wrapper">
            <img
              src="/poster-tutor.webp"
              alt="Poster Rekrutmen Tutor Cakrawala Educentre"
              className="tentangkami-poster-image"
            />
          </div>

          <div className="tentangkami-poster-action">
            <div className="tentangkami-poster-buttons">
              <a
                href="https://forms.gle/du85uTi9BUEf7SKR7"
                target="_blank"
                rel="noopener noreferrer"
                className="tentangkami-apply-btn"
              >
                Daftar Menjadi Tutor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="tentangkami-media-section">
        <div className="tentangkami-container">
          <h2 className="tentangkami-media-title">Telah Diliput Oleh</h2>

          {/* Media Logos */}
          <div className="tentangkami-media-grid">
            <div className="tentangkami-media-logo">
              <img
                src="/busurnusa.webp"
                alt="BusurNusa"
                className="tentangkami-media-image"
              />
            </div>
          </div>

          {/* Map Section */}
          <div className="tentangkami-map-section">
            <div className="tentangkami-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8867161479006!2d107.0174437!3d-6.2786214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e0e3df8763d%3A0xe1d56e3b07b38c15!2sJl.%20Hirup%20Raya%20Jl.%20Kp.%20Rw.%20Sapi%20No.94%2C%20RT.%3A003%2F010%2C%20Jatimulya%2C%20Kec.%20Tambun%20Sel.%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017515!5e0!3m2!1sid!2sid!4v1758869058967!5m2!1sid!2sid"
                className="tentangkami-map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Cakrawala Educentre"
              ></iframe>
            </div>

            <div className="tentangkami-map-actions">
              <a
                href="https://www.google.com/maps/dir//Jl.+Hirup+Raya+No.94,+Mustikasari,+Kec.+Mustika+Jaya,+Kota+Bks,+Jawa+Barat+17157"
                target="_blank"
                rel="noopener noreferrer"
                className="tentangkami-direction-btn"
              >
                Dapatkan Petunjuk Arah
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloatingButton />
    </div>
  );
}

export default TentangKami;
