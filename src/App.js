// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ← TAMBAH INI
import HomePage from "./components/HomePage";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import PopupIklan from "./components/PopupIklan";
import { useScrollToTop } from "./hooks/useScrollToTop";

// Import Program Pages
import SDPage from "./pages/ProgramPages/SDPage";
import SMPPage from "./pages/ProgramPages/SMPPage";
import SMAPage from "./pages/ProgramPages/SMAPage";
import MengajiPage from "./pages/ProgramPages/MengajiPage";
import MusikPage from "./pages/ProgramPages/MusikPage";
import RenangPage from "./pages/ProgramPages/RenangPage";
import CalistungPage from "./pages/ProgramPages/CalistungPage";
import CodingPage from "./pages/ProgramPages/CodingPage";
import KedinasanPage from "./pages/ProgramPages/KedinasanPage";
import BahasaInggrisPage from "./pages/ProgramPages/BahasaInggrisPage";
import BahasaJermanPage from "./pages/ProgramPages/BahasaJermanPage";
import BahasaMandarinPage from "./pages/ProgramPages/BahasaMandarinPage";
import BahasaJepangPage from "./pages/ProgramPages/BahasaJepangPage";
import TOEFLIELTSPage from "./pages/ProgramPages/TOEFLIELTSPage";
import LevelPage from "./pages/ProgramPages/LevelPage";
import TKAPage from "./pages/ProgramPages/TKAPage";
import UTBKPage from "./pages/ProgramPages/UTBKPage";
import SupercampPage from "./pages/ProgramPages/SupercampPage";
import MasukSMAPage from "./pages/ProgramPages/MasukSMAPage";
import BimbelPage from "./pages/ProgramPages/BimbelPage";
import PelatihanKerjaPage from "./pages/ProgramPages/PelatihanKerjaPage";
import LesSimakPage from "./pages/ProgramPages/LesSimakPage";
import BimbinganSkripsiPage from "./pages/ProgramPages/BimbinganSkripsiPage";
import UjianMandiripage from "./pages/ProgramPages/UjianMandiripage";
import ShadowTeacherPage from "./pages/ProgramPages/ShadowTeacherPage";

// Import Free Trial Bimbel Page
import FreeTrialBimbelPage from "./pages/BimbelPage/BimbelPage";

// Import Other Pages
import TentangKami from "./components/TentangKami";
import BiayaPage from "./components/BiayaPage";
import BiayaBimbelPage from "./components/BiayaBimbelPage";
import BiayaBalaiPage from "./components/BiayaBalaiPage";
import DaftarPage from "./components/DaftarPage";
import BiayaSkripsiPage from "./components/BiayaSkripsiPage";
import CakraKarir from "./components/CakraKarir";

// Import Blog Components
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";

// Import Layout Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Component untuk scroll to top wrapper
const ScrollToTopWrapper = ({ children }) => {
  useScrollToTop();
  return children;
};

// Component untuk halaman public dengan header & footer
const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

