import Section from "../common/Section";
import Button from "../common/Button";
import Input from "../common/Input";
import PanelItem from "../common/PanelItem";

function AppointmentsPanel({
  selectedClient,
  appointmentDate,
  setAppointmentDate,
  appointmentType,
  setAppointmentType,
  addAppointment,
}) {
  if (!selectedClient) return null;

  const fieldStyle = {
    marginBottom: "16px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "600",
    color: "#5D4037",
  };

  return (
    <Section
      title="📅 Appointments"
      subtitle="Manage upcoming client appointments"
    >
      {selectedClient.appointments?.length > 0 ? (
        selectedClient.appointments.map((appointment, index) => (
          <PanelItem key={index}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: "10px",
                color: "#5D4037",
              }}
            >
              {appointment.type}
            </h3>

            <p
              style={{
                margin: 0,
              }}
            >
              📅 {appointment.date}
            </p>
          </PanelItem>
        ))
      ) : (
        <p>No appointments scheduled.</p>
      )}

      <div style={fieldStyle}>
        <label style={labelStyle}>
          Appointment Date
        </label>

        <Input
          placeholder="e.g. 25 Jul 2026"
          value={appointmentDate}
          onChange={(e) =>
            setAppointmentDate(e.target.value)
          }
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>
          Appointment Type
        </label>

        <Input
          placeholder="e.g. First Fitting"
          value={appointmentType}
          onChange={(e) =>
            setAppointmentType(e.target.value)
          }
        />
      </div>

      <Button onClick={addAppointment}>
        ➕ Add Appointment
      </Button>
    </Section>
  );
}

export default AppointmentsPanel;