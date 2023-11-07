import BookingActionButton from "../bookings/BookingActionButton";
import SecondaryHeading from "../../UI/SecondaryHeading";
import Img from "../../UI/Img";
import useTour from "./useTour";

const TourAction = () => {
  const { tour } = useTour();
  const { duration, id: tourId } = tour;

  return (
    <section className="section-cta">
      <div className="cta">
        <figure className="cta__img cta__img--logo">
          <Img src="/logo-white.png" alt="Natours logo" />
        </figure>

        <Img src="/tours/tour-4-2.jpg" className="cta__img cta__img--1" />
        <Img src="/tours/tour-4-1.jpg" className="cta__img cta__img--2" />

        <div className="cta__content">
          <SecondaryHeading noMargin={true}>
            What are you waiting for?
          </SecondaryHeading>

          <p className="cta__text">
            {duration} days. 1 adventure. Infinite memories. Make it yours
            today!
          </p>

          <BookingActionButton tourId={tourId} />
        </div>
      </div>
    </section>
  );
};

export default TourAction;
