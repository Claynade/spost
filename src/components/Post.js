const Post = (props) => {
  return (
    <article className="post">
      <h2>{props.post.username} </h2>

      <img src={props.post.image} alt={props.post.subject} />
    </article>
  );
};

export default Post;
