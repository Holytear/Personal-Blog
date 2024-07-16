import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 200, friction: 20 }
  });

  return (
    <VisibilitySensor onChange={setIsVisible} partialVisibility>
      <animated.div style={props} className="post">
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <small>By {post.author.username || post.author}</small>
        <Link to={`/post/${post._id}`}>Read More</Link>
      </animated.div>
    </VisibilitySensor>
  );
};

export default Post;
