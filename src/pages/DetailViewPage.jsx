import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DetailViewPage.css'; // Import Regular CSS

function DetailViewPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!post) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">{post.title}</h1>
        <p className="content">{post.body}</p>
        <p className="meta"><strong>Post ID:</strong> {post.id}</p>
      </div>
    </div>
  );
}

export default DetailViewPage;
