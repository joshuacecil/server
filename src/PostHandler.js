import React from "react";

function PostHandler({ content, link, mediaType, onNewPost }) {
  const handlePost = () => {
    const newPost = {
      profile: "https://via.placeholder.com/50",
      name: "User Name",
      username: "username",
      date: new Date().toLocaleString(),
      content,
      postimg: mediaType === "image" ? link : "",
      likes: 0,
      retweets: 0,
      comment: 0,
      insight: 0,
      id: Date.now(),
    };

    onNewPost(newPost);
  };

  return (
    <button className="btn" onClick={handlePost}>
      Post
    </button>
  );
}

export default PostHandler;
