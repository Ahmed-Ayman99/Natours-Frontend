import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import useUser from "../authuntication/useUser";
import { getTour } from "../../services/apiTour";

const useTour = () => {
  const { token } = useUser();
  const { id } = useParams();

  const {
    error,
    isLoading,
    data: tour,
  } = useQuery({
    queryKey: ["tour", id],
    queryFn: () => getTour(id, token),
  });

  return { error, isLoading, tour };
};

export default useTour;
