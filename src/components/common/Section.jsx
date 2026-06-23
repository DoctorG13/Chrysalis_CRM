import Card from "./Card";

function Section({
  title,
  subtitle,
  children,
  footer,
  style = {},
}) {
  return (
    <Card footer={footer} style={style}>
      {title && (
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "#5D4037",
              fontSize: "1.4rem",
            }}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              style={{
                marginTop: "6px",
                marginBottom: 0,
                color: "#777",
                fontSize: "0.95rem",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      {children}
    </Card>
  );
}

export default Section;