import Section from "../common/Section";

function JobsPanel({
  selectedClient,
  newJob,
  setNewJob,
  newQuote,
  setNewQuote,
  addJob,
  updateJobStatus,
  getStatusColor,
}) {
  if (!selectedClient) return null;

  return (
    <Section
      title="🧵 Jobs"
      subtitle="Manage garment work for this client"
    >
      {selectedClient.jobs.length === 0 ? (
        <p>No jobs yet.</p>
      ) : (
        selectedClient.jobs.map((job, index) => {
          const totalPaid = (selectedClient.payments || []).reduce(
            (total, payment) => total + Number(payment.amount),
            0
          );

          const balance = (job.quote || 0) - totalPaid;

          return (
            <div
              key={index}
              style={{
                background: "#f5f5f5",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              <h4
                style={{
                  marginTop: 0,
                  marginBottom: "10px",
                }}
              >
                👗 {job.name}
              </h4>

              <p>
                <strong>Quote:</strong> ${job.quote || 0}
              </p>

              <p>
                <strong>Paid:</strong> ${totalPaid}
              </p>

              <p
                style={{
                  color: "#b22222",
                  fontWeight: "bold",
                }}
              >
                Balance: ${balance}
              </p>

              <select
                value={job.status}
                onChange={(e) =>
                  updateJobStatus(index, e.target.value)
                }
                style={{
                  background: getStatusColor(job.status),
                  color: "white",
                  padding: "8px",
                  borderRadius: "8px",
                  border: "none",
                }}
              >
                <option>Quote</option>
                <option>In Progress</option>
                <option>Awaiting Fitting</option>
                <option>Completed</option>
                <option>Collected</option>
              </select>
            </div>
          );
        })
      )}

      <input
        placeholder="Job name..."
        value={newJob}
        onChange={(e) => setNewJob(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        placeholder="Quote Amount"
        value={newQuote}
        onChange={(e) => setNewQuote(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
      />

      <button
        onClick={addJob}
        style={{
          background: "#7A9A6D",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ➕ Add Job
      </button>
    </Section>
  );
}

export default JobsPanel;