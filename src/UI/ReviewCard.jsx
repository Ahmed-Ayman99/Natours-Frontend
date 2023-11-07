import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Img from "./Img";

const ReviewCard = ({ review, tourImg = "" }) => {
  const { user, review: userReview } = review;

  return (
    <div className="reviews__card">
      <figure className="reviews__avatar">
        <Img
          src={tourImg ? `/tours/${tourImg}` : `/users/${user?.photo}`}
          className="reviews__avatar-img"
        />

        <h6 className="reviews__user">{user?.name}</h6>
      </figure>

      <p className="reviews__text">{userReview}</p>

      <div className="reviews__rating">
        {Array.from({ length: 5 }).map((_, ind) =>
          review.rating >= ind + 1 ? (
            <AiFillStar className="reviews__star" key={ind} />
          ) : (
            <AiOutlineStar className="reviews__star" key={ind} />
          )
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
