import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import { settings } from "../../utils/constants";
import ReviewCard from "../../UI/ReviewCard";
import useTour from "./useTour";

const TourReviews = () => {
  const { tour } = useTour();
  const { reviews } = tour;

  return (
    <section className="section-reviews">
      <Slider {...settings}>
        {reviews.map((review, ind) => (
          <ReviewCard review={review} key={ind} />
        ))}
      </Slider>
    </section>
  );
};

export default TourReviews;
