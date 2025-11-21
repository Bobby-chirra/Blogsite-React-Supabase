import React, { useState, useEffect } from 'react';

const PostForm = ({ onAdd, onUpdate, editPost, setEditPost, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setDescription(editPost.description);
      setContent(editPost.content);
    } else {
      setTitle('');
      setDescription('');
      setContent('');
    }
  }, [editPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editPost) {
      await onUpdate(editPost.id, title, description, content);
      setEditPost(null);
      if (onCancel) onCancel();
    } else {
      await onAdd(title, description, content);
      if (onCancel) onCancel();
    }
    setTitle('');
    setDescription('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        style={{ marginBottom: '8px', width: '100%' }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
        style={{ marginBottom: '8px', width: '100%' }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
        rows={5}
        style={{ marginBottom: '8px', width: '100%' }}
      />
      <button type="submit">{editPost ? 'Update' : 'Add Post'}</button>
      <button
        type="button"
        style={{ marginLeft: '8px' }}
        onClick={() => {
          setEditPost && setEditPost(null);
          onCancel && onCancel();
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default PostForm;


