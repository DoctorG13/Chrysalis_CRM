import Section from "../common/Section";

function GarmentWorkspace({ garment }) {
  if (!garment) {
    return (
      <Section
        title="👗 Garment Workspace"
        subtitle="Select a garment to begin"
      >
        <p>No garment selected.</p>
      </Section>
    );
  }

  return (
    <Section
      title={`👗 ${garment.name}`}
      subtitle={`${garment.type} • ${garment.status}`}
    >
      <p>
        <strong>Due Date:</strong>{" "}
        {garment.dueDate || "Not set"}
      </p>

      <p>
        <strong>Quote:</strong> $
        {garment.quote || 0}
      </p>

      <p>
        <strong>Notes:</strong>
      </p>

      <p>
        {garment.notes || "No notes recorded."}
      </p>
    </Section>
  );
}

export default GarmentWorkspace;