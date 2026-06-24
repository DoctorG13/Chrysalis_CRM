function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  fullWidth = false,
  style = {},
}) {
  const variants = {
    primary: {
      background: "#7A9A6D",
      color: "#FFFFFF",
      border: "none",
    },

    secondary: {
      background: "#E8F0E4",
      color: "#5D4037",
      border: "1px solid #7A9A6D",
    },

    danger: {
      background: "#C62828",
      color: "#FFFFFF",
      border: "none",
    },

    ghost: {
      background: "transparent",
      color: "#5D4037",
      border: "1px solid #CCCCCC",
    },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...variants[variant],

        padding: "10px 18px",
        borderRadius: "8px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: "0.95rem",
        fontWeight: "600",
        transition: "all 0.2s ease",
        width: fullWidth ? "100%" : "auto",
        opacity: disabled ? 0.6 : 1,

        ...style,
      }}
    >
      {children}
    </button>
  );
}

export default Button;