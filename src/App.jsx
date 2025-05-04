import BlogPosts from "./BlogPosts"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import NewPost from "./NewPost";
import BlogPostComments from "./Comments";
import EditComment from "./EditComment";
import NewComment from "./NewComment";


function App() {

  

  return (
    <Router>
      <nav className="nav">
              <div className="nav-container">
                  <Link to="/" className="nav-logo">
                      My Blog
                  </Link>
                  <div className="nav-links">
                      <Link to="/" className="nav-link">
                          Home
                      </Link>
                    
                      <Link to="/new-post" className="nav-button">
                          New Post
                      </Link>
                  </div>
              </div>
          </nav>
          <Routes>
            <Route path="/" element={<BlogPosts />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/posts/:id" element={<BlogPostComments />} />
            <Route path="/comments/:id" element={<EditComment />} />
            <Route path="/posts/:id/new-comment" element={<NewComment />} />

            
          </Routes>
        </Router>
  );
}

export default App;
