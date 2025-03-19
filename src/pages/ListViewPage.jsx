import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ListViewPage.css';

function ListViewPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="header">List of Posts</h1>
      <div className="postList">
        {posts.map(post => (
          <div key={post.id} className="postCard">
            <h2 className="postTitle">{post.title}</h2>
            <p className="postBody">{post.body}</p>
            <Link to={`/detail/${post.id}`} className="link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListViewPage;
