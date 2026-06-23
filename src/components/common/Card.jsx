import cardStyle from "../../styles/cardStyles";

function Card({
  children,
  title,
  footer,
  style = {},
}) {
  return (
    <div
      style={{
        ...cardStyle,
        ...style,
      }}
    >
      {title && (
        <h3
          style={{
            marginTop: 0,
            marginBottom: 15,
            color: "#5D4037",
          }}
        >
          {title}
        </h3>
      )}

      {children}

      {footer && (
        <div
          style={{
            marginTop: 20,
            borderTop: "1px solid #ddd",
            paddingTop: 15,
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;