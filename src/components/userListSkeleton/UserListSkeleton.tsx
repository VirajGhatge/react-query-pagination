import "./UserListSkeleton.css";

type UserSkeletonProps = {
  count?: number;
};

const UserListSkeleton = (props: UserSkeletonProps) => {
  const { count = 6} = props;
  
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, idx) => (
        <div className="user-card-skeleton" key={idx} aria-hidden>
          <div className="avatar-skeleton" />
          <div className="skeleton-info">
            <div className="name-skeleton" />
            <div className="email-skeleton" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserListSkeleton;
