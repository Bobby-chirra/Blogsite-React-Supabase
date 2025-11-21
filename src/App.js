import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import BlogDetail from './components/BlogDetail';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [editPost, setEditPost] = useState(null);
  const [showPostForm, setShowPostForm] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data?.user));
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user);
    });
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) setPosts(data);
  };

  useEffect(() => {
    if (user) fetchPosts();
  }, [user]);

  const addPost = async (title, description, content) => {
    if (!user) return;
    const { error } = await supabase
      .from('posts')
      .insert([{ title, description, content, author_id: user.id }]);
    if (!error) {
      fetchPosts();
      setShowPostForm(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setPosts([]);
  };

  const handlePostClick = (post) => navigate(`/post/${post.id}`);
  const handleMyBlogs = () => navigate('/my-blogs');
  const handleShowPostForm = () => {
    setEditPost(null);
    setShowPostForm(true);
  };
  const handleHidePostForm = () => {
    setEditPost(null);
    setShowPostForm(false);
  };
  const handleEdit = (post) => {
    setEditPost(post);
    setShowPostForm(true);
  };
  const handleHome = () => navigate('/');

  const handleUpdate = async (id, title, description, content) => {
    const { error } = await supabase
      .from('posts')
      .update({
        title,
        description,
        content,
        updated_at: new Date().toISOString()
      })
      .eq('id', id);
    if (!error) {
      setEditPost(null);
      setShowPostForm(false);
      fetchPosts();
    }
  };

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);
    if (!error) fetchPosts();
  };

  if (!user) {
    return (
      <Auth onAuth={() => supabase.auth.getUser().then(({ data }) => setUser(data?.user))} />
    );
  }

  return (
    <>
      <Navbar
        onLogout={handleLogout}
        onMyBlogs={handleMyBlogs}
        onAddPost={handleShowPostForm}
        onHome={handleHome}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h1>Blog</h1>
              {showPostForm && (
                <PostForm
                  onAdd={addPost}
                  onUpdate={handleUpdate}
                  editPost={editPost}
                  setEditPost={setEditPost}
                  onCancel={handleHidePostForm}
                />
              )}
              <PostList
                posts={posts}
                onClick={handlePostClick}
                onEdit={handleEdit}
                onDelete={handleDelete}
                currentUserId={user.id}
                enableEditDelete={false}
              />
            </div>
          }
        />
        <Route
          path="/my-blogs"
          element={
            <div className="App">
              <h1>My Blogs</h1>
              {showPostForm && (
                <PostForm
                  onAdd={addPost}
                  onUpdate={handleUpdate}
                  editPost={editPost}
                  setEditPost={setEditPost}
                  onCancel={handleHidePostForm}
                />
              )}
              <PostList
                posts={posts.filter(post => post.author_id === user.id)}
                onClick={handlePostClick}
                onEdit={handleEdit}
                onDelete={handleDelete}
                currentUserId={user.id}
                enableEditDelete={true}
              />
            </div>
          }
        />
        <Route path="/post/:id" element={<BlogDetail />} />
      </Routes>
    </>
  );
}

export default App;


