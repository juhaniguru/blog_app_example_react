import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPost.css'; 
function NewPost() {
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = {name, body}
        try {
            const response = await fetch('http://localhost:2001/api/v1/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            })
            if(!response.ok) {
                throw new Error(response.statusText)
            }

            navigate('/'); 
        } catch(e) {
            console.log(e)
        }
        
        
    };

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateBody = (e) => {
        setBody(e.target.value)
    }

    return (
        <div className="new-post-container">
            <h1 className="new-post-title">Create New Post</h1>
            <form onSubmit={handleSubmit} className="new-post-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={updateName}
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body" className="form-label">Body:</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={updateBody}
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
