import React from "react";

export default function Dashboard({ clients }) {
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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Good Morning Donna</h1>

      <h2>Dashboard</h2>

      <p>Total Clients: {clients.length}</p>

      <p>Total Revenue: ${totalRevenue}</p>
    </div>
  );
}