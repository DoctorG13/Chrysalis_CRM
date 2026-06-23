import Card from "../common/Card";

function QuickActions() {
  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    background: "#7A9A6D",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <Card title="⚡ Quick Actions">
      <button style={buttonStyle}>
        ➕ New Garment
      </button>

      <button style={buttonStyle}>
        📅 Book Fitting
      </button>

      <button style={buttonStyle}>
        💳 Record Payment
      </button>

      <button style={buttonStyle}>
        📝 Add Note
      </button>
    </Card>
  );
}

export default QuickActions;