import { primaryButton } from "../styles/buttonStyles";

function Button({
  children,
  onClick,
  style = {},
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        ...primaryButton,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export default Button;