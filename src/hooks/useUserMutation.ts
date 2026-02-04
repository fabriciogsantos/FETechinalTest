import { useMutation } from "@tanstack/react-query";
import { createUser, NewUser } from "../api/users";

export const useUserMutation = () => {
  return useMutation({
    mutationFn: (user: NewUser) => createUser(user),
  });
};
