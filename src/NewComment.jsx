import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NewPost.css'; 
function NewComment() {
    const [comment, setComment] = useState('');

    const {id} = useParams()
   
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        
        
        navigate(`/posts/${id}`); 
    };

    

    return (
        <div className="new-post-container">
            <h1 className="new-post-title">Create New Comment</h1>
            <form onSubmit={handleSubmit} className="new-post-form">
                
                <div className="form-group">
                    <label htmlFor="body" className="form-label">Comment:</label>
                    <textarea
                        id="body"
                        value={comment}
                        onChange={() => {}}
                        className="form-textarea"
                        rows={6}
                        required
                    />
                </div>
                <div className="form-button-group">
                    <button type="submit" className="form-button">
                        Publish Comment
                    </button>
                    <button
                      type="button"
                      className="form-button cancel-button"
                      onClick={() => navigate(-1)}
                    >
                      Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewComment;
