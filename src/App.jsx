import { useState, useEffect } from "react";
import theme from "./styles/theme";
import Dashboard from "./components/Dashboard";
import StatCard from "./components/dashboard/StatCard";
import ClientSummary from "./components/client/ClientSummary";
import JobsPanel from "./components/client/JobsPanel";
import MeasurementsPanel from "./components/client/MeasurementsPanel";
import FittingsPanel from "./components/client/FittingsPanel";
import AppointmentsPanel from "./components/client/AppointmentsPanel";
import GarmentWorkspace from "./components/workspaces/GarmentWorkspace";
import ClientDashboard from "./components/client/ClientDashboard";


function App() {
  const [page, setPage] = useState("dashboard");
  const [showClientForm, setShowClientForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [clients, setClients] = useState(() => {
  const savedClients = localStorage.getItem(
    "chrysalisClients"
  );

  return savedClients
    ? JSON.parse(savedClients)
    : [
        {
          name: "Sarah Smith",
  phone: "0412 345 678",
  email: "sarah@email.com",
  clientSince: "11 Jun 2026",

  measurements: {
    bust: "92",
    waist: "72",
    hips: "98",
  },

  fittings: [
  {
    id: Date.now(),
    stage: "Initial Consultation",
    date: new Date().toLocaleDateString("en-AU"),
    measurements: {},
    notes: "",
    alterations: "",
    photos: []
  }
],

  appointments: [
  {
    date: "15 Jul 2026",
    type: "Initial Consultation",
  },
  {
    date: "22 Jul 2026",
    type: "First Fitting",
  },
],
payments: [
  {
    amount: 200,
    description: "Deposit",
  },
  {
    amount: 150,
    description: "Progress Payment",
  },
],
          notes: [
            "Wedding dress fitting booked.",
            "Bringing original lace trim.",
          ],
          jobs: [
  {
    name: "Wedding Dress Alteration",
    quote: 850,
    status: "In Progress",
  },
  {
    name: "Lace Bodice Adjustment",
    quote: 150,
    status: "Awaiting Fitting",
  },
],

        },
        {
          name: "Emma Brown",
          phone: "0400 111 222",
          email: "emma@email.com",
          clientSince: "15 Jun 2025",
          measurements: {
  bust: "",
  waist: "",
  hips: "",
},

fittings: [],

appointments: [],
          notes: ["Formal dress alteration."],
          jobs: [
            {
  name: "Evening Gown Hem",
  quote: 180,
  status: "Quote",
},
          ],
        },
        {
          name: "Louise White",
          phone: "0400 222 333",
          email: "louise@email.com",
          clientSince: "12 Jul 2025",
          notes: [],
          measurements: {
  bust: "",
  waist: "",
  hips: "",
},

fittings: [],

appointments: [],
payments: [],
          jobs: [],
        },
      ];
});

  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
  if (!selectedClient && clients.length > 0) {
    setSelectedClient(clients[0]);
  }
}, [clients, selectedClient]);

useEffect(() => {
  localStorage.setItem(
    "chrysalisClients",
    JSON.stringify(clients)
  );
}, [clients]);


  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  const [newNote, setNewNote] = useState("");
  const [newJob, setNewJob] = useState("");
  const [newQuote, setNewQuote] = useState("");
  const [bust, setBust] = useState("");
const [waist, setWaist] = useState("");
const [hips, setHips] = useState("");
const [appointmentDate, setAppointmentDate] =
  useState("");

const [appointmentType, setAppointmentType] =
  useState("");

const [paymentAmount, setPaymentAmount] =
  useState("");

const [paymentDescription, setPaymentDescription] =
  useState("");

  const saveClient = () => {
    if (!clientName.trim()) return;

  const client = {
  name: clientName,
  phone: clientPhone,
  email: clientEmail,

  clientSince: new Date().toLocaleDateString(),

  measurements: {
    bust: "",
    waist: "",
    hips: "",
  },

  fittings: [],

  appointments: [],
  payments: [],

  notes: [],
  jobs: [],
};

    setClients([...clients, client]);

    setClientName("");
    setClientPhone("");
    setClientEmail("");

    setShowClientForm(false);
  };

  const addNote = () => {
    if (!selectedClient || !newNote.trim()) return;

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
      (c) => c.name === selectedClient.name
    );

    setSelectedClient(updatedClient);

    setNewNote("");
  };

  const addJob = () => {
    if (!selectedClient || !newJob.trim()) return;

    const updatedClients = clients.map((client) => {
      if (client.name === selectedClient.name) {
        return {
          ...client,
          jobs: [
            ...client.jobs,
            {
  name: newJob,
  quote: Number(newQuote),
  status: "Quote",
},
          ],
        };
      }

      return client;
    });

    setClients(updatedClients);

    const updatedClient = updatedClients.find(
      (c) => c.name === selectedClient.name
    );

    setSelectedClient(updatedClient);

    setNewJob("");
    setNewQuote("");
  };

