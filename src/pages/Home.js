import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Post';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
      } catch (err) {
        console.error(err);
        setError("Could not fetch posts. Please try again later.");
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container">
      <div className="profile">
        <h2>About Me</h2>
        <p>Hi, I'm Selim Yalcintas, a recent graduate from Istanbul Gelişim University with a Bachelor of Science in Management Information Systems. I'm experienced in frontend development and working towards becoming a full stack developer.</p>
        <p>I participated in the Erasmus Exchange Program in Artificial Intelligence at the University of Dunaujvaros, Hungary, in 2023. I have worked on projects such as an AI-based image identification app, customer review analysis with machine learning, an e-commerce website development project, and a social media platform named IGUlife.</p>
        <p>Skills: Python, SQL, SPSS, HTML, CSS, JavaScript, React, TypeScript, Tailwind, R, Amazon Web Services (AWS), and Firebase.</p>
        <p>Languages: Fluent in English and intermediate in French.</p>
      </div>
      <h2>Blog Posts</h2>
      {error && <p>{error}</p>}
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Home;
