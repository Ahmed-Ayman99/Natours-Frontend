import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { SignupApi } from "../../services/apiAuth";

const useSignUp = () => {
  const navigate = useNavigate();

  const { mutate: signup, isLoading: isSignup } = useMutation({
    mutationFn: ({ name, email, password, passwordConfirm }) =>
      SignupApi(name, email, password, passwordConfirm),
    onSuccess: () => {
      toast.success("You Are Sign Up");
      navigate("/");
    },
  });

  return { signup, isSignup };
};

export default useSignUp;
