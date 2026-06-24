import Section from "../common/Section";
import Button from "../common/Button";
import Input from "../common/Input";

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

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "20px",
    marginBottom: "25px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "600",
    color: "#5D4037",
  };

  return (
    <Section
      title="📏 Measurements"
      subtitle="Current body measurements"
    >
      <div style={gridStyle}>
        <div>
          <label style={labelStyle}>
            Bust
          </label>

          <Input
            value={bust}
            onChange={(e) =>
              setBust(e.target.value)
            }
            placeholder="Bust"
          />
        </div>

        <div>
          <label style={labelStyle}>
            Waist
          </label>

          <Input
            value={waist}
            onChange={(e) =>
              setWaist(e.target.value)
            }
            placeholder="Waist"
          />
        </div>

        <div>
          <label style={labelStyle}>
            Hips
          </label>

          <Input
            value={hips}
            onChange={(e) =>
              setHips(e.target.value)
            }
            placeholder="Hips"
          />
        </div>
      </div>

      <Button onClick={saveMeasurements}>
        💾 Save Measurements
      </Button>
    </Section>
  );
}

export default MeasurementsPanel;