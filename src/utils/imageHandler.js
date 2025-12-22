// Utility untuk handle gambar di development environment
class ImageHandler {
  static getImageUrl(imagePath) {
    if (!imagePath) return "/default-article.webp";

    // Jika path sudah full URL, return langsung
    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    // Untuk development, cek di localStorage dulu
    if (typeof window !== "undefined") {
      try {
        const uploadedImages = JSON.parse(
          localStorage.getItem("uploaded_images") || "{}"
        );
        if (uploadedImages[imagePath]) {
          return uploadedImages[imagePath];
        }
      } catch (error) {
        console.warn("Error accessing localStorage:", error);
      }
    }

    // Fallback ke path relative
    return imagePath;
  }

  static async uploadImage(file) {
    return new Promise((resolve, reject) => {
      // Validasi file
      if (!file.type.startsWith("image/")) {
        reject(new Error("Hanya file gambar yang diizinkan"));
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        reject(new Error("Ukuran file maksimal 5MB"));
        return;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          // Generate unique filename
          const timestamp = Date.now();
          const random = Math.random().toString(36).substring(2, 15);
          const fileExtension = file.name.split(".").pop();
          const fileName = `img-${timestamp}-${random}.${fileExtension}`;
          const imagePath = `/uploads/articles/images/${fileName}`;

          // Store in localStorage for development
          const uploadedImages = JSON.parse(
            localStorage.getItem("uploaded_images") || "{}"
          );
          uploadedImages[imagePath] = e.target.result;
          localStorage.setItem(
            "uploaded_images",
            JSON.stringify(uploadedImages)
          );

          resolve(imagePath);
        } catch (error) {
          reject(new Error("Gagal memproses gambar"));
        }
      };

      reader.onerror = () => {
        reject(new Error("Gagal membaca file"));
      };

      reader.readAsDataURL(file);
    });
  }

  static getAllUploadedImages() {
    if (typeof window === "undefined") return {};

    try {
      return JSON.parse(localStorage.getItem("uploaded_images") || "{}");
    } catch (error) {
      console.warn("Error getting uploaded images:", error);
      return {};
    }
  }

  static cleanupOldImages(daysOld = 30) {
    if (typeof window === "undefined") return;

    try {
      const uploadedImages = JSON.parse(
        localStorage.getItem("uploaded_images") || "{}"
      );
      const cutoffTime = Date.now() - daysOld * 24 * 60 * 60 * 1000;

      Object.keys(uploadedImages).forEach((key) => {
        // Extract timestamp from filename
        const match = key.match(/img-(\d+)-/);
        if (match) {
          const timestamp = parseInt(match[1]);
          if (timestamp < cutoffTime) {
            delete uploadedImages[key];
          }
        }
      });

      localStorage.setItem("uploaded_images", JSON.stringify(uploadedImages));
    } catch (error) {
      console.warn("Error cleaning up old images:", error);
    }
  }
}

export default ImageHandler;
