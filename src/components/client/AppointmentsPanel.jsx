import Section from "../common/Section";

function AppointmentsPanel({
  selectedClient,
  appointmentDate,
  setAppointmentDate,
  appointmentType,
  setAppointmentType,
  addAppointment,
}) {
  if (!selectedClient) return null;

  return (
    <Section
      title="📅 Appointments"
      subtitle="Manage upcoming client appointments"
    >
      {selectedClient.appointments?.length > 0 ? (
        selectedClient.appointments.map((appointment, index) => (
          <div
            key={index}
            style={{
              background: "#F8F8F8",
              padding: "15px",
              marginBottom: "12px",
              borderRadius: "10px",
              borderLeft: "5px solid #7A9A6D",
            }}
          >
            <strong>{appointment.type}</strong>

            <p style={{ marginBottom: 0 }}>
              📅 {appointment.date}
            </p>
          </div>
        ))
      ) : (
        <p>No appointments scheduled.</p>
      )}

      <input
        placeholder="Appointment Date"
        value={appointmentDate}
        onChange={(e) =>
          setAppointmentDate(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "15px",
          marginBottom: "10px",
        }}
      />

      <input
        placeholder="Appointment Type"
        value={appointmentType}
        onChange={(e) =>
          setAppointmentType(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <button
        onClick={addAppointment}
        style={{
          background: "#7A9A6D",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ➕ Add Appointment
      </button>
    </Section>
  );
}

export default AppointmentsPanel;