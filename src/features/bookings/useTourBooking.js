import { useMutation } from "@tanstack/react-query";

import useUser from "../authuntication/useUser";
import { booktourApi } from "../../services/apiBooking";

const useTourBooking = () => {
  const { token } = useUser();

  const { mutate: bookTour, isLoading } = useMutation({
    mutationFn: (id) => booktourApi(id, token),
  });

  return { bookTour, isLoading };
};

export default useTourBooking;
