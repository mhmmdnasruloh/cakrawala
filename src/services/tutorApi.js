// src/services/tutorApi.js
const API_BASE = "/api";

export const tutorApi = {
  async request(endpoint, options = {}) {
    const token = localStorage.getItem("tutorToken");
    const headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE}/${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  },

  // Auth
  login(username, password) {
    return this.request("tutor_login.php", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
  },

  logout() {
    return this.request("tutor_logout.php", {
      method: "POST",
    });
  },

  getProfile() {
    return this.request("tutor_me.php");
  },

  // Attendance
  checkIn(location = "", notes = "") {
    return this.request("tutor_checkin.php", {
      method: "POST",
      body: JSON.stringify({ location, notes }),
    });
  },

  // Sessions
  createSession(sessionData) {
    return this.request("tutor_sessions.php", {
      method: "POST",
      body: JSON.stringify(sessionData),
    });
  },

  getSessions(startDate = null, endDate = null) {
    let url = "tutor_sessions.php";
    const params = new URLSearchParams();

    if (startDate) params.append("start_date", startDate);
    if (endDate) params.append("end_date", endDate);

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    return this.request(url);
  },
};
