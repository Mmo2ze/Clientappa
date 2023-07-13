import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axio() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('api/grade');
        setPosts(response.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>{posts.map(post => post.name).join(".")}</h2>
    </div>
  );
}

export default Axio;