import Img from "./Img";
import TertiraryHeading from "./TertiraryHeading";

const CardHeader = ({ imageCover, name }) => {
  return (
    <div className="card__header">
      <figure className="card__picture">
        <div className="card__picture-overlay"></div>
        <Img
          className="card__picture-img"
          src={`/tours/${imageCover}`}
          alt={name}
        />
      </figure>

      <TertiraryHeading className="heading-tertirary">{name}</TertiraryHeading>
    </div>
  );
};

export default CardHeader;
