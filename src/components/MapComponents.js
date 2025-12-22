import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default icon Leaflet yang sering rusak di bundler modern
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Cegah double init map (penting di React 18 Strict Mode)
    if (mapInstanceRef.current) return;

    // Inisialisasi map hanya kalau container sudah ada
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([-6.2088, 106.8456], 11); // Jakarta default

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Tambah marker contoh (opsional)
      L.marker([-6.2088, 106.8456])
        .addTo(map)
        .bindPopup('Cakrawala EduCentre')
        .openPopup();

      mapInstanceRef.current = map;
    }

    // Cleanup saat component unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ height: '500px', width: '100%', borderRadius: '15px' }}
    />
  );
};

export default MapComponent;