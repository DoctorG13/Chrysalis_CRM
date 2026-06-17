import colours from "./colours";

const theme = {
  page: {
    background: colours.background,
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },

  sidebar: {
    width: "240px",
    background: colours.primary,
    color: colours.white,
    padding: "20px",
  },

  content: {
    flex: 1,
    padding: "30px",
    background: colours.background,
  },

  card: {
    background: colours.white,
    padding: "20px",
    borderRadius: "12px",
  },

  panel: {
    background: colours.panel,
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "10px",
    border: `1px solid ${colours.border}`,
    borderRadius: "8px",
    marginBottom: "10px",
    boxSizing: "border-box",
  },

  button: {
    background: colours.primary,
    color: colours.white,
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default theme;