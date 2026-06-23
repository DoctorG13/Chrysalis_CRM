import Section from "../common/Section";

function GarmentWorkspace({ selectedClient }) {
  if (!selectedClient) return null;

  const garment = selectedClient.jobs?.[0];

  if (!garment) {
    return (
      <Section
        title="👗 Garment Workspace"
        subtitle="No active garment."
      >
        <p>Create a garment to begin tracking production.</p>
      </Section>
    );
  }

  const totalPaid = (selectedClient.payments || []).reduce(
    (total, payment) => total + Number(payment.amount),
    0
  );

  const outstanding = garment.quote - totalPaid;

  const fittings = selectedClient.fittings?.length || 0;

  return (
    <Section
      title="👗 Active Garment"
      subtitle="Current production summary"
    >
      <h2>{garment.name}</h2>

      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td><strong>Status</strong></td>
            <td>{garment.status}</td>
          </tr>

          <tr>
            <td><strong>Quote</strong></td>
            <td>${garment.quote}</td>
          </tr>

          <tr>
            <td><strong>Paid</strong></td>
            <td>${totalPaid}</td>
          </tr>

          <tr>
            <td><strong>Outstanding</strong></td>
            <td>${outstanding}</td>
          </tr>

          <tr>
            <td><strong>Fittings</strong></td>
            <td>{fittings}</td>
          </tr>

          <tr>
            <td><strong>Appointments</strong></td>
            <td>{selectedClient.appointments?.length || 0}</td>
          </tr>

          <tr>
            <td><strong>Notes</strong></td>
            <td>{selectedClient.notes?.length || 0}</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <button>📏 Measurements</button>{" "}
      <button>🧵 Fittings</button>{" "}
      <button>💰 Payments</button>{" "}
      <button>📷 Photos</button>
    </Section>
  );
}

export default GarmentWorkspace;