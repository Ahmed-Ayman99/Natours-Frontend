import { Link } from "react-router-dom";

import PrimaryHeading from "../../UI/PrimaryHeading";
import useUserReviews from "./useUserReviews";
import ReviewCard from "../../UI/ReviewCard";
import Spinner from "../../UI/Spinner";
import Empty from "../../UI/Empty";

const UserReviews = () => {
  const { isLoading, reviews } = useUserReviews();

  if (isLoading) return <Spinner />;
  if (reviews?.length === 0) return <Empty resource="reviews" />;

  return (
    <div className="mycard-parent">
      <PrimaryHeading>My reviews</PrimaryHeading>

      <div className="mycard-container">
        {reviews.map((review, ind) => (
          <Link key={ind} to={`/tour/${review?.tour?.id}`}>
            <ReviewCard review={review} tourImg={review?.tour?.imageCover} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
