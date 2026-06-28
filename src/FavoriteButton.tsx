import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setFavoriteButton] = useState<boolean>(false);
  function updateFavoriteButton() {
    setFavoriteButton(!isFavorite);
  }

  return (
    <>
      <div style={{ padding: "7px" }}>
        <button onClick={updateFavoriteButton}>{isFavorite?"❤️":"🤍"}</button>
      </div>
    </>
  );
}
