import CardDetails from "./CardDetails";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const TourCard = ({ tour }) => {
  const {
    price,
    ratingsAverage,
    ratingsQuantity,
    id,
    imageCover,
    name,
    maxGroupSize,
    duration,
    difficulty,
    summary,
    startLocation,
    locations,
    startDates,
  } = tour;

  return (
    <div className="card">
      <CardHeader imageCover={imageCover} name={name} />

      <CardDetails
        maxGroupSize={maxGroupSize}
        duration={duration}
        difficulty={difficulty}
        summary={summary}
        startLocation={startLocation}
        locations={locations}
        startDates={startDates}
      />

      <CardFooter
        price={price}
        ratingsAverage={ratingsAverage}
        ratingsQuantity={ratingsQuantity}
        id={id}
      />
    </div>
  );
};
export default TourCard;
