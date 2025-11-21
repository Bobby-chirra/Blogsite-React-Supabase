import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, onClick, onEdit, onDelete, currentUserId, enableEditDelete }) => (
  <div>
    {posts.length === 0 ? (
      <p>No posts yet.</p>
    ) : (
      posts.map(post => (
        <PostItem
          key={post.id}
          post={post}
          onClick={onClick}
          onEdit={onEdit}
          onDelete={onDelete}
          currentUserId={currentUserId}
          enableEditDelete={enableEditDelete}
        />
      ))
    )}
  </div>
);

export default PostList;
