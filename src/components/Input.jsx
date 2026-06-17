function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  style = {},
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxSizing: "border-box",
        ...style,
      }}
    />
  );
}

export default Input;