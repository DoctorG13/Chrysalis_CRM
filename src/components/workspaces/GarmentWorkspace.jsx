import Section from "../common/Section";

function GarmentWorkspace({ selectedClient }) {
  if (!selectedClient) return null;

  return (
    <Section
      title="👗 Garment Workspace"
      subtitle="Overview of this client's garments"
    >
      <p>
        Garment workspace coming soon...
      </p>
    </Section>
  );
}

export default GarmentWorkspace;