import { useQuery } from "@tanstack/react-query";

import { getUserReviews } from "../../services/apireviews";
import useUser from "../authuntication/useUser";

const useUserReviews = () => {
  const { token } = useUser();

  const {
    isLoading,
    data: reviews,
    error,
  } = useQuery({
    queryKey: ["user-Reviews", token],
    queryFn: () => getUserReviews(token),
  });
  return { isLoading, reviews, error };
};

export default useUserReviews;
