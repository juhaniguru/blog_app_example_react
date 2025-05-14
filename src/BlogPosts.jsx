import React, { useEffect, useState } from 'react';
import './BlogPosts.css';
import { Link } from 'react-router-dom';

function BlogPosts ()  {

  
  const [posts, setPosts] = useState([])

  const removePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:2001/api/v1/blogs/${postId}`)
      if(!response.ok) {
        throw new Error(response.statusText)
      }
      const remainingPosts = posts.filter((post) => {
        return post.id != postId
      })
      setPosts(remainingPosts)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('http://localhost:2001/api/v1/blogs/')
        if(!response.ok) {
          throw new Error(response.statusText)
        }
        let responseData = await response.json()
        console.log("ennen mappia", responseData)
        
        responseData = responseData.map((blogPost) => {
          
          // return {id: blogPost.id, name: blogPost.name, body: blogPost.body, imageUrl: '/images/cheese_burger.jpg'}
          return {...blogPost, imageUrl: '/images/cheese_burger.jpg'}
        })
        
        console.log("mapin jalkeen", responseData)
        setPosts(responseData)
      } catch(e) {
          console.log(e)
      }
    }
    fetchBlogPosts()

  }, [])

  return (
    <div className="blog-posts-container">
      {posts.map((post) => (
       <BlogPostItem post={post} key={post.id} removePost={removePost} />
      ))}
      
    </div>
  );
};

function BlogPostItem({post, removePost}) {
    return (
        <div key={post.id} className="blog-post-card">
          <Link to={`/posts/${post.id}`}><h2 className="blog-post-title">{post.name}</h2></Link>
          <p className="blog-post-body">{post.body}</p>
          <button className="remove-button" onClick={() => removePost(post.id)}>
            Remove
          </button>
        </div>
    )
}

export default BlogPosts;