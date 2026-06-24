import Section from "../common/Section";
import StatCard from "../dashboard/StatCard";

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

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  };

  return (
    <Section
      title="📊 Client Dashboard"
      subtitle="Everything important at a glance"
    >
      <div style={gridStyle}>

        <StatCard title="👗 Active Garment">
          <p>
            {activeJob
              ? activeJob.name
              : "No garment"}
          </p>

          <strong>
            {activeJob?.status || ""}
          </strong>
        </StatCard>

        <StatCard title="📏 Measurements">
          <p>
            Bust: {selectedClient.measurements?.bust || "--"}
          </p>

          <p>
            Waist: {selectedClient.measurements?.waist || "--"}
          </p>

          <p>
            Hips: {selectedClient.measurements?.hips || "--"}
          </p>
        </StatCard>

        <StatCard title="🧵 Fittings">
          <h2>
            {selectedClient.fittings?.length || 0}
          </h2>

          <p>Recorded fittings</p>
        </StatCard>

        <StatCard title="📅 Next Appointment">
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
        </StatCard>

        <StatCard title="💰 Outstanding">
          <h2>${outstanding}</h2>

          <p>
            Paid ${totalPaid}
          </p>
        </StatCard>

      </div>
    </Section>
  );
}

export default ClientDashboard;