interface UserCardProps {
  name: string;
  job: string;
  image: string;
  isUrgent: boolean;
  imageAlt: string;
}

export default function UserCard(props: UserCardProps) {
  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.job}</p>
      <div style={{ padding: "20px" }}>
        <img src={props.image} alt={props.imageAlt} />
      </div>
      <h2>{props.isUrgent ? "Lo0o0ve you" : "Hate You"}</h2>
    </>
  );
}
