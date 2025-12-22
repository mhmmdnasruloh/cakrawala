// src/components/BlogList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";
import "./BlogList.css";

const BlogList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sampleArticles = [
      {
        id: 1,
        slug: "konsep-dasar-ikatan-kimia-pengertian-jenis-contoh-latihan-soal",
        title: "Konsep Dasar Ikatan Kimia: Pengertian, Jenis, Contoh, dan Latihan Soal Lengkap",
        excerpt: "Pelajari secara mendalam tentang ikatan kimia mulai dari pengertian, jenis-jenis ikatan (ion, kovalen, logam), karakteristik masing-masing ikatan, contoh penerapan dalam kehidupan sehari-hari, hingga latihan soal lengkap.",
        image: "artikel/artikel-kimia.webp",
        date: "2025-11-13",
        readTime: "15 min read",
        category: "Kimia",
      },
      {
        id: 2,
        slug: "anak-sulit-fokus-belajar-di-rumah-penyebab-solusi",
        title: "Kenapa Anak Sering Sulit Fokus Saat Belajar di Rumah? Ini Penyebab dan Solusinya!",
        excerpt: "Temukan penyebab utama anak sulit fokus belajar di rumah dan strategi parenting edukatif yang terbukti efektif untuk meningkatkan konsentrasi dan hasil belajar anak.",
        image: "artikel/Awareness-Utama.webp",
        date: "2025-11-13",
        readTime: "12 min read",
        category: "Parenting",
      },
      {
        id: 3,
        slug: "kenapa-les-privat-jadi-pilihan-terbaik",
        title: "Kenapa Les Privat Jadi Pilihan Terbaik untuk Prestasi Akademik Siswa",
        excerpt: "Di tengah tuntutan pendidikan yang semakin tinggi, banyak orang tua mulai menyadari bahwa pembelajaran di sekolah saja sering kali belum cukup. Les privat menawarkan solusi pembelajaran personal yang efektif.",
        image: "artikel/lesprivate.webp",
        date: "2025-12-18",
        readTime: "12 min read",
        category: "Pendidikan",
      },
      {
        id: 4,
        slug: "Solusi Les Privat Personal untuk Prestasi Belajar Anak",
        title: "Cakrawala: Solusi Les Privat Personal untuk Prestasi Belajar Anak",
        excerpt: "Di tengah tantangan pendidikan yang semakin kompleks, tidak semua anak dapat berkembang optimal dengan sistem belajar klasikal. Cakrawala hadir sebagai platform pendidikan yang menawarkan pendekatan belajar personal, terarah, dan berfokus pada hasil nyata.",
        image: "artikel/blog4_les_privat_1766217788268.png",
        date: "2025-12-19",
        readTime: "7 min read",
        category: "Les Privat",
      },
      {
        id: 5,
        slug: "Metode Belajar Cakrawala: Personal, Terarah, dan Terukur",
        title: "Metode Belajar Cakrawala yang Terbukti Efektif dan Terarah",
        excerpt: "Metode belajar memegang peranan penting dalam menentukan keberhasilan akademik siswa. Cakrawala hadir dengan metode belajar yang dirancang secara sistematis, personal, dan terarah.",
        image: "artikel/blog5_metode_belajar_1766217813426.png",
        date: "2025-12-19",
        readTime: "6 min read",
        category: "Metode Belajar",
      },
      {
        id: 6,
        slug: "Program Les Privat Cakrawala untuk SD, SMP, SMA",
        title: "Program Les Privat Cakrawala untuk SD, SMP, dan SMA",
        excerpt: "Setiap jenjang pendidikan memiliki tantangan yang berbeda. Cakrawala menyediakan program les privat yang dirancang khusus untuk setiap jenjang pendidikan.",
        image: "artikel/blog6_program_sd_smp_sma_1766217841999.png",
        date: "2025-12-18",
        readTime: "7 min read",
        category: "Program",
      },
      {
        id: 7,
        slug: "Tutor Cakrawala: Disaring, Dilatih, dan Dipantau",
        title: "Tutor Cakrawala: Profesional, Terlatih, dan Terpercaya",
        excerpt: "Kualitas tutor merupakan faktor utama yang menentukan keberhasilan proses belajar. Setiap tutor Cakrawala dipilih, dilatih, dan didampingi secara profesional.",
        image: "artikel/blog7_tutor_profesional_1766217864060.png",
        date: "2025-12-17",
        readTime: "6 min read",
        category: "Tutor",
      },
      {
        id: 8,
        slug: "Proses Ketat Seleksi Tutor di Cakrawala",
        title: "Proses Seleksi Tutor di Cakrawala yang Menjamin Kualitas",
        excerpt: "Tidak semua tutor dapat langsung mengajar di Cakrawala. Cakrawala menerapkan proses seleksi tutor yang ketat dan terstruktur.",
        image: "artikel/blog8_seleksi_tutor_1766217884422.png",
        date: "2025-12-16",
        readTime: "6 min read",
        category: "Tutor",
      },
      {
        id: 9,
        slug: "7 Tips Belajar Efektif ala Tutor Cakrawala",
        title: "7 Tips Belajar Efektif ala Tutor Cakrawala",
        excerpt: "Belajar dengan durasi yang lama tidak selalu menjamin hasil yang optimal. Tutor Cakrawala membagikan tips belajar efektif.",
        image: "artikel/blog9_tips_belajar_1766217905319.png",
        date: "2025-12-15",
        readTime: "5 min read",
        category: "Tips Belajar",
      },
      {
        id: 10,
        slug: "Peran Orang Tua dalam Keberhasilan Belajar Anak",
        title: "Peran Orang Tua dalam Keberhasilan Belajar Anak bersama Cakrawala",
        excerpt: "Keberhasilan belajar anak tidak hanya ditentukan oleh sekolah atau tutor, tetapi juga oleh peran orang tua di rumah.",
        image: "artikel/blog10_peran_orang_tua_1766217929499.png",
        date: "2025-12-14",
        readTime: "6 min read",
        category: "Parenting",
      },
    ];

    setArticles(sampleArticles);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="blog-list-loading">
        <div className="loading-spinner"></div>
        <p>Memuat artikel...</p>
      </div>
    );
  }

  return (
    <>
      {/* SEO untuk halaman blog list */}
      <SEO
        title="Blog & Artikel Pendidikan"
        description="Temukan artikel menarik seputar pendidikan, tips belajar, materi pelajaran, dan strategi parenting untuk meningkatkan prestasi akademik anak."
        url="/blog"
        keywords={["blog pendidikan", "artikel belajar", "tips belajar", "materi pelajaran", "parenting edukatif"]}
      />

      <div className="blog-list-container">
        <div className="blog-header">
          <h1>Blog & Artikel Pendidikan</h1>
          <p>
            Temukan artikel menarik seputar pendidikan, tips belajar, dan materi pelajaran
          </p>
        </div>

        <div className="blog-list-grid">
          {articles.map((article) => (
            <article key={article.id} className="blog-card">
              <Link to={`/blog/${article.slug}`} className="blog-card-link">
                <div className="blog-card-image">
                  <img
                    src={`/${article.image}`}
                    alt={article.title}
                    onError={(e) => {
                      e.target.src = "/logo.webp";
                    }}
                  />
                  <div className="blog-card-category">{article.category}</div>
                </div>

                <div className="blog-card-content">
                  <h2 className="blog-card-title">{article.title}</h2>
                  <p className="blog-card-excerpt">{article.excerpt}</p>

                  <div className="blog-card-meta">
                    <span className="blog-card-date">{article.date}</span>
                    <span className="blog-card-read-time">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;