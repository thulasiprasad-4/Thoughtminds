import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Post.css';

const AllPost = ({ loggedInUserId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const filteredPosts = data.filter(post => post.userId !== loggedInUserId);
        setPosts(filteredPosts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [loggedInUserId]);

  if (loading) return <p className="loading-text">Loading posts...</p>;
  if (posts.length === 0) return <p className="no-posts-text">No posts available.</p>;

  return (
    <div className="posts-container">
      {}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="posts-heading">All Posts</h2>
      <div className="posts-grid">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPost;





