import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "10px",
      marginBottom: "15px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      maxWidth: "400px"
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img 
          src={post.profileImage} 
          alt={post.username} 
          style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
        />
        <h3 style={{ margin: 0 }}>{post.username}</h3>
      </div>
      <p>{post.content}</p>
      <LikeButton isLiked={post.isLiked} />
    </div>
  );
};

export default PostCard;
