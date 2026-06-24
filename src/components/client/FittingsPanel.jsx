import Section from "../common/Section";
import Button from "../common/Button";
import PanelItem from "../common/PanelItem";

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
      <Button
        onClick={addFitting}
        style={{
          marginBottom: "20px",
        }}
      >
        ➕ Record Fitting
      </Button>

      {selectedClient.fittings?.length > 0 ? (
        selectedClient.fittings.map((fitting) => (
          <PanelItem key={fitting.id}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "12px",
                color: "#5D4037",
              }}
            >
              {fitting.stage}
            </h3>

            <p>
              <strong>Date:</strong> {fitting.date}
            </p>

            <p>
              <strong>Notes:</strong>{" "}
              {fitting.notes || "No notes recorded"}
            </p>

            <p>
              <strong>Alterations:</strong>{" "}
              {fitting.alterations || "No alterations recorded"}
            </p>

            <Button
              variant="secondary"
              style={{
                marginTop: "12px",
              }}
            >
              Open Fitting
            </Button>
          </PanelItem>
        ))
      ) : (
        <p>No fittings recorded yet.</p>
      )}
    </Section>
  );
}

export default FittingsPanel;