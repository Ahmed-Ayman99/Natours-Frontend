import { FiCalendar, FiFlag, FiMapPin, FiUser } from "react-icons/fi";

import { formatDate } from "../utils/helpers";
import CardData from "./CardData";

const CardDetails = (props) => {
  const {
    maxGroupSize,
    duration,
    difficulty,
    summary,
    startLocation,
    locations,
    startDates,
  } = props;

  return (
    <div className="card__details">
      <h4 className="card__sub-heading">
        {difficulty} {duration} tour
      </h4>

      <p className="card__text">{summary}</p>

      <CardData desc={startLocation?.description}>
        <FiMapPin className="card__icon" />
      </CardData>

      <CardData desc={formatDate(startDates?.at(0))}>
        <FiCalendar className="card__icon" />
      </CardData>

      <CardData desc={`${locations?.length} stops`}>
        <FiFlag className="card__icon" />
      </CardData>

      <CardData desc={`${maxGroupSize} people`}>
        <FiUser className="card__icon" />
      </CardData>
    </div>
  );
};

export default CardDetails;
