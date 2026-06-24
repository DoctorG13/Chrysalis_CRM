function Input({
  value,
  onChange,
  placeholder = "",
  type = "text",
  fullWidth = true,
  disabled = false,
  style = {},
  ...props
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      style={{
        width: fullWidth ? "100%" : "auto",
        padding: "10px 12px",
        border: "1px solid #D8D8D8",
        borderRadius: "8px",
        fontSize: "0.95rem",
        outline: "none",
        boxSizing: "border-box",
        background: disabled ? "#F5F5F5" : "#FFFFFF",
        color: "#333333",

        ...style,
      }}
      {...props}
    />
  );
}

export default Input;