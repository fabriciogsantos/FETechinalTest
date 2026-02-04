import { useMutation } from "@tanstack/react-query";
import { createUser } from "../api/users";

export const useUserMutation = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: createUser,
  });

  return {mutate, isLoading: isPending };
};
