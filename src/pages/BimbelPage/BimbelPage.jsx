import React, { useState } from "react";
import "./BimbelPage.css";

const BimbelPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    whatsapp: "",
    sekolah: "",
    kelas: "",
    mataPelajaran: "",
    sumberInfo: "",
  });

  const [screenshot, setScreenshot] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // FORM CONFIGURATION
  const FORM_ID = "1FAIpQLScWvALwkzgUxxjl4ZNZtDxiz1r9cdCnWmX5IQCEkwexXfROng";
  const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

  const ENTRY_IDS = {
    nama: "entry.1681018397",
    email: "entry.1686744785",
    whatsapp: "entry.622699439",
    sekolah: "entry.1127535314",
    kelas: "entry.1566861251",
    mataPelajaran: "entry.1644612880",
    sumberInfo: "entry.1644612881",
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleScreenshotChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Harap upload file gambar (JPG, PNG)");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError("Ukuran file maksimal 5MB");
        return;
      }

      setScreenshot(file);
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.nama.trim() ||
      !formData.email.trim() ||
      !formData.whatsapp.trim() ||
      !formData.sekolah.trim() ||
      !formData.kelas ||
      !formData.mataPelajaran ||
      !formData.sumberInfo ||
      !screenshot
    ) {
      setError("Harap lengkapi semua field yang wajib diisi");
      return;
    }

    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();
      formBody.append(ENTRY_IDS.nama, formData.nama);
      formBody.append(ENTRY_IDS.email, formData.email);
      formBody.append(ENTRY_IDS.whatsapp, formData.whatsapp);
      formBody.append(ENTRY_IDS.sekolah, formData.sekolah);
      formBody.append(ENTRY_IDS.kelas, formData.kelas);
      formBody.append(ENTRY_IDS.mataPelajaran, formData.mataPelajaran);
      formBody.append(ENTRY_IDS.sumberInfo, formData.sumberInfo);

      await fetch(FORM_URL, {
        method: "POST",
        body: formBody,
        mode: "no-cors",
      });

      // Simpan ke localStorage
      const registrations = JSON.parse(
        localStorage.getItem("bimbelRegistrations") || "[]"
      );
      const reader = new FileReader();
      reader.onloadend = () => {
        const registrationData = {
          ...formData,
          screenshot: reader.result,
          screenshotName: screenshot.name,
          timestamp: new Date().toISOString(),
        };

        registrations.push(registrationData);
        localStorage.setItem(
          "bimbelRegistrations",
          JSON.stringify(registrations)
        );
      };
      reader.readAsDataURL(screenshot);

      setIsSubmitted(true);

      // Reset form
      setFormData({
        nama: "",
        email: "",
        whatsapp: "",
        sekolah: "",
        kelas: "",
        mataPelajaran: "",
        sumberInfo: "",
      });
      setScreenshot(null);
    } catch (error) {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeScreenshot = () => {
    setScreenshot(null);
    const fileInput = document.getElementById("screenshot");
    if (fileInput) fileInput.value = "";
  };

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("registration-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/6282128500318", "_blank");
  };

  return (
    <div className="bimbel-detail-page">
      {/* Hero Section */}
      <section className="bimbel-hero">
        <div className="container">
          <div className="bimbel-hero-content">
            <div className="hero-badge">FREE TRIAL</div>
            <h1>
              KELAS <span className="highlight">BIMBEL</span>
            </h1>
            <p className="hero-subtitle">
              Khusus jenjang SMA/ Sederajat kelas 10, 11, dan 12 di Bekasi Timur
              & Sekitarnya
            </p>
            <div className="hero-features">
              <div className="feature-item">
                <div className="feature-icon">📅</div>
                <div className="feature-text">
                  <div className="feature-label">Tanggal Kegiatan</div>
                  <div className="feature-value">15 - 16 November 2025</div>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⏰</div>
                <div className="feature-text">
                  <div className="feature-label">Waktu</div>
                  <div className="feature-value">10:00 - 20:00 WIB</div>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">📍</div>
                <div className="feature-text">
                  <div className="feature-label">Lokasi</div>
                  <div className="feature-value">Bekasi Timur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bimbel-main-content">
        <div className="container">
          <div className="content-layout">
            {/* Poster Section */}
            <section className="poster-section">
              {/* <div className="section-header">
                <h2>Poster Kegiatan</h2>
              </div> */}
              <div className="poster-container">
                <img
                  src="/TrialBimbelSMA.webp"
                  alt="Free Trial Bimbel SMA Cakrawala EduCentre"
                  className="bimbel-poster"
                />
              </div>
            </section>

            {/* About Section */}
            <section className="about-section">
              <div className="section-header">
                <h2>Tentang Kelas Bimbel</h2>
              </div>
              <div className="about-content">
                <p className="lead-text">
                  Program bimbingan belajar gratis khusus siswa SMA/sederajat
                  yang dirancang untuk membantu meningkatkan prestasi akademik
                  dan mempersiapkan ujian dengan metode pembelajaran yang
                  efektif dan menyenangkan.
                </p>

                <div className="objectives-grid">
                  <h3>Keunggulan Program</h3>
                  <div className="objectives-list">
                    <div className="objective-item">
                      <div className="objective-icon">🎯</div>
                      <div className="objective-text">
                        <h4>Pembelajaran Intensif</h4>
                        <p>
                          90 menit sesi pembelajaran fokus dengan materi UAS
                        </p>
                      </div>
                    </div>
                    <div className="objective-item">
                      <div className="objective-icon">💡</div>
                      <div className="objective-text">
                        <h4>Materi Lengkap</h4>
                        <p>Free modul pembelajaran + latihan soal terupdate</p>
                      </div>
                    </div>
                    <div className="objective-item">
                      <div className="objective-icon">📈</div>
                      <div className="objective-text">
                        <h4>Simulasi Ujian</h4>
                        <p>
                          Mini tryout UAS dengan kondisi seperti ujian
                          sesungguhnya
                        </p>
                      </div>
                    </div>
                    <div className="objective-item">
                      <div className="objective-icon">👨‍🏫</div>
                      <div className="objective-text">
                        <h4>Tutor Profesional</h4>
                        <p>
                          Didampingi tutor ramah, berpengalaman, dan profesional
                        </p>
                      </div>
                    </div>
                    <div className="objective-item">
                      <div className="objective-icon">❄️</div>
                      <div className="objective-text">
                        <h4>Fasilitas Nyaman</h4>
                        <p>Ruangan ber-AC untuk kenyamanan belajar maksimal</p>
                      </div>
                    </div>
                    <div className="objective-item">
                      <div className="objective-icon">🎁</div>
                      <div className="objective-text">
                        <h4>Benefit Tambahan</h4>
                        <p>Voucher daftar reguler dan konsultasi PTN gratis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Grid Section */}
            <section className="benefits-section">
              <div className="section-header">
                <h2>Benefit Kegiatan</h2>
                <p>Berbagai keuntungan yang akan kamu dapatkan</p>
              </div>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">⏱️</div>
                  <h3>90 Menit Pembelajaran</h3>
                  <p>
                    Sesi belajar intensif dengan durasi optimal untuk pemahaman
                    maksimal
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">📚</div>
                  <h3>Pembahasan Materi UAS</h3>
                  <p>
                    Fokus pada materi UAS dengan pembahasan lengkap dan
                    terstruktur
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">📝</div>
                  <h3>Free Modul + Latsol</h3>
                  <p>
                    Modul pembelajaran dan latihan soal gratis untuk persiapan
                    optimal
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🎯</div>
                  <h3>Simulasi Mini Tryout</h3>
                  <p>Pengalaman ujian nyata dengan simulasi tryout UAS</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">👨‍🏫</div>
                  <h3>Tutor Profesional</h3>
                  <p>
                    Didampingi tutor yang ramah, berpengalaman, dan kompeten
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">❄️</div>
                  <h3>Ruangan Ber-AC</h3>
                  <p>Kenyamanan belajar maksimal dengan ruangan ber-AC</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">💰</div>
                  <h3>Voucher Daftar Reguler</h3>
                  <p>Potongan khusus untuk pendaftaran program reguler</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🎓</div>
                  <h3>Konsultasi PTN</h3>
                  <p>
                    Bimbingan konsultasi untuk persiapan masuk Perguruan Tinggi
                    Negeri
                  </p>
                </div>
              </div>
            </section>

            {/* Requirements Section */}
            <section className="requirements-section">
              <div className="section-header">
                <h2>Syarat Pendaftaran</h2>
                <p>
                  Ikuti langkah-langkah berikut untuk mengikuti kelas trial
                  gratis
                </p>
              </div>
              <div className="requirements-grid">
                <div className="requirement-card">
                  <div className="card-number">1</div>
                  <h3>Follow Instagram</h3>
                  <p>
                    Follow akun Instagram Cakrawala EduCentre untuk update
                    informasi terbaru
                  </p>
                  <a
                    href="https://www.instagram.com/cakrawalaeducentre.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button outline"
                  >
                    Kunjungi Instagram
                  </a>
                </div>
                <div className="requirement-card">
                  <div className="card-number">2</div>
                  <h3>Screenshot Bukti</h3>
                  <p>
                    Ambil screenshot yang menunjukkan Anda sudah follow
                    Instagram kami
                  </p>
                </div>
                <div className="requirement-card">
                  <div className="card-number">3</div>
                  <h3>Isi Form Pendaftaran</h3>
                  <p>
                    Lengkapi data diri dan upload screenshot pada form
                    pendaftaran
                  </p>
                </div>
                <div className="requirement-card">
                  <div className="card-number">4</div>
                  <h3>Konfirmasi</h3>
                  <p>
                    Terima konfirmasi jadwal dan lokasi via WhatsApp sebelum
                    acara
                  </p>
                </div>
              </div>
            </section>

            {/* Schedule Section */}
            <section className="schedule-section">
              <div className="section-header">
                <h2>Informasi Kegiatan</h2>
              </div>
              <div className="schedule-cards">
                {/* Jadwal Kegiatan Card */}
                <div className="info-card">
                  <h3>Jadwal Kegiatan</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <span className="info-label">Hari & Tanggal</span>
                      <span className="info-value">
                        Sabtu - Minggu, 15-16 Nov 2025
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Waktu</span>
                      <span className="info-value">10:00 - 20:00 WIB</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Sesi Belajar</span>
                      <span className="info-value">90 Menit per sesi</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Biaya</span>
                      <span className="info-value highlight">Gratis</span>
                    </div>
                  </div>
                </div>

                {/* Fasilitas Card */}
                <div className="info-card">
                  <h3>Fasilitas Peserta</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <span className="info-label">Modul Belajar</span>
                      <span className="info-value">Free Modul + Latsol</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Simulasi Ujian</span>
                      <span className="info-value">Mini Tryout UAS</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Ruangan</span>
                      <span className="info-value">Ber-AC & Nyaman</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Bonus</span>
                      <span className="info-value">Voucher Reguler</span>
                    </div>
                  </div>
                </div>

                {/* Lokasi Card */}
                <div className="info-card">
                  <h3>Lokasi Kegiatan</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <span className="info-label">Alamat</span>
                      <span className="info-value">
                        Jl. Siti 2, No. 7, Komplek BKKBN
                      </span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Kecamatan</span>
                      <span className="info-value">Mustika Jaya</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Kota</span>
                      <span className="info-value">Bekasi Timur</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Kode Pos</span>
                      <span className="info-value">17510</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bimbel-cta-section">
              <div className="bimbel-cta-container">
                <h2>Siap Tingkatkan Prestasi Akademik?</h2>
                <p>
                  Daftar sekarang dan dapatkan pengalaman belajar terbaik dengan
                  berbagai benefit menarik! Free trial terbatas hanya untuk 50
                  peserta pertama.
                </p>

                {!showForm ? (
                  <div className="bimbel-cta-actions">
                    <button
                      className="bimbel-register-btn bimbel-btn-primary"
                      onClick={scrollToForm}
                    >
                      🎓 Daftar Free Trial Sekarang 🎓
                    </button>
                    <button
                      className="bimbel-whatsapp-btn bimbel-btn-outline"
                      onClick={handleWhatsApp}
                    >
                      💬 Konsultasi via WhatsApp
                    </button>
                  </div>
                ) : (
                  <div className="bimbel-form-indicator">
                    <p>
                      📋 Form pendaftaran tersedia di bawah. Silakan scroll ke
                      bawah.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Registration Form */}
            {showForm && (
              <section id="registration-form" className="registration-section">
                <div className="section-header">
                  <h2>Form Pendaftaran Free Trial</h2>
                  <p>
                    Lengkapi data berikut untuk mengikuti kelas bimbel gratis
                  </p>
                </div>

                <div className="registration-form-container">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="registration-form">
                      {error && (
                        <div className="error-message">
                          <strong>Perhatian:</strong> {error}
                        </div>
                      )}

                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="nama">Nama Lengkap Siswa *</label>
                          <input
                            type="text"
                            id="nama"
                            name="nama"
                            value={formData.nama}
                            onChange={handleInputChange}
                            required
                            placeholder="Masukkan nama lengkap"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">Alamat Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="email@contoh.com"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="whatsapp">Nomor WhatsApp *</label>
                          <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                            required
                            placeholder="08xxxxxxxxxx"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="sekolah">Nama Sekolah *</label>
                          <input
                            type="text"
                            id="sekolah"
                            name="sekolah"
                            value={formData.sekolah}
                            onChange={handleInputChange}
                            required
                            placeholder="Nama sekolah saat ini"
                            disabled={isSubmitting}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="kelas">Kelas *</label>
                          <select
                            id="kelas"
                            name="kelas"
                            value={formData.kelas}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                          >
                            <option value="">Pilih kelas</option>
                            <option value="10">Kelas 10</option>
                            <option value="11">Kelas 11</option>
                            <option value="12">Kelas 12</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="mataPelajaran">
                            Mata Pelajaran Minat *
                          </label>
                          <select
                            id="mataPelajaran"
                            name="mataPelajaran"
                            value={formData.mataPelajaran}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                          >
                            <option value="">Pilih mata pelajaran</option>
                            <option value="Matematika">Matematika</option>
                            <option value="Fisika">Fisika</option>
                            <option value="Kimia">Kimia</option>
                            <option value="Biologi">Biologi</option>
                            <option value="Bahasa Indonesia">
                              Bahasa Indonesia
                            </option>
                            <option value="Bahasa Inggris">
                              Bahasa Inggris
                            </option>
                            <option value="Ekonomi">Ekonomi</option>
                            <option value="Geografi">Geografi</option>
                            <option value="Sejarah">Sejarah</option>
                            <option value="Lainnya">Lainnya</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="sumberInfo">
                            Dapat info bimbel dari *
                          </label>
                          <select
                            id="sumberInfo"
                            name="sumberInfo"
                            value={formData.sumberInfo}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                          >
                            <option value="">Pilih sumber informasi</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Tiktok">Tiktok</option>
                            <option value="Linkedin">Linkedin</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Teman/Keluarga">
                              Teman/Keluarga
                            </option>
                            <option value="Lainnya">Lainnya</option>
                          </select>
                        </div>

                        <div className="form-group full-width">
                          <label>Upload Bukti Follow Instagram *</label>
                          <div className="file-upload-area">
                            {!screenshot ? (
                              <>
                                <input
                                  type="file"
                                  id="screenshot"
                                  accept="image/*"
                                  onChange={handleScreenshotChange}
                                  disabled={isSubmitting}
                                  className="file-input"
                                />
                                <label
                                  htmlFor="screenshot"
                                  className="file-upload-label"
                                >
                                  <span className="upload-icon">📷</span>
                                  <span>Pilih File Screenshot</span>
                                  <small>Format: JPG, PNG (maks. 5MB)</small>
                                </label>
                              </>
                            ) : (
                              <div className="file-preview">
                                <div className="preview-header">
                                  <span className="file-name">
                                    {screenshot.name}
                                  </span>
                                  <button
                                    type="button"
                                    className="remove-file"
                                    onClick={removeScreenshot}
                                    disabled={isSubmitting}
                                  >
                                    Hapus
                                  </button>
                                </div>
                                <div className="preview-image">
                                  <img
                                    src={URL.createObjectURL(screenshot)}
                                    alt="Preview screenshot"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="form-actions">
                        <button
                          type="submit"
                          className="submit-button"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Memproses..." : "Kirim Pendaftaran"}
                        </button>
                      </div>

                      <div className="form-footer">
                        <p>
                          <small>
                            Dengan mendaftar, Anda akan mendapatkan konfirmasi
                            via WhatsApp untuk informasi jadwal dan lokasi
                            lengkap. Free trial terbatas untuk 50 peserta
                            pertama.
                          </small>
                        </p>
                      </div>
                    </form>
                  ) : (
                    <div className="success-container">
                      <div className="success-icon">✓</div>
                      <h3>Pendaftaran Berhasil!</h3>
                      <p>
                        Terima kasih <strong>{formData.nama}</strong> telah
                        mendaftar free trial bimbel Cakrawala EduCentre.
                      </p>
                      <div className="success-details">
                        <p>✅ Data telah tersimpan dalam sistem</p>
                        <p>✅ Bukti screenshot telah diupload</p>
                        <p>✅ Anda akan mendapat konfirmasi via WhatsApp</p>
                        <p>✅ Free trial terbatas untuk 50 peserta pertama</p>
                      </div>
                      <div className="success-actions">
                        <button
                          className="action-button"
                          onClick={() => (window.location.href = "/")}
                        >
                          Kembali ke Beranda
                        </button>
                        <button
                          className="action-button outline"
                          onClick={handleWhatsApp}
                        >
                          Hubungi WhatsApp
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BimbelPage;
