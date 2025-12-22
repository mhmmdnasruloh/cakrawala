import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const tutorsSimplified = [
  {
    id: 1,
    name: "Bela, S.M., M.M.",
    photo: "/tutors/tutor1.webp",
    education: "Universitas Pamulang - Manajemen Sumberdaya Manusia",
  },
  {
    id: 2,
    name: "Wa Astri, S.T.",
    photo: "/tutors/tutor2.webp",
    education: "Universitas Pertamina - Teknik Geologi",
  },
  {
    id: 3,
    name: "Viandra Nur Aqmarina, S.Si.",
    photo: "/tutors/tutor3.webp",
    education: "Universitas Diponegoro - Biologi",
  },
  {
    id: 4,
    name: "Citarani Anggraeni, S.Pd.",
    photo: "/tutors/tutor4.webp",
    education: "Universitas Negeri Jakarta - Pendidikan Ekonomi",
  },
  {
    id: 5,
    name: "Hasbiyallah, S.Si.",
    photo: "/tutors/tutor5.webp",
    education: "Universitas Indonesia - Matematika",
  },
  {
    id: 6,
    name: "Endang Susilowati, S.Sos.",
    photo: "/tutors/tutor6.webp",
    education: "Universitas - Sosial, Ekonomi, Politik, Hukum, Budaya",
  },
  {
    id: 7,
    name: "Sari Darwati, S.Hum.",
    photo: "/tutors/tutor7.webp",
    education: "UT UNJ - English Interpreter",
  },
  {
    id: 8,
    name: "Nurul Innayati, S.Psi.",
    photo: "/tutors/tutor8.webp",
    education: "UIN Sayyid Ali Rahmatullah Tulungagung - Psikologi Islam",
  },
  {
    id: 9,
    name: "Jesica Caroline Simmard, S.H.",
    photo: "/tutors/tutor9.webp",
    education: "President University - Ilmu Hukum (Bachelor of Laws)",
  },
  {
    id: 10,
    name: "Abdul Hadi, S.Pd.",
    photo: "/tutors/tutor10.webp",
    education: "Universitas Madura - Pendidikan Bahasa Indonesia",
  },
  {
    id: 11,
    name: "Aliva Rizka Riyandari, S.Si.",
    photo: "/tutors/tutor11.webp",
    education: "Universitas Diponegoro - Oseanografi/Geografi",
  },
  {
    id: 12,
    name: "Siti Durrotun Napisah, S.Hum.",
    photo: "/tutors/tutor12.webp",
    education: "UIN Syarif Hidayatullah Jakarta - Tarjamah",
  },
  {
    id: 13,
    name: "Ijtahidah Dwi Indriyani, S. Hum.",
    photo: "/tutors/tutor13.webp",
    education: "Universitas Indonesia - Sastra Inggris",
  },
  {
    id: 14,
    name: "Sabrina Kaneishia, S.Pd.",
    photo: "/tutors/tutor14.webp",
    education: "Universitas Jember - Pendidikan Fisika",
  },
  {
    id: 15,
    name: "Eiben Heizer Boyishak Bukit, S.Pd.",
    photo: "/tutors/tutor15.webp",
    education: "Universitas Siliwangi - Pendidikan Matematika",
  },
];

function Tutor({ showAll = false, maxDisplay = 5 }) {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const tutorsToDisplay = showAll
    ? tutorsSimplified
    : tutorsSimplified.slice(0, maxDisplay);

  const handleViewAllClick = () => {
    // Navigate ke halaman tentang-kami dengan hash
    navigate("/tentang-kami#tutors");
  };

  return (
    <div className="tutor-section">
      <div className="container">
        {/* Tambahkan ref ke judul dan anchor point */}
        <div
          ref={titleRef}
          className="tutor-title-anchor"
          id="tutors-title"
        ></div>
        <h2 className="tutor-title">Tutor Cakrawala Educentre</h2>
        <p className="tutor-subtitle">
          Profil tutor terbaik kami yang siap mendampingi siswa dengan penuh
          dedikasi.
        </p>

        <div className="tutor-grid">
          {tutorsToDisplay.map((tutor) => (
            <div key={tutor.id} className="tutor-card">
              <img src={tutor.photo} alt={tutor.name} className="tutor-photo" />
              <h3>{tutor.name}</h3>
              <p className="tutor-education">{tutor.education}</p>
            </div>
          ))}

          {/* Button Lihat Semua Tutor di posisi tutor ke-6 */}
          {!showAll && tutorsSimplified.length > maxDisplay && (
            <div
              className="tutor-card tutor-button-card"
              onClick={handleViewAllClick}
            >
              <div className="button-container">
                <div className="button-icon">👨‍🏫</div>
                <h3>Lebih Banyak Tutor</h3>
                <p>Temukan semua tutor profesional kami</p>
                <button className="view-all-btn">Lihat Semua Tutor</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tutor;
