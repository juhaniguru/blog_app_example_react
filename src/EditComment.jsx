import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NewPost.css'; 
function EditComment() {
    const [comment, setComment] = useState("");
   
    const navigate = useNavigate();
    const {postId, commentId} = useParams()

    useEffect(() => {
        const fetchComment = async () => {
            try {
                const response = await fetch(`http://localhost:2001/api/v1/blogs/${postId}/comments/${commentId}`)
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                // const comments = await response.json()
                const comment = await response.json()
                console.log(comment)
                /*const needle = comments.find((c) => {
                    return c.id == commentId
                })
                if(needle == null) {
                    throw new Error('comment not found')
                }*/

                setComment(comment.comment)

            } catch(e) {
                console.log(e)
            }
        }
        fetchComment()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const requestBody = {comment: comment}
        // {comment}
        try {
            const response = await fetch(`http://localhost:2001/api/v1/blogs/${postId}/comments/${commentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)

            })
            if(!response.ok) {
                throw new Error(response.statusText)
            }
            //navigate(-1)
            navigate(`/posts/${postId}`)
        } catch(e) {
            console.log(e)
        }

        //navigate('/'); 
    };

    return (
        <div className="new-post-container">
            <h1 className="new-post-title">Edit Comment</h1>
            <form onSubmit={handleSubmit} className="new-post-form">
                
                <div className="form-group">
                    <label htmlFor="body" className="form-label">Comment:</label>
                    <textarea
                        id="body"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
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

export default EditComment;
