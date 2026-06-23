import Section from "../common/Section";

function ClientDashboard({ selectedClient }) {
  if (!selectedClient) return null;

  const activeJob = selectedClient.jobs?.[0];

  const totalPaid = (selectedClient.payments || []).reduce(
    (total, payment) => total + Number(payment.amount),
    0
  );

  const outstanding = activeJob
    ? activeJob.quote - totalPaid
    : 0;

  const nextAppointment =
    selectedClient.appointments?.[0];

  return (
    <Section
      title="📊 Client Dashboard"
      subtitle="Everything important at a glance"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#F8F8F8",
            padding: "18px",
            borderRadius: "10px",
          }}
        >
          <h3>👗 Active Garment</h3>

          <p>
            {activeJob
              ? activeJob.name
              : "No garment"}
          </p>

          <strong>
            {activeJob?.status || ""}
          </strong>
        </div>

        <div
          style={{
            background: "#F8F8F8",
            padding: "18px",
            borderRadius: "10px",
          }}
        >
          <h3>📏 Measurements</h3>

          <p>
            Bust: {selectedClient.measurements?.bust || "--"}
          </p>

          <p>
            Waist: {selectedClient.measurements?.waist || "--"}
          </p>

          <p>
            Hips: {selectedClient.measurements?.hips || "--"}
          </p>
        </div>

        <div
          style={{
            background: "#F8F8F8",
            padding: "18px",
            borderRadius: "10px",
          }}
        >
          <h3>🧵 Fittings</h3>

          <h2>
            {selectedClient.fittings?.length || 0}
          </h2>

          <p>Recorded fittings</p>
        </div>

        <div
          style={{
            background: "#F8F8F8",
            padding: "18px",
            borderRadius: "10px",
          }}
        >
          <h3>📅 Next Appointment</h3>

          {nextAppointment ? (
            <>
              <p>{nextAppointment.date}</p>

              <strong>
                {nextAppointment.type}
              </strong>
            </>
          ) : (
            <p>No appointment</p>
          )}
        </div>

        <div
          style={{
            background: "#F8F8F8",
            padding: "18px",
            borderRadius: "10px",
          }}
        >
          <h3>💰 Outstanding</h3>

          <h2>${outstanding}</h2>

          <p>
            Paid ${totalPaid}
          </p>
        </div>
      </div>
    </Section>
  );
}

export default ClientDashboard;