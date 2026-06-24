import Card from "../common/Card";

export default function StatCard({
  icon,
  title,
  value,
  children,
  footer,
}) {
  return (
    <Card>
      {(icon || title) && (
        <h3
          style={{
            marginTop: 0,
            marginBottom: "16px",
            fontSize: "1.1rem",
            fontWeight: "600",
          }}
        >
          {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
          {title}
        </h3>
      )}

      {value !== undefined && (
        <h2
          style={{
            margin: "0 0 12px 0",
            fontSize: "2rem",
            fontWeight: "700",
          }}
        >
          {value}
        </h2>
      )}

      {children}

      {footer && (
        <div
          style={{
            marginTop: "16px",
            paddingTop: "12px",
            borderTop: "1px solid #E5E5E5",
          }}
        >
          {footer}
        </div>
      )}
    </Card>
  );
}