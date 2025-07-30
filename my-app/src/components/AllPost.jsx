import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Post.css';

const AllPost = ({ loggedInUserId }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
    ])
      .then(([postsData, usersData]) => {
        const filteredPosts = postsData.filter(post => post.userId !== loggedInUserId);
        setPosts(filteredPosts);
        setUsers(usersData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [loggedInUserId]);

  const getUser = (userId) => users.find(user => user.id === userId);

  
  return (
    <div className="posts-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h2 className="posts-heading">All Posts</h2>

      <div className="posts-grid">
        {posts.map(post => {
          const user = getUser(post.userId);
          const initials = user?.name ? user.name.charAt(0).toUpperCase() : '?';

          return (
            <div key={post.id} className="post-card">
              {/* Profile Picture & Username */}
              <div className="post-user">
                <div className="user-initial">{initials}</div>
                <span className="user-name">{user?.name || 'Unknown User'}</span>
              </div>

              {/* Post Title & Body */}
              <h3 className="post-title">{post.title}</h3>
              <p className="post-body">{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPost;
