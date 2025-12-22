import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // Increase timeout to 30 seconds
});

// List of public routes that don't require authentication
const publicRoutes = [
  "/articles",
  "/webinars",
  "/popups/active",
  "/admin/login",
  "/competitions",
  "/competitions/slug",
  "/competitions/homepage",
  "/tutor/login",
  "/tutor/test",
  "/tutor",
];

// Function to check if a route is public
const isPublicRoute = (config) => {
  return publicRoutes.some((route) => {
    const url = config.url || "";
    const method = config.method?.toLowerCase();

    // Untuk GET request ke routes public
    if (method === "get" && url.startsWith(route)) {
      return true;
    }

    // Untuk POST ke login
    if (
      method === "post" &&
      (url.includes("/admin/login") || url.includes("/tutor/login"))
    ) {
      return true;
    }

    return false;
  });
};

// Add auth token to requests ONLY for protected routes
api.interceptors.request.use(
  (config) => {
    console.log(
      `API Request: ${config.method?.toUpperCase()} ${config.url}`,
      config.data
    );

    // Don't add token for public routes
    if (!isPublicRoute(config)) {
      const token = localStorage.getItem("admin_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("Token added to request");
      } else {
        console.log("No token found for protected route");
      }
    } else {
      console.log("Public route, no token needed");
    }

    return config;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => {
    console.log(
      `API Response: ${response.status} ${response.config.url}`,
      response.data
    );
    return response;
  },
  (error) => {
    console.error("API Error:", {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      message: error.message,
      data: error.response?.data,
    });

    const originalRequest = error.config;

    // Only handle 401 for protected routes
    if (error.response?.status === 401 && !isPublicRoute(originalRequest)) {
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_user");

      // Only redirect if we're on an admin page
      if (window.location.pathname.startsWith("/admin")) {
        window.location.href = "/admin";
      }
    }

    return Promise.reject(error);
  }
);

// Article API - PERBAIKAN: Lengkap dengan upload image dan gallery
export const articleAPI = {
  getArticles: async (params = {}) => {
    try {
      const response = await api.get("/articles", { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching articles:", error);
      throw error;
    }
  },

  getArticle: async (slug) => {
    try {
      const response = await api.get(`/articles/${slug}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching article:", error);
      throw error;
    }
  },

  getFeaturedArticles: async () => {
    try {
      const response = await api.get("/articles/featured/articles");
      return response.data;
    } catch (error) {
      console.error("Error fetching featured articles:", error);
      throw error;
    }
  },

  getArticlesStats: async () => {
    try {
      const response = await api.get("/articles/stats/count");
      return response.data;
    } catch (error) {
      console.error("Error fetching articles stats:", error);
      return {
        success: false,
        stats: {
          total: 0,
          published: 0,
          draft: 0,
          featured: 0,
        },
      };
    }
  },

  addArticle: async (articleData) => {
    try {
      console.log("Preparing article data for upload...", {
        title: articleData.title,
        hasImage: !!articleData.image,
        hasGallery: articleData.gallery?.length > 0,
        imageType: articleData.image?.constructor?.name,
      });

      const formData = new FormData();

      // Append all fields to formData
      Object.keys(articleData).forEach((key) => {
        if (key === "image" && articleData[key] instanceof File) {
          console.log(
            "Adding main image file to formData:",
            articleData[key].name,
            articleData[key].size
          );
          formData.append("image", articleData[key]);
        } else if (key === "gallery" && Array.isArray(articleData[key])) {
          // Handle gallery images
          articleData[key].forEach((file, index) => {
            if (file instanceof File) {
              console.log(
                `Adding gallery image ${index + 1}:`,
                file.name,
                file.size
              );
              formData.append("gallery", file);
            }
          });
        } else if (key === "featured") {
          formData.append(key, articleData[key] ? "true" : "false");
        } else if (key === "content") {
          // Handle large content
          formData.append(key, articleData[key] || "");
        } else {
          formData.append(key, articleData[key] || "");
        }
      });

      // Log formData contents for debugging
      for (let [key, value] of formData.entries()) {
        if (key === "image") {
          console.log(
            `FormData: ${key} = File(${value.name}, ${value.size} bytes)`
          );
        } else if (key === "gallery") {
          console.log(
            `FormData: ${key} = File(${value.name}, ${value.size} bytes)`
          );
        } else if (key === "content") {
          console.log(`FormData: ${key} = String(${value.length} chars)`);
        } else {
          console.log(`FormData: ${key} = ${value}`);
        }
      }

      console.log("Sending article data to server...");
      const response = await api.post("/articles", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 60000, // 60 seconds for file upload
      });

      console.log("Article created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error adding article:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });

      if (error.code === "ECONNABORTED") {
        throw new Error("Timeout: Server tidak merespons. Coba lagi.");
      }

      if (error.response?.data) {
        throw new Error(
          error.response.data.message || "Gagal menyimpan artikel"
        );
      }

      if (error.message === "Network Error") {
        throw new Error(
          "Tidak dapat terhubung ke server. Periksa koneksi internet Anda."
        );
      }

      throw new Error("Gagal menyimpan artikel: " + error.message);
    }
  },

  updateArticle: async (id, articleData) => {
    try {
      console.log("Updating article:", id, articleData);

      const formData = new FormData();

      Object.keys(articleData).forEach((key) => {
        if (key === "image" && articleData[key] instanceof File) {
          formData.append("image", articleData[key]);
        } else if (key === "gallery" && Array.isArray(articleData[key])) {
          // Handle gallery images
          articleData[key].forEach((file) => {
            if (file instanceof File) {
              formData.append("gallery", file);
            }
          });
        } else if (
          key === "existing_gallery" &&
          Array.isArray(articleData[key])
        ) {
          formData.append("existing_gallery", JSON.stringify(articleData[key]));
        } else if (key === "featured") {
          formData.append(key, articleData[key] ? "true" : "false");
        } else if (key === "content") {
          formData.append(key, articleData[key] || "");
        } else {
          formData.append(key, articleData[key] || "");
        }
      });

      const response = await api.put(`/articles/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 60000,
      });

      console.log("Article updated successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error updating article:", error);

      if (error.response?.data) {
        throw new Error(
          error.response.data.message || "Gagal mengupdate artikel"
        );
      }

      if (error.message === "Network Error") {
        throw new Error(
          "Tidak dapat terhubung ke server. Periksa koneksi internet Anda."
        );
      }

      throw new Error("Gagal mengupdate artikel: " + error.message);
    }
  },

  deleteArticle: async (id) => {
    try {
      const response = await api.delete(`/articles/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting article:", error);
      throw error;
    }
  },

  uploadImage: async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await api.post("/articles/upload/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  },
};

// Webinar API
export const webinarAPI = {
  getWebinars: async (params = {}) => {
    try {
      const response = await api.get("/webinars", { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching webinars:", error);
      throw error;
    }
  },

  getWebinar: async (slug) => {
    try {
      const response = await api.get(`/webinars/${slug}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching webinar:", error);
      throw error;
    }
  },

  addWebinar: async (webinarData) => {
    try {
      console.log("Adding webinar:", webinarData);

      const formData = new FormData();

      Object.keys(webinarData).forEach((key) => {
        if (key === "poster_image" && webinarData[key] instanceof File) {
          formData.append("poster_image", webinarData[key]);
        } else if (
          key === "speaker_image" &&
          webinarData[key] instanceof File
        ) {
          formData.append("speaker_image", webinarData[key]);
        } else if (Array.isArray(webinarData[key])) {
          formData.append(key, JSON.stringify(webinarData[key]));
        } else if (typeof webinarData[key] === "boolean") {
          formData.append(key, webinarData[key] ? "true" : "false");
        } else {
          formData.append(key, webinarData[key] || "");
        }
      });

      const response = await api.post("/webinars", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 60000,
      });

      return response.data;
    } catch (error) {
      console.error("Error adding webinar:", error);

      if (error.response?.data) {
        throw new Error(
          error.response.data.message || "Gagal menyimpan webinar"
        );
      }

      if (error.message === "Network Error") {
        throw new Error(
          "Tidak dapat terhubung ke server. Periksa koneksi internet Anda."
        );
      }

      throw new Error("Gagal menyimpan webinar: " + error.message);
    }
  },

  updateWebinar: async (id, webinarData) => {
    try {
      const formData = new FormData();

      Object.keys(webinarData).forEach((key) => {
        if (key === "poster_image" && webinarData[key] instanceof File) {
          formData.append("poster_image", webinarData[key]);
        } else if (
          key === "speaker_image" &&
          webinarData[key] instanceof File
        ) {
          formData.append("speaker_image", webinarData[key]);
        } else if (Array.isArray(webinarData[key])) {
          formData.append(key, JSON.stringify(webinarData[key]));
        } else if (typeof webinarData[key] === "boolean") {
          formData.append(key, webinarData[key] ? "true" : "false");
        } else {
          formData.append(key, webinarData[key] || "");
        }
      });

      const response = await api.put(`/webinars/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 60000,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating webinar:", error);
      throw error;
    }
  },

  deleteWebinar: async (id) => {
    try {
      const response = await api.delete(`/webinars/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting webinar:", error);
      throw error;
    }
  },

  toggleHomepage: async (id, showOnHomepage) => {
    try {
      const response = await api.put(`/webinars/${id}`, {
        show_on_homepage: !showOnHomepage,
      });
      return response.data;
    } catch (error) {
      console.error("Error toggling homepage:", error);
      throw error;
    }
  },
};

// Popup API
export const popupAPI = {
  getAllPopups: async () => {
    try {
      const response = await api.get("/popups");
      return response.data;
    } catch (error) {
      console.error("Error fetching popups:", error);
      throw error;
    }
  },

  getActivePopups: async () => {
    try {
      const response = await api.get("/popups/active");
      return response.data;
    } catch (error) {
      console.error("Error fetching active popups:", error);
      throw error;
    }
  },

  addPopup: async (popupData) => {
    try {
      const formData = new FormData();

      Object.keys(popupData).forEach((key) => {
        if (key === "image" && popupData[key] instanceof File) {
          formData.append("image", popupData[key]);
        } else if (typeof popupData[key] === "boolean") {
          formData.append(key, popupData[key] ? "true" : "false");
        } else {
          formData.append(key, popupData[key] || "");
        }
      });

      const response = await api.post("/popups", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 60000,
      });
      return response.data;
    } catch (error) {
      console.error("Error adding popup:", error);
      throw error;
    }
  },

  updatePopup: async (id, popupData) => {
    try {
      const formData = new FormData();

      Object.keys(popupData).forEach((key) => {
        if (key === "image" && popupData[key] instanceof File) {
          formData.append("image", popupData[key]);
        } else if (typeof popupData[key] === "boolean") {
          formData.append(key, popupData[key] ? "true" : "false");
        } else {
          formData.append(key, popupData[key] || "");
        }
      });

      const response = await api.put(`/popups/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 60000,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating popup:", error);
      throw error;
    }
  },

  deletePopup: async (id) => {
    try {
      const response = await api.delete(`/popups/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting popup:", error);
      throw error;
    }
  },

  toggleActive: async (id, isActive) => {
    try {
      const response = await api.put(`/popups/${id}`, {
        is_active: !isActive,
      });
      return response.data;
    } catch (error) {
      console.error("Error toggling popup active:", error);
      throw error;
    }
  },
};

// Competition API functions
export const competitionAPI = {
  addCompetition: async (competitionData) => {
    try {
      console.log("➕ Adding competition:", competitionData);

      const formData = new FormData();

      // HAPUS featured field dari data yang dikirim
      const { featured, ...cleanData } = competitionData;

      // Handle each field carefully
      Object.keys(cleanData).forEach((key) => {
        const value = cleanData[key];

        if (key === "image" && value instanceof File) {
          formData.append("image", value);
          console.log("📸 Added image file");
        } else if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
          console.log(`📦 Added array ${key}:`, value);
        } else if (typeof value === "boolean") {
          formData.append(key, value ? "true" : "false");
          console.log(`🔘 Added boolean ${key}:`, value);
        } else if (value === null || value === undefined) {
          formData.append(key, "");
          console.log(`⚪ Added empty ${key}`);
        } else {
          formData.append(key, value);
          console.log(`📝 Added ${key}:`, value);
        }
      });

      // Log formData contents for debugging
      console.log("📄 FormData contents (CLEANED - no featured field):");
      for (let [key, val] of formData.entries()) {
        if (key === "image") {
          console.log(`  ${key} = File (${val.name})`);
        } else {
          console.log(`  ${key} =`, val);
        }
      }

      const response = await api.post("/competitions", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 30000,
      });

      console.log("✅ Competition created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error adding competition:", error);

      let errorMessage = "Gagal menyimpan kompetisi";

      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message === "Network Error") {
        errorMessage =
          "Tidak dapat terhubung ke server. Periksa koneksi internet Anda.";
      } else if (error.code === "ECONNABORTED") {
        errorMessage = "Waktu permintaan habis. Silakan coba lagi.";
      }

      throw new Error(errorMessage);
    }
  },

  updateCompetition: async (id, competitionData) => {
    try {
      console.log("✏️ Updating competition:", id, competitionData);

      const formData = new FormData();

      // HAPUS featured field dari data yang dikirim
      const { featured, ...cleanData } = competitionData;

      Object.keys(cleanData).forEach((key) => {
        const value = cleanData[key];

        if (key === "image" && value instanceof File) {
          formData.append("image", value);
        } else if (Array.isArray(value)) {
          formData.append(key, JSON.stringify(value));
        } else if (typeof value === "boolean") {
          formData.append(key, value ? "true" : "false");
        } else if (value === null || value === undefined) {
          formData.append(key, "");
        } else {
          formData.append(key, value);
        }
      });

      const response = await api.put(`/competitions/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 30000,
      });

      console.log("✅ Competition updated successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error updating competition:", error);
      throw error;
    }
  },

  getCompetitions: async (params = {}) => {
    try {
      console.log("📋 Fetching competitions with params:", params);
      const response = await api.get("/competitions", { params });
      console.log("📋 Raw API response:", response.data);

      // Handle different response formats
      let competitionsData = [];
      let success = false;
      let message = "";

      // Case 1: Standard { success, data, message } format
      if (response.data && typeof response.data === "object") {
        if (response.data.success !== undefined) {
          success = response.data.success;
          message = response.data.message || "";

          if (response.data.data && Array.isArray(response.data.data)) {
            competitionsData = response.data.data;
          } else if (
            response.data.competitions &&
            Array.isArray(response.data.competitions)
          ) {
            competitionsData = response.data.competitions;
          } else if (Array.isArray(response.data)) {
            competitionsData = response.data;
          }
        } else if (Array.isArray(response.data)) {
          // Case 2: Direct array response
          competitionsData = response.data;
          success = true;
        }
      }

      console.log(
        `🎯 Processed ${competitionsData.length} competitions, success: ${success}`
      );

      // RETURN CONSISTENT FORMAT: { success, data, message }
      return {
        success: success,
        data: competitionsData,
        message: message,
        // Keep competitions for backward compatibility
        competitions: competitionsData,
      };
    } catch (error) {
      console.error("❌ Error fetching competitions:", error);
      return {
        success: false,
        data: [],
        message: error.response?.data?.message || "Gagal memuat data kompetisi",
        competitions: [],
      };
    }
  },

  getCompetition: async (id) => {
    try {
      const response = await api.get(`/competitions/${id}`);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching competition:", error);
      throw error;
    }
  },

  getCompetitionBySlug: async (slug) => {
    try {
      console.log("🔍 Fetching competition by slug:", slug);
      const response = await api.get(`/competitions/slug/${slug}`);
      console.log("🔍 Competition by slug response:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error fetching competition by slug:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Kompetisi tidak ditemukan",
      };
    }
  },

  getHomepageCompetitions: async () => {
    try {
      console.log("🏠 Fetching homepage competitions...");

      // Get all active competitions first
      const response = await api.get("/competitions?status=active");
      console.log("🏠 All competitions response:", response.data);

      let competitionsData = [];

      // Extract data from various response formats
      if (response.data && response.data.success && response.data.data) {
        competitionsData = response.data.data;
      } else if (Array.isArray(response.data)) {
        competitionsData = response.data;
      } else if (response.data && Array.isArray(response.data.competitions)) {
        competitionsData = response.data.competitions;
      }

      // Filter competitions that should be shown on homepage
      const homepageCompetitions = competitionsData.filter((comp) => {
        // Handle different boolean representations
        const showOnHomepage =
          comp.show_on_homepage === true ||
          comp.show_on_homepage === 1 ||
          comp.show_on_homepage === "true";

        return showOnHomepage && comp.status === "active";
      });

      console.log(
        `🎯 Found ${homepageCompetitions.length} homepage competitions`
      );

      return {
        success: true,
        data: homepageCompetitions,
        message: `Found ${homepageCompetitions.length} competitions for homepage`,
      };
    } catch (error) {
      console.error("❌ Error fetching homepage competitions:", error);
      return {
        success: false,
        data: [],
        message: "Tidak dapat terhubung ke server",
      };
    }
  },

  deleteCompetition: async (id) => {
    try {
      const response = await api.delete(`/competitions/${id}`);
      return response.data;
    } catch (error) {
      console.error("❌ Error deleting competition:", error);
      throw error;
    }
  },

  toggleHomepage: async (id, showOnHomepage) => {
    try {
      console.log(
        `🔄 Toggling homepage for ${id} from ${showOnHomepage} to ${!showOnHomepage}`
      );

      // Hanya kirim show_on_homepage saja, jangan kirim featured
      const response = await api.put(`/competitions/${id}`, {
        show_on_homepage: !showOnHomepage,
      });

      console.log("✅ Toggle homepage response:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error toggling homepage:", error);
      throw error;
    }
  },
};

// Tutor API functions
export const tutorAPI = {
  // Admin functions - Tutor Management
  getTutors: async () => {
    try {
      console.log("👨‍🏫 Fetching tutors...");
      const response = await api.get("/tutor");
      console.log(`✅ Found ${response.data.tutors?.length || 0} tutors`);
      return response.data;
    } catch (error) {
      console.error("❌ Get tutors error:", error);
      const errorMessage =
        error.response?.data?.message || "Gagal memuat data tutor";
      throw new Error(errorMessage);
    }
  },

  getTutor: async (id) => {
    try {
      const response = await api.get(`/tutor/${id}`);
      return response.data;
    } catch (error) {
      console.error("Get tutor error:", error);
      throw error;
    }
  },

  createTutor: async (tutorData) => {
    try {
      const response = await api.post("/tutor", tutorData);
      return response.data;
    } catch (error) {
      console.error("Create tutor error:", error);
      throw error;
    }
  },

  updateTutor: async (id, tutorData) => {
    try {
      const response = await api.put(`/tutor/${id}`, tutorData);
      return response.data;
    } catch (error) {
      console.error("Update tutor error:", error);
      throw error;
    }
  },

  deleteTutor: async (id) => {
    try {
      const response = await api.delete(`/tutor/${id}`);
      return response.data;
    } catch (error) {
      console.error("Delete tutor error:", error);
      throw error;
    }
  },

  getStudents: async (tutorId = "all") => {
    try {
      console.log(`📋 Fetching students for: ${tutorId}`);

      let response;
      if (tutorId === "all") {
        response = await api.get("/tutor/students/all");
      } else {
        response = await api.get(`/tutor/${tutorId}/students`);
      }

      console.log("✅ Students data received:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Get students error:", error);
      const errorMessage =
        error.response?.data?.message || "Gagal memuat data siswa";
      throw new Error(errorMessage);
    }
  },

  addStudent: async (studentData) => {
    try {
      const response = await api.post("/tutor/students", studentData);
      return response.data;
    } catch (error) {
      console.error("Add student error:", error);
      throw error;
    }
  },

  updateStudent: async (id, studentData) => {
    try {
      const response = await api.put(`/tutor/students/${id}`, studentData);
      return response.data;
    } catch (error) {
      console.error("Update student error:", error);
      throw error;
    }
  },

  deleteStudent: async (id) => {
    try {
      const response = await api.delete(`/tutor/students/${id}`);
      return response.data;
    } catch (error) {
      console.error("Delete student error:", error);
      throw error;
    }
  },

  recordAttendance: async (attendanceData) => {
    try {
      console.log("📝 Recording attendance with data:", attendanceData);

      const formData = new FormData();

      // Tambahkan semua field ke FormData
      Object.keys(attendanceData).forEach((key) => {
        if (key === "teaching_photo" && attendanceData[key] instanceof File) {
          console.log("📸 Adding teaching photo:", attendanceData[key]);
          formData.append("teaching_photo", attendanceData[key]);
        } else if (
          key === "day_schedule" &&
          Array.isArray(attendanceData[key])
        ) {
          // Handle array untuk day_schedule
          formData.append(key, JSON.stringify(attendanceData[key]));
        } else {
          formData.append(key, attendanceData[key] || "");
        }
      });

      // Debug: Log isi FormData
      console.log("📄 FormData contents:");
      for (let [key, value] of formData.entries()) {
        if (key === "teaching_photo") {
          console.log(`  ${key} = File (${value.name}, ${value.size} bytes)`);
        } else {
          console.log(`  ${key} = ${value}`);
        }
      }

      // PERBAIKAN: Gunakan responseType 'blob' untuk menerima PDF
      const response = await api.post("/tutor/attendance", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob", // Penting untuk menerima file PDF
        timeout: 30000,
      });

      console.log("✅ Attendance recorded successfully, PDF received");

      // PERBAIKAN: Handle PDF response dan trigger download
      if (response.data instanceof Blob) {
        // Buat URL untuk blob
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);

        // Buat link untuk download
        const link = document.createElement("a");
        link.href = url;

        // Ambil filename dari header Content-Disposition
        const contentDisposition = response.headers["content-disposition"];
        let filename = "bukti-absensi.pdf";

        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename="(.+)"/);
          if (filenameMatch) {
            filename = filenameMatch[1];
          }
        }

        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        console.log("✅ PDF bukti absensi berhasil didownload:", filename);

        return {
          success: true,
          message:
            "Absensi berhasil dicatat dan PDF bukti absensi telah didownload",
          pdfDownloaded: true,
        };
      } else {
        // Fallback jika response bukan PDF (seharusnya tidak terjadi)
        console.warn("⚠️ Response bukan PDF, menggunakan fallback");
        return response.data;
      }
    } catch (error) {
      console.error("❌ Record attendance error:", error);

      let errorMessage = "Gagal mencatat absensi";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message === "Network Error") {
        errorMessage =
          "Tidak dapat terhubung ke server. Periksa koneksi internet.";
      } else if (error.code === "ECONNABORTED") {
        errorMessage = "Waktu permintaan habis. Silakan coba lagi.";
      }

      throw new Error(errorMessage);
    }
  },

  getAttendanceHistory: async (tutorId, studentId) => {
    try {
      const response = await api.get(
        `/tutor/${tutorId}/students/${studentId}/attendance`
      );
      return response.data;
    } catch (error) {
      console.error("Get attendance history error:", error);
      throw error;
    }
  },

  getManualStats: async () => {
    try {
      const [tutorsRes, studentsRes, reportsRes, paymentsRes] =
        await Promise.all([
          tutorAPI.getTutors().catch(() => ({ tutors: [] })),
          tutorAPI.getStudents("all").catch(() => ({ students: [] })),
          tutorAPI.getAllReports().catch(() => ({ reports: [] })),
          tutorAPI.getAllPaymentReports().catch(() => ({ reports: [] })),
        ]);

      const stats = {
        tutors: tutorsRes.tutors?.length || 0,
        students: studentsRes.students?.length || 0,
        reports: reportsRes.reports?.length || 0,
        payments: paymentsRes.reports?.length || 0,
        totalRevenue:
          paymentsRes.reports?.reduce(
            (sum, report) => sum + parseFloat(report.total_payment || 0),
            0
          ) || 0,
        articles: 0,
        webinars: 0,
        popups: 0,
        competitions: 0,
      };

      console.log("✅ Manual stats calculated:", stats);
      return { success: true, stats };
    } catch (error) {
      console.error("❌ Manual stats also failed:", error);
      return {
        success: false,
        stats: {
          tutors: 0,
          students: 0,
          reports: 0,
          payments: 0,
          totalRevenue: 0,
          articles: 0,
          webinars: 0,
          popups: 0,
          competitions: 0,
        },
      };
    }
  },

  getDashboardStats: async () => {
    try {
      console.log("📊 Fetching dashboard stats from API...");
      const response = await api.get("/tutor/dashboard/stats");
      console.log("✅ Dashboard stats response:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Get dashboard stats error:", error);

      // Fallback: hitung manual jika endpoint tidak ada
      console.log("🔄 Trying manual stats calculation...");
      return await tutorAPI.getManualStats();
    }
  },

  // Session Reports dengan data lengkap
  submitReport: async (reportData) => {
    try {
      console.log("📊 Submitting report with FULL data:", reportData);

      const formData = new FormData();

      // Tambahkan SEMUA field ke FormData
      Object.keys(reportData).forEach((key) => {
        if (key === "attendance_photo" && reportData[key] instanceof File) {
          console.log("📸 Adding attendance photo:", reportData[key]);
          formData.append("attendance_photo", reportData[key]);
        } else if (Array.isArray(reportData[key])) {
          // Handle array fields
          formData.append(key, JSON.stringify(reportData[key]));
        } else if (reportData[key] === null || reportData[key] === undefined) {
          // Skip null/undefined values
          formData.append(key, "");
        } else {
          // Handle semua tipe data lainnya
          formData.append(key, reportData[key]);
        }
      });

      // Debug: Log isi FormData
      console.log("📄 FormData contents for report:");
      for (let [key, value] of formData.entries()) {
        if (key === "attendance_photo") {
          console.log(`  ${key} = File (${value.name}, ${value.size} bytes)`);
        } else if (
          key.includes("_observation") ||
          key.includes("_materials") ||
          key.includes("_progress")
        ) {
          console.log(`  ${key} = ${value ? "filled" : "empty"}`);
        } else {
          console.log(`  ${key} = ${value}`);
        }
      }

      // Gunakan responseType 'blob' untuk menerima PDF
      const response = await api.post("/tutor/reports", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
        timeout: 30000,
      });

      console.log("✅ Report submitted successfully, PDF received");

      // Handle PDF response dan trigger download
      if (response.data instanceof Blob) {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;

        const contentDisposition = response.headers["content-disposition"];
        let filename = "laporan-perkembangan.pdf";

        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename="(.+)"/);
          if (filenameMatch) {
            filename = filenameMatch[1];
          }
        }

        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        console.log(
          "✅ PDF laporan perkembangan berhasil didownload:",
          filename
        );

        return {
          success: true,
          message:
            "Laporan berhasil disimpan dan PDF laporan perkembangan telah didownload",
          pdfDownloaded: true,
        };
      } else {
        console.warn("⚠️ Response bukan PDF, menggunakan fallback");
        return response.data;
      }
    } catch (error) {
      console.error("❌ Submit report error:", error);

      let errorMessage = "Gagal menyimpan laporan";
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message === "Network Error") {
        errorMessage =
          "Tidak dapat terhubung ke server. Periksa koneksi internet.";
      }

      throw new Error(errorMessage);
    }
  },

  getReports: async (tutorId, studentId) => {
    try {
      const response = await api.get(
        `/tutor/${tutorId}/students/${studentId}/reports`
      );
      return response.data;
    } catch (error) {
      console.error("Get reports error:", error);
      throw error;
    }
  },

  getAllReports: async () => {
    try {
      const response = await api.get("/tutor/reports/all");
      return response.data;
    } catch (error) {
      console.error("Get all reports error:", error);
      throw error;
    }
  },

  getTutorReports: async (tutorId) => {
    try {
      const response = await api.get(`/tutor/${tutorId}/reports`);
      return response.data;
    } catch (error) {
      console.error("Get tutor reports error:", error);
      throw error;
    }
  },

  getReportDetail: async (reportId) => {
    try {
      const response = await api.get(`/tutor/reports/${reportId}`);
      return response.data;
    } catch (error) {
      console.error("Get report detail error:", error);
      throw error;
    }
  },

  // Payment Reports dengan AUTO DOWNLOAD PDF
  submitPaymentReport: async (paymentData) => {
    try {
      console.log("💰 Submitting payment report:", paymentData);

      // Gunakan responseType 'blob' untuk menerima PDF
      const response = await api.post("/tutor/payment-reports", paymentData, {
        responseType: "blob", // Penting untuk menerima file PDF
      });

      console.log("✅ Payment report submitted, PDF received");

      // Handle PDF response dan trigger download
      if (response.data instanceof Blob) {
        // Buat URL untuk blob
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);

        // Buat link untuk download
        const link = document.createElement("a");
        link.href = url;

        // Ambil filename dari header Content-Disposition
        const contentDisposition = response.headers["content-disposition"];
        let filename = "laporan-pembayaran.pdf";

        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename="(.+)"/);
          if (filenameMatch) {
            filename = filenameMatch[1];
          }
        }

        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);

        console.log("✅ PDF laporan pembayaran berhasil didownload:", filename);

        return {
          success: true,
          message:
            "Laporan pembayaran berhasil disimpan dan PDF telah didownload",
          pdfDownloaded: true,
        };
      } else {
        // Fallback jika response bukan PDF
        console.warn("⚠️ Response bukan PDF, menggunakan fallback");
        return response.data;
      }
    } catch (error) {
      console.error("Submit payment report error:", error);
      throw error;
    }
  },

  // Dalam file api.js - Pastikan fungsi ini sudah ada
  getAllPaymentReports: async () => {
    try {
      const response = await api.get("/tutor/payment-reports/all");
      return response.data;
    } catch (error) {
      console.error("Get payment reports error:", error);
      // Return empty array sebagai fallback
      return {
        success: false,
        reports: [],
        message:
          error.response?.data?.message || "Gagal memuat data pembayaran",
      };
    }
  },

  // PDF Downloads
  downloadPDF: async (reportId) => {
    try {
      const response = await api.get(`/tutor/reports/${reportId}/pdf`, {
        responseType: "blob",
      });
      return response.data;
    } catch (error) {
      console.error("Download PDF error:", error);
      throw error;
    }
  },

  downloadAttendancePDF: async (attendanceId) => {
    try {
      const response = await api.get(`/tutor/attendance/${attendanceId}/pdf`, {
        responseType: "blob",
      });
      return response.data;
    } catch (error) {
      console.error("Download attendance PDF error:", error);
      throw error;
    }
  },

  downloadPaymentPDF: async (reportId) => {
    try {
      const response = await api.get(`/tutor/payment-reports/${reportId}/pdf`, {
        responseType: "blob",
      });
      return response.data;
    } catch (error) {
      console.error("Download payment PDF error:", error);
      throw error;
    }
  },

  // Tutor App Functions
  login: async (credentials) => {
    try {
      const response = await api.post("/tutor/login", credentials);
      return response.data;
    } catch (error) {
      console.error("Tutor login error:", error);
      throw error;
    }
  },

  getProfile: async (tutorId) => {
    try {
      const response = await api.get(`/tutor/profile/${tutorId}`);
      return response.data;
    } catch (error) {
      console.error("Get tutor profile error:", error);
      throw error;
    }
  },

  updateProfile: async (tutorId, profileData) => {
    try {
      const response = await api.put(`/tutor/profile/${tutorId}`, profileData);
      return response.data;
    } catch (error) {
      console.error("Update tutor profile error:", error);
      throw error;
    }
  },
};

// Auth API
export const authAPI = {
  login: async (username, password) => {
    try {
      const response = await api.post("/admin/login", { username, password });
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        return error.response.data;
      } else {
        return {
          success: false,
          message: "Tidak dapat terhubung ke server",
        };
      }
    }
  },

  verify: async () => {
    try {
      const response = await api.get("/admin/verify");
      return response.data;
    } catch (error) {
      console.error("Verify error:", error);
      throw error;
    }
  },
};

// Test connection
export const testAPI = {
  testConnection: async () => {
    try {
      const response = await api.get("/health");
      return response.data;
    } catch (error) {
      console.error("Test connection error:", error);
      throw error;
    }
  },

  testUpload: async (testData) => {
    try {
      const response = await api.post("/test-upload", testData);
      return response.data;
    } catch (error) {
      console.error("Test upload error:", error);
      throw error;
    }
  },
};

export default api;