const saveMeasurements = () => {
  if (!selectedClient) return;

  const updatedClients = clients.map((client) => {
    if (client.name === selectedClient.name) {
      return {
        ...client,
        measurements: {
          bust,
          waist,
          hips,
        },
      };
    }

    return client;
  });

  setClients(updatedClients);

  const updatedClient = updatedClients.find(
    (client) => client.name === selectedClient.name
  );

  setSelectedClient(updatedClient);
};

const addAppointment = () => {
  if (!selectedClient) return;

  if (
    appointmentDate.trim() === "" ||
    appointmentType.trim() === ""
  ) {
    return;
  }

  const updatedClients = clients.map((client) => {
    if (client.name === selectedClient.name) {
      return {
        ...client,
        appointments: [
          ...(client.appointments || []),
          {
            date: appointmentDate,
            type: appointmentType,
          },
        ],
      };
    }

    return client;
  });

  setClients(updatedClients);

  const updatedClient = updatedClients.find(
    (client) => client.name === selectedClient.name
  );

  setSelectedClient(updatedClient);

  setAppointmentDate("");
  setAppointmentType("");
};

const addPayment = () => {
  if (!selectedClient) return;

  if (
    paymentAmount.trim() === "" ||
    paymentDescription.trim() === ""
  ) {
    return;
  }

  const updatedClients = clients.map((client) => {
    if (client.name === selectedClient.name) {
      return {
        ...client,
        payments: [
          ...(client.payments || []),
          {
            amount: paymentAmount,
            description: paymentDescription,
          },
        ],
      };
    }

    return client;
  });

  setClients(updatedClients);

  const updatedClient = updatedClients.find(
    (client) => client.name === selectedClient.name
  );

  setSelectedClient(updatedClient);

  setPaymentAmount("");
  setPaymentDescription("");
};



const addFitting = () => {
  if (!selectedClient) return;

  const stages = [
    "Initial Consultation",
    "First Fitting",
    "Second Fitting",
    "Final Fitting",
    "Collection",
  ];

  const currentCount = selectedClient.fittings?.length || 0;

  const stage =
    stages[currentCount] || `Fitting ${currentCount + 1}`;

  const newFitting = {
    id: Date.now(),
    stage,
    date: new Date().toLocaleDateString("en-AU"),
    measurements: {},
    notes: "",
    alterations: "",
    photos: [],
  };

  const updatedClients = clients.map((client) => {
    if (client.name === selectedClient.name) {
      return {
        ...client,
        fittings: [
          ...(client.fittings || []),
          newFitting,
        ],
      };
    }

    return client;
  });

  setClients(updatedClients);

  const updatedClient = updatedClients.find(
    (client) => client.name === selectedClient.name
  );

  setSelectedClient(updatedClient);
};

  const updateJobStatus = (jobIndex, newStatus) => {
    const updatedClients = clients.map((client) => {
      if (client.name === selectedClient.name) {
        const updatedJobs = [...client.jobs];

        updatedJobs[jobIndex] = {
          ...updatedJobs[jobIndex],
          status: newStatus,
        };

        return {
          ...client,
          jobs: updatedJobs,
        };
      }

      return client;
    });

    setClients(updatedClients);

    const updatedClient = updatedClients.find(
      (c) => c.name === selectedClient.name
    );

    setSelectedClient(updatedClient);
  };


  const totalRevenue = clients.reduce(
  (total, client) =>
    total +
    (client.payments || []).reduce(
      (paymentTotal, payment) =>
        paymentTotal + Number(payment.amount),
      0
    ),
  0
);


  const getStatusColor = (status) => {
    switch (status) {
      case "Quote":
        return "#3498db";

      case "In Progress":
        return "#2ecc71";

      case "Awaiting Fitting":
        return "#f1c40f";

      case "Completed":
        return "#27ae60";

      case "Collected":
        return "#7f8c8d";

      default:
        return "#bdc3c7";
    }
  };

  return (
  
  <div
    style={{
      display: "flex",
      ...theme.page,
    }}
  >
      {/* Sidebar */}
      <div style={theme.sidebar}>

        <h2>🌸 Chrysalis Clothes</h2>

        <p>Dressmaker Business Operating System</p>

        <hr />

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

      {/* Main Content */}
      <div style={theme.content}>

        {page === "dashboard" && (
          <>
            <h1>Good Morning Donna</h1>

            <div
  style={{
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  }}
>
  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      flex: 1,
    }}
  >
    <h3>👗 Clients</h3>
    <h1>{clients.length}</h1>
  </div>

  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      flex: 1,
    }}
  >
    <h3>🧵 Jobs</h3>
    <h1>
      {clients.reduce(
        (total, client) => total + client.jobs.length,
        0
      )}
    </h1>
  </div>

  <div
    style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      flex: 1,
    }}
  >
    <h3>📝 Notes</h3>
    <h1>
      {clients.reduce(
        (total, client) => total + client.notes.length,
        0
      )}
    </h1>
  </div>

  <div
  style={{
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    flex: 1,
  }}
