import React, { useEffect, useState } from 'react';
import { getComments } from './Api';
import { useParams } from 'react-router-dom';
import './Comments.css'

function Comments() {
  const { articleId } = useParams();
  const [comments, setComments] = useState([])
  const [error, setError] = useState(null);
  

  useEffect(() => {
    getComments(articleId).then((response) => {
      setComments(response.data.article)
    })
    .catch((error) => {
      setError(`Failed to load comments: ${error}`)
    });
  }, [articleId]);



  if (comments.length === 0) return <p>No comments yet.</p>;
  if (error) return <p>Error loading comments: {error}</p>;
  if (!comments) return <p>Loading comments...</p>;

  return (
    <>
      <div className='comment-container'>
    <section>
      <h3>Comments</h3>
    {comments.map((comment) => (
      <div className='comment-box' key={comment.comment_id}>
        <p>Author: {comment.author}</p>
        <p>Votes: {comment.votes}</p>
        <p>Published at: {comment.created_at}</p>
        <p>{comment.body}</p>
      </div>
    ))}
    </section>
  </div>
    </>
  );
}

export default Comments