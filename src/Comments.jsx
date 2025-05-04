import React, { useState } from 'react';
import './BlogPosts.css';
import './Comments.css'
import { useNavigate, useParams } from 'react-router-dom';

function BlogPostComments ()  {

    const {id} = useParams()
    const navigate = useNavigate()

  
  const [comments, setComments] = useState([
    {id: 1, comment: 'Lorem Ipsum sldkjslfs fslkjs sflfskjdsf lfsdkjsfd', posts_id: 1}
  ])

  return (
    <div className="blog-posts-container">
      {comments.map((comment) => (
       <CommentItem comment={comment} key={comment.id} navigate={navigate} />
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

function CommentItem({comment, navigate}) {
    return (
        <div key={comment.id} className="blog-post-card">
          
          <p className="blog-post-body">{comment.comment}</p>
          <div className="button-container">
        <button className="" onClick={() => {}}>
          Remove
        </button>
        <button
          className=""
          onClick={() => navigate(`/comments/${comment.id}`)}
        >
          Edit
        </button>
      </div>
        </div>
    )
}

export default BlogPostComments;