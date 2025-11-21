import React from 'react';

const PostItem = ({ post, onClick, onEdit, onDelete, currentUserId, enableEditDelete }) => (
  <div className="post-item" style={{ cursor: 'pointer' }} onClick={() => onClick(post)}>
    <h2>{post.title}</h2>
    <h4>{post.description}</h4>
    <small>{new Date(post.created_at).toLocaleString()}</small>
    {enableEditDelete && currentUserId === post.author_id && (
      <div style={{ marginTop: '10px' }}>
        <button
          onClick={e => {
            e.stopPropagation();
            onEdit(post);
          }}>
          Edit
        </button>
        <button
          onClick={e => {
            e.stopPropagation();
            onDelete(post.id);
          }}
          style={{ marginLeft: '7px', color: 'crimson' }}>
          Delete
        </button>
      </div>
    )}
  </div>
);

export default PostItem;
