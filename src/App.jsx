import { useState } from "react";

function App() {
  const [page, setPage] = useState("dashboard");
  const [showClientForm, setShowClientForm] = useState(false);

  const [clients, setClients] = useState([
    "Sarah Smith",
    "Emma Brown",
    "Louise White",
  ]);

  const [clientName, setClientName] = useState("");

  const saveClient = () => {
    if (clientName.trim() === "") return;

    setClients([...clients, clientName]);
    setClientName("");
    setShowClientForm(false);
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
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                />

                <input
                  placeholder="Email"
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

            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "12px",
              }}
            >
              <h3>Client List</h3>

              {clients.map((client, index) => (
                <p key={index}>👗 {client}</p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;