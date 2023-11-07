const SecondaryHeading = ({ children, noMargin }) => {
  if (noMargin) return <h2 className="heading-secondary">{children}</h2>;

  return <h2 className="heading-secondary ma-bt-md">{children}</h2>;
};

export default SecondaryHeading;
