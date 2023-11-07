import { useQuery } from "@tanstack/react-query";

import { getMyTours } from "../../services/apiTours";
import useUser from "../authuntication/useUser";

const useMyTours = () => {
  const { token, user } = useUser();

  const {
    error,
    data: tours,
    isLoading,
  } = useQuery({
    queryKey: ["my-tours", token, user.id],
    queryFn: () => getMyTours(token),
  });

  return { error, tours, isLoading };
};

export default useMyTours;
