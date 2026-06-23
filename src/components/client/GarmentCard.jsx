import Card from "../common/Card";

function GarmentCard({
  garment,
  status,
  dueDate,
  onClick,
}) {
  return (
    <Card
      style={{
        cursor: "pointer",
        marginBottom: "15px",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: "10px",
        }}
      >
        👗 {garment}
      </h3>

      <p>
        <strong>Status:</strong> {status}
      </p>

      <p>
        <strong>Due:</strong> {dueDate}
      </p>

      <button
        onClick={onClick}
        style={{
          marginTop: "10px",
        }}
      >
        Open Garment
      </button>
    </Card>
  );
}

export default GarmentCard;