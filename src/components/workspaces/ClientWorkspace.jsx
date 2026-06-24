import ClientSummary from "../client/ClientSummary";
import ClientDashboard from "../client/ClientDashboard";
import GarmentWorkspace from "./GarmentWorkspace";
import JobsPanel from "../client/JobsPanel";
import MeasurementsPanel from "../client/MeasurementsPanel";
import FittingsPanel from "../client/FittingsPanel";
import AppointmentsPanel from "../client/AppointmentsPanel";

function ClientWorkspace({
  selectedClient,

  // Jobs
  newJob,
  setNewJob,
  newQuote,
  setNewQuote,
  addJob,
  updateJobStatus,
  getStatusColor,

  // Notes
  newNote,
  setNewNote,
  addNote,

  // Measurements
  bust,
  waist,
  hips,
  setBust,
  setWaist,
  setHips,
  saveMeasurements,

  // Fittings
  addFitting,

  // Appointments
  appointmentDate,
  setAppointmentDate,
  appointmentType,
  setAppointmentType,
  addAppointment,

  // Payments
  paymentAmount,
  setPaymentAmount,
  paymentDescription,
  setPaymentDescription,
  addPayment,
}) {
  if (!selectedClient) return null;

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <ClientSummary selectedClient={selectedClient} />

      <hr />

      <ClientDashboard
        selectedClient={selectedClient}
      />

      <hr />

      <GarmentWorkspace
        selectedClient={selectedClient}
      />

      <hr />

      <JobsPanel
        selectedClient={selectedClient}
        newJob={newJob}
        setNewJob={setNewJob}
        newQuote={newQuote}
        setNewQuote={setNewQuote}
        addJob={addJob}
        updateJobStatus={updateJobStatus}
        getStatusColor={getStatusColor}
      />

      <hr />

      <h3>Notes</h3>

      {selectedClient.notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        selectedClient.notes.map((note, index) => (
          <p key={index}>• {note}</p>
        ))
      )}

      <input
        placeholder="Add note..."
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <button onClick={addNote}>
        Add Note
      </button>

      <hr />

      <MeasurementsPanel
        selectedClient={selectedClient}
        bust={bust}
        waist={waist}
        hips={hips}
        setBust={setBust}
        setWaist={setWaist}
        setHips={setHips}
        saveMeasurements={saveMeasurements}
      />

      <hr />

      <FittingsPanel
        selectedClient={selectedClient}
        addFitting={addFitting}
      />

      <hr />

      <AppointmentsPanel
        selectedClient={selectedClient}
        appointmentDate={appointmentDate}
        setAppointmentDate={setAppointmentDate}
        appointmentType={appointmentType}
        setAppointmentType={setAppointmentType}
        addAppointment={addAppointment}
      />

      <hr />

      <h3>💰 Payments</h3>

      {selectedClient.payments?.length > 0 ? (
        <>
          {selectedClient.payments.map(
            (payment, index) => (
              <p key={index}>
                💰 ${payment.amount} - {payment.description}
              </p>
            )
          )}

          <p
            style={{
              marginTop: "15px",
              fontWeight: "bold",
            }}
          >
            Total Paid: $
            {(selectedClient.payments || []).reduce(
              (total, payment) =>
                total + Number(payment.amount),
              0
            )}
          </p>
        </>
      ) : (
        <p>No payments recorded.</p>
      )}

      <input
        placeholder="Amount"
        value={paymentAmount}
        onChange={(e) =>
          setPaymentAmount(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        placeholder="Description"
        value={paymentDescription}
        onChange={(e) =>
          setPaymentDescription(e.target.value)
        }
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <button onClick={addPayment}>
        Add Payment
      </button>
    </div>
  );
}

export default ClientWorkspace;