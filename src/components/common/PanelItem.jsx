function PanelItem({
  children,
  accentColor = "#7A9A6D",
  style = {},
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#F8F8F8",
        borderRadius: "10px",
        padding: "16px",
        marginBottom: "15px",
        borderLeft: `5px solid ${accentColor}`,
        transition: "all 0.2s ease",
        cursor: onClick ? "pointer" : "default",
        boxSizing: "border-box",

        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default PanelItem;