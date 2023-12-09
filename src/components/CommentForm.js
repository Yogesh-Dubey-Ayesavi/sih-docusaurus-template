// CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ addComment, closeModal }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const comment = { id: Date.now(), text: newComment, nickname: 'User' }; // You may adjust the comment structure
      addComment(comment);
      setNewComment('');
    }
  };

  return (
    <div>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={() => { handleAddComment(); closeModal(); }}>Add Comment</button>
    </div>
  );
};

export default CommentForm;
