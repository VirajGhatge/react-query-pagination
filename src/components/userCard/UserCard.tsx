import "./UserCard.css";

type UserCardProps = {
  image: string;
  firstName: string;
  lastName: string;
  email: string;
};

const UserCard = (props: UserCardProps) => {
  const { image, firstName, lastName, email } = props;

  return (
    <div className="list-item-card">
      <img
        className="card-avatar"
        src={image}
        alt={`${firstName} ${lastName}`}
      />

      <div className="card-info">
        <div className="card-name">
          {firstName} {lastName}
        </div>

        <div className="card-email">{email}</div>
      </div>
    </div>
  );
};

export default UserCard;
