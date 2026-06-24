import Section from "../common/Section";
import Button from "../common/Button";
import Input from "../common/Input";
import PanelItem from "../common/PanelItem";

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
      title="🧵 Jobs"
      subtitle="Manage garment work for this client"
    >
      {selectedClient.jobs.length === 0 ? (
        <p>No jobs have been created yet.</p>
      ) : (
        selectedClient.jobs.map((job, index) => {
          const totalPaid = (selectedClient.payments || []).reduce(
            (total, payment) => total + Number(payment.amount),
            0
          );

          const balance = (job.quote || 0) - totalPaid;

          return (
            <PanelItem key={index}>
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "15px",
                  color: "#5D4037",
                }}
              >
                👗 {job.name}
              </h3>

              <p>
                <strong>Quote:</strong> ${job.quote || 0}
              </p>

              <p>
                <strong>Paid:</strong> ${totalPaid}
              </p>

              <p
                style={{
                  color: "#B22222",
                  fontWeight: "bold",
                }}
              >
                Balance: ${balance}
              </p>

              <div
                style={{
                  marginTop: "15px",
                }}
              >
                <label style={labelStyle}>
                  Job Status
                </label>

                <select
                  value={job.status}
                  onChange={(e) =>
                    updateJobStatus(
                      index,
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #CCC",
                    background:
                      getStatusColor(job.status),
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  <option>Quote</option>
                  <option>In Progress</option>
                  <option>Awaiting Fitting</option>
                  <option>Completed</option>
                  <option>Collected</option>
                </select>
              </div>
            </PanelItem>
          );
        })
      )}

      <div style={fieldStyle}>
        <label style={labelStyle}>
          Job Name
        </label>

        <Input
          placeholder="Wedding Dress"
          value={newJob}
          onChange={(e) =>
            setNewJob(e.target.value)
          }
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>
          Quote Amount
        </label>

        <Input
          type="number"
          placeholder="0"
          value={newQuote}
          onChange={(e) =>
            setNewQuote(e.target.value)
          }
        />
      </div>

      <Button onClick={addJob}>
        ➕ Add Job
      </Button>
    </Section>
  );
}

export default JobsPanel;