function ClientSummary({ selectedClient }) {
  if (!selectedClient) return null;

  return (
    <div
      style={{
        background: "#f8f8f8",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
      }}
    >
      <h2>{selectedClient.name}</h2>

      <p>📞 {selectedClient.phone}</p>

      <p>📧 {selectedClient.email}</p>

      <p>📅 Client Since: {selectedClient.clientSince}</p>

      <hr />

      <p>🧵 Jobs: {selectedClient.jobs.length}</p>

      <p>📝 Notes: {selectedClient.notes.length}</p>

      <p>
        📏 Fittings: {selectedClient.fittings?.length || 0}
      </p>
    </div>
  );
}

export default ClientSummary;