import React, { useState } from 'react';
import './BlogPosts.css';
import { Link } from 'react-router-dom';

function BlogPosts ()  {

  
  const [posts, setPosts] = useState([
    {id: 1, name: 'Otsikko', body: 'Lorem Ipsum sldkjslfs fslkjs sflfskjdsf lfsdkjsfd'}
  ])

  return (
    <div className="blog-posts-container">
      {posts.map((post) => (
       <BlogPostItem post={post} key={post.id} />
      ))}
      
    </div>
  );
};

function BlogPostItem({post}) {
    return (
        <div key={post.id} className="blog-post-card">
          <Link to={`/posts/${post.id}`}><h2 className="blog-post-title">{post.name}</h2></Link>
          <p className="blog-post-body">{post.body}</p>
          <button className="remove-button" onClick={() => {}}>
            Remove
          </button>
        </div>
    )
}

export default BlogPosts;