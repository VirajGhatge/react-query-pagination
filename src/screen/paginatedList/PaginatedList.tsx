import { useCallback, useMemo, useState } from "react";
import UserCard from "../../components/userCard/UserCard";
import UserListSkeleton from "../../components/userListSkeleton/UserListSkeleton";
import { useUsers } from "../../utils/hooks";
import ListFooter from "./components/listFooter/ListFooter";
import ListHeader from "./components/listHeader/ListHeader";
import "./PaginatedList.css";

const LIMIT = 6;

const PaginatedList = () => {
  const [skip, setSkip] = useState(0);
  const { data, isPending, isError } = useUsers(skip, LIMIT);

  const users = data?.users ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / LIMIT));
  const currentPage = Math.floor(skip / LIMIT) + 1;

  const goStart = useCallback(() => setSkip(0), [setSkip]);
  const goEnd = useCallback(
    () => setSkip((totalPages - 1) * LIMIT),
    [setSkip, totalPages]
  );
  const goNext = useCallback(
    () =>
      setSkip((prev: number) =>
        Math.min(prev + LIMIT, (totalPages - 1) * LIMIT)
      ),
    [setSkip, totalPages]
  );
  const goPrevious = useCallback(
    () => setSkip((prev: number) => Math.max(prev - LIMIT, 0)),
    [setSkip]
  );

  if (isError) {
    window.alert("Something went wrong please try again later.");
  }

  const usersList = useMemo(
    () => users.map((u, i) => <UserCard key={u.id ?? i} {...u} />),
    [users]
  );

  return (
    <section className="list-wrapper">
      <ListHeader
        title="Users"
        currentPage={currentPage}
        totalPages={totalPages}
      />

      <div className="list-body">
        {isPending ? (
          <UserListSkeleton />
        ) : users.length > 0 ? (
          usersList
        ) : (
          <div className="empty-card">No results found</div>
        )}
      </div>

      <ListFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={goPrevious}
        onNext={goNext}
        onStart={goStart}
        onEnd={goEnd}
      />
    </section>
  );
};

export default PaginatedList;
