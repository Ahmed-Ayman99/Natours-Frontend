const TourOverviewDetails = ({ label, text, children }) => {
  return (
    <div className="overview-box__detail">
      {children}
      <span className="overview-box__label">{label}</span>
      <span className="overview-box__text">{text}</span>
    </div>
  );
};

export default TourOverviewDetails;
