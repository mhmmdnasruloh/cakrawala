import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./DaftarPage.css";

// Komponen Time Picker dengan Arrow Controls yang diperbaiki
const AdvancedTimePicker = ({ selectedTime, onTimeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState(7);
  const [minutes, setMinutes] = useState(0);
  const [ampm, setAmpm] = useState("AM");

  // Parse selected time ketika komponen mount atau selectedTime berubah
  useEffect(() => {
    if (selectedTime) {
      const [time, modifier] = selectedTime.split(" ");
      const [parsedHours, parsedMinutes] = time.split(":");

      setHours(parseInt(parsedHours));
      setMinutes(parseInt(parsedMinutes));
      setAmpm(modifier || "AM");
    }
  }, [selectedTime]);

  const updateTime = (h, m, a) => {
    const formattedHours = h.toString().padStart(2, "0");
    const formattedMinutes = m.toString().padStart(2, "0");
    const time = `${formattedHours}:${formattedMinutes} ${a}`;
    onTimeChange(time);
  };

  // Handler untuk arrow controls dengan preventDefault
  const incrementHours = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newHours = hours === 12 ? 1 : hours + 1;
    setHours(newHours);
    updateTime(newHours, minutes, ampm);
  };

  const decrementHours = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newHours = hours === 1 ? 12 : hours - 1;
    setHours(newHours);
    updateTime(newHours, minutes, ampm);
  };

  const incrementMinutes = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newMinutes = minutes === 59 ? 0 : minutes + 1;
    setMinutes(newMinutes);
    updateTime(hours, newMinutes, ampm);
  };

  const decrementMinutes = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newMinutes = minutes === 0 ? 59 : minutes - 1;
    setMinutes(newMinutes);
    updateTime(hours, newMinutes, ampm);
  };

  const toggleAmPm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newAmpm = ampm === "AM" ? "PM" : "AM";
    setAmpm(newAmpm);
    updateTime(hours, minutes, newAmpm);
  };

  const handleHoursChange = (e) => {
    e.stopPropagation();
    const newHours = parseInt(e.target.value);
    setHours(newHours);
    updateTime(newHours, minutes, ampm);
  };

  const handleMinutesChange = (e) => {
    e.stopPropagation();
    const newMinutes = parseInt(e.target.value);
    setMinutes(newMinutes);
    updateTime(hours, newMinutes, ampm);
  };

  const handleAmPmChange = (e) => {
    e.stopPropagation();
    const newAmpm = e.target.value;
    setAmpm(newAmpm);
    updateTime(hours, minutes, newAmpm);
  };

  const handleTimeDisplayClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleModalClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleOverlayClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  const formatDisplayTime = () => {
    if (!selectedTime) return "Pilih Waktu";
    return selectedTime;
  };

  return (
    <div className="time-picker-container">
      <div className="time-display" onClick={handleTimeDisplayClick}>
        {formatDisplayTime()}
        <span className="time-picker-arrow">⌄</span>
      </div>

      {isOpen && (
        <>
          <div className="modal-overlay" onClick={handleOverlayClick}></div>
          <div className="advanced-time-picker-modal">
            <div className="time-picker-header">
              <h4>Pilih Waktu</h4>
              <button className="time-picker-close" onClick={handleModalClose}>
                ✓
              </button>
            </div>

            <div className="time-picker-body">
              <div className="time-wheel-container">
                {/* Hours Wheel dengan Arrow Controls */}
                <div className="time-wheel">
                  <div className="wheel-label">JAM</div>
                  <div className="wheel-controls">
                    <button
                      className="wheel-arrow up"
                      onClick={incrementHours}
                      type="button"
                    >
                      ↑
                    </button>
                    <select
                      className="time-select"
                      value={hours}
                      onChange={handleHoursChange}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(
                        (hour) => (
                          <option key={hour} value={hour}>
                            {hour.toString().padStart(2, "0")}
                          </option>
                        )
                      )}
                    </select>
                    <button
                      className="wheel-arrow down"
                      onClick={decrementHours}
                      type="button"
                    >
                      ↓
                    </button>
                  </div>
                </div>

                <div className="time-separator">:</div>

                {/* Minutes Wheel dengan Arrow Controls */}
                <div className="time-wheel">
                  <div className="wheel-label">MENIT</div>
                  <div className="wheel-controls">
                    <button
                      className="wheel-arrow up"
                      onClick={incrementMinutes}
                      type="button"
                    >
                      ↑
                    </button>
                    <select
                      className="time-select"
                      value={minutes}
                      onChange={handleMinutesChange}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                        <option key={minute} value={minute}>
                          {minute.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                    <button
                      className="wheel-arrow down"
                      onClick={decrementMinutes}
                      type="button"
                    >
                      ↓
                    </button>
                  </div>
                </div>

                {/* AM/PM Wheel dengan Arrow Controls */}
                <div className="time-wheel">
                  <div className="wheel-label">&nbsp;</div>
                  <div className="wheel-controls">
                    <button
                      className="wheel-arrow up"
                      onClick={toggleAmPm}
                      type="button"
                    >
                      ↑
                    </button>
                    <select
                      className="time-select ampm"
                      value={ampm}
                      onChange={handleAmPmChange}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                    <button
                      className="wheel-arrow down"
                      onClick={toggleAmPm}
                      type="button"
                    >
                      ↓
                    </button>
                  </div>
                </div>
              </div>

              {/* Current Time Display */}
              <div className="current-time-display">
                <span className="current-time">
                  {hours.toString().padStart(2, "0")}:
                  {minutes.toString().padStart(2, "0")} {ampm}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Komponen Popup Konfirmasi
const ConfirmationPopup = ({
  isOpen,
  onClose,
  onCopyData,
  onCancel,
  formData,
  programData,
  packageOptions,
}) => {
  const [dataCopied, setDataCopied] = useState(false);

  if (!isOpen) return null;

  const formatScheduleForDisplay = () => {
    return Object.entries(formData.preferredSchedule)
      .filter(([day, time]) => time)
      .map(([day, time]) => `${day} ${time}`)
      .join(", ");
  };

  const getDisplayPrice = () => {
    return programData.price || "Hubungi kami untuk informasi harga";
  };

  const handleCopyData = () => {
    const selectedPrice =
      programData.price || "Hubungi kami untuk informasi harga";

    // Tentukan jenis program untuk format pesan
    let programType = "les privat";
    if (programData.program === "supercamp") {
      programType = "SuperCamp";
    } else if (programData.program === "masuk-sma") {
      programType = "Program Persiapan MAN IC";
    } else if (programData.curriculum === "bimbel") {
      programType = "Bimbel Kelompok";
    }

    const whatsappMessage = `Halo, saya ingin mendaftar ${programType} dengan detail sebagai berikut:

${
  programData.program === "supercamp"
    ? "SUPERCAMP REGISTRATION"
    : programData.program === "masuk-sma"
    ? "PROGRAM MAN IC REGISTRATION"
    : programData.curriculum === "bimbel"
    ? "BIMBEL REGISTRATION"
    : "DATA SISWA"
}
Nama: ${formData.studentName}
Usia: ${formData.studentAge} tahun
Kelas: ${formData.studentGrade}
Sekolah: ${formData.studentSchool}
Catatan Khusus: ${formData.studentNeeds}

${
  programData.program === "supercamp"
    ? "SUPERCAMP DETAILS"
    : programData.program === "masuk-sma"
    ? "PROGRAM MAN IC DETAILS"
    : programData.curriculum === "bimbel"
    ? "BIMBEL DETAILS"
    : "DATA ORANG TUA"
}
Program: ${programData.programTitle || formData.selectedProgram}
Paket: ${programData.packageTitle || packageOptions[formData.selectedPackage]}
Harga: ${selectedPrice}
${programData.description ? `Deskripsi: ${programData.description}` : ""}
${programData.features ? `Fasilitas: ${programData.features.join(", ")}` : ""}
${formData.referralCode ? `Kode Referral: ${formData.referralCode}` : ""}

${
  programData.program === "supercamp"
    ? "CONTACT INFORMATION"
    : programData.program === "masuk-sma"
    ? "CONTACT INFORMATION"
    : programData.curriculum === "bimbel"
    ? "CONTACT INFORMATION"
    : "DATA ORANG TUA"
}
Nama: ${formData.parentName}
WhatsApp: ${formData.parentPhone}
Email: ${formData.parentEmail}
Hubungan: ${formData.parentRelationship}

${
  programData.program === "supercamp"
    ? "ADDITIONAL INFO"
    : programData.program === "masuk-sma"
    ? "PROGRAM DETAILS"
    : programData.curriculum === "bimbel"
    ? "BIMBEL DETAILS"
    : "PROGRAM & JADWAL"
}
${
  formData.selectedCurriculum ? `Kurikulum: ${formData.selectedCurriculum}` : ""
}
${
  formData.selectedSubProgram ? `Tingkatan: ${formData.selectedSubProgram}` : ""
}
Metode: ${
      programData.program === "supercamp"
        ? "Offline (Program Camp)"
        : programData.program === "masuk-sma"
        ? programData.learningMethod === "offline"
          ? "Offline"
          : "Online"
        : programData.curriculum === "bimbel"
        ? "Offline (Kelas Kelompok)"
        : formData.learningMethod
    }
Alamat: ${formData.address}
${formatScheduleForDisplay() ? `Jadwal: ${formatScheduleForDisplay()}` : ""}
Catatan Tambahan: ${formData.specialNotes || "-"}

Saya telah mengisi formulir pendaftaran di website dan menunggu konfirmasi lebih lanjut.`;

    navigator.clipboard
      .writeText(whatsappMessage)
      .then(() => {
        setDataCopied(true);
        window.alert(
          "✅ Data berhasil disalin ke clipboard!\n\nSekarang Anda bisa membuka WhatsApp dan mengirim data ini."
        );
        onCopyData();
      })
      .catch(() => {
        // Fallback untuk browser yang tidak support clipboard
        const textArea = document.createElement("textarea");
        textArea.value = whatsappMessage;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setDataCopied(true);
        window.alert(
          "✅ Data berhasil disalin ke clipboard!\n\nSekarang Anda bisa membuka WhatsApp dan mengirim data ini."
        );
        onCopyData();
      });
  };

  const handleOpenWhatsApp = () => {
    if (!dataCopied) {
      window.alert(
        "⚠️ Silakan salin data terlebih dahulu sebelum membuka WhatsApp."
      );
      return;
    }

    const phoneNumber = "6281324868790";
    let programType = "les privat";
    if (programData.program === "supercamp") {
      programType = "SuperCamp";
    } else if (programData.program === "masuk-sma") {
      programType = "Program Persiapan MAN IC";
    } else if (programData.curriculum === "bimbel") {
      programType = "Bimbel Kelompok";
    }

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo,%20saya%20telah%20mengisi%20formulir%20pendaftaran%20${programType}%20dan%20telah%20menyalin%20data%20pendaftaran.%20Saya%20akan%20mengirimkan%20data%20tersebut%20melalui%20pesan%20ini.&app_absent=0`;

    // Buka WhatsApp
    window.open(whatsappUrl, "_blank");

    // Tutup popup setelah membuka WhatsApp
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="popup-overlay">
      <div className="confirmation-popup">
        <div className="popup-header">
          <h2>Konfirmasi Pengiriman Data</h2>
          <button className="popup-close" onClick={handleCancel}>
            ×
          </button>
        </div>

        <div className="popup-content">
          <div className="popup-message">
            <p>
              Untuk melanjutkan pendaftaran, silakan ikuti langkah-langkah
              berikut:
            </p>
            <ol>
              <li>
                Salin data pendaftaran dengan menekan tombol{" "}
                <strong>"Salin Data"</strong>
              </li>
              <li>
                Setelah data berhasil disalin, tombol{" "}
                <strong>"Buka WhatsApp"</strong> akan aktif
              </li>
              <li>Buka WhatsApp dan paste data yang telah disalin</li>
              <li>
                Kirim pesan ke nomor: <strong>+62 813-2486-8790</strong>
              </li>
            </ol>
          </div>

          <div className="data-preview">
            <h4>Preview Data yang Akan Dikirim:</h4>
            <div className="preview-content">
              <p>
                <strong>Nama Siswa:</strong> {formData.studentName}
              </p>
              <p>
                <strong>Program:</strong>{" "}
                {programData.programTitle || formData.selectedProgram}
              </p>
              <p>
                <strong>Paket:</strong>{" "}
                {programData.packageTitle ||
                  packageOptions[formData.selectedPackage]}
              </p>
              <p>
                <strong>Harga:</strong> {getDisplayPrice()}
              </p>
              {programData.description && (
                <p>
                  <strong>Deskripsi:</strong> {programData.description}
                </p>
              )}
              {programData.features && (
                <p>
                  <strong>Fasilitas:</strong> {programData.features.join(", ")}
                </p>
              )}
              {formData.referralCode && (
                <p>
                  <strong>Kode Referral:</strong> {formData.referralCode}
                </p>
              )}
              {formatScheduleForDisplay() && (
                <p>
                  <strong>Jadwal:</strong> {formatScheduleForDisplay()}
                </p>
              )}
            </div>
          </div>

          <div className="popup-status">
            {dataCopied ? (
              <div className="status-success">
                ✅ <strong>Data berhasil disalin!</strong> Sekarang Anda bisa
                membuka WhatsApp.
              </div>
            ) : (
              <div className="status-waiting">
                ⚠️ <strong>Data belum disalin.</strong> Silakan salin data
                terlebih dahulu.
              </div>
            )}
          </div>
        </div>

        <div className="popup-actions">
          <button
            className={`btn-copy-data ${dataCopied ? "copied" : ""}`}
            onClick={handleCopyData}
          >
            {dataCopied ? "✅ Data Tersalin" : "📋 Salin Data"}
          </button>

          <button
            className={`btn-open-whatsapp ${
              dataCopied ? "active" : "disabled"
            }`}
            onClick={handleOpenWhatsApp}
            disabled={!dataCopied}
          >
            💬 Buka WhatsApp
          </button>

          <button className="btn-cancel" onClick={handleCancel}>
            ❌ Batalkan
          </button>
        </div>

        <div className="popup-footer">
          <p>
            <small>
              Pastikan WhatsApp terinstal di perangkat Anda sebelum melanjutkan.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

const DaftarPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [dataReadyForWhatsApp, setDataReadyForWhatsApp] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Data Siswa
    studentName: "",
    studentAge: "",
    studentGrade: "",
    studentSchool: "",
    studentNeeds: "",

    // Step 2: Data Orang Tua
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    parentRelationship: "",

    // Step 3: Program & Jadwal
    selectedCurriculum: "",
    selectedProgram: "",
    selectedSubProgram: "",
    selectedPackage: "",
    preferredSchedule: {},
    learningLocation: "",
    address: "",
    referralCode: "", // Tambahan field kode referral

    // Step 4: Metode Pembelajaran
    learningMethod: "offline",
    hasTrial: false,
    specialNotes: "",
  });

  // State untuk validasi
  const [validationErrors, setValidationErrors] = useState({});

  // Data dari halaman biaya atau program lain
  const programData = location.state?.programData || {};
  const [gradeOptions, setGradeOptions] = useState([]);

  // Days options (Senin - Jumat)
  const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

  // Package options untuk program reguler
  const packageOptions = {
    "8-sesi": "8 x Sesi (1 Bulan) - Paket Bulanan",
    "12-sesi": "12 x Sesi (1.5 Bulan) - Paket Diskon",
    "48-sesi": "48 x Sesi (6 Bulan) - Paket Semester",
    "96-sesi": "96 x Sesi (12 Bulan) - Paket Tahunan",
  };

  // Package options khusus untuk SuperCamp - 4 PAKET
  const supercampPackageOptions = {
    horisons: "PAKET HORISONS - 6 siswa per kelas (tanpa menginap)",
    galaxi: "PAKET GALAXI (VIP ROOM) - 6 siswa per kelas (menginap)",
    universe: "PAKET UNIVERSE (VVIP ROOM) - 1 siswa 1 pengajar (menginap)",
    medical: "PAKET MEDICAL - FK PTN TOP 10 (menginap)",
  };

  // Package options khusus untuk Masuk SMA
  const masukSmaPackageOptions = {
    "offline-group": "OFFLINE CLASS - Kelas Tatap Muka (JABODETABEK)",
    "online-group": "ONLINE CLASS - Kelas Jarak Jauh (se Indonesia)",
  };

  // Package options khusus untuk Bimbel
  const bimbelPackageOptions = {
    "12-sesi": "12 x Sesi (1 Bulan) - Paket Reguler Bimbel",
  };

  // Fungsi untuk mendapatkan grade options berdasarkan program
  const getGradeOptionsByProgram = (programTitle) => {
    const program = programTitle?.toLowerCase() || "";

    if (program.includes("supercamp")) {
      return ["SMA 12"];
    }

    if (program.includes("masuk sma") || program.includes("man ic")) {
      return ["SMP 9", "SMP 3"];
    }

    // Untuk program bimbel
    if (program.includes("bimbel")) {
      if (program.includes("tka") || program.includes("tk")) {
        return ["TK A", "TK B", "Pra-SD"];
      }
      if (program.includes("sd")) {
        return ["SD 1-3", "SD 4-6"];
      }
      if (program.includes("smp")) {
        return ["SMP 1-2", "SMP 3"];
      }
      if (program.includes("sma")) {
        return ["SMA 1-2", "SMA 3"];
      }
    }

    if (program.includes("sd") || program.includes("sekolah dasar")) {
      return ["SD 1-3", "SD 4-6"];
    }

    if (
      program.includes("smp") ||
      program.includes("sekolah menengah pertama")
    ) {
      return ["SMP 1-2", "SMP 3"];
    }

    if (program.includes("sma") || program.includes("sekolah menengah atas")) {
      return ["SMA 1-2", "SMA 3"];
    }

    if (
      program.includes("mengaji") ||
      program.includes("musik") ||
      program.includes("renang") ||
      program.includes("coding") ||
      program.includes("tka")
    ) {
      return ["SD", "SMP", "SMA"];
    }

    if (program.includes("calistung") || program.includes("level test")) {
      return ["Calistung"];
    }

    if (program.includes("kedinasan")) {
      return ["SMP"];
    }

    if (program.includes("utbk")) {
      return ["SMA"];
    }

    if (
      program.includes("bahasa inggris") ||
      program.includes("bahasa jerman") ||
      program.includes("bahasa mandarin") ||
      program.includes("bahasa jepang") ||
      program.includes("toefl") ||
      program.includes("ielts")
    ) {
      return ["SD", "SMP", "SMA", "Mahasiswa"];
    }

    // Default options
    return [
      "TK",
      "SD 1",
      "SD 2",
      "SD 3",
      "SD 4",
      "SD 5",
      "SD 6",
      "SMP 7",
      "SMP 8",
      "SMP 9",
      "SMA 10",
      "SMA 11",
      "SMA 12",
      "Mahasiswa",
      "Umum",
    ];
  };

  useEffect(() => {
    // Pre-fill data dari halaman biaya atau program lain jika ada
    if (programData.program) {
      const gradeOptionsForProgram = getGradeOptionsByProgram(
        programData.programTitle
      );

      setFormData((prev) => ({
        ...prev,
        selectedCurriculum:
          programData.curriculumTitle ||
          (programData.program === "masuk-sma"
            ? "Persiapan MAN IC"
            : programData.program === "supercamp"
            ? "SuperCamp"
            : programData.curriculum === "bimbel"
            ? "Bimbel Kelompok"
            : "Reguler"),
        selectedProgram:
          programData.programTitle ||
          (programData.program === "masuk-sma"
            ? "Program Intensif Persiapan Masuk MAN IC"
            : programData.program === "supercamp"
            ? "SuperCamp Persiapan SNBT UTBK"
            : ""),
        selectedSubProgram: programData.subProgramTitle || "",
        selectedPackage: programData.package || "",
        learningMethod:
          programData.learningMethod ||
          (programData.program === "supercamp"
            ? "offline"
            : programData.program === "masuk-sma"
            ? programData.learningMethod
            : programData.curriculum === "bimbel"
            ? "offline"
            : prev.learningMethod),
        address:
          programData.program === "supercamp"
            ? "Atlanta Residence, Jl. Margonda Raya No.28 Kel, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424"
            : programData.curriculum === "bimbel"
            ? "Jl. Siti 2 No.07 RT 002/008, Ciketing, Mustika Jaya, Bekasi Timur"
            : prev.address,
        studentGrade:
          gradeOptionsForProgram.length === 1
            ? gradeOptionsForProgram[0]
            : prev.studentGrade,
      }));

      // Set grade options berdasarkan program
      setGradeOptions(gradeOptionsForProgram);
    }
  }, [programData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear validation error ketika user mulai mengetik
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleDaySelection = (day) => {
    setFormData((prev) => ({
      ...prev,
      preferredSchedule: {
        ...prev.preferredSchedule,
        [day]: prev.preferredSchedule[day] || "07:00 AM",
      },
    }));
  };

  const handleTimeChange = (day, time) => {
    setFormData((prev) => ({
      ...prev,
      preferredSchedule: {
        ...prev.preferredSchedule,
        [day]: time,
      },
    }));
  };

  const removeDaySchedule = (day) => {
    const newSchedule = { ...formData.preferredSchedule };
    delete newSchedule[day];
    setFormData((prev) => ({
      ...prev,
      preferredSchedule: newSchedule,
    }));
  };

  // Validasi untuk setiap step
  const validateStep = (step) => {
    const errors = {};

    switch (step) {
      case 1:
        if (!formData.studentName.trim()) {
          errors.studentName = "Nama siswa wajib diisi";
        }
        if (!formData.studentAge) {
          errors.studentAge = "Usia siswa wajib diisi";
        } else if (formData.studentAge < 3 || formData.studentAge > 25) {
          errors.studentAge = "Usia harus antara 3-25 tahun";
        }
        if (!formData.studentGrade) {
          errors.studentGrade = "Kelas wajib dipilih";
        }
        if (!formData.studentSchool.trim()) {
          errors.studentSchool = "Nama sekolah wajib diisi";
        }
        if (!formData.studentNeeds.trim()) {
          errors.studentNeeds = "Catatan khusus wajib diisi";
        }
        break;

      case 2:
        if (!formData.parentName.trim()) {
          errors.parentName = "Nama orang tua/wali wajib diisi";
        }
        if (!formData.parentPhone.trim()) {
          errors.parentPhone = "Nomor WhatsApp wajib diisi";
        } else if (
          !/^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(
            formData.parentPhone.replace(/\s/g, "")
          )
        ) {
          errors.parentPhone = "Format nomor WhatsApp tidak valid";
        }
        if (!formData.parentEmail.trim()) {
          errors.parentEmail = "Email wajib diisi";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail)) {
          errors.parentEmail = "Format email tidak valid";
        }
        if (!formData.parentRelationship) {
          errors.parentRelationship = "Hubungan dengan siswa wajib dipilih";
        }
        break;

      case 3:
        // Untuk SuperCamp, Masuk SMA, dan Bimbel, package sudah dipilih dari halaman sebelumnya
        if (
          !programData.program &&
          !programData.curriculum &&
          !formData.selectedPackage
        ) {
          errors.selectedPackage = "Paket belajar wajib dipilih";
        }
        if (!formData.address.trim()) {
          errors.address = "Alamat lengkap wajib diisi";
        }
        // Validasi kode referral (opsional, jadi tidak perlu validasi khusus)

        // Untuk program reguler, validasi jadwal masih diperlukan
        if (!programData.program && !programData.curriculum) {
          const selectedDays = Object.keys(formData.preferredSchedule).filter(
            (day) => formData.preferredSchedule[day]
          );
          if (selectedDays.length === 0) {
            errors.preferredSchedule =
              "Pilih setidaknya satu hari untuk jadwal belajar";
          }
        }
        break;

      case 4:
        // Validasi terms agreement
        const termsCheckbox = document.querySelector('input[type="checkbox"]');
        if (!termsCheckbox?.checked) {
          errors.terms = "Anda harus menyetujui syarat dan ketentuan";
        }
        break;

      default:
        break;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    } else {
      // Scroll ke atas untuk melihat error
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    // Clear errors ketika kembali
    setValidationErrors({});
  };

  const handleShowConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setDataReadyForWhatsApp(false);
  };

  const handleDataCopied = () => {
    setDataReadyForWhatsApp(true);
  };

  const handleCancelRegistration = () => {
    setShowConfirmation(false);
    setDataReadyForWhatsApp(false);
    // Kembali ke halaman home
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi semua step sebelum submit
    let allStepsValid = true;
    for (let step = 1; step <= 4; step++) {
      if (!validateStep(step)) {
        allStepsValid = false;
        break;
      }
    }

    if (!allStepsValid) {
      window.alert(
        "❌ Silakan lengkapi semua data yang wajib diisi dengan benar sebelum mendaftar."
      );
      return;
    }

    // Konfirmasi final sebelum menampilkan popup
    const confirmSubmit = window.confirm(
      "✅ Apakah Anda yakin data yang diisi sudah benar?\n\nData akan dikirim melalui WhatsApp untuk konfirmasi akhir."
    );

    if (!confirmSubmit) {
      return;
    }

    // Simpan data ke localStorage
    const submissionData = {
      ...formData,
      programData: programData,
      submittedAt: new Date().toISOString(),
    };

    localStorage.setItem("lastRegistration", JSON.stringify(submissionData));

    // Tampilkan popup konfirmasi
    handleShowConfirmation();
  };

  // Generate dynamic grade options based on program
  const getGradeSelectOptions = () => {
    if (gradeOptions.length === 0) {
      return (
        <>
          <option value="">Pilih kelas/tingkat *</option>
          <option value="TK">TK</option>
          <option value="SD 1">SD Kelas 1</option>
          <option value="SD 2">SD Kelas 2</option>
          <option value="SD 3">SD Kelas 3</option>
          <option value="SD 4">SD Kelas 4</option>
          <option value="SD 5">SD Kelas 5</option>
          <option value="SD 6">SD Kelas 6</option>
          <option value="SMP 7">SMP Kelas 7</option>
          <option value="SMP 8">SMP Kelas 8</option>
          <option value="SMP 9">SMP Kelas 9</option>
          <option value="SMA 10">SMA Kelas 10</option>
          <option value="SMA 11">SMA Kelas 11</option>
          <option value="SMA 12">SMA Kelas 12</option>
          <option value="Mahasiswa">Mahasiswa</option>
          <option value="Umum">Umum</option>
        </>
      );
    }

    return (
      <>
        <option value="">
          Pilih {programData.programTitle || "tingkat"} *
        </option>
        {gradeOptions.map((grade, index) => (
          <option key={index} value={grade}>
            {grade}
          </option>
        ))}
      </>
    );
  };

  // Format schedule for display
  const formatScheduleForDisplay = () => {
    return Object.entries(formData.preferredSchedule)
      .filter(([day, time]) => time)
      .map(([day, time]) => `${day} ${time}`)
      .join(", ");
  };

  // Dapatkan harga untuk ditampilkan di UI - GUNAKAN HARGA DARI programData
  const getDisplayPrice = () => {
    return programData.price || "Hubungi kami untuk informasi harga";
  };

  // Check jika ini adalah pendaftaran SuperCamp
  const isSuperCamp = programData.program === "supercamp";
  // Check jika ini adalah pendaftaran Masuk SMA
  const isMasukSMA = programData.program === "masuk-sma";
  // Check jika ini adalah pendaftaran Bimbel
  const isBimbel = programData.curriculum === "bimbel";

  // Dapatkan opsi package yang sesuai
  const getPackageOptions = () => {
    if (isSuperCamp) {
      return supercampPackageOptions;
    } else if (isMasukSMA) {
      return masukSmaPackageOptions;
    } else if (isBimbel) {
      return bimbelPackageOptions;
    } else {
      return packageOptions;
    }
  };

  // Dapatkan teks judul berdasarkan jenis program
  const getPageTitle = () => {
    if (isSuperCamp) {
      return "Daftar SuperCamp";
    } else if (isMasukSMA) {
      return "Daftar Program Persiapan MAN IC";
    } else if (isBimbel) {
      return "Daftar Bimbel Kelompok";
    } else {
      return "Daftar Les Privat";
    }
  };

  // Dapatkan teks subtitle berdasarkan jenis program
  const getPageSubtitle = () => {
    if (isSuperCamp) {
      return "Isi formulir berikut untuk mendaftar program SuperCamp intensif.";
    } else if (isMasukSMA) {
      return "Isi formulir berikut untuk mendaftar program persiapan masuk MAN IC.";
    } else if (isBimbel) {
      return "Isi formulir berikut untuk mendaftar program bimbel kelompok.";
    } else {
      return "Isi formulir berikut untuk mendaftar program les privat.";
    }
  };

  return (
    <div className="homepage">
      <div className="daftar-page">
        <div className="daftar-container">
          {/* Header */}
          <div className="daftar-header">
            <h1 className="daftar-title">{getPageTitle()}</h1>
            <p className="daftar-subtitle">
              {getPageSubtitle()}
              <span className="required-note">
                {" "}
                Field bertanda * wajib diisi.
              </span>
            </p>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar">
            <div className="progress-steps">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`progress-step ${
                    currentStep >= step ? "active" : ""
                  }`}
                >
                  <div className="step-number">{step}</div>
                  <div className="step-label">
                    {step === 1 && "Data Siswa"}
                    {step === 2 && "Data Orang Tua"}
                    {step === 3 && "Program & Jadwal"}
                    {step === 4 && "Konfirmasi"}
                  </div>
                </div>
              ))}
            </div>
            <div className="progress-line">
              <div
                className="progress-fill"
                style={{ width: `${(currentStep - 1) * 33.33}%` }}
              ></div>
            </div>
          </div>

          {/* Validation Summary */}
          {Object.keys(validationErrors).length > 0 && (
            <div className="validation-summary">
              <div className="validation-header">
                ⚠️ Silakan perbaiki data berikut:
              </div>
              <ul className="validation-errors">
                {Object.entries(validationErrors).map(([field, error]) => (
                  <li key={field}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={handleSubmit} className="daftar-form">
            {/* Step 1: Data Siswa */}
            {currentStep === 1 && (
              <div className="form-step">
                <h2>Data Siswa</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Nama Lengkap Siswa *</label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      required
                      placeholder="Masukkan nama lengkap siswa"
                      className={validationErrors.studentName ? "error" : ""}
                    />
                    {validationErrors.studentName && (
                      <span className="error-message">
                        {validationErrors.studentName}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Usia Siswa *</label>
                    <input
                      type="number"
                      name="studentAge"
                      value={formData.studentAge}
                      onChange={handleInputChange}
                      required
                      placeholder="Contoh: 12"
                      min="3"
                      max="25"
                      className={validationErrors.studentAge ? "error" : ""}
                    />
                    {validationErrors.studentAge && (
                      <span className="error-message">
                        {validationErrors.studentAge}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Kelas / Tingkat *</label>
                    <select
                      name="studentGrade"
                      value={formData.studentGrade}
                      onChange={handleInputChange}
                      required
                      className={validationErrors.studentGrade ? "error" : ""}
                    >
                      {getGradeSelectOptions()}
                    </select>
                    {validationErrors.studentGrade && (
                      <span className="error-message">
                        {validationErrors.studentGrade}
                      </span>
                    )}
                    {gradeOptions.length > 0 && (
                      <small className="grade-hint">
                        Pilihan tingkat sudah disesuaikan dengan program{" "}
                        {programData.programTitle}
                      </small>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Nama Sekolah *</label>
                    <input
                      type="text"
                      name="studentSchool"
                      value={formData.studentSchool}
                      onChange={handleInputChange}
                      required
                      placeholder="Nama sekolah siswa"
                      className={validationErrors.studentSchool ? "error" : ""}
                    />
                    {validationErrors.studentSchool && (
                      <span className="error-message">
                        {validationErrors.studentSchool}
                      </span>
                    )}
                  </div>

                  <div className="form-group full-width">
                    <label>Catatan Khusus Siswa *</label>
                    <textarea
                      name="studentNeeds"
                      value={formData.studentNeeds}
                      onChange={handleInputChange}
                      required
                      placeholder="Catatan khusus untuk belajar siswa"
                      rows="4"
                      className={validationErrors.studentNeeds ? "error" : ""}
                    />
                    {validationErrors.studentNeeds && (
                      <span className="error-message">
                        {validationErrors.studentNeeds}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Data Orang Tua */}
            {currentStep === 2 && (
              <div className="form-step">
                <h2>Data Orang Tua / Wali</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Nama Lengkap Orang Tua/Wali *</label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      required
                      placeholder="Nama lengkap orang tua/wali"
                      className={validationErrors.parentName ? "error" : ""}
                    />
                    {validationErrors.parentName && (
                      <span className="error-message">
                        {validationErrors.parentName}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Nomor WhatsApp *</label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      required
                      placeholder="Contoh: 081234567890"
                      className={validationErrors.parentPhone ? "error" : ""}
                    />
                    {validationErrors.parentPhone && (
                      <span className="error-message">
                        {validationErrors.parentPhone}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleInputChange}
                      required
                      placeholder="email@contoh.com"
                      className={validationErrors.parentEmail ? "error" : ""}
                    />
                    {validationErrors.parentEmail && (
                      <span className="error-message">
                        {validationErrors.parentEmail}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Hubungan dengan Siswa *</label>
                    <select
                      name="parentRelationship"
                      value={formData.parentRelationship}
                      onChange={handleInputChange}
                      required
                      className={
                        validationErrors.parentRelationship ? "error" : ""
                      }
                    >
                      <option value="">Pilih hubungan *</option>
                      <option value="Ibu">Ibu</option>
                      <option value="Ayah">Ayah</option>
                      <option value="Wali">Wali</option>
                      <option value="Kakak">Kakak</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                    {validationErrors.parentRelationship && (
                      <span className="error-message">
                        {validationErrors.parentRelationship}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Program & Jadwal */}
            {currentStep === 3 && (
              <div className="form-step">
                <h2>Program & Jadwal Belajar</h2>

                {/* Program Selection */}
                <div className="program-selection-review">
                  <h3>Program yang Dipilih</h3>
                  <div className="selected-program-card">
                    <div className="program-info">
                      <strong>Kurikulum:</strong>{" "}
                      {formData.selectedCurriculum ||
                        (isMasukSMA
                          ? "Persiapan MAN IC"
                          : isSuperCamp
                          ? "SuperCamp"
                          : isBimbel
                          ? "Bimbel Kelompok"
                          : "Reguler")}
                    </div>
                    <div className="program-info">
                      <strong>Program:</strong>{" "}
                      {formData.selectedProgram ||
                        (isMasukSMA
                          ? "Program Intensif Persiapan Masuk MAN IC"
                          : isSuperCamp
                          ? "SuperCamp Persiapan SNBT UTBK"
                          : "")}
                    </div>
                    {formData.selectedSubProgram && (
                      <div className="program-info">
                        <strong>Tingkatan:</strong>{" "}
                        {formData.selectedSubProgram}
                      </div>
                    )}
                    {programData.package && (
                      <div className="program-info">
                        <strong>Paket:</strong>{" "}
                        {getPackageOptions()[programData.package] ||
                          packageOptions[programData.package]}
                      </div>
                    )}
                    {(programData.price || formData.selectedPackage) && (
                      <div className="program-info price-info">
                        <strong>Biaya:</strong> {getDisplayPrice()}
                      </div>
                    )}
                    {programData.description && (
                      <div className="program-info">
                        <strong>Deskripsi:</strong> {programData.description}
                      </div>
                    )}
                    {programData.features && (
                      <div className="program-info">
                        <strong>Fasilitas:</strong>{" "}
                        {programData.features.join(", ")}
                      </div>
                    )}
                    {(isSuperCamp || isMasukSMA || isBimbel) && (
                      <div className="program-info">
                        <strong>Metode Belajar:</strong>{" "}
                        {programData.learningMethod ||
                          (isSuperCamp
                            ? "Offline (Program Camp)"
                            : isMasukSMA
                            ? programData.package === "offline-group"
                              ? "Offline"
                              : "Online"
                            : isBimbel
                            ? "Offline (Kelas Kelompok)"
                            : "")}
                      </div>
                    )}
                  </div>

                  {!isSuperCamp && !isMasukSMA && !isBimbel && (
                    <button
                      type="button"
                      className="change-program-btn"
                      onClick={() => navigate("/biaya-les")}
                    >
                      Ubah Pilihan Program
                    </button>
                  )}
                  {isBimbel && (
                    <button
                      type="button"
                      className="change-program-btn"
                      onClick={() => navigate("/biaya-les-bimbel")}
                    >
                      Ubah Pilihan Program Bimbel
                    </button>
                  )}
                </div>

                <div className="form-grid">
                  {/* Untuk SuperCamp, Masuk SMA, dan Bimbel, tidak perlu memilih paket lagi */}
                  {!isSuperCamp && !isMasukSMA && !isBimbel && (
                    <div className="form-group">
                      <label>Pilih Paket *</label>
                      <select
                        name="selectedPackage"
                        value={formData.selectedPackage}
                        onChange={handleInputChange}
                        required
                        className={
                          validationErrors.selectedPackage ? "error" : ""
                        }
                      >
                        <option value="">Pilih paket belajar *</option>
                        {Object.entries(packageOptions).map(
                          ([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          )
                        )}
                      </select>
                      {validationErrors.selectedPackage && (
                        <span className="error-message">
                          {validationErrors.selectedPackage}
                        </span>
                      )}
                      <small className="price-hint">
                        Harga: {getDisplayPrice()}
                      </small>
                    </div>
                  )}

                  {/* Untuk program reguler, tampilkan pilihan metode belajar */}
                  {!isSuperCamp && !isMasukSMA && !isBimbel && (
                    <div className="form-group">
                      <label>Metode Belajar *</label>
                      <select
                        name="learningMethod"
                        value={formData.learningMethod}
                        onChange={handleInputChange}
                        required
                        className={
                          validationErrors.learningMethod ? "error" : ""
                        }
                      >
                        <option value="offline">Offline (Guru ke Rumah)</option>
                        <option value="online">Online</option>
                        <option value="hybrid">Hybrid (Kombinasi)</option>
                      </select>
                      {validationErrors.learningMethod && (
                        <span className="error-message">
                          {validationErrors.learningMethod}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Field Kode Referral - OPSIONAL */}
                  <div className="form-group">
                    <label>Kode Referral (Opsional)</label>
                    <input
                      type="text"
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleInputChange}
                      placeholder="Masukkan kode referral jika ada"
                      className="referral-input"
                    />
                    <small className="referral-hint">
                      Jika Anda memiliki kode referral, masukkan di sini untuk
                      mendapatkan potongan harga
                    </small>
                  </div>

                  <div className="form-group full-width">
                    <label>Alamat Lengkap *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder={
                        isSuperCamp
                          ? "Atlanta Residence, Jl. Margonda Raya No.28 Kel, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424"
                          : isMasukSMA &&
                            programData.learningMethod === "offline"
                          ? "Alamat untuk pertemuan offline (JABODETABEK)"
                          : isBimbel
                          ? "Jl. Siti 2 No.07 RT 002/008, Ciketing, Mustika Jaya, Bekasi Timur"
                          : "Alamat lengkap untuk kunjungan guru (jika offline)"
                      }
                      rows="3"
                      className={validationErrors.address ? "error" : ""}
                    />
                    {validationErrors.address && (
                      <span className="error-message">
                        {validationErrors.address}
                      </span>
                    )}
                  </div>

                  {/* Untuk SuperCamp, Masuk SMA, dan Bimbel, jadwal sudah fixed jadi tidak perlu pilih jadwal */}
                  {!isSuperCamp && !isMasukSMA && !isBimbel && (
                    <div className="form-group full-width">
                      <label>Pilih Jadwal Belajar (Senin - Jumat) *</label>
                      {validationErrors.preferredSchedule && (
                        <div className="schedule-error-message">
                          ⚠️ {validationErrors.preferredSchedule}
                        </div>
                      )}
                      <div className="day-schedule-container">
                        {days.map((day) => (
                          <div key={day} className="day-schedule-item">
                            <label className="day-checkbox">
                              <input
                                type="checkbox"
                                checked={!!formData.preferredSchedule[day]}
                                onChange={() => handleDaySelection(day)}
                              />
                              <span>{day}</span>
                            </label>

                            {formData.preferredSchedule[day] !== undefined && (
                              <div className="time-selection">
                                <AdvancedTimePicker
                                  selectedTime={formData.preferredSchedule[day]}
                                  onTimeChange={(time) =>
                                    handleTimeChange(day, time)
                                  }
                                />
                                <button
                                  type="button"
                                  className="remove-time-btn"
                                  onClick={() => removeDaySchedule(day)}
                                >
                                  ×
                                </button>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <small className="schedule-hint">
                        Pilih hari dan waktu yang diinginkan untuk sesi belajar
                      </small>
                    </div>
                  )}

                  {/* Info khusus untuk SuperCamp */}
                  {isSuperCamp && (
                    <div className="supercamp-info">
                      <div className="supercamp-notice">
                        <h4>📋 Informasi SuperCamp:</h4>
                        <p>
                          Untuk program SuperCamp, jadwal belajar sudah
                          ditentukan sesuai dengan paket yang dipilih. Anda akan
                          mendapatkan jadwal lengkap setelah konfirmasi
                          pendaftaran.
                        </p>
                        <p>
                          <strong>Lokasi SuperCamp:</strong> Atlanta Residence,
                          Jl. Margonda Raya No.28 Kel, Pondok Cina, Kecamatan
                          Beji, Kota Depok, Jawa Barat 16424
                        </p>
                        <p>
                          <strong>Metode Belajar:</strong> Offline (Program
                          Camp) - Full day program dengan fasilitas lengkap
                          termasuk akomodasi, makan 3x sehari, dan area belajar
                          nyaman.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Info khusus untuk Masuk SMA */}
                  {isMasukSMA && (
                    <div className="supercamp-info">
                      <div className="supercamp-notice">
                        <h4>📋 Informasi Program Persiapan MAN IC:</h4>
                        <p>
                          Program persiapan masuk MAN IC terdiri dari 36 sesi
                          belajar intensif dengan durasi 90 menit per sesi.
                        </p>
                        <p>
                          <strong>Metode Belajar:</strong>{" "}
                          {programData.learningMethod === "offline"
                            ? "Offline (Kelas Tatap Muka) - Tersedia di wilayah JABODETABEK"
                            : "Online (Kelas Jarak Jauh) - Tersedia untuk seluruh Indonesia"}
                        </p>
                        <p>
                          <strong>Biaya Pendaftaran:</strong> Rp 150.000 sudah
                          termasuk dalam paket
                        </p>
                        <p>
                          <strong>Garansi:</strong> Program dengan jaminan
                          keterima hingga 97%
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Info khusus untuk Bimbel */}
                  {isBimbel && (
                    <div className="supercamp-info">
                      <div className="supercamp-notice">
                        <h4>📋 Informasi Bimbel Kelompok:</h4>
                        <p>
                          Program bimbel dilaksanakan dalam kelompok kecil
                          dengan jadwal tetap 3x seminggu. Lokasi belajar di
                          cabang Cakrawala EduCentre terdekat.
                        </p>
                        <p>
                          <strong>Metode Belajar:</strong> Offline (Kelas
                          Kelompok) - Belajar bersama dalam kelompok kecil
                        </p>
                        <p>
                          <strong>Fasilitas:</strong>{" "}
                          {programData.features?.join(", ")}
                        </p>
                        <p>
                          <strong>Lokasi:</strong> Jl. Siti 2 No.07 RT 002/008,
                          Ciketing, Mustika Jaya, Bekasi Timur
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Konfirmasi */}
            {currentStep === 4 && (
              <div className="form-step">
                <h2>Konfirmasi Pendaftaran</h2>

                <div className="confirmation-summary">
                  <div className="summary-section">
                    <h3>Data Siswa</h3>
                    <p>
                      <strong>Nama:</strong> {formData.studentName}
                    </p>
                    <p>
                      <strong>Usia:</strong> {formData.studentAge} tahun
                    </p>
                    <p>
                      <strong>Kelas:</strong> {formData.studentGrade}
                    </p>
                    <p>
                      <strong>Sekolah:</strong> {formData.studentSchool}
                    </p>
                    <p>
                      <strong>Catatan Khusus:</strong> {formData.studentNeeds}
                    </p>
                  </div>

                  <div className="summary-section">
                    <h3>Data Orang TUA</h3>
                    <p>
                      <strong>Nama:</strong> {formData.parentName}
                    </p>
                    <p>
                      <strong>WhatsApp:</strong> {formData.parentPhone}
                    </p>
                    <p>
                      <strong>Email:</strong> {formData.parentEmail}
                    </p>
                    <p>
                      <strong>Hubungan:</strong> {formData.parentRelationship}
                    </p>
                  </div>

                  <div className="summary-section">
                    <h3>Program & Jadwal</h3>
                    <p>
                      <strong>Kurikulum:</strong> {formData.selectedCurriculum}
                    </p>
                    <p>
                      <strong>Program:</strong> {formData.selectedProgram}
                    </p>
                    {formData.selectedSubProgram && (
                      <p>
                        <strong>Tingkatan:</strong>{" "}
                        {formData.selectedSubProgram}
                      </p>
                    )}
                    <p>
                      <strong>Paket:</strong>{" "}
                      {getPackageOptions()[programData.package] ||
                        packageOptions[formData.selectedPackage]}
                    </p>
                    <p>
                      <strong>Harga:</strong> {getDisplayPrice()}
                    </p>
                    {programData.description && (
                      <p>
                        <strong>Deskripsi:</strong> {programData.description}
                      </p>
                    )}
                    {programData.features && (
                      <p>
                        <strong>Fasilitas:</strong>{" "}
                        {programData.features.join(", ")}
                      </p>
                    )}
                    {formData.referralCode && (
                      <p>
                        <strong>Kode Referral:</strong> {formData.referralCode}
                      </p>
                    )}
                    <p>
                      <strong>Metode:</strong>{" "}
                      {isSuperCamp
                        ? "Offline (Program Camp)"
                        : isMasukSMA
                        ? programData.learningMethod === "offline"
                          ? "Offline"
                          : "Online"
                        : isBimbel
                        ? "Offline (Kelas Kelompok)"
                        : formData.learningMethod}
                    </p>
                    <p>
                      <strong>Alamat:</strong> {formData.address}
                    </p>
                    {!isSuperCamp &&
                      !isMasukSMA &&
                      !isBimbel &&
                      formatScheduleForDisplay() && (
                        <p>
                          <strong>Jadwal:</strong> {formatScheduleForDisplay()}
                        </p>
                      )}
                    {(isSuperCamp || isMasukSMA || isBimbel) && (
                      <p>
                        <strong>Jadwal:</strong> Sesuai jadwal program intensif
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>Catatan Khusus (Opsional)</label>
                  <textarea
                    name="specialNotes"
                    value={formData.specialNotes}
                    onChange={handleInputChange}
                    placeholder="Tambahkan catatan khusus untuk tim kami..."
                    rows="3"
                  />
                </div>

                <div className="terms-agreement">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      required
                      className={validationErrors.terms ? "error" : ""}
                    />
                    Saya menyetujui syarat dan ketentuan yang berlaku serta
                    mengonfirmasi bahwa data yang saya berikan adalah benar *
                  </label>
                  {validationErrors.terms && (
                    <span className="error-message">
                      {validationErrors.terms}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 1 && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={prevStep}
                >
                  Kembali
                </button>
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  className="btn-primary"
                  onClick={nextStep}
                >
                  Lanjut
                </button>
              ) : (
                <button type="submit" className="btn-submit">
                  {isSuperCamp
                    ? "Daftar SuperCamp & Kirim ke WhatsApp"
                    : isMasukSMA
                    ? "Daftar Program & Kirim ke WhatsApp"
                    : isBimbel
                    ? "Daftar Bimbel & Kirim ke WhatsApp"
                    : "Daftar Sekarang & Kirim ke WhatsApp"}
                </button>
              )}
            </div>
          </form>

          {/* Quick Contact */}
          <div className="quick-contact">
            <h3>Butuh Bantuan?</h3>
            <p>Hubungi kami langsung untuk konsultasi gratis</p>
            <div className="contact-buttons">
              <a
                href="https://api.whatsapp.com/send?phone=6281324868790&text=Halo,%20saya%20ingin%20konsultasi%20tentang%20les%20privat&app_absent=0"
                className="whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Konfirmasi */}
      <ConfirmationPopup
        isOpen={showConfirmation}
        onClose={handleCloseConfirmation}
        onCopyData={handleDataCopied}
        onCancel={handleCancelRegistration}
        formData={formData}
        programData={programData}
        packageOptions={getPackageOptions()}
      />
    </div>
  );
};

export default DaftarPage;
