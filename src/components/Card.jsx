import cardStyle from "../styles/cardStyles";

function Card({ children, style = {} }) {
  return (
    <div
      style={{
        ...cardStyle,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default Card;