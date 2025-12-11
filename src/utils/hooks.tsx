import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchUsers } from "../api/users";
import type { GetUsersResponse } from "../types/UserListResponse.type";
import { useEffect } from "react";

export const USERS_QUERY_KEY = "dummy-users";

export function useUsers(skip: number, limit = 10) {
  const queryClient = useQueryClient();
  const query = useQuery<GetUsersResponse, Error>({
    queryKey: [USERS_QUERY_KEY, skip, limit],
    queryFn: () => fetchUsers(skip,limit),
    placeholderData: keepPreviousData,

    staleTime: 1000 * 60 * 2,
    gcTime: 1000 * 60 * 10,
    retry: 1,
  });

  useEffect(() => {
    if (!query.data) return;

    const nextSkip = skip + limit;
    const total = query.data.total ?? 0;

    if (nextSkip < total) {
      queryClient
        .prefetchQuery({
          queryKey: [USERS_QUERY_KEY, nextSkip, limit],
          queryFn: () => fetchUsers(nextSkip,limit),
        })
        .catch(() => {});
    }
  }, [query.data, skip, limit, queryClient]);

  return query;
}
