import React, { useEffect, useState } from 'react';
import './BlogPosts.css';
import './Comments.css'
import { useNavigate, useParams } from 'react-router-dom';

function BlogPostComments ()  {

    const {id} = useParams()
    const navigate = useNavigate()

  
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:2001/api/v1/blogs/${id}/comments`)
        if(!response.ok) {
            
            throw new Error(response.statusText)
        }
        const responseData = await response.json()
        setComments(responseData)
      } catch(e) {
        console.log(e)
      }
    }
    fetchComments()
  }, [])

  return (
    <div className="blog-posts-container">
      {comments.map((comment) => (
       <CommentItem comment={comment} key={comment.id} navigate={navigate} postId={id} />
      ))}
      <div className="button-group">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="add-comment-button" onClick={() => navigate(`/posts/${id}/new-comment`)}>
          Add New Comment
        </button>
      </div>
    </div>
  );
};

function CommentItem({comment, navigate, postId}) {
    return (
        <div key={comment.id} className="blog-post-card">
          
          <p className="blog-post-body">{comment.comment}</p>
          <div className="button-container">
        <button className="" onClick={() => {}}>
          Remove
        </button>
        {/*/posts/:postId/comments/:commentId*/}
        <button
          className=""
          
          onClick={() => navigate(`/posts/${postId}/comments/${comment.id}`)}
        >
          Edit
        </button>
      </div>
        </div>
    )
}

export default BlogPostComments;