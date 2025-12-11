import type { GetUsersResponse } from "../types/UserListResponse.type";
import { API } from "./client";

export const fetchUsers = async (
  skip = 0,
  limit = 10
): Promise<GetUsersResponse> => {
  const res = await API.get<GetUsersResponse>("/users", {
    params: { skip, limit },
  });
  return res.data;
};
