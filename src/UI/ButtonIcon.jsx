import { Link } from "react-router-dom";

const ButtonIcon = ({ disabled, onClick, to, children }) => {
  if (to)
    return (
      <Link
        disabled={disabled}
        onClick={onClick}
        className="button-icon"
        to={to}
      >
        {children}
      </Link>
    );

  return (
    <button className="button-icon" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonIcon;
