import Section from "../common/Section";

function FittingsPanel({
  selectedClient,
  addFitting,
}) {
  if (!selectedClient) return null;

  return (
    <Section
      title="📏 Fitting History"
      subtitle="Track every fitting throughout the life of a garment."
    >
      <button
        onClick={addFitting}
        style={{
          background: "#7A9A6D",
          color: "white",
          border: "none",
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ➕ Record Fitting
      </button>

      {selectedClient.fittings?.length > 0 ? (
        selectedClient.fittings.map((fitting) => (
          <div
            key={fitting.id}
            style={{
              background: "#F8F8F8",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "15px",
              borderLeft: "5px solid #7A9A6D",
            }}
          >
            <h4
              style={{
                marginTop: 0,
                color: "#5D4037",
              }}
            >
              {fitting.stage}
            </h4>

            <p>📅 {fitting.date}</p>

            <p>
              📝 {fitting.notes || "No notes recorded"}
            </p>

            <p>
              ✂️ {fitting.alterations || "No alterations recorded"}
            </p>

            <button
              style={{
                background: "#E8F0E4",
                border: "1px solid #7A9A6D",
                borderRadius: "6px",
                padding: "8px 12px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Open Fitting
            </button>
          </div>
        ))
      ) : (
        <p>No fittings recorded yet.</p>
      )}
    </Section>
  );
}

export default FittingsPanel;