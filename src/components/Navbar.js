import React from 'react';

const Navbar = ({ onLogout, onMyBlogs, onAddPost, onHome }) => (
  <nav className="navbar">
    <div
      className="navbar-title"
      style={{ cursor: 'pointer' }}
      onClick={onHome}
    >
      📝 Blogsite
    </div>
    <div className="navbar-links">
      <button className="navbar-link" onClick={onMyBlogs}>My Blogs</button>
      <button className="navbar-link" onClick={onAddPost}>Add Post</button>
      <button className="navbar-logout" onClick={onLogout}>Logout</button>
    </div>
  </nav>
);

export default Navbar;