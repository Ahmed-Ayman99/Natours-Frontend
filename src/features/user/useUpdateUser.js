import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import useUser from "../authuntication/useUser";
import { updateUserApi } from "../../services/apiUser";

const useUpdateUser = () => {
  const { token } = useUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: (data) => updateUserApi(data, token),
    onSuccess: (data) => {
      localStorage.setItem(
        "natours_user",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("natours_user")),
          user: data,
        })
      );
      queryClient.invalidateQueries({ active: true });
      toast.success("Your data is updated");
      navigate("/");
    },
  });

  return { updateUser, isUpdating };
};

export default useUpdateUser;
