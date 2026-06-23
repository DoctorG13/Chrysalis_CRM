import Section from "../common/Section";

function MeasurementsPanel({ selectedClient }) {
  if (!selectedClient) return null;

  const measurements = selectedClient.measurements || {};

  return (
    <Section
      title="📏 Measurements"
      subtitle="Latest client measurements"
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <tbody>
          {Object.entries(measurements).map(([name, value]) => (
            <tr key={name}>
              <td
                style={{
                  padding: "10px",
                  fontWeight: "bold",
                  width: "40%",
                  textTransform: "capitalize",
                }}
              >
                {name}
              </td>

              <td
                style={{
                  padding: "10px",
                }}
              >
                {value || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}

export default MeasurementsPanel;