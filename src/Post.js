import Userpost from "./PostTemplate";

function Post({ users }) {
  if (!users || users.length === 0) {
    return <p>No posts to display.</p>;
  }
  return (
    <div>
      {users.map((post) => (
        <Userpost
          key={post.posts[0].postid}
          profile={post.profile}
          name={post.name}
          username={post.username}
          date={post.posts[0].date}
          content={post.posts[0].content}
          postimg={post.posts[0].postimg}
          likes={post.posts[0].likes}
          retweets={post.posts[0].retweets}
          comment={post.posts[0].comment}
          insight={post.posts[0].postid}
          postid={post.posts[0].postid}
        />
      ))}
    </div>
  );
}

export default Post;
