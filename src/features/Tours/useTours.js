import { useQuery } from "@tanstack/react-query";
import { getAllTours } from "../../services/apiTours";

const useTours = () => {
  const {
    isLoading: toursLoading,
    data: tours,
    error: toursError,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: getAllTours,
  });

  return { toursLoading, tours, toursError };
};

export default useTours;
