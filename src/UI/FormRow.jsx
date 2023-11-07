const FormRow = ({ label, error = "", children }) => {
  return (
    <div className="form__row">
      {label && (
        <label className="form__label" htmlFor={children.props?.id}>
          {label}
        </label>
      )}

      {children}
      <p className={`text-sm text-red-700 ${error ? "active" : ""}`}>
        {error ? error : ""}
      </p>
    </div>
  );
};

export default FormRow;
