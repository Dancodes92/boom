import Post from "./Post";

const posts = [
  {
    id: 23,
    username: "dsauce",
    userImg: "./boom.png",
    img: "./profile.jpeg",
    caption: "nice",
  },
  {
    id: 24,
    username: "dsauce",
    userImg: "./boom.png",
    img: "./profile.jpeg",
    caption: "nicely donneeeeee",
  },
];

function Posts() {
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
