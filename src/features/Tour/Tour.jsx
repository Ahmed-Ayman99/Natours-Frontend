import { useEffect } from "react";

import TourDescription from "./TourDescription";
import TourReviews from "./TourReviews";
import Spinner from "../../UI/Spinner";
import TourHeading from "./TourHeading";
import TourAction from "./TourAction";
import TourImages from "./TourImages";
import useTour from "./useTour";

const Tour = () => {
  const { isLoading, tour } = useTour();

  useEffect(() => {
    document.title = `Natours | ${tour?.name}`;

    return () => {
      document.title = "Natours | All Tours";
    };
  }, [tour]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <TourHeading />
      <TourDescription />
      <TourImages />
      <TourReviews />
      <TourAction />
    </>
  );
};

export default Tour;
