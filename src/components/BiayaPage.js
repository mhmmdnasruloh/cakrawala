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

  const [activeCurriculum, setActiveCurriculum] = useState("nasional");
  const [activeProgram, setActiveProgram] = useState("calistung");
  const [activeSubProgram, setActiveSubProgram] = useState("");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    if (location.state?.presetSelection) {
      const { curriculum, program, subProgram } =
        location.state.presetSelection;
      setActiveCurriculum(curriculum);
      setActiveProgram(program);
      if (subProgram) {
        setActiveSubProgram(subProgram);
      }
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  }, [location.state]);

  const curriculumData = {
    // ... (data curriculum tetap sama)
    nasional: {
      title: "Kurikulum Nasional",
      programs: {
        calistung: {
          name: "Calistung",
          subPrograms: {},
          gradeOptions: ["TK A", "TK B", "Pra-SD"],
        },
        sd: {
          name: "SD",
          subPrograms: {
            "kelas-1-2": "Kelas 1-2",
            "kelas-3-6": "Kelas 3-6",
          },
          gradeOptions: {
            "kelas-1-2": ["Kelas 1", "Kelas 2",],
            "kelas-3-6": ["Kelas 3", "kelas 4", "Kelas 5", "Kelas 6"],
          },
        },
        smp: {
          name: "SMP",
          subPrograms: {},
          gradeOptions: {
            "kelas-1-2": ["Kelas 7", "Kelas 8"],
            "kelas-3": ["Kelas 9"],
          },
        },
        sma: {
          name: "SMA",
          subPrograms: {},
          gradeOptions: {
            "kelas-1-2": ["Kelas 10", "Kelas 11"],
            "kelas-3": ["Kelas 12"],
          },
        },
        simakui: {
          name: "SIMAK UI",
          subPrograms: {},
          gradeOptions: ["Persiapan SIMAK UI"],
        },
        ujianmandiri: {
          name: "Ujian Mandiri (IUPITB, UGM, Unpad, UM Internasional)",
          subPrograms: {},
          gradeOptions: ["Persiapan Ujian Mandiri"],
        },
        smafavorite: {
          name: "Persiapan Masuk SMA Favorite",
          subPrograms: {},
          gradeOptions: ["Labschool", "Manic", "Santa Ursula", "MH Tamrin", "Taruna Nusantara", "SMA Favorite Lainnya"],
        },
        kedinasan: {
          name: "Kedinasan (Akmil, CPNS, BUMN, Akpol)",
          subPrograms: {},
          gradeOptions: ["Persiapan Tes Kedinasan"],
        },
        mahasiswa: {
          name: "Mahasiswa",
          subPrograms: {},
          gradeOptions: [
            "Semester 1-2",
            "Semester 3-4",
            "Semester 5-6",
            "Semester 7-8",
          ],
        },
      },
    },
    internasional: {
      title: "Kurikulum Internasional",
      programs: {
        k1k2: {
          name: "K1/K2 Programmer",
          subPrograms: {},
          gradeOptions: ["K1", "K2"],
        },
        primary: {
          name: "Primary",
          subPrograms: {
            "level-1-3": "Level 1-3",
            "level-4-6": "Level 4-6",
          },
          gradeOptions: {
            "level-1-3": ["Primary 1", "Primary 2", "Primary 3"],
            "level-4-6": ["Primary 4", "Primary 5", "Primary 6"],
          },
        },
        lowerSecondary: {
          name: "Lower Secondary",
          subPrograms: {},
          gradeOptions: ["Year 7", "Year 8"],
        },
        upperSecondary: {
          name: "Upper Secondary IGCSE",
          subPrograms: {},
          gradeOptions: ["Year 9", "Year 10", "Year 11"],
        },
        ibDiploma: {
          name: "IB Diploma Programme A/AS Level",
          subPrograms: {},
          gradeOptions: ["IB Year 1", "IB Year 2", "AS Level", "A Level"],
        },
        toeflIelts: {
          name: "TOEFL/IELTS Preparation",
          subPrograms: {},
          gradeOptions: ["HSK 1", "HSK 2", "HSK 3", "HSK 4", "HSK 5", "HSK 6"],
        },
        simakui: {
          name: "SIMAK UI",
          subPrograms: {},
          gradeOptions: {},
        },
        ujianmandiri: {
          name: "UJIAN MANDIRI",
          subPrograms: {},
          gradeOptions: {},
        },
        hsk: {
          name: "HSK Preparation",
          subPrograms: {},
          gradeOptions: ["HSK 1", "HSK 2", "HSK 3", "HSK 4", "HSK 5", "HSK 6"],
        },
        jlpt: {
          name: "JLPT Preparation",
          subPrograms: {},
          gradeOptions: ["N5", "N4", "N3", "N2", "N1"],
        },
        shadowTeacher: {
          name: "Shadow Teacher (ABK)",
          subPrograms: {},
          gradeOptions: ["TK", "SD", "SMP", "SMA"],
        },
      },
    },
    umum: {
      title: "Umum",
      programs: {
        mengaji: {
          name: "Mengaji",
          subPrograms: {
            "anak-anak": "Anak-anak",
            "remaja-dewasa": "Remaja/Dewasa",
          },
          gradeOptions: {
            "anak-anak": ["TK", "SD"],
            "remaja-dewasa": ["SMP", "SMA", "Mahasiswa", "Umum"],
          },
        },
        musik: {
          name: "Musik",
          subPrograms: {},
          gradeOptions: ["Pemula", "Intermediate", "Advanced", "Profesional"],
        },
        renang: {
          name: "Renang",
          subPrograms: {},
          gradeOptions: ["Pemula", "Intermediate", "Advanced", "Kompetitif"],
        },
        coding: {
          name: "Coding",
          subPrograms: {},
          gradeOptions: ["Dasar", "Intermediate", "Advanced", "Expert"],
        },
        bahasaEnglish: {
          name: "Bahasa Inggris",
          subPrograms: {
            "anak-anak": "Anak-anak",
            "remaja-dewasa": "Remaja/Dewasa",
          },
          gradeOptions: {
            "anak-anak": ["TK", "SD"],
            "remaja-dewasa": ["SMP", "SMA", "Mahasiswa", "Umum"],
          },
        },
        bahasaJepang: {
          name: "Bahasa Jepang",
          subPrograms: {
            "anak-anak": "Anak-anak",
            "remaja-dewasa": "Remaja/Dewasa",
          },
          gradeOptions: {
            "anak-anak": ["TK", "SD"],
            "remaja-dewasa": ["SMP", "SMA", "Mahasiswa", "Umum"],
          },
        },
        bahasaMandarin: {
          name: "Bahasa Mandarin",
          subPrograms: {
            "anak-anak": "Anak-anak",
            "remaja-dewasa": "Remaja/Dewasa",
          },
          gradeOptions: {
            "anak-anak": ["TK", "SD"],
            "remaja-dewasa": ["SMP", "SMA", "Mahasiswa", "Umum"],
          },
        },
        bahasaJerman: {
          name: "Bahasa Jerman",
          subPrograms: {
            "anak-anak": "Anak-anak",
            "remaja-dewasa": "Remaja/Dewasa",
          },
          gradeOptions: {
            "anak-anak": ["TK", "SD"],
            "remaja-dewasa": ["SMP", "SMA", "Mahasiswa", "Umum"],
          },
        },
      },
    },
  };

  const priceData = {
    // ... (data harga tetap sama)
    nasional: {
      calistung: {
        "4-sesi": "Rp 500.000",
        "8-sesi": "Rp 920.000",
        "12-sesi": "Rp 1.320.000",
      },
      sd: {
        "kelas-1-2": {
          "4-sesi": "Rp 500.000",
          "8-sesi": "Rp 920.000",
          "12-sesi": "Rp 1.320.000",
        },
        "kelas-3-6": {
          "4-sesi": "Rp 580.000",
          "8-sesi": "Rp 1.080.000",
          "12-sesi": "Rp 1.500.000",
        },
      },
      smp: {
        "4-sesi": "Rp 660.000",
        "8-sesi": "Rp 1.280.000",
        "12-sesi": "Rp 1.800.000",
      },
      sma: {
        "4-sesi": "Rp 800.000",
        "8-sesi": "Rp 1.480.000",
        "12-sesi": "Rp 2.100.000",
      },
      kedinasan: {
        "10-sesi": "Rp 3.000.000",
        "20-sesi": "Rp 5.700.000",
        "40-sesi": "Rp 11.000.000",
        "60-sesi": "Rp 15.000.000",
      },
      mahasiswa: {
        "4-sesi": "Rp 1.700.000",
        "8-sesi": "Rp 2.200.000",
        "12-sesi": "Rp 3.000.000",
      },
      simakui: {
        "10-sesi": "Rp 2.500.000",
        "20-sesi": "Rp 4.500.000",
        "40-sesi": "Rp 8.600.000",
        "60-sesi": "Rp 12.000.000",
      },
      ujianmandiri: {
        "10-sesi": "Rp 2.500.000",
        "20-sesi": "Rp 4.500.000",
        "40-sesi": "Rp 8.600.000",
        "60-sesi": "Rp 12.000.000",
      },
      smafavorite: {
        "10-sesi": "Rp 2.000.000",
        "20-sesi": "Rp 3.600.000",
        "40-sesi": "Rp 7.000.000",
        "60-sesi": "Rp 9.900.000",
      },
    },
    internasional: {
      k1k2: {
        "4-sesi": "Rp 1.400.000",
        "8-sesi": "Rp 2.040.000",
        "12-sesi": "Rp 7.700.000",
      },
      simakui: {
        "10-sesi": "Rp 3.500.000",
        "20-sesi": "Rp 6.500.000",
        "40-sesi": "Rp 12.000.000",
        "60-sesi": "Rp 16.800.000",
      },
      ujianmandiri: {
        "10-sesi": "Rp 3.500.000",
        "20-sesi": "Rp 6.500.000",
        "40-sesi": "Rp 12.000.000",
        "60-sesi": "Rp 16.800.000",
      },
      primary: {
        "level-1-3": {
          "4-sesi": "Rp 1.800.000",
          "8-sesi": "Rp 2.700.000",
          "12-sesi": "Rp 10.000.000",
        },
        "level-4-6": {
          "4-sesi": "Rp 2.000.000",
          "8-sesi": "Rp 3.000.000",
          "12-sesi": "Rp 11.200.000",
        },
      },
      lowerSecondary: {
        "4-sesi": "Rp 2.200.000",
        "8-sesi": "Rp 3.300.000",
        "12-sesi": "Rp 12.750.000",
      },
      upperSecondary: {
        "4-sesi": "Rp 2.400.000",
        "8-sesi": "Rp 3.600.000",
        "12-sesi": "Rp 14.000.000",
      },
      ibDiploma: {
        "4-sesi": "Rp 2.800.000",
        "8-sesi": "Rp 4.200.000",
        "12-sesi": "Rp 16.000.000",
      },
      toeflIelts: {
        "4-sesi": "Rp 1.200.000",
        "8-sesi": "Rp 2.240.000",
      },
      hsk: {
        "4-sesi": "Rp 3.000.000",
        "8-sesi": "Rp 4.500.000",
        "12-sesi": "Rp 17.500.000",
      },
      jlpt: {
        "4-sesi": "Rp 3.000.000",
        "8-sesi": "Rp 4.500.000",
        "12-sesi": "Rp 17.500.000",
      },
      shadowTeacher: {
        "basic-fullday": "Rp 3.500.000",
        "regular-fullday": "Rp 4.000.000",
        "intensive-fullday": "Rp 5.000.000",
      },
    },
    umum: {
      mengaji: {
        "anak-anak": {
          "4-sesi": "Rp 500.000",
          "8-sesi": "Rp 920.000",
        },
        "remaja-dewasa": {
          "4-sesi": "Rp 650.000",
          "8-sesi": "Rp 1.160.000",
        },
      },
      musik: {
        "4-sesi": "Rp 1.000.000",
        "8-sesi": "Rp 1.800.000",
        "12-sesi": "Rp 2.400.000",
      },
      renang: {
        "4-sesi": "Rp 1.000.000",
        "8-sesi": "Rp 1.800.000",
        "12-sesi": "Rp 2.400.000",
      },
      coding: {
        "4-sesi": "Rp 1.000.000",
        "8-sesi": "Rp 1.800.000",
        "12-sesi": "Rp 2.400.000",
      },
      bahasaEnglish: {
        "anak-anak": {
          "4-sesi": "Rp 800.000",
          "8-sesi": "Rp 1.400.000",
        },
        "remaja-dewasa": {
          "4-sesi": "Rp 1.200.000",
          "8-sesi": "Rp 2.240.000",
        },
      },
      bahasaJepang: {
        "anak-anak": {
          "4-sesi": "Rp 1.000.000",
          "8-sesi": "Rp 1.800.000",
        },
        "remaja-dewasa": {
          "4-sesi": "Rp 1.200.000",
          "8-sesi": "Rp 2.240.000",
        },
      },
      bahasaMandarin: {
        "anak-anak": {
          "4-sesi": "Rp 1.000.000",
          "8-sesi": "Rp 1.800.000",
        },
        "remaja-dewasa": {
          "4-sesi": "Rp 1.200.000",
          "8-sesi": "Rp 2.240.000",
        },
      },
      bahasaJerman: {
        "anak-anak": {
          "4-sesi": "Rp 1.000.000",
          "8-sesi": "Rp 1.800.000",
        },
        "remaja-dewasa": {
          "4-sesi": "Rp 1.200.000",
          "8-sesi": "Rp 2.240.000",
        },
      },
    },
  };
  const priceDataNonJabodetabek = {
    nasional: {
      calistung: {
        "4-sesi": "Rp 460.000",
        "8-sesi": "Rp 800.000",
        "12-sesi": "Rp 1.200.000",
      },
      sd: {
        "kelas-1-2": {
          "4-sesi": "Rp 460.000",
          "8-sesi": "Rp 800.000",
          "12-sesi": "Rp 1.200.000",
        },
        "kelas-3-6": {
          "4-sesi": "Rp 500.000",
          "8-sesi": "Rp 920.000",
          "12-sesi": "Rp 1.260.000",
        }
      },
      smp: {
        "4-sesi": "Rp 600.000",
        "8-sesi": "Rp 1.200.000",
        "12-sesi": "Rp 1.620.000",
      },
      sma: {
        "4-sesi": "Rp 700.000",
        "8-sesi": "Rp 1.280.000",
        "12-sesi": "Rp 1.800.000",
      },
      mahasiswa: {
        "4-sesi": "Rp 1.700.000",
        "8-sesi": "Rp 2.200.000",
        "12-sesi": "Rp 3.000.000",
      },
      kedinasan: {
        "10-sesi": "Rp 3.000.000",
        "20-sesi": "Rp 5.700.000",
        "40-sesi": "Rp 11.000.000",
        "60-sesi": "Rp 15.000.000",
      },
    },
    umum: {
      mengaji: {
        "anak-anak": {
          "4-sesi": "Rp 500.000",
          "8-sesi": "Rp 920.000",
        },
        "remaja-dewasa": {
          "4-sesi": "Rp 650.000",
          "8-sesi": "Rp 1.160.000",
        },
      },
      musik: {
        "4-sesi": "Rp 1.000.000",
        "8-sesi": "Rp 1.800.000",
        "12-sesi": "Rp 2.400.000",
      },
      renang: {
        "4-sesi": "Rp 1.000.000",
        "8-sesi": "Rp 1.800.000",
        "12-sesi": "Rp 2.400.000",
      },
      coding: {
        "4-sesi": "Rp 1.000.000",
        "8-sesi": "Rp 1.800.000",
        "12-sesi": "Rp 2.400.000",
      },
      bahasa: {
        "anak-anak": {
          "4-sesi": "Rp 1.000.000",
          "8-sesi": "Rp 1.800.000",
        },
        "remaja-dewasa": {
          "4-sesi": "Rp 1.200.000",
          "8-sesi": "Rp 2.240.000",
        },
      },
    }
  };

  // Function untuk ambil harga Non-Jabodetabek
  const getNonJabodetabekPrices = () => {
    try {
      const curriculumPrices = priceDataNonJabodetabek[activeCurriculum];
      if (!curriculumPrices) return null; // Return null kalau belum ada data

      const programPrices = curriculumPrices[activeProgram];
      if (!programPrices) return null;

      if (activeSubProgram && programPrices[activeSubProgram]) {
        return programPrices[activeSubProgram];
      }

      return programPrices;
    } catch (error) {
      console.error("Error getting non-jabodetabek prices:", error);
      return null;
    }
  };

  const packages = [
    {
      id: "4-sesi",
      name: "4 x Sesi",
      duration: "1 Bulan",
      description: "Paket bulanan ideal untuk pemula",
    },
    {
      id: "8-sesi",
      name: "8 x Sesi",
      duration: "1 Bulan",
      description: "Paket bulanan dengan harga spesial",
    },
    {
      id: "12-sesi",
      name: "12 x Sesi",
      duration: "1 Bulan",
      description: "Paket bulanan dengan harga terbaik",
    },
  ];

  // Packages khusus untuk Kedinasan
  const kedinasanPackages = [
    {
      id: "10-sesi",
      name: "Starter",
      duration: "10 x Sesi",
      description: "Paket persiapan dasar kedinasan",
    },
    {
      id: "20-sesi",
      name: "Basic",
      duration: "20 x Sesi",
      description: "Paket persiapan standar kedinasan",
    },
    {
      id: "40-sesi",
      name: "Intensif",
      duration: "40 x Sesi",
      description: "Paket intensif untuk persiapan optimal",
    },
    {
      id: "60-sesi",
      name: "Mastery",
      duration: "60 x Sesi",
      description: "Paket lengkap untuk penguasaan maksimal",
    },
  ];

  // Packages khusus untuk Shadow Teacher
  const shadowTeacherPackages = [
    {
      id: "basic-fullday",
      name: "Basic Full Day",
      duration: "20 hari/bulan",
      description: "Anak yang butuh pendampingan fokus & adaptasi ringan. Pendampingan selama jam sekolah, membantu mengikuti instruksi guru, penguatan kemandirian dasar, laporan singkat harian.",
    },
    {
      id: "regular-fullday",
      name: "Regular Full Day",
      duration: "20 hari/bulan",
      description: "Anak berkebutuhan khusus ringan/sedang. Full pendampingan akademik & perilaku, membantu tugas, emosi, & interaksi sosial, koordinasi dengan guru kelas, laporan harian + evaluasi mingguan.",
    },
    {
      id: "intensive-fullday",
      name: "Intensive Full Day",
      duration: "20 hari/bulan",
      description: "ABK sedang-berat. Full pendampingan dari masuk-pulang sekolah, program individual (IEP sederhana), pendampingan emosi & perilaku intensif, koordinasi guru & orang tua, laporan perkembangan lengkap.",
    },
  ];

  const getCurrentPrices = () => {
    try {
      const curriculumPrices = priceData[activeCurriculum];
      if (!curriculumPrices) return {};

      const programPrices = curriculumPrices[activeProgram];
      if (!programPrices) return {};

      if (activeSubProgram && programPrices[activeSubProgram]) {
        return programPrices[activeSubProgram];
      }

      return programPrices;
    } catch (error) {
      console.error("Error getting prices:", error);
      return {};
    }
  };

  const handleProgramSelect = (program) => {
    setActiveProgram(program);
    setActiveSubProgram("");
  };

  const getGradeOptions = () => {
    const program = curriculumData[activeCurriculum].programs[activeProgram];

    if (activeSubProgram && program.gradeOptions[activeSubProgram]) {
      return program.gradeOptions[activeSubProgram];
    }

    return program.gradeOptions || [];
  };

  const handleDaftarClick = (pkg) => {
    const programData = {
      curriculum: activeCurriculum,
      curriculumTitle: curriculumData[activeCurriculum].title,
      program: activeProgram,
      programTitle:
        curriculumData[activeCurriculum].programs[activeProgram].name,
      subProgram: activeSubProgram,
      subProgramTitle: activeSubProgram
        ? curriculumData[activeCurriculum].programs[activeProgram].subPrograms[
        activeSubProgram
        ]
        : "",
      package: pkg.id,
      packageTitle: pkg.name,
      price: getCurrentPrices()[pkg.id],
      gradeOptions: getGradeOptions(),
    };

    navigate("/daftar", { state: { programData } });
  };

  const currentCurriculum = curriculumData[activeCurriculum];
  const currentProgram = currentCurriculum.programs[activeProgram];
  const currentPrices = getCurrentPrices();

  // ===============================
  // FILTER PAKET BERDASARKAN PROGRAM
  // ===============================
  const getAvailablePackages = () => {
    // Shadow Teacher punya paket bulanan khusus
    if (activeProgram === "shadowTeacher") {
      return shadowTeacherPackages;
    }
    // Kedinasan, SIMAK UI, Ujian Mandiri, SMA Favorite punya paket khusus (Starter, Basic, Intensif, Mastery)
    if (activeProgram === "kedinasan" || activeProgram === "simakui" || activeProgram === "ujianmandiri" || activeProgram === "smafavorite") {
      return kedinasanPackages;
    }
    return packages; // selain itu -> semua paket standar
  };

  return (
    <div className="cost-page-wrapper">
      <SEO
        title="Biaya Les Privat - Harga Paket Bimbingan Belajar Terjangkau"
        description="Lihat daftar harga les privat Cakrawala Educentre untuk semua jenjang. Paket les privat SD, SMP, SMA dengan harga terjangkau mulai Rp 500.000. Kurikulum Nasional & Internasional."
        url="/biaya-les-privat"
        keywords={['biaya les privat', 'harga les privat', 'tarif guru les', 'biaya bimbel', 'harga les sd', 'harga les smp', 'harga les sma', 'paket les privat']}
      />
      <div className="cost-page">
        <div className="cost-container">
          <h1 className="cost-title">Biaya Les Privat</h1>

          {/* Curriculum Selection */}
          <div className="cost-curriculum-selection">
            <h2>Pilih Kurikulum</h2>
            <div className="cost-curriculum-buttons">
              {Object.keys(curriculumData).map((curriculum) => (
                <button
                  key={curriculum}
                  className={`cost-curriculum-button ${activeCurriculum === curriculum ? "active" : ""
                    }`}
                  onClick={() => {
                    setActiveCurriculum(curriculum);
                    const firstProgram = Object.keys(
                      curriculumData[curriculum].programs
                    )[0];
                    setActiveProgram(firstProgram);
                    setActiveSubProgram("");
                  }}
                >
                  {curriculumData[curriculum].title}
                </button>
              ))}
            </div>
          </div>

          {/* Program Selection */}
          <div className="cost-program-selection">
            <h2>Pilih Program</h2>
            <div className="cost-program-buttons">
              {Object.keys(currentCurriculum.programs).map((program) => (
                <button
                  key={program}
                  className={`cost-program-button ${activeProgram === program ? "active" : ""
                    }`}
                  onClick={() => handleProgramSelect(program)}
                >
                  {currentCurriculum.programs[program].name}
                </button>
              ))}
            </div>
          </div>

          {/* Sub Program Selection (if available) */}
          {Object.keys(currentProgram.subPrograms).length > 0 && (
            <div className="cost-subprogram-selection">
              <h2>Pilih Tingkatan</h2>
              <div className="cost-subprogram-buttons">
                {Object.keys(currentProgram.subPrograms).map((subProgram) => (
                  <button
                    key={subProgram}
                    className={`cost-subprogram-button ${activeSubProgram === subProgram ? "active" : ""
                      }`}
                    onClick={() => setActiveSubProgram(subProgram)}
                  >
                    {currentProgram.subPrograms[subProgram]}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Table */}
          <div className="cost-pricing-section">
            <h2 className="cost-pricing-title">
              Biaya Les {currentCurriculum.title} - {currentProgram.name}
              {activeSubProgram &&
                ` - ${currentProgram.subPrograms[activeSubProgram]}`}
            </h2>

            {Object.keys(currentPrices).length > 0 ? (
              <>
                {/* Harga Jabodetabek */}
                <div className="cost-area-section">
                  <h3 className="cost-area-title">
                    <span className="cost-area-icon">📍</span>
                    Harga Jabodetabek
                  </h3>
                  <p className="cost-area-subtitle">Jakarta, Bogor, Depok, Tangerang, Bekasi</p>
                  <div className="cost-pricing-table">
                    {getAvailablePackages().map((pkg) => (
                      <div key={pkg.id} className="cost-pricing-card">
                        <div className="cost-package-header">
                          <h1 className="cost-package-tittle">{pkg.tittle}</h1>
                          <h3 className="cost-package-name">{pkg.name}</h3>
                          <div className="cost-package-duration">
                            {pkg.duration}
                          </div>
                          <div className="cost-package-price">
                            {currentPrices[pkg.id]}
                          </div>
                          {/* Discount Badge */}
                          {pkg.id === "96-sesi" && (
                            <div className="cost-discount-badge">Harga Terbaik</div>
                          )}
                          {pkg.id === "48-sesi" && (
                            <div className="cost-discount-badge">
                              Diskon Spesial
                            </div>
                          )}
                        </div>
                        <p className="cost-package-description">
                          {pkg.description}
                        </p>
                        <ul className="cost-package-features">
                          <li>✅ Guru profesional dan berpengalaman</li>
                          <li>✅ Materi sesuai kurikulum {activeCurriculum}</li>
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
                    {getAvailablePackages().map((pkg) => {
                      // Ambil harga manual dari priceDataNonJabodetabek
                      const outsidePrices = getNonJabodetabekPrices();
                      // Kalau ada data manual, pakai itu. Kalau gak ada, pakai harga Jabodetabek (sama)
                      let formattedOutsidePrice;
                      if (outsidePrices && outsidePrices[pkg.id]) {
                        formattedOutsidePrice = outsidePrices[pkg.id];
                      } else {
                        // Fallback: pakai harga Jabodetabek langsung (sama)
                        formattedOutsidePrice = currentPrices[pkg.id] || "Hubungi Kami";
                      }

                      return (
                        <div key={`outside-${pkg.id}`} className="cost-pricing-card cost-card-outside">
                          <div className="cost-package-header">
                            <h1 className="cost-package-tittle">{pkg.tittle}</h1>
                            <h3 className="cost-package-name">{pkg.name}</h3>
                            <div className="cost-package-duration">
                              {pkg.duration}
                            </div>
                            <div className="cost-package-price">
                              {formattedOutsidePrice}
                            </div>
                            {/* Discount Badge */}
                            {pkg.id === "96-sesi" && (
                              <div className="cost-discount-badge">Harga Terbaik</div>
                            )}
                            {pkg.id === "48-sesi" && (
                              <div className="cost-discount-badge">
                                Diskon Spesial
                              </div>
                            )}
                          </div>
                          <p className="cost-package-description">
                            {pkg.description}
                          </p>
                          <ul className="cost-package-features">
                            <li>✅ Guru profesional dan berpengalaman</li>
                            <li>✅ Materi sesuai kurikulum {activeCurriculum}</li>
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
              </>
            ) : (
              <div className="cost-no-price-message">
                <p>Silakan pilih program dan tingkatan untuk melihat harga.</p>
              </div>
            )}
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
                <span className="cost-facility-icon">🏠</span>
                <div>
                  <strong>Guru Datang ke Rumah</strong>
                  <p>Kenyamanan belajar di lingkungan rumah sendiri</p>
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
