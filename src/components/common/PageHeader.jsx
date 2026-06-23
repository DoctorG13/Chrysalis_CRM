function PageHeader({
  title,
  subtitle,
  actions,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "25px",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            color: "#5D4037",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            style={{
              marginTop: "6px",
              color: "#777",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {actions && (
        <div>
          {actions}
        </div>
      )}
    </div>
  );
}

export default PageHeader;