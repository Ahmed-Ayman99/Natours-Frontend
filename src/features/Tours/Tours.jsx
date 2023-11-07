import TourCard from "../../UI/TourCard";
import Spinner from "../../UI/Spinner";
import Error from "../../UI/Error";
import useTours from "./useTours";

const Tours = () => {
  const { toursLoading, tours, toursError } = useTours();

  if (toursLoading) return <Spinner />;
  if (toursError) return <Error message={toursError} />;

  return (
    <div className="card-container">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
};

export default Tours;
