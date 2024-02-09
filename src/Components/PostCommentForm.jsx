import React, { useState } from 'react';
import { postComment } from './Api'; 

function PostCommentForm({ articleId, onCommentPosted }) {
  const [body, setBody] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const commentToPost = {
      body,
      author: "DefaultUser123", // When I one day get around to creating a User login/sig-up function for this app I will update this section.. written in to do list for now
      article_id,
      votes: 0,
      created_at: new Date().toISOString(),
    };

    postComment(articleId, commentToPost).then(() => {
      onCommentPosted();
      setBody('');
    }).catch((error) => {
      console.error(`Failed to post comment: ${error}`);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter comment: 
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </label>
      {/* <button type="submit">Post Comment</button> */}
    </form>
  );
}

export default PostCommentForm;