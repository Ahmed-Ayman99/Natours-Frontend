import { NavLink } from "react-router-dom";

import { formatCurrency, formatDateNumber } from "../utils/helpers";

const CardFooter = ({ price, ratingsAverage, ratingsQuantity, id }) => {
  return (
    <div className="card__footer">
      <p>
        <span className="card__footer-value">{formatCurrency(price)}</span>
        <span className="card__footer-text"> per person</span>
      </p>

      <p className="card__ratings">
        <span className="card__footer-value">
          {formatDateNumber(ratingsAverage)}
        </span>
        <span className="card__footer-text"> rating ({ratingsQuantity})</span>
      </p>

      <NavLink to={`/tour/${id}`} className="btn btn--green btn--small">
        Details
      </NavLink>
    </div>
  );
};

export default CardFooter;
