import Section from "../common/Section";
import Button from "../common/Button";
import Input from "../common/Input";
import PanelItem from "../common/PanelItem";

function PaymentsPanel({
  selectedClient,
  paymentAmount,
  setPaymentAmount,
  paymentDescription,
  setPaymentDescription,
  addPayment,
}) {
  if (!selectedClient) return null;

  const payments = selectedClient.payments || [];

  const totalPaid = payments.reduce(
    (total, payment) => total + Number(payment.amount || 0),
    0
  );

  return (
    <Section
      title="💰 Payments"
      subtitle="Record and manage all client payments"
    >
      {payments.length > 0 ? (
        payments.map((payment, index) => (
          <PanelItem key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    color: "#5D4037",
                  }}
                >
                  ${Number(payment.amount).toFixed(2)}
                </h3>

                <p
                  style={{
                    margin: "6px 0 0",
                  }}
                >
                  {payment.description}
                </p>
              </div>
            </div>
          </PanelItem>
        ))
      ) : (
        <p>No payments have been recorded.</p>
      )}

      <PanelItem>
        <h3
          style={{
            marginTop: 0,
            color: "#2E7D32",
          }}
        >
          Total Paid
        </h3>

        <p
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          ${totalPaid.toFixed(2)}
        </p>
      </PanelItem>

      <Input
        type="number"
        placeholder="Payment Amount"
        value={paymentAmount}
        onChange={(e) => setPaymentAmount(e.target.value)}
      />

      <div style={{ height: "12px" }} />

      <Input
        placeholder="Description"
        value={paymentDescription}
        onChange={(e) => setPaymentDescription(e.target.value)}
      />

      <div style={{ height: "18px" }} />

      <Button onClick={addPayment}>
        ➕ Record Payment
      </Button>
    </Section>
  );
}

export default PaymentsPanel;