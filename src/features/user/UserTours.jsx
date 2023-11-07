import PrimaryHeading from "../../UI/PrimaryHeading";
import useMyTours from "../Tours/useMyTours";
import TourCard from "../../UI/TourCard";
import Spinner from "../../UI/Spinner";
import Error from "../../UI/Error";
import Empty from "../../UI/Empty";

const UserTours = () => {
  const { isLoading, error, tours } = useMyTours();

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error} />;
  if (!tours?.length) return <Empty resource="tours" />;

  return (
    <div className="mycard-parent">
      <PrimaryHeading>My Bookings</PrimaryHeading>

      <div className="mycard-container">
        {tours?.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default UserTours;
