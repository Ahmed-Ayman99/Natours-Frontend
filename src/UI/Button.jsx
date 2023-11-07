const Button = ({
  typeStyle,
  disabled,
  children,
  onClick,
  type,
  className,
}) => {
  const typeStyles = {
    green: "btn--green",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button btn ${typeStyles[typeStyle]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
