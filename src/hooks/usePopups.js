import { useState, useEffect } from "react";
import { popupAPI } from "../services/api";

export const usePopups = () => {
  const [popups, setPopups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPopups = async () => {
    try {
      setLoading(true);
      const response = await popupAPI.getAllPopups();
      if (response.success) {
        setPopups(response.popups || []);
      } else {
        setError("Gagal memuat popups");
      }
    } catch (err) {
      setError("Gagal memuat popups: " + err.message);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const addPopup = async (popupData) => {
    try {
      const response = await popupAPI.addPopup(popupData);
      if (response.success) {
        setPopups((prev) => [response.popup, ...prev]);
        return response.popup;
      } else {
        throw new Error(response.message || "Gagal menambah popup");
      }
    } catch (error) {
      throw new Error("Gagal menambah popup: " + error.message);
    }
  };

  const updatePopup = async (id, popupData) => {
    try {
      const response = await popupAPI.updatePopup(id, popupData);
      if (response.success) {
        setPopups((prev) =>
          prev.map((popup) => (popup.id === id ? response.popup : popup))
        );
        return response.popup;
      } else {
        throw new Error(response.message || "Gagal mengupdate popup");
      }
    } catch (error) {
      throw new Error("Gagal mengupdate popup: " + error.message);
    }
  };

  const deletePopup = async (id) => {
    try {
      const response = await popupAPI.deletePopup(id);
      if (response.success) {
        setPopups((prev) => prev.filter((popup) => popup.id !== id));
        return true;
      } else {
        throw new Error(response.message || "Gagal menghapus popup");
      }
    } catch (error) {
      throw new Error("Gagal menghapus popup: " + error.message);
    }
  };

  const toggleActive = async (id, isActive) => {
    try {
      const response = await popupAPI.updatePopup(id, { is_active: !isActive });
      if (response.success) {
        setPopups((prev) =>
          prev.map((popup) => (popup.id === id ? response.popup : popup))
        );
        return response.popup;
      } else {
        throw new Error(response.message || "Gagal mengubah status popup");
      }
    } catch (error) {
      throw new Error("Gagal mengubah status popup: " + error.message);
    }
  };

  useEffect(() => {
    fetchPopups();
  }, []);

  return {
    popups,
    loading,
    error,
    addPopup,
    updatePopup,
    deletePopup,
    toggleActive,
    refetch: fetchPopups,
  };
};
