import { UserRole } from "./UserRole";

export interface UserFormValues {
  name: string;
  email: string;
  role: UserRole;
  active: boolean;
}
