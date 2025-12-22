// src/components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    image,
    article = false,
    author,
    datePublished,
    dateModified,
    category,
    url,
    keywords = []
}) => {
    const siteUrl = 'https://cakrawalaeducentre.com';
    const siteName = 'Cakrawala EduCentre';
    const defaultDescription = 'Cakrawala EduCentre adalah lembaga bimbingan belajar dan les privat terpercaya di Jabodetabek. Kami menyediakan guru berkualitas untuk semua jenjang pendidikan dari TK, SD, SMP, SMA hingga Mahasiswa dengan metode pembelajaran yang efektif, personal, dan menyenangkan.';
    const defaultImage = `${siteUrl}/logo.webp`;
    const defaultKeywords = ['les privat', 'bimbingan belajar', 'pendidikan', 'pembelajaran', 'edukasi', 'les privat jakarta', 'guru les', 'bimbel', 'les matematika', 'les bahasa inggris'];

    const seo = {
        title: title ? `${title} | ${siteName}` : siteName,
        description: description || defaultDescription,
        image: image ? `${siteUrl}/${image}` : defaultImage,
        url: url ? `${siteUrl}${url}` : siteUrl,
        keywords: [...defaultKeywords, ...keywords].join(', ')
    };

    // Structured Data untuk Article
    const articleStructuredData = article ? {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": seo.image,
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "author": {
            "@type": "Organization",
            "name": author || siteName
        },
        "publisher": {
            "@type": "Organization",
            "name": siteName,
            "logo": {
                "@type": "ImageObject",
                "url": defaultImage
            }
        },
        "articleSection": category,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": seo.url
        }
    } : null;

    // Structured Data untuk Organization
    const organizationStructuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": siteName,
        "url": siteUrl,
        "logo": defaultImage,
        "description": defaultDescription,
        "sameAs": [
            "https://web.facebook.com/profile.php?id=61576251354599",
            "https://www.instagram.com/cakrawalaeducentre",
            "https://www.youtube.com/@cakrawalaeducentre",
            "https://www.tiktok.com/@cakrawalaeducentre"
        ]
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{seo.title}</title>
            <meta name="title" content={seo.title} />
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={seo.keywords} />
            <link rel="canonical" href={seo.url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="id_ID" />

            {article && (
                <>
                    <meta property="article:published_time" content={datePublished} />
                    <meta property="article:modified_time" content={dateModified || datePublished} />
                    <meta property="article:author" content={author} />
                    <meta property="article:section" content={category} />
                </>
            )}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={seo.url} />
            <meta property="twitter:title" content={seo.title} />
            <meta property="twitter:description" content={seo.description} />
            <meta property="twitter:image" content={seo.image} />

            {/* Additional SEO Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="Indonesian" />
            <meta name="author" content={author || siteName} />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Structured Data */}
            {article && articleStructuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(articleStructuredData)}
                </script>
            )}

            {!article && (
                <script type="application/ld+json">
                    {JSON.stringify(organizationStructuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;