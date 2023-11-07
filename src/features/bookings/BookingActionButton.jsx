import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import useTourBooking from "./useTourBooking";
import Button from "../../UI/Button";

const BookingActionButton = ({ tourId }) => {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const stripePromise = loadStripe(
      "pk_test_51Mmkd8KJrcYzSRjreyu69kT6dzqiVETqggkroOExlY7qQ0pYDdtOhPaAOGy6oiFXydvdSqAgGOQdTYoTqXv5Kwq700MDoUVU1L"
    );

    stripePromise.then((stripe) => {
      setStripe(stripe);
    });
  }, []);

  const { bookTour, isLoading: isBookingsTour } = useTourBooking();

  const handleBookTour = () =>
    bookTour(tourId, {
      onSuccess: (data) => {
        stripe.redirectToCheckout({
          sessionId: data.session.id,
        });
      },
    });

  return (
    <Button
      disabled={isBookingsTour}
      onClick={handleBookTour}
      className="span-all-rows"
      typeStyle="green"
    >
      {isBookingsTour ? "Loading" : "Book tour now!"}
    </Button>
  );
};

export default BookingActionButton;
