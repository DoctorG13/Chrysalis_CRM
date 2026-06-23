import Section from "../common/Section";

function MeasurementsPanel({
  selectedClient,
  bust,
  waist,
  hips,
  setBust,
  setWaist,
  setHips,
  saveMeasurements,
}) {
  if (!selectedClient) return null;

  return (
    <Section
      title="📏 Measurements"
      subtitle="Current body measurements"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "15px",
        }}
      >
        <div>
          <label>Bust</label>

          <input
            value={bust}
            onChange={(e) => setBust(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
        </div>

        <div>
          <label>Waist</label>

          <input
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
        </div>

        <div>
          <label>Hips</label>

          <input
            value={hips}
            onChange={(e) => setHips(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
            }}
          />
        </div>
      </div>

      <button
        onClick={saveMeasurements}
        style={{
          marginTop: "20px",
          padding: "10px 18px",
          border: "none",
          borderRadius: "8px",
          background: "#7A9A6D",
          color: "white",
          cursor: "pointer",
        }}
      >
        💾 Save Measurements
      </button>
    </Section>
  );
}

export default MeasurementsPanel;