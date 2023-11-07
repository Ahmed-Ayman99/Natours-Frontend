import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { logoutApi } from "../../services/apiAuth";

function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading: isLogOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/", { replace: true });
      queryClient.removeQueries();
    },
  });

  return { logout, isLogOut };
}

export default useLogout;