// Component untuk redirect eksternal dengan opsi
const ExternalRedirect = ({ to }) => {
  const [showOptions, setShowOptions] = React.useState(true);

  const handleNewTab = () => {
    window.open(to, "_blank");
    setShowOptions(false);
  };

  const handleSameTab = () => {
    window.location.href = to;
  };

  const handleCancel = () => {
    window.history.back();
  };

  if (!showOptions) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: "20px",
          background: "#f5f5f5",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#333", marginBottom: "15px" }}>
            Membuka Cakra Belajar...
          </h3>
          <p style={{ color: "#666", marginBottom: "20px" }}>
            Tab baru telah dibuka. Anda bisa kembali ke halaman ini kapan saja.
          </p>
          <button
            onClick={handleCancel}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Kembali ke Halaman Sebelumnya
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "500px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#333",
            marginBottom: "20px",
            fontSize: "24px",
          }}
        >
          Buka Cakra Belajar
        </h3>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
            lineHeight: "1.5",
          }}
        >
          Pilih cara membuka platform Cakra Belajar:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={handleNewTab}
            style={{
              padding: "15px 20px",
              backgroundColor: "#2ecc71",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#27ae60")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#2ecc71")}
          >
            📖 Buka di Tab Baru (Rekomendasi)
          </button>

          <button
            onClick={handleSameTab}
            style={{
              padding: "15px 20px",
              backgroundColor: "#3498db",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
          >
            🔄 Buka di Tab Ini
          </button>
        </div>

        <button
          onClick={handleCancel}
          style={{
            padding: "10px 20px",
            backgroundColor: "transparent",
            color: "#666",
            border: "1px solid #ddd",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Batalkan
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <HelmetProvider> {/* ← WRAP SEMUA DENGAN INI */}
      <Router>
        <div className="App">
          {/* WhatsApp Floating Button - GLOBAL */}
          <WhatsAppFloatingButton />

          {/* Popup Iklan - GLOBAL */}
          <PopupIklan />

          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <HomePage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />

            {/* Program Routes */}
            <Route
              path="/program/sd"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <SDPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/smp"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <SMPPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/sma"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <SMAPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/mengaji"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <MengajiPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/musik"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <MusikPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/renang"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <RenangPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />

            {/* Program Khusus */}
            <Route
              path="/program/calistung"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <CalistungPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/coding"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <CodingPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/kedinasan"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <KedinasanPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/bahasainggris"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <BahasaInggrisPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/bahasajerman"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <BahasaJermanPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/bahasamandarin"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <BahasaMandarinPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/bahasajepang"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <BahasaJepangPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />

            {/* Persiapan Tes */}
            <Route
              path="/program/toefl"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <TOEFLIELTSPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/level"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <LevelPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/tka"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <TKAPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/utbk"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <UTBKPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/supercamp"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <SupercampPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/masuk-sma"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <MasukSMAPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/pelatihan-kerja"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <PelatihanKerjaPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/lessimak-ujianmandiri"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <LesSimakPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/bimbingan-skripsi"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <BimbinganSkripsiPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/ujian-mandiri"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <UjianMandiripage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/program/shadow-teacher"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <ShadowTeacherPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />

            {/* Bimbel Routes */}
            <Route
              path="/bimbel"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <BimbelPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/free-trial-bimbel"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <FreeTrialBimbelPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />

            {/* Blog Routes */}
            <Route
              path="/blog"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <BlogList />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/blog/:slug"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <BlogDetail />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />

            {/* Other Routes */}
            <Route
              path="/tentang-kami"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <TentangKami />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />

            {/* Biaya Routes */}
            <Route
              path="/biaya-les"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <BiayaPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/biaya-les-bimbel"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <BiayaBimbelPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />

            <Route
              path="/cakrakarir"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <CakraKarir />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/biaya-balai"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <BiayaBalaiPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />
            <Route
              path="/biaya-skripsi"
              element={
                <PublicLayout>
                  <BiayaSkripsiPage />
                </PublicLayout>
              }
            />

            {/* Redirect cakrabelajar ke link eksternal */}
            <Route
              path="/cakrabelajar"
              element={
                <ExternalRedirect to="https://cakrawalaeducentre.isch.id/" />
              }
            />

            <Route
              path="/daftar"
              element={
                <ScrollToTopWrapper>
                  <PublicLayout>
                    <DaftarPage />
                  </PublicLayout>
                </ScrollToTopWrapper>
              }
            />

            {/* 404 Page - Fallback */}
            <Route
              path="*"
              element={
                <PublicLayout>
                  <div
                    style={{
                      textAlign: "center",
                      padding: "100px 20px",
                      minHeight: "60vh",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "4rem",
                        marginBottom: "20px",
                        color: "#3498db",
                      }}
                    >
                      404
                    </h1>
                    <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>
                      Halaman Tidak Ditemukan
                    </h2>
                    <p
                      style={{
                        marginBottom: "30px",
                        color: "#7f8c8d",
                        maxWidth: "500px",
                      }}
                    >
                      Maaf, halaman yang Anda cari tidak ditemukan. Silakan
                      periksa URL atau kembali ke halaman utama.
                    </p>
                    <a
                      href="/"
                      style={{
                        padding: "12px 30px",
                        backgroundColor: "#3498db",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "6px",
                        fontWeight: "600",
                      }}
                    >
                      Kembali ke Home
                    </a>
                  </div>
                </PublicLayout>
              }
            />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;