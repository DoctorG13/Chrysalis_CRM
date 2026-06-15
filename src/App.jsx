import { useState } from "react";

function App() {
  const [page, setPage] = useState("dashboard");
  const [showClientForm, setShowClientForm] = useState(false);

  const [clients, setClients] = useState([
  {
    name: "Sarah Smith",
    phone: "0412 345 678",
    email: "sarah@email.com",
    notes: [
      "Wedding dress fitting booked.",
      "Bringing original lace trim.",
    ],
    jobs: [
      "Wedding Dress Alteration",
      "Lace Bodice Adjustment",
    ],
  },
  {
    name: "Emma Brown",
    phone: "0400 111 222",
    email: "emma@email.com",
    notes: [
      "Formal dress alteration.",
    ],
    jobs: [
      "Evening Gown Hem",
    ],
  },
  {
    name: "Louise White",
    phone: "0400 222 333",
    email: "louise@email.com",
    notes: [],
    jobs: [],
  },
]);

  const [selectedClient, setSelectedClient] = useState(null);

  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [newNote, setNewNote] = useState("");
  const [newJob, setNewJob] = useState("");

  const saveClient = () => {
    if (clientName.trim() === "") return;

    const newClient = {
  name: clientName,
  phone: clientPhone,
  email: clientEmail,
  notes: [],
  jobs: [],
};

    setClients([...clients, newClient]);

    setClientName("");
    setClientPhone("");
    setClientEmail("");

    setShowClientForm(false);
  };

  const addNote = () => {
  if (!selectedClient) return;
  if (newNote.trim() === "") return;

  const updatedClients = clients.map((client) => {
    if (client.name === selectedClient.name) {
      return {
        ...client,
        notes: [...client.notes, newNote],
      };
    }

    return client;
  });

  setClients(updatedClients);

  const updatedClient = updatedClients.find(
    (client) => client.name === selectedClient.name
  );

  setSelectedClient(updatedClient);

  setNewNote("");
};

const addJob = () => {
  if (!selectedClient) return;
  if (newJob.trim() === "") return;

  const updatedClients = clients.map((client) => {
    if (client.name === selectedClient.name) {
      return {
        ...client,
        jobs: [...client.jobs, newJob],
      };
    }

    return client;
  });

  setClients(updatedClients);

  const updatedClient = updatedClients.find(
    (client) => client.name === selectedClient.name
  );

  setSelectedClient(updatedClient);

  setNewJob("");
};


  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "240px",
          background: "#7A9A6D",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>🌸 Chrysalis Studio</h2>

        <p style={{ opacity: 0.8 }}>
          Dressmaking Management
        </p>

        <hr />

        <div style={{ marginTop: "20px" }}>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => setPage("dashboard")}
          >
            📊 Dashboard
          </p>

          <p
            style={{ cursor: "pointer" }}
            onClick={() => setPage("clients")}
          >
            👗 Clients
          </p>

          <p>📏 Measurements</p>
          <p>🧵 Jobs</p>
          <p>📅 Appointments</p>
          <p>💰 Payments</p>
          <p>📈 Reports</p>
          <p>⚙️ Settings</p>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          background: "#F7F5F0",
        }}
      >
        {/* Dashboard */}
        {page === "dashboard" && (
          <>
            <h1>Good Morning Donna</h1>

            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                marginBottom: "20px",
              }}
            >
              <h2>Today's Appointments</h2>

              <p>10:00 AM - Sarah Smith</p>
              <p>Wedding Dress Fitting</p>

              <hr />

              <p>2:00 PM - Emma Brown</p>
              <p>Formal Dress Alteration</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h2>What Needs Ready Today</h2>

              <p>✅ Sarah's lace bodice</p>
              <p>☑ Fabric pressed</p>
              <p>☐ Emma's sleeve adjustment</p>
            </div>
          </>
        )}

        {/* Clients */}
        {page === "clients" && (
          <>
            <h1>Clients</h1>

            <button
              onClick={() =>
                setShowClientForm(!showClientForm)
              }
              style={{
                background: "#7A9A6D",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "8px",
                cursor: "pointer",
                marginBottom: "20px",
              }}
            >
              + Add Client
            </button>

            {showClientForm && (
              <div
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  marginBottom: "20px",
                }}
              >
                <h3>New Client</h3>

                <input
                  placeholder="Client Name"
                  value={clientName}
                  onChange={(e) =>
                    setClientName(e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                />

                <input
                  placeholder="Phone"
                  value={clientPhone}
                  onChange={(e) =>
                    setClientPhone(e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                />

                <input
                  placeholder="Email"
                  value={clientEmail}
                  onChange={(e) =>
                    setClientEmail(e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                />

                <button
                  onClick={saveClient}
                  style={{
                    background: "#7A9A6D",
                    color: "white",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Save Client
                </button>
              </div>
            )}

            {/* Client List */}
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3>Client List</h3>

              {clients.map((client, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setSelectedClient(client)
                  }
                  style={{
                    padding: "15px",
                    borderBottom: "1px solid #ddd",
                    cursor: "pointer",
                  }}
                >
                  <strong>{client.name}</strong>

                  <p>📞 {client.phone}</p>

                  <p>📧 {client.email}</p>
                  <p>🧵 Jobs: {client.jobs.length}</p>
                </div>
              ))}
            </div>

            {/* Client Profile */}
            {selectedClient && (
              <div
                style={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "12px",
                  marginTop: "20px",
                }}
              >
                <h2>{selectedClient.name}</h2>

                <p>📞 {selectedClient.phone}</p>

                <p>📧 {selectedClient.email}</p>

                <hr />

                <h3>Measurements</h3>
                <p>No measurements yet.</p>

                <h3>Jobs</h3>

{selectedClient.jobs.length === 0 ? (
  <p>No jobs yet.</p>
) : (
  selectedClient.jobs.map((job, index) => (
    <p key={index}>🧵 {job}</p>
  ))
)}

<input
  placeholder="Job name..."
  value={newJob}
  onChange={(e) => setNewJob(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    marginBottom: "10px",
  }}
/>

<button
  onClick={addJob}
  style={{
    background: "#7A9A6D",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Add Job
</button>

                <h3>Payments</h3>
                <p>No payments yet.</p>

                <h3>Appointments</h3>
                <p>No appointments yet.</p>

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
    marginTop: "10px",
    marginBottom: "10px",
  }}
/>

<button
  onClick={addNote}
  style={{
    background: "#7A9A6D",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Add Note
</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;