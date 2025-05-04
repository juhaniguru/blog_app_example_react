import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPost.css'; 
function NewPost() {
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('Form submitted:', { name, body });
        
        navigate('/'); 
    };

    return (
        <div className="new-post-container">
            <h1 className="new-post-title">Create New Post</h1>
            <form onSubmit={handleSubmit} className="new-post-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Title:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body" className="form-label">Content:</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="form-textarea"
                        rows={6}
                        required
                    />
                </div>
                <div className="form-button-group">  {/* Added this div */}
                    <button type="submit" className="form-button">
                        Publish Post
                    </button>
                    <button
                      type="button"
                      className="form-button cancel-button"
                      onClick={() => navigate('/')}
                    >
                      Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewPost;
