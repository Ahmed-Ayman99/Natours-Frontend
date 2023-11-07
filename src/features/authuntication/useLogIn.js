import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { logInApi } from "../../services/apiAuth";

const useLogIn = () => {
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogin } = useMutation({
    mutationFn: ({ email, password }) => logInApi(email, password),
    onSuccess: () => {
      toast.success("Welcome Back");
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { login, isLogin };
};

export default useLogIn;
