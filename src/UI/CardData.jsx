const CardData = ({ children, desc }) => {
  return (
    <div className="card__data">
      {children}
      <span>{desc} </span>
    </div>
  );
};

export default CardData;
