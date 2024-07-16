import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>By {post.author.username}</small>  {/* author.username kullanarak objeden string özelliğini çekiyoruz */}
      <Link to={`/post/${post._id}`}>Read More</Link>
    </div>
  );
};

export default Post;
