import type { User } from "./User.type";

export type GetUsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};
