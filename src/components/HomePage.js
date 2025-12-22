import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import MapComponent from "./MapComponents";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";
import { duration } from "@mui/material/styles";
import SEO from "./SEO";

function HomePage() {
  const [activeProgram, setActiveProgram] = useState(1);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const programsSectionRef = useRef(null);
  ///
  const partnershipRef = useRef(null);
  const trainingRef = useRef(null);
  const reviewsRef = useRef(null);
  const advantagesRef = useRef(null);
  const coverageRef = useRef(null);
  const blkRef = useRef(null);


  const toggleProgramDropdown = () => {
    setIsProgramDropdownOpen(!isProgramDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProgramDropdownOpen(false);
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

  // === SCROLL FUNCTIONS ===;
  const scrollToPrograms = () => {
    if (programsSectionRef.current) {
      programsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const scrollToPartnership = () => {
    partnershipRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTraining = () => {
    trainingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToReviews = () => {
    reviewsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAdvantages = () => {
    advantagesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCoverage = () => {
    coverageRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToBlk = () => {
    blkRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  const programData = {
    1: {
      title: "Les Privat TK/K1/K2",
      image: "/program-les1.webp",
      description:
        "Program Calistung dirancang untuk membangun fondasi membaca, menulis, dan berhitung anak sejak usia dini, dengan pendekatan yang menyenangkan dan dibimbing oleh guru profesional.",
      features: {
        "kurikulum nasional": ["Membaca", "Menulis", "Berhitung"],
        "kurikulum internasional": [
          "Phonics",
          "Reading",
          "Spelling",
          "Counting",
        ],
      },
      benefits: [
        "Guru Berpengalaman",
        "Waktu Fleksibel",
        "Belajar di Rumah",
        "Laporan Berkala",
      ],
      duration: "1-2 jam/sesi",
      frequency: "2-5 kali/minggu",
      link: "/program/calistung",
    },
    2: {
      title: "Les Privat SD / Primary School",
      image: "/program-les2.webp",
      description:
        "Program Les Privat untuk Sekolah Dasar bertujuan mengembangkan minat belajar anak sejak dini dan memotivasi mereka untuk terus berprestasi. Materi disesuaikan dengan kurikulum.",
      features: {
        "kurikulum nasional": ["Merdeka", "K13", "Nasional Plus"],
        "kurikulum internasional": ["IB", "Cambridge", "SPC", "IPC"],
      },
      benefits: [
        "Kurikulum Lengkap",
        "Guru Spesialis SD",
        "Metode Menyenangkan",
        "Pelacakan Kemajuan Belajar",
      ],
      duration: "1.5-2 jam/sesi",
      frequency: "3-5 kali/minggu",
      link: "/program/sd",
    },
    3: {
      title: "Les Privat SMP / Secondary School",
      image: "/program-les3.webp",
      description:
        "Les Privat SMP membantu siswa meningkatkan kemampuan belajar sekaligus mengembangkan potensi diri. Materi disesuaikan dengan kurikulum Nasional maupun Internasional sesuai standar sekolah.",
      features: {
        "kurikulum nasional": ["Merdeka", "K13", "Nasional Plus"],
        "kurikulum internasional": ["IB", "Cambridge"],
      },
      benefits: [
        "Persiapan Ujian Nasional",
        "Pemahaman Konsep Mendalam",
        "Latihan Soal Intensif",
        "Bimbingan Karir",
      ],
      duration: "2 jam/sesi",
      frequency: "3-6 kali/minggu",
      link: "/program/smp",
    },
    4: {
      title: "Les Privat SMA / Junior College",
      image: "/program-les4.webp",
      description:
        "Program intensif untuk siswa SMA dengan fokus pada persiapan masuk perguruan tinggi dan penguasaan materi yang kompleks.",
      features: {
        "kurikulum nasional": ["Merdeka", "K13", "Nasional Plus"],
        "kurikulum internasional": ["IB", "Cambridge", "IGCSE"],
      },
      benefits: [
        "Persiapan UTBK",
        "Pemantapan Materi",
        "Try Out Berkala",
        "Konsultasi Karir",
      ],
      duration: "2-2.5 jam/sesi",
      frequency: "4-6 kali/minggu",
      link: "/program/sma",
    },
    5: {
      title: "Les Privat A/AS Level & IB DP",
      image: "/program-les5.webp",
      description:
        "Program khusus untuk siswa internasional yang mengikuti kurikulum A-Level, AS-Level, atau International Baccalaureate Diploma Programme.",
      features: {
        Subject: [
          "Accounting",
          "Arabic",
          "Biology",
          "Business",
          "Chemistry",
          "Chinese - Language & Literature",
          "Economics",
          "English - Language & Literature",
          "French - Language & Literature",
          "Geography",
          "German - Language & Literature",
          "History",
          "Mathematics",
          "Mathematics - Further",
          "Physics",
          "Sociology",
        ],
      },
      benefits: [
        "Pengajar Internasional",
        "Materi Original",
        "Prediksi Nilai",
        "Bantuan Aplikasi Universitas",
      ],
      duration: "2-3 jam/sesi",
      frequency: "2-4 kali/minggu",
      link: "/program/level",
    },
    6: {
      title: "Les Privat Persiapan TKA",
      image: "/program-les6.webp",
      description:
        "Persiapan khusus untuk Tes Kemampuan Akademik (TKA) bagi siswa SD, SMP, dan SMA yang ingin masuk sekolah favorit.",
      features: {
        "mapel wajib": ["Matematika", "Bahasa Indonesia", "Bahasa Inggris"],
        "mapel pilihan": [
          "Matematika Tingkat Lanjut",
          "Fisika",
          "Kimia",
          "Biologi",
          "Ekonomi",
          "Sosiologi",
          "Geografi",
          "Sejarah",
          "Pendidikan Pancasila/PPKn",
          "Projek kreatif dan Kewirausahaan",
          "Bahasa Indonesia Tingkat Lanjut",
          "Bahasa Inggris Tingkat Lanjut",
          "Antropologi",
          "Bahasa Jepang",
          "Bahasa Mandarin",
          "Bahasa Korea",
          "Bahasa Arab",
          "Bahasa Prancis",
          "Bahasa Jerman",
        ],
      },
      benefits: [
        "Bank Soal Lengkap",
        "Simulasi Berkala",
        "Analisis Kelemahan",
        "Strategi Mengerjakan",
      ],
      duration: "2 jam/sesi",
      frequency: "3-5 kali/minggu",
      link: "/program/tka",
    },
    7: {
      title: "Les Privat Persiapan UTBK",
      image: "/program-les7.webp",
      description:
        "Program intensif persiapan Ujian Tulis Berbasis Komputer (UTBK) untuk masuk perguruan tinggi negeri.",
      features: {
        "mata uji": ["TPA SOSHUM", "TPA SAINTEK", "TPS"],
      },
      benefits: [
        "Try Out Rutin",
        "Pembahasan Soal",
        "Tips dan Trik",
        "Konsultasi Pilihan Jurusan",
      ],
      duration: "2.5-3 jam/sesi",
      frequency: "5-7 kali/minggu",
      link: "/program/utbk",
    },
    8: {
      title: "Les Privat TOEFL/IELTS Prep",
      image: "/program-les8.webp",
      description:
        "Persiapan tes bahasa Inggris internasional TOEFL dan IELTS dengan metode terbaik untuk mencapai skor maksimal.",
      features: {
        subject: ["LISTENING", "READING", "SPEAKING", "WRITING"],
      },
      benefits: [
        "Simulasi Tes Real",
        "Umpan Balik Personal",
        "Garansi Skor",
        "Jadwal Fleksibel",
      ],
      duration: "2 jam/sesi",
      frequency: "2-4 kali/minggu",
      link: "/program/toefl",
    },
    9: {
      title: "Les Privat Musik",
      image: "/program-les9.webp",
      description:
        "Belajar musik privat dengan instruktur profesional untuk berbagai alat musik dan vokal.",
      features: {
        materi: ["Praktikum Langsung dengan Profesional"],
      },
      benefits: [
        "Guru Profesional",
        "Materi Fleksibel",
        "Kesempatan Tampil",
        "Sertifikat",
      ],
      duration: "1 jam/sesi",
      frequency: "1-3 kali/minggu",
      link: "/program/musik",
    },
    10: {
      title: "Les Privat Bahasa Inggris",
      image: "/program-inggris.webp",
      description:
        "Program les bahasa Inggris untuk semua level, dari dasar hingga mahir. Fokus pada practical English untuk percakapan sehari-hari, akademik, maupun profesional dengan metode komunikatif yang efektif.",
      features: {
        "level pembelajaran": [
          "Dasar (A1-A2)",
          "Menengah (B1-B2)",
          "Mahir (C1-C2)",
        ],
        "fokus utama": [
          "Conversation",
          "Grammar",
          "Vocabulary",
          "Pronunciation",
        ],
      },
      benefits: [
        "Pengajar Certified",
        "Focus on Speaking",
        "Customized Materials",
        "Practical English",
      ],
      duration: "1.5-2 jam/sesi",
      frequency: "2-3 kali/minggu",
      link: "/program/bahasainggris",
    },
    11: {
      title: "Les Privat Bahasa Jerman",
      image: "/program-jerman.webp",
      description:
        "Kuasai bahasa Jerman dengan metode terstruktur untuk studi, karir, atau persiapan hidup di negara berbahasa Jerman. Fokus pada penguasaan grammar, vocabulary, dan percakapan.",
      features: {
        "level CEFR": ["A1-A2 (Dasar)", "B1-B2 (Menengah)", "C1-C2 (Mahir)"],
        "persiapan ujian": ["TestDaF", "Goethe Zertifikat", "DSH"],
      },
      benefits: [
        "Pengajar Berpengalaman",
        "Kurikulum Goethe Institut",
        "Fokus Grammar & Pronunciation",
        "Persiapan Ujian Internasional",
      ],
      duration: "1.5-2 jam/sesi",
      frequency: "2-3 kali/minggu",
      link: "/program/bahasajerman",
    },
    12: {
      title: "Les Privat Bahasa Mandarin",
      image: "/program-mandarin.webp",
      description:
        "Kuasai bahasa Mandarin dengan metode terbaik untuk bisnis, studi, atau komunikasi sehari-hari. Penekanan pada pengucapan 4 tones yang tepat dan penguasaan karakter Hanzi.",
      features: {
        "level HSK": [
          "HSK 1-2 (Dasar)",
          "HSK 3-4 (Menengah)",
          "HSK 5-6 (Mahir)",
        ],
        "fokus pembelajaran": ["Pinyin", "Tones", "Hanzi", "Conversation"],
      },
      benefits: [
        "Pengajar Native Speaker",
        "Metode Hafal Hanzi Efektif",
        "Fokus 4 Tones",
        "Persiapan Ujian HSK",
      ],
      duration: "1.5-2 jam/sesi",
      frequency: "2-3 kali/minggu",
      link: "/program/bahasamandarin",
    },
    13: {
      title: "Les Privat Bahasa Jepang",
      image: "/program-jepang.webp",
      description:
        "Pelajari bahasa Jepang dengan metode terstruktur untuk berbagai keperluan mulai dari hobi hingga persiapan karir di Jepang. Pembelajaran sistematis huruf Hiragana, Katakana, Kanji, dan tata bahasa.",
      features: {
        "level JLPT": ["N5 (Dasar)", "N4-N3 (Menengah)", "N2-N1 (Mahir)"],
        "materi utama": [
          "Hiragana/Katakana",
          "Kanji",
          "Grammar",
          "Conversation",
        ],
      },
      benefits: [
        "Pengajar Berpengalaman",
        "Metode Sistematis Kanji",
        "Fokus Percakapan",
        "Persiapan JLPT",
      ],
      duration: "1.5-2 jam/sesi",
      frequency: "2-3 kali/minggu",
      link: "/program/bahasajepang",
    },
    14: {
      title: "Les Privat Coding (Anak-anak)",
      image: "/program-coding.webp",
      description:
        "Kelas coding anak-anak adalah program pembelajaran yang memperkenalkan konsep dasar pemrograman dan logika komputer secara menyenangkan dan interaktif, sesuai usia mereka.",
      features: {
        "Kurikulum Nasional": [
          "Dasar-dasar algoritma dan logika pemrograman",
          "Pengenalan bahasa pemrograman ringan",
          "Membuat game sederhana dan animasi",
          "Aspek keamanan dan etika digital",
        ],
      },
      benefits: [
        "Instruktur Praktisi IT",
        "Project-based Learning",
        "Kurikulum Standar Industri",
        "Portfolio Project",
      ],
      duration: "1.5-2 jam/sesi",
      frequency: "1-3 kali/minggu",
      link: "/program/coding",
    },
    15: {
      title: "Les Privat Kedinasan",
      image: "/program-kedinasan.webp",
      description:
        "Kelas kedinasan merupakan program pelatihan yang berfokus pada pengembangan kompetensi tertentu yang biasanya terkait dengan kebutuhan instansi pemerintah atau lembaga tertentu.",
      features: {
        "Kurikulum Nasional": [
          "Matematika",
          "IPA (Fisika, Kimia, Biologi)",
          "IPS",
          "Bahasa Indonesia",
          "Bahasa Inggris",
          "Keterampilan Fisik dan Olahraga",
        ],
      },
      benefits: [
        "Pengajar Alumni Kedinasan",
        "Bank Soal Lengkap",
        "Simulasi CAT",
        "Bimbingan Lengkap",
      ],
      duration: "2-3 jam/sesi",
      frequency: "4-6 kali/minggu",
      link: "/program/kedinasan",
    },
    16: {
      title: "Program Supercamp UTBK 2026",
      image: "/SUPERCAMP-1.webp",
      image2: "/SUPERCAMP-2.webp",
      description:
        "Program intensif persiapan UTBK 2026 dengan sistem camp untuk siswa SMA kelas 12 dan gap year. Program berbasis islami dengan target skor UTBK >610 dan lolos Top 10 PTN Favorit.",
      features: {},
      benefits: [],
      duration: "1 bulan intensif",
      frequency: "6 hari/minggu",
      link: "/program/supercamp",
      isBrosur: true,
      isFullWidth: true,
      hasTwoImages: true,
    },
    17: {
      title: "Les Privat Mengaji",
      image: "/program-les11.webp",
      description:
        "Membantu siswa belajar membaca Al-Qur'an dengan tartil dan memahami dasar-dasar ilmu tajwid. Pembelajaran disesuaikan dengan usia dan kemampuan, mulai dari Iqra hingga Al-Qur'an.",
      features: {
        materi: ["Praktikum Langsung dengan Profesional"],
      },
      benefits: [
        "Guru Berkompeten",
        "Metode Sesuai Usia",
        "Laporan Perkembangan",
        "Waktu Fleksibel",
      ],
      duration: "1-1.5 jam/sesi",
      frequency: "2-5 kali/minggu",
      link: "/program/mengaji",
    },
    18: {
      title: "Les Private Online",
      image: "/program-les12.png",
      description:
        "Program Les Privat Online memberikan kemudahan belajar dari rumah dengan bimbingan personal secara daring. Pembelajaran tetap interaktif, terstruktur, dan disesuaikan dengan kebutuhan siswa.",
      features: {
        "kurikulum nasional": ["Merdeka", "K13", "Nasional Plus"],
        "kurikulum internasional": ["IB", "Cambridge"],
      },
      benefits: [
        "Lokasi Fleksibel",
        "Akses Global",
        "Teknologi Modern",
        "Biaya Efisien",
      ],
      duration: "1-2 jam/sesi",
      frequency: "2-5 kali/minggu",
      link: "/program/online",
    },
    19: {
      title: "Les Grup Privat",
      image: "/program-les13.png",
      description:
        "Program Les Privat Group Belajar dirancang untuk siswa yang ingin belajar bersama dalam kelompok kecil secara efektif. Suasana belajar kolaboratif membantu siswa saling memotivasi.",
      features: {
        "kurikulum nasional": ["Merdeka", "K13", "Nasional Plus"],
        "kurikulum internasional": ["IB", "Cambridge"],
      },
      benefits: [
        "Harga Terjangkau",
        "Komunitas Belajar",
        "Perspektif Beragam",
        "Keterampilan Kolaboratif",
      ],
      duration: "2-3 jam/sesi",
      frequency: "2-4 kali/minggu",
      link: "/program/grup",
    },
    20: {
      title: "Persiapan Masuk SMA Favorit",
      image: "/sekolah.jpg",
      description:
        "Program persiapan khusus untuk masuk sekolah unggulan seperti MAN IC, Labschool, NJIS, dan BPK Penabur dengan sistem belajar intensif dan garansi keterima.",
      features: {
        "KURIKULUM NASIONAL": [
          "Penguasaan Materi Akademik Inti",
          "Latihan Soal Khusus Setiap Sekolah",
          "Pembelajaran Intensif Logika & Penalaran",
          "Try Out Berkala (Simulasi Tes Asli)",
          "Kelas Strategi Menjawab Soal",
          "Penguatan Mental & Skill Psikotes",
          "Bimbingan Personal Mentor",
        ]
      },
      benefits: [
        "Lebih Siap Menghadapi Tes Masuk Sekolah Unggulan",
        "Bimbingan Personal 1 Siswa 1 Mentor",
        "Materi Lengkap Sesuai Kurikulum Seleksi",
        "Try Out Rutin + Analisis Nilai Lengkap",
        "Peningkatan Kecepatan & Ketepatan Menjawab",
        "Mulai Terbiasa dengan Sistem Tes Sekolah Favorit",
        "Meningkatkan Kepercayaan Diri",
        "Lingkungan Belajar yang Seru & Supportif",
        " Akses Modul Eksklusif",
      ],
      duration: "-",
      frequency: "-",
      link: "/program/masuk-sma"
    },
    21: {
      title: "Les SIMAK UI Regular/Internasional",
      image: "/simakui.jpg",
      description:
        "Program ini khusus dirancang untuk membantu siswa mempersiapkan diri menghadapi SIMAK UI, baik jalur Reguler maupun Internasional.",
      features: {
        "kelas Regular": [
          "Saintek: Matematika IPA, Fisika, Kimia, Biologi, Penalaran MTK, Pemahaman Bacaan & Menulis (PBM), Penalaran Umum, Literasi Bahasa Inggris (Reading & Grammar)",
          "Soshum: Ekonomi, Geografi, Sejarah, Sosiologi, Penalaran Umum, Pemahaman Bacaan, Literasi Bahasa Inggris"
        ],

        "kelas internasional": [
          "English Academic Reading",
          "English Grammar & Structure",
          "English Writing",
          "Logical Reasoning",
          "Quantitative Reasoning",
          "Critical Thinking",
          "Math Reasoning (English)"
        ]
      },

      benefits: [
        "Materi Fokus & Tepat Sasaran",
        "Tryout Berkala + Pembahasan Lengkap",
        "Strategi Menjawab Soal Berbasis Analisis",
        "Modul Original & Update Sesuai Kisi-Kisi Terbaru",
        "Monitoring Progress & Evaluasi Per Sesi",
      ],
      duration: "1.5-2 jam/sesi",
      frequency: "3-5 kali/minggu",
      link: "/program/lessimak-ujianmandiri"
    },
    22: {
      title: "Balai Latihan Kerja dan sertifikasi",
      image: "/KERJA.jpg",
      description:
        "Program kerja dan sertifikasi dirancang untuk memberikan pengalaman pembelajaran yang terarah, praktik langsung, serta sertifikasi resmi yang memperkuat kompetensi dan daya saing peserta",
      features: {
        "Balai Latihan Kerja": [
          "Penyusunan Modul Pembelajaran",
          "Program Pendampingan Intensif",
          "Review dan Analisis Kemampuan",
          "Pengembangan Bank Soal Internal",
          "Kelas Pembekalan Mental & Manajemen Waktu",
          "Konsultasi Akademis",
        ],
        "Sertifikasi": [
          "Sertifikasi Kompetensi Belajar",
          "Sertifikasi Penyelesaian Program / Bootcamp",
          "Sertifikasi Penguasaan Materi Khusus",
          "Sertifikasi Mentor / Asisten Pengajar",
          "Sertifikasi Tryout Ranking",
          "Sertifikasi Kelulusan Program Intensif",
        ]
      },
      benefits: [
        "Kurikulum Terstruktur & Profesional",
        "Peningkatan Skill Secara Nyata",
        "Sertifikat Resmi & Terverifikasi",
        "Pembimbing Berpengalaman",
        "Monitoring Progress Berkala",
        "Akses Bank Soal & Materi Eksklusif",
        "Tryout & Ujian Sertifikasi",
        "Fleksibilitas Belajar (Online & Offline)",
      ],
      duration: "1,5-2 jam/sesi",
      frequency: "2-3 kali seminggu",
      link: "/program/pelatihan-kerja"
    },
    23: {
      title: "Bimbingan Skripsi",
      image: "/skripsi.jpg",
      description:
        "Program Bimbingan Skripsi ini membantu mahasiswa menyelesaikan skripsi secara cepat, terarah, dan sesuai pedoman kampus. Mulai dari penentuan judul, penyusunan proposal, pengolahan data, hingga persiapan sidang.",
      features: {
        "Paket Bimbingan Skripsi": [
          "Paket BAB 1 (Pendahuluan)",
          "Paket BAB 1–3 (Pendahuluan + Teori + Metode)",
          "Paket BAB 4 (Hasil & Pembahasan)",
          "Paket BAB 5 (Kesimpulan & Saran)",
          "Paket FULL SKRIPSI (BAB 1–5)",
          "Paket Revisi Skripsi",
          "Paket Penyusunan PowerPoint Sidang",
        ]
      },
      benefits: [
        "Pendampingan lengkap dari Bab 1 sampai Bab 5",
        "Revisi sampai ACC dosen",
        "Bimbingan penulisan yang sesuai pedoman kampus",
        "Analisis data (Manual / SPSS / Excel sesuai kebutuhan)",
        "Pembuatan PowerPoint + Latihan Presentasi Sidang",
      ],
      duration: "1,5-2 jam/sesi",
      frequency: "2-3 kali seminggu",
      link: "/program/bimbingan-skripsi"
    },
    24: {
      title: "Les Privat Ujian Mandiri",
      image: "/study.jpg",
      description:
        "Program ini dirancang khusus untuk membantu siswa mempersiapkan diri menghadapi berbagai Ujian Mandiri Perguruan Tinggi Negeri, dengan materi terstruktur, pendampingan intensif, dan strategi belajar yang efektif.",
      features: {
        "kelas Regular": [
          "Saintek: Matematika IPA, Fisika, Kimia, Biologi, Penalaran MTK, Pemahaman Bacaan & Menulis (PBM), Penalaran Umum, Literasi Bahasa Inggris (Reading & Grammar)",
          "Soshum: Ekonomi, Geografi, Sejarah, Sosiologi, Penalaran Umum, Pemahaman Bacaan, Literasi Bahasa Inggris"
        ],

        "kelas internasional": [
          "English Academic Reading",
          "English Grammar & Structure",
          "English Writing",
          "Logical Reasoning",
          "Quantitative Reasoning",
          "Critical Thinking",
          "Math Reasoning (English)"
        ]
      },

      benefits: [
        "Materi Fokus & Tepat Sasaran",
        "Tryout Berkala + Pembahasan Lengkap",
        "Strategi Menjawab Soal Berbasis Analisis",
        "Modul Original & Update Sesuai Kisi-Kisi Terbaru",
        "Monitoring Progress & Evaluasi Per Sesi",
      ],
      duration: "1.5-2 jam/sesi",
      frequency: "3-5 kali/minggu",
      link: "/program/ujian-mandiri"
    },
    25: {
      title: "Bimbel Offline",
      image: "/bimbel.jpg",
      description:
        "Program bimbingan offline kami dirancang untuk memberikan pengalaman belajar langsung yang lebih fokus dan interaktif. Siswa dibimbing oleh tutor berpengalaman dalam suasana belajar yang kondusif, sehingga memudahkan pemahaman materi secara mendalam. Dengan metode tatap muka, siswa dapat bertanya langsung, mendapatkan penjelasan detail, serta pendampingan intensif setiap sesi.",
      features: {
        "TK": [
          "Calistung (Membaca, Menulis, Berhitung)",
          "Motorik halus & koordinasi",
          "Pengembangan logika & problem solving dasar",
          "Phonics & pengenalan Bahasa Inggris dasar",
          "Pembiasaan akademik sebelum masuk SD"
        ],
        "SD": [
          "Matematika (dasar – menengah)",
          "Bahasa Indonesia (membaca, menulis, pemahaman teks)",
          "IPA & IPS dasar",
          "Penguatan konsep logika & numerasi",
          "Persiapan ujian sekolah / AKM",
          "Bahasa Inggris dasar–menengah (vocab, grammar, reading)"
        ],
        "SMP": [
          "Matematika (aljabar, geometri, aritmetika)",
          "Bahasa Indonesia (teks cerita, eksposisi, analisis bacaan)",
          "IPA (Fisika & Biologi dasar)",
          "IPS (Ekonomi, Geografi, Sejarah)",
          "Bahasa Inggris (reading, grammar, writing)",
          "Persiapan PAT, PAS, & seleksi masuk SMA favorit"
        ],
        "SMA": [
          "Matematika Wajib & Minat",
          "Fisika / Kimia / Biologi (Saintek)",
          "Ekonomi / Sosiologi / Geografi / Sejarah (Soshum)",
          "Bahasa Indonesia (analisis teks, argumentasi, literasi)",
          "Bahasa Inggris (academic reading & grammar)",
          "Persiapan UTBK–SNBT, ujian sekolah, & masuk PTN"
        ]
      },

      benefits: [
        "Kurikulum Terstruktur & Tepat Sasaran",
        "Tutor Ahli & Berpengalaman di Bidangnya",
        "Pembelajaran Fleksibel (Offline & Online)",
        "Monitoring Progress Setiap Minggu",
        "Monitoring Progress Setiap Minggu",
        "Pendampingan Intensif Sampai Mahir",
      ],
      duration: "1.5-2 jam/sesi",
      frequency: "3-5 kali/minggu",
      link: "/bimbel"
    },
    26: {
      title: "Bimbel Online",
      image: "/bimbel.jpg",
      description:
        "Program bimbingan online kami menyediakan fleksibilitas belajar dari mana saja tanpa mengurangi kualitas pembelajaran. Siswa belajar melalui video meeting interaktif, materi digital, serta tugas dan evaluasi yang terstruktur. Tutor tetap membimbing secara real-time, memastikan setiap siswa memahami materi dengan baik meski belajar dari rumah",
      features: {
        "TK": [
          "Calistung (Membaca, Menulis, Berhitung)",
          "Motorik halus & koordinasi",
          "Pengembangan logika & problem solving dasar",
          "Phonics & pengenalan Bahasa Inggris dasar",
          "Pembiasaan akademik sebelum masuk SD"
        ],
        "SD": [
          "Matematika (dasar – menengah)",
          "Bahasa Indonesia (membaca, menulis, pemahaman teks)",
          "IPA & IPS dasar",
          "Penguatan konsep logika & numerasi",
          "Persiapan ujian sekolah / AKM",
          "Bahasa Inggris dasar–menengah (vocab, grammar, reading)"
        ],
        "SMP": [
          "Matematika (aljabar, geometri, aritmetika)",
          "Bahasa Indonesia (teks cerita, eksposisi, analisis bacaan)",
          "IPA (Fisika & Biologi dasar)",
          "IPS (Ekonomi, Geografi, Sejarah)",
          "Bahasa Inggris (reading, grammar, writing)",
          "Persiapan PAT, PAS, & seleksi masuk SMA favorit"
        ],
        "SMA": [
          "Matematika Wajib & Minat",
          "Fisika / Kimia / Biologi (Saintek)",
          "Ekonomi / Sosiologi / Geografi / Sejarah (Soshum)",
          "Bahasa Indonesia (analisis teks, argumentasi, literasi)",
          "Bahasa Inggris (academic reading & grammar)",
          "Persiapan UTBK–SNBT, ujian sekolah, & masuk PTN"
        ]
      },

      benefits: [
        "Kurikulum Terstruktur & Tepat Sasaran",
        "Tutor Ahli & Berpengalaman di Bidangnya",
        "Pembelajaran Fleksibel (Offline & Online)",
        "Monitoring Progress Setiap Minggu",
        "Monitoring Progress Setiap Minggu",
        "Pendampingan Intensif Sampai Mahir",
      ],
      duration: "1.5-2 jam/sesi",
      frequency: "3-5 kali/minggu",
      link: "/bimbel",
    },
    27: {
      title: "Shadow Teacher",
      image: "/shadowteacher.jpg",
      description:
        "Program pendampingan khusus untuk anak berkebutuhan khusus (ABK) di sekolah. Shadow Teacher membantu siswa fokus, adaptasi, mengikuti instruksi guru, dan mengembangkan kemandirian belajar.",
      features: {
        "Paket Pendampingan": [
          "Basic Full Day - Pendampingan fokus & adaptasi ringan",
          "Regular Full Day - ABK ringan/sedang dengan pendampingan akademik & perilaku",
          "Intensive Full Day - ABK sedang-berat dengan program individual (IEP)",
        ],
      },
      benefits: [
        "Pendamping Berpengalaman",
        "Koordinasi dengan Guru Kelas",
        "Laporan Perkembangan Harian",
        "Program Individual (IEP)",
        "Pendampingan Emosi & Perilaku",
      ],
      duration: "Full Day (jam sekolah)",
      frequency: "20 hari/bulan",
      link: "/program/shadow-teacher",
    }
  };

  const currentProgram = programData[activeProgram];

  const testimonials = [
    {
      id: 1,
      name: "Andi, Kelas 9 SMP",
      rating: 5,
      text: "Belajar di sini seru banget, guru-gurunya ramah dan materi mudah dipahami. Setelah beberapa bulan ikut les, nilai saya meningkat pesat terutama di Matematika dan IPA.",
      avatar: "/person-icon.png",
    },
    {
      id: 2,
      name: "Bunda Sinta",
      rating: 5,
      text: "Nilai anak saya meningkat setelah ikut les privat di sini. Terima kasih Cakrawala EduCentre, anak saya jadi lebih semangat belajar.",
      avatar: "/person-icon.png",
    },
    {
      id: 3,
      name: "Dimas, Kelas 11 SMA",
      rating: 5,
      text: "Metode belajarnya sangat menyenangkan dan tidak membosankan. Guru selalu sabar menjelaskan sampai benar-benar paham.",
      avatar: "/person-icon.png",
    },
    {
      id: 4,
      name: "Rani, Kelas 7 SMP",
      rating: 5,
      text: "Awalnya saya sering kesulitan memahami pelajaran, tapi sejak ikut les ini, saya merasa jauh lebih mudah mengikuti materi.",
      avatar: "/person-icon.png",
    },
    {
      id: 5,
      name: "Budi, Alumni",
      rating: 5,
      text: "Les privat ini benar-benar membantu saya masuk PTN favorit. Saya dibimbing secara intensif dan materi disampaikan dengan cara yang mudah dipahami.",
      avatar: "/person-icon.png",
    },
  ];

  const partners = [
    {
      id: 1,
      name: "Meisya",
      logo: "/partner1.jpg",
      category: "Partnership",
    },
    {
      id: 2,
      name: "Rafi Affan",
      logo: "/partner2.jpg",
      category: "Partnership",
    },
    {
      id: 3,
      name: "Alzia Archovinesha",
      logo: "/partner3.jpg",
      category: "Partnership",
    },
    {
      id: 4,
      name: "Busurnusa",
      logo: "/busurnusa.webp",
      category: "Community",
    },
    {
      id: 5,
      name: "Januari (Rahma)",
      logo: "/partner4.jpg",
      category: "Community",
    },
    {
      id: 6,
      name: "Mas Guru (Budi)",
      logo: "/partner5.jpg",
      category: "Community",
    },
    {
      id: 7,
      name: "Ris Ainun",
      logo: "/partner6.jpg",
      category: "Community",
    },
    {
      id: 8,
      name: "Risma Tandjung",
      logo: "/partner7.jpg",
      category: "Community",
    },
  ];

  const worktogether = [
    {
      id: 1,
      name: "MTSN 24 JAKARTA",
      logo: "/mtsn24.jpg",
    },

    {
      id: 2,
      name: "SMPN 40 KOTA BEKASI ",
      logo: "/smpn24.jpg",
    },

    {
      id: 3,
      name: "SMPN 14 TAMBUN SELATAN",
      logo: "/smpn14tambunselatan.jpg",
    },

    {
      id: 4,
      name: "MTS AS SUBKIYAH",
      logo: "/mtsassubkiyah.jpg",
    },

    {
      id: 5,
      name: "MTS TINTA EMAS",
      logo: "/mtstintaemas.png",
    },

    {
      id: 6,
      name: "SDIT REJIS",
      logo: "/sditrejis.jpg",
    },

    {
      id: 7,
      name: "SMK TERATAI PUTIH",
      logo: "/smkterataiputih.png",
    },

    {
      id: 8,
      name: "SMP TERATAI PUTIH",
      logo: "/smpterataiputih.jpg",
    },

  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="cakrawala-star-small">
          ★
        </span>
      );
    }

    return stars;
  };

  const handleProgramClick = (programNumber) => {
    setActiveProgram(programNumber);
  };

  const handleDetailButtonClick = () => {
    if (currentProgram?.link) {
      window.location.href = currentProgram.link;
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/6281324868790", "_blank");
  };

  const handleKonsultasiClick = () => {
    window.open("https://wa.me/6281324868790", "_blank");
  };

  const handlePromoClick = () => {
    window.location.href = "/biaya-les";
  };

  const instagramPosts = [
    "https://www.instagram.com/p/DL62snzhaJI/?img_index=2",
    "https://www.instagram.com/p/DL62snzhaJI/?img_index=3",
    "https://www.instagram.com/p/DL62snzhaJI/?img_index=4",
    "https://www.instagram.com/p/DL62snzhaJI/?img_index=5",
    "https://www.instagram.com/p/DL62snzhaJI/?img_index=6",
    "https://www.instagram.com/p/DL62snzhaJI/?img_index=7",
    "https://www.instagram.com/p/DL62snzhaJI/?img_index=8",
    "https://www.instagram.com/p/DNwtaGfZLG8/",
  ];

  const handleInstagramClick = (index) => {
    window.open(instagramPosts[index], "_blank");
  };

  return (

    <div className="cakrawala-homepage" >
      {/* Hero Section */}
      < section className="cakrawala-hero" >
        <div className="cakrawala-hero-container">
          <div className="cakrawala-hero-overlay">
            <div className="cakrawala-hero-content">
              <div className="cakrawala-hero-text">
                <h2 align="center">Les Privat Cakrawala Educentre</h2>
                <p align="center">
                  Lembaga penyedia layanan pendidikan dalam bentuk les privat
                  siswa dari sekolah nasional maupun internasional (KI/K2,
                  Primary, Secondary, Junior College) dengan pendekatan belajar
                  yang disesuaikan dengan kebutuhan dan kemampuan masing-masing
                  siswa
                </p>
              </div>
            </div>
          </div>

          <div className="cakrawala-hero-external-buttons">

            <div className="cakrawala-button-group">
              <button
                className="cakrawala-btn-modern-hero cakrawala-primary-modern"
                onClick={scrollToPrograms}
              >
                <span className="cakrawala-btn-icon-hero">📚</span>
                <span>Lihat Program Kelas</span>
              </button>
            </div>

            <div className="cakrawala-button-group">
              <button
                className="cakrawala-btn-modern-hero cakrawala-secondary-modern"
                onClick={scrollToReviews}
              >
                <span className="cakrawala-btn-icon-hero">⭐</span>
                <span>Lihat Ulasan</span>
              </button>
            </div>

            <div className="cakrawala-button-group">
              <button
                className="cakrawala-btn-modern-hero cakrawala-secondary-modern"
                onClick={scrollToAdvantages}
              >
                <span className="cakrawala-btn-icon-hero">🔥</span>
                <span>Keunggulan</span>
              </button>
            </div>

            <div className="cakrawala-button-group">
              <button
                className="cakrawala-btn-modern-hero cakrawala-secondary-modern"
                onClick={scrollToCoverage}
              >
                <span className="cakrawala-btn-icon-hero">🗺️</span>
                <span>Cakupan Area</span>
              </button>
            </div>

            <div className="cakrawala-button-group">
              <button
                className="cakrawala-btn-modern-hero cakrawala-secondary-modern"
                onClick={scrollToBlk}
              >
                <span className="cakrawala-btn-icon-hero">🗺️</span>
                <span>BLK & Sertifikasi</span>
              </button>
            </div>



            <div className="cakrawala-button-group">
              <button
                className="cakrawala-btn-modern-hero cakrawala-secondary-modern"
                onClick={handleKonsultasiClick}
              >
                <span className="cakrawala-btn-icon-hero">💬</span>
                <span>Konsultasi Belajar</span>
              </button>
            </div>

          </div>

        </div>
      </section >

      {/* Partnership Section */}
      < section className="cakrawala-partnership-section" >
        <div className="cakrawala-container">
          <div className="cakrawala-partnership-header">
            <h2>Kerja Sama Oleh:</h2>
          </div>

          <div className="cakrawala-partnership-slider-simple">
            <div className="cakrawala-slider-track-simple">
              {partners.map((partner) => (
                <div key={partner.id} className="cakrawala-partner-logo-simple">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="cakrawala-logo-image-simple"
                  />
                  <div className="cakrawala-logo-overlay-simple">
                    <span className="cakrawala-partner-name-simple">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
              {partners.map((partner) => (
                <div
                  key={`${partner.id}-dup`}
                  className="cakrawala-partner-logo-simple"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="cakrawala-logo-image-simple"
                  />
                  <div className="cakrawala-logo-overlay-simple">
                    <span className="cakrawala-partner-name-simple">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/*section work together */}
      < div className="cakrawala-school-header" >
        <h2>Kerja Sama Oleh:</h2>
      </div >
      <div className="cakrawala-school-list">
        {worktogether.map((school) => (
          <div key={school.id} className="cakrawala-school-item">
            <img
              src={school.logo}
              alt={school.name}
              title={school.name}
              className="cakrawala-school-logo"
            />
          </div>
        ))}
      </div>



      {/* Stats Section */}
      <section className="cakrawala-stats">
        <div className="cakrawala-stats-grid">
          <div className="cakrawala-stats-item">
            <h3>100+</h3>
            <p>Schools</p>
            <span>Sekolah</span>
          </div>
          <div className="cakrawala-stats-item">
            <h3>3100+</h3>
            <p>Teacher</p>
            <span>Pengajar</span>
          </div>
          <div className="cakrawala-stats-item">
            <h3>19</h3>
            <p>Programs</p>
            <span>Program</span>
          </div>
          <div className="cakrawala-stats-item">
            <h3>8</h3>
            <p>Years</p>
            <span>Berdiri</span>
          </div>
        </div>
      </section>

      {/* Free Trial Bimbel Section */}
      <section className="cakrawala-webinar-section" ref={blkRef}>
        <div className="cakrawala-container">
          <div className="cakrawala-webinar-content">
            <div className="cakrawala-webinar-text">
              <div className="cakrawala-section-badge">
                <span className="cakrawala-badge-icon">🎓</span>
                <span>KELAS PELATIH</span>
              </div>
              <h2 className="cakrawala-webinar-title">
                PELATIHAN DAN {""}
                <span className="cakrawala-highlight">SERTIFIKASI</span>
              </h2>
              <p className="cakrawala-webinar-description">
                Balai Pelatihan Kerja adalah lembaga resmi yang menyediakan pelatihan kompetensi untuk meningkatkan keterampilan dan daya saing tenaga kerja.
              </p>
              <div className="cakrawala-webinar-actions">
                <button
                  className="cakrawala-btn-primary-webinar"
                  onClick={() => (window.location.href = "/biaya-balai")}
                >
                  <span className="cakrawala-btn-icon">📅</span>
                  Lihat Selengkapnya
                </button>
              </div>
            </div>

            <div className="cakrawala-webinar-visual">
              <div className="cakrawala-webinar-card">
                <div className="cakrawala-card-badge">🔥 BALAI LATIHAN KERJA</div>
                <img
                  src="/baru.webp"
                  alt="Free Trial Bimbel SMA"
                  className="cakrawala-webinar-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section
        className="cakrawala-programs"
        id="programs"
        ref={programsSectionRef}
      >
        <div className="cakrawala-container">
          <h2 className="cakrawala-programs-title">Pilihan Program Les</h2>

          <div className="cakrawala-programs-layout">
            {/* Sidebar Program List */}
            <div className="cakrawala-programs-sidebar">
              <div className="cakrawala-programs-grid">
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21, 22, 23, 24, 25, 26, 27
                ].map((num) => (
                  <div
                    key={num}
                    className={`cakrawala-program-card ${activeProgram === num ? "cakrawala-active" : ""
                      }`}
                    onClick={() => handleProgramClick(num)}
                  >
                    <div className="cakrawala-program-content">
                      <h3>{programData[num]?.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Detail Content */}
            <div className="cakrawala-program-detail-content">
              {currentProgram ? (
                <>
                  <div className="cakrawala-detail-header">
                    <div className="cakrawala-header-left">
                      <h3>{currentProgram.title}</h3>
                      <div className="cakrawala-program-meta">
                        <span className="cakrawala-duration">
                          ⏱️ {currentProgram.duration}
                        </span>
                        <span className="cakrawala-frequency">
                          📅 {currentProgram.frequency}
                        </span>
                      </div>
                    </div>
                    <div className="cakrawala-detail-badge">
                      {currentProgram.isBrosur
                        ? "Program Intensif"
                        : "Semua Level"}
                    </div>
                  </div>

                  {currentProgram.isBrosur ? (
                    <div
                      className={`cakrawala-brosur-full-container ${currentProgram.isFullWidth ? "cakrawala-full-width" : ""
                        }`}
                    >
                      {currentProgram.hasTwoImages ? (
                        <div className="cakrawala-two-images-container cakrawala-horizontal-layout">
                          <img
                            src={
                              currentProgram.image || "/api/placeholder/300/200"
                            }
                            alt={currentProgram.title}
                            className="cakrawala-brosur-image-full cakrawala-dual-image"
                          />
                          <img
                            src={
                              currentProgram.image2 ||
                              "/api/placeholder/300/200"
                            }
                            alt={`${currentProgram.title} - Halaman 2`}
                            className="cakrawala-brosur-image-full cakrawala-dual-image"
                          />
                        </div>
                      ) : (
                        <img
                          src={
                            currentProgram.image || "/api/placeholder/300/200"
                          }
                          alt={currentProgram.title}
                          className={`cakrawala-brosur-image-full ${currentProgram.isFullWidth
                            ? "cakrawala-full-width-image"
                            : ""
                            }`}
                        />
                      )}
                    </div>
                  ) : (
                    <div className="cakrawala-detail-hero">
                      <img
                        src={currentProgram.image || "/api/placeholder/300/200"}
                        alt={currentProgram.title}
                        className="cakrawala-program-image"
                      />
                      <div className="cakrawala-detail-description">
                        {currentProgram.description}
                      </div>
                    </div>
                  )}

                  {!currentProgram.isBrosur ? (
                    <>
                      <div className="cakrawala-detail-features">
                        {Object.entries(currentProgram.features).map(
                          ([category, items], index) => (
                            <div
                              key={index}
                              className="cakrawala-feature-section"
                            >
                              <h4>{category.toUpperCase()}</h4>
                              <ul>
                                {items.map((item, itemIndex) => (
                                  <li key={itemIndex}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>

                      {/* KEUNGGULAN PROGRAM - CLASS YANG DIPERBAIKI */}
                      <div className="cakrawala-program-advantages-section">
                        <h4 className="cakrawala-advantages-title">
                          Keunggulan Program
                        </h4>
                        <div className="cakrawala-program-advantages-grid">
                          {currentProgram.benefits.map((benefit, index) => (
                            <div
                              key={index}
                              className="cakrawala-program-advantage-item"
                            >
                              <span className="cakrawala-program-advantage-icon">
                                ✓
                              </span>
                              <span className="cakrawala-program-advantage-text">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="cakrawala-brosur-content"></div>
                  )}

                  <div className="cakrawala-detail-actions">
                    <button
                      className="cakrawala-btn-modern-hero cakrawala-primary-modern"
                      onClick={handleDetailButtonClick}
                    >
                      Lihat Detail Program
                    </button>
                    <button
                      className="cakrawala-btn-modern-hero cakrawala-secondary-modern"
                      onClick={handleKonsultasiClick}
                    >
                      Konsultasi Gratis
                    </button>
                  </div>
                </>
              ) : (
                <div className="cakrawala-no-program-selected">
                  <h3>Pilih Program Les</h3>
                  <p>
                    Silakan pilih program les dari sidebar untuk melihat detail
                    lengkap
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Reviews Section */}
      <section
        className="cakrawala-modern-reviews"
        ref={reviewsRef}
      >
        <div className="cakrawala-reviews-container">
          <div className="cakrawala-reviews-header-modern">
            <div className="cakrawala-header-content">
              <div className="cakrawala-logo-section">
                <img
                  src="/logo.png"
                  alt="Cakrawala Logo"
                  className="cakrawala-reviews-logo-modern"
                />
              </div>
              <div className="cakrawala-title-section">
                <h2 className="cakrawala-reviews-title-modern">
                  Ulasan Tentang Les Privat{" "}
                  <span className="cakrawala-highlight">
                    Cakrawala EduCentre
                  </span>
                </h2>
              </div>
              <div className="cakrawala-rating-section-modern">
                <div className="cakrawala-stars-modern">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="cakrawala-star">
                      ⭐
                    </span>
                  ))}
                </div>
                <div className="cakrawala-rating-text">
                  <span className="cakrawala-rating-score">4,5 / 5,0</span>
                  <p className="cakrawala-rating-count">Total 58 ulasan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cakrawala-instagram-testimonials">
            <div className="cakrawala-instagram-phones-horizontal">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div
                  key={index}
                  className="cakrawala-phone-container-horizontal"
                  onClick={() => handleInstagramClick(index - 1)}
                >
                  <div className="cakrawala-phone-notch-horizontal"></div>
                  <div className="cakrawala-phone-screen-horizontal">
                    <div className="cakrawala-instagram-header-horizontal">
                      <div className="cakrawala-app-title-horizontal">
                        Instagram
                      </div>
                      <div className="cakrawala-app-actions-horizontal">
                        <span>❤️</span>
                        <span>💬</span>
                      </div>
                    </div>
                    <img
                      src={`/instagram-review${index}.png`}
                      alt={`Testimoni Instagram ${index}`}
                      className="cakrawala-instagram-image-horizontal"
                    />
                    <div className="cakrawala-image-overlay-horizontal">
                      <span className="cakrawala-overlay-icon-horizontal">
                        📷
                      </span>
                      <span className="cakrawala-overlay-text-horizontal">
                        Lihat Post Asli di Instagram
                      </span>
                    </div>
                  </div>
                  <div className="cakrawala-phone-navigation-horizontal">
                    <div className="cakrawala-nav-item-horizontal cakrawala-active">
                      🏠
                    </div>
                    <div className="cakrawala-nav-item-horizontal">🔍</div>
                    <div className="cakrawala-nav-item-horizontal">➕</div>
                    <div className="cakrawala-nav-item-horizontal">❤️</div>
                    <div className="cakrawala-nav-item-horizontal">👤</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cakrawala-instagram-cta">
              <a
                href="https://www.instagram.com/cakrawalaeducentre.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="cakrawala-instagram-button"
              >
                📸 Lihat Lebih Banyak Testimoni di Instagram
              </a>
            </div>
          </div>

          <div className="cakrawala-reviews-description-modern">
            <p className="cakrawala-description-lead">
              Dengan pendampingan yang tepat, siswa mengalami:
            </p>
            <div className="cakrawala-achievement-points">
              <div className="cakrawala-achievement-item">
                <span className="cakrawala-achievement-icon">📈</span>
                <span>Kenaikan nilai yang signifikan</span>
              </div>
              <div className="cakrawala-achievement-item">
                <span className="cakrawala-achievement-icon">🧠</span>
                <span>Peningkatan pemahaman konsep</span>
              </div>
              <div className="cakrawala-achievement-item">
                <span className="cakrawala-achievement-icon">🏆</span>
                <span>Prestasi lebih baik di sekolah</span>
              </div>
            </div>
          </div>

          <div className="cakrawala-reviews-actions-modern">
            <button
              className="cakrawala-btn-modern-hero cakrawala-primary-modern"
              onClick={handleWhatsAppClick}
            >
              <span className="cakrawala-btn-icon-hero">💬</span>
              Hubungi Kami
            </button>
            <button
              className="cakrawala-btn-modern-hero cakrawala-secondary-modern"
              onClick={handlePromoClick}
            >
              <span className="cakrawala-btn-icon-hero">🔥</span>
              Lihat Promo Terkini
            </button>
          </div>

          <div className="cakrawala-testimonials-carousel">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="cakrawala-modern-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="cakrawala-testimonial-card-modern">
                    <div className="cakrawala-card-header">
                      <div className="cakrawala-rating-badge">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <div className="cakrawala-card-body">
                      <p className="cakrawala-testimonial-text">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div className="cakrawala-card-footer">
                      <h4 className="cakrawala-testimonial-name">
                        {testimonial.name}
                      </h4>
                      <div className="cakrawala-verified-badge">
                        <span className="cakrawala-verified-icon">✓</span>
                        Terverifikasi
                      </div>
                    </div>
                    <div className="cakrawala-card-hover-effect"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Cakupan Area Section */}
      <section className="cakrawala-coverage-area" ref={coverageRef}>
        <div className="cakrawala-container">
          <div className="cakrawala-coverage-header">
            <h2>Cakupan Area Layanan Jasa Les Privat</h2>
          </div>

          <div className="cakrawala-coverage-map-full">
            <div className="cakrawala-map-container">
              <MapComponent />
            </div>
          </div>

          <div className="cakrawala-coverage-content-bottom">
            <div className="cakrawala-coverage-column">
              <div className="cakrawala-coverage-text">
                <p>Selama 8 Tahun, Cakrawala Les Privat Telah</p>
                <p>Melayani Siswa Dan Siswi Dari Berbagai</p>
                <p>Macam Sekolah</p>
              </div>
              <div className="cakrawala-coverage-image">
                <img src="/logo11.png" alt="Sekolah" />
              </div>
            </div>

            <div className="cakrawala-coverage-column">
              <div className="cakrawala-coverage-text">
                <p>Pengajar Cakrawala Berasal Dari Berbagai</p>
                <p>PTN Terbaik, PTS Unggulan, Dan Perguruan</p>
                <p>Tinggi Luar Negeri</p>
              </div>
              <div className="cakrawala-coverage-image">
                <img src="/logo22.webp" alt="Pengajar" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="cakrawala-advantages" ref={advantagesRef}>
        <div className="cakrawala-container">
          <div className="cakrawala-advantages-header">
            <h2>Keunggulan Les Privat Cakrawala EduCentre</h2>
          </div>

          <div className="cakrawala-advantages-grid">
            <div className="cakrawala-advantage-item">
              <div className="cakrawala-advantage-icon">💬</div>
              <div className="cakrawala-advantage-content">
                <h3>Konsultasi Pendidikan Gratis dengan Ahli</h3>
              </div>
            </div>

            <div className="cakrawala-advantage-item">
              <div className="cakrawala-advantage-icon">👨‍🏫</div>
              <div className="cakrawala-advantage-content">
                <h3>Memilih Tutor Sendiri</h3>
              </div>
            </div>

            <div className="cakrawala-advantage-item">
              <div className="cakrawala-advantage-icon">📚</div>
              <div className="cakrawala-advantage-content">
                <h3>Modul Pembelajaran Interaktif Cakrawala</h3>
              </div>
            </div>

            <div className="cakrawala-advantage-item">
              <div className="cakrawala-advantage-icon">🔄</div>
              <div className="cakrawala-advantage-content">
                <h3>Garansi Jaminan Ganti Tutor jika tidak cocok</h3>
              </div>
            </div>

            <div className="cakrawala-advantage-item">
              <div className="cakrawala-advantage-icon">📊</div>
              <div className="cakrawala-advantage-content">
                <h3>Laporan Hasil Belajar Siswa (LHBS)</h3>
              </div>
            </div>

            <div className="cakrawala-advantage-item">
              <div className="cakrawala-advantage-icon">⭐</div>
              <div className="cakrawala-advantage-content">
                <h3>Tutor Ahli & Berkualitas</h3>
              </div>
            </div>

            <div className="cakrawala-advantage-item">
              <div className="cakrawala-advantage-icon">⏰</div>
              <div className="cakrawala-advantage-content">
                <h3>Fleksibel Jadwal Belajar</h3>
              </div>
            </div>

            <div className="cakrawala-advantage-item">
              <div className="cakrawala-advantage-icon">🎯</div>
              <div className="cakrawala-advantage-content">
                <h3>Free Trial</h3>
              </div>
            </div>

            <div className="cakrawala-advantage-item">
              <div className="cakrawala-advantage-icon">👥</div>
              <div className="cakrawala-advantage-content">
                <h3>Pendampingan Personal (Offline & Online)</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloatingButton />
    </div >
  );
}

export default HomePage;