>
  <h3>💰 Revenue</h3>

  <h1>${totalRevenue}</h1>
</div>


</div>

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

        {page === "clients" && (
          <>
            <h1>Clients</h1>

            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
              }}
            >
              {/* LEFT PANEL */}
              <div style={{ width: "35%" }}>
                <button
                  onClick={() => setShowClientForm(!showClientForm)}
                  style={{
                    width: "100%",
                    background: "#7A9A6D",
                    color: "white",
                    border: "none",
                    padding: "12px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginBottom: "15px",
                  }}
                >
                  + Add Client
                </button>

                <input
                  placeholder="🔍 Search Clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                  }}
                />

                {showClientForm && (
                  <div
                    style={{
                      background: "white",
                      padding: "20px",
                      borderRadius: "12px",
                      marginBottom: "15px",
                    }}
                  >
                    <h3>New Client</h3>

                    <input
                      placeholder="Name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "10px",
                      }}
                    />

                    <input
                      placeholder="Phone"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "10px",
                      }}
                    />

                    <input
                      placeholder="Email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "10px",
                      }}
                    />

                    <button onClick={saveClient}>
                      Save Client
                    </button>
                  </div>
                )}

                <div
                  style={{
                    background: "white",
                    borderRadius: "12px",
                    padding: "20px",
                  }}
                >
                  <h3>Client List</h3>

                  {clients
                    .filter((client) =>
                      client.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                    .map((client, index) => (
                      <div
                        key={index}
                        onClick={() => {
  setSelectedClient(client);

  setBust(client.measurements?.bust || "");
  setWaist(client.measurements?.waist || "");
  setHips(client.measurements?.hips || "");
}}
                        style={{
  padding: "12px",
  borderBottom: "1px solid #ddd",
  cursor: "pointer",
  background:
    selectedClient?.name === client.name
      ? "#E8F0E4"
      : "white",
  borderLeft:
    selectedClient?.name === client.name
      ? "5px solid #7A9A6D"
      : "5px solid transparent",
}}
                      >
                        <strong>{client.name}</strong>

                        <p>🧵 Jobs: {client.jobs.length}</p>
                        <p>📝 Notes: {client.notes.length}</p>
                      </div>
                    ))}
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div style={{ width: "65%" }}>
                {selectedClient ? (
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

<GarmentWorkspace
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
                      selectedClient.notes.map(
                        (note, index) => (
                          <p key={index}>• {note}</p>
                        )
                      )
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
          💰 ${payment.amount} -{" "}
          {payment.description}
        </p>
      )
    )}

    <p
      style={{
        marginTop: "15px",
        fontWeight: "bold",
        fontSize: "18px",
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

<button
  onClick={addPayment}
  style={{
    background: "#7A9A6D",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  }}
>
  Add Payment
</button>
                  </div>
                ) : (
                  <div
                    style={{
                      background: "white",
                      padding: "40px",
                      borderRadius: "12px",
                      textAlign: "center",
                    }}
                  >
                    <h2>Select a Client</h2>

                    <p>
                      Choose a client from the list to
                      view their profile.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;