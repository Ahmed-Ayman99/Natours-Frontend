import { AiOutlineClockCircle } from "react-icons/ai";
import { PiMapPinLineBold } from "react-icons/pi";

import PrimaryHeading from "../../UI/PrimaryHeading";
import TourDetails from "./TourDetails";
import useTour from "./useTour";
import Img from "../../UI/Img";

const TourHeading = () => {
  const { tour } = useTour();
  const { imageCover, name, duration, startLocation } = tour;

  return (
    <section className="section-header">
      <figure className="header__hero">
        <div className="header__hero-overlay">&nbsp;</div>
        <Img
          className="header__hero-img"
          src={`/tours/${imageCover}`}
          alt={name}
        />
      </figure>

      <div className="heading-box">
        <PrimaryHeading>{name}</PrimaryHeading>

        <div className="heading-box__group">
          <TourDetails desc={`${duration} days`}>
            <AiOutlineClockCircle className="heading-box__icon" />
          </TourDetails>

          <TourDetails desc={`${startLocation?.description} days`}>
            <PiMapPinLineBold className="heading-box__icon" />
          </TourDetails>
        </div>
      </div>
    </section>
  );
};

export default TourHeading;
