import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { updatePasswordApi } from "../../services/apiAuth";
import useUser from "../authuntication/useUser";

const useUpdatePassword = () => {
  const { token } = useUser();
  const navigate = useNavigate();

  const { mutate: updatePassword, isLoading } = useMutation({
    mutationFn: (data) => updatePasswordApi(data, token),
    onSuccess: () => {
      toast.success("Your password is updated");
      navigate("/");
    },
  });

  return { updatePassword, isLoading };
};

export default useUpdatePassword;
