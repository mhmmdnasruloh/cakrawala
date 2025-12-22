// components/PopupIklan.js
import React, { useState, useEffect } from "react";
import "./PopupIklan.css";

const PopupIklan = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Daftar gambar popup yang akan ditampilkan
  const popupImages = [
    "/tesqwe.webp",
  ];

  // Pilih gambar random saat component mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * popupImages.length);
    const selectedImage = popupImages[randomIndex];
    setCurrentImage(selectedImage);

    // Preload gambar agar saat popup muncul, gambar sudah ada di cache
    const img = new Image();
    img.src = selectedImage;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  const tutupPopup = () => {
    setIsVisible(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      tutupPopup();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-container">
        <button className="popup-close" onClick={tutupPopup}>
          ×
        </button>

        <div className="popup-content">
          <div className="popup-image-full">
            <img
              src={currentImage}
              alt="Brosur Cakrawala Education Centre"
              className="brosur-image-full"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="placeholder-image-full">
              Brosur Cakrawala Education Centre
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupIklan;
