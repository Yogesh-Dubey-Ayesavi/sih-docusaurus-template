// CommentList.js
import React from 'react';

const CommentList = ({ comments }) => (
  <ul>
    {comments.map((comment) => (
      <li key={comment.id}>
        <strong>{comment.nickname}:</strong> {comment.text}
      </li>
    ))}
  </ul>
);

export default CommentList;
