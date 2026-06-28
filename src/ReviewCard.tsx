import { useState } from "react";

interface ReviewCardProps {
  name: string;
  feedback: string;
  stars: string;
  isVIP: boolean;
  likes: number;
}

export default function ReviewCard(props: ReviewCardProps) {
  const [likes, setLikes] = useState<number>(0);
  function handelLikesClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.feedback}</p>
      <h3>Write the number of stars : {props.stars}</h3>
      <p>{props.isVIP && "VIP 👑"}</p>
      <div style={{ padding: "20px" }}>
        <button onClick={handelLikesClick}>click here</button>
        <p>عدد الإعجابات: {likes}</p>
      </div>
    </>
  );
}
