import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Post.css';

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setUser(storedUser);
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
          const userPosts = data.filter((post) => post.userId === storedUser.id);
          setPosts(userPosts);
        })
        .catch((err) => console.error('Failed to fetch posts:', err));
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleBack = () => {
    navigate('/profile');
  };

  return (
    <div className="mypost-page">
      <div className="top-bar">
        <button className="back-button" onClick={handleBack}>← Back</button>
        {user && <h1 className="top-heading">{user.name}'s Posts</h1>}
      </div>

      <div className="post-grid">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
