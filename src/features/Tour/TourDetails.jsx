const TourDetails = ({ children, desc }) => {
  return (
    <div className="heading-box__detail">
      {children}
      <span className="heading-box__text">{desc}</span>
    </div>
  );
};

export default TourDetails;
