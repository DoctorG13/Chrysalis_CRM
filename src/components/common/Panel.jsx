import Card from "./Card";

function Panel({
  title,
  subtitle,
  children,
  actions,
}) {
  return (
    <Card
      style={{
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#5D4037",
            }}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              style={{
                margin: "5px 0 0",
                color: "#777",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {actions}
      </div>

      {children}
    </Card>
  );
}

export default Panel;