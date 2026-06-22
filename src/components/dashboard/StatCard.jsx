export default function StatCard({ icon, title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        flex: 1,
      }}
    >
      <h3>
        {icon} {title}
      </h3>

      <h1>{value}</h1>
    </div>
  );
}