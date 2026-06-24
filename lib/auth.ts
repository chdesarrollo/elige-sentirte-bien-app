export const auth = {
  login: () => {
    if (typeof window === "undefined") return;
    localStorage.setItem("isLoggedIn", "true");
  },

  logout: () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("isLoggedIn");
  },

  isAuthenticated: () => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("isLoggedIn") === "true";
  },
};