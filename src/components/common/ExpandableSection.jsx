import { useState } from "react";

function ExpandableSection({
  title,
  subtitle,
  children,
  defaultOpen = true,
}) {
  const [isOpen, setIsOpen] =
    useState(defaultOpen);

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "12px",
        marginBottom: "20px",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          padding: "18px 20px",
          background: "#F8F8F8",
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
            {title}
          </h3>

          {subtitle && (
            <small
              style={{
                color: "#666",
              }}
            >
              {subtitle}
            </small>
          )}
        </div>

        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          {isOpen ? "▼" : "▶"}
        </div>
      </div>

      {isOpen && (
        <div
          style={{
            padding: "20px",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default ExpandableSection;