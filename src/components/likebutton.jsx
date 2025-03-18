import { useState } from "react";

const LikeButton = ({ isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  return (
    <button 
      onClick={() => setLiked(!liked)} 
      style={{
        backgroundColor: liked ? "red" : "gray",
        color: "white",
        border: "none",
        padding: "5px 10px",
        cursor: "pointer",
        borderRadius: "5px"
      }}
    >
      {liked ? "Liked" : "Like"}
    </button>
  );
};

export default LikeButton;
