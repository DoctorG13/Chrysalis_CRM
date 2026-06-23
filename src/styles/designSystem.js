// ==========================================
// Chrysalis Clothes Design System
// Version 1.0
// ==========================================

const design = {
  colors: {
    primary: "#7A9A6D",
    primaryDark: "#5D7A52",
    primaryLight: "#E8F0E4",

    background: "#F4F5F7",

    surface: "#FFFFFF",

    border: "#DDDDDD",

    text: "#333333",

    textLight: "#666666",

    success: "#4CAF50",

    warning: "#F9A825",

    danger: "#D32F2F",

    info: "#2196F3",
  },

  spacing: {
    xs: "5px",
    sm: "10px",
    md: "20px",
    lg: "30px",
    xl: "40px",
  },

  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    round: "999px",
  },

  shadow: {
    card: "0 2px 8px rgba(0,0,0,0.08)",
    hover: "0 6px 16px rgba(0,0,0,0.12)",
  },

  typography: {
    h1: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#333333",
    },

    h2: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#333333",
    },

    h3: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#333333",
    },

    body: {
      fontSize: "15px",
      color: "#555555",
    },

    small: {
      fontSize: "13px",
      color: "#777777",
    },
  },

  button: {
    primary: {
      background: "#7A9A6D",
      color: "#FFFFFF",
      border: "none",
      padding: "10px 18px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
    },

    secondary: {
      background: "#FFFFFF",
      color: "#333333",
      border: "1px solid #CCCCCC",
      padding: "10px 18px",
      borderRadius: "8px",
      cursor: "pointer",
    },

    danger: {
      background: "#D32F2F",
      color: "#FFFFFF",
      border: "none",
      padding: "10px 18px",
      borderRadius: "8px",
      cursor: "pointer",
    },
  },

  card: {
    background: "#FFFFFF",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #CCCCCC",
    borderRadius: "8px",
    marginBottom: "10px",
    fontSize: "15px",
  },

  sidebar: {
    width: "260px",
    background: "#5D4037",
    color: "#FFFFFF",
    minHeight: "100vh",
    padding: "20px",
  },

  content: {
    flex: 1,
    padding: "30px",
    background: "#F4F5F7",
  },
};

export default design;