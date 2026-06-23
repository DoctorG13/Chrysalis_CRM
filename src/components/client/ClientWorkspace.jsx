import PageHeader from "../common/PageHeader";
import Card from "../common/Card";
import QuickActions from "./QuickActions";

function ClientWorkspace({ selectedClient }) {
  if (!selectedClient) return null;

  return (
    <>
      <PageHeader
        title={`👤 ${selectedClient.name}`}
        subtitle={`Client since ${selectedClient.clientSince}`}
      />

      <Card>
        <p>
          <strong>📞 Phone:</strong>{" "}
          {selectedClient.phone}
        </p>

        <p>
          <strong>✉️ Email:</strong>{" "}
          {selectedClient.email}
        </p>
      </Card>

      <QuickActions />
    </>
  );
}

export default ClientWorkspace;