import React, { useEffect, useState } from 'react';
import { getComments } from './Api';
import { useParams } from 'react-router-dom';
import ArticleById from './ArticleById';
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

  if (error) return <p>Error loading comments: {error}</p>;
  if (!comments) return <p>Loading comments...</p>;


  return (
    <>
    <ArticleById />
      <div className='comment-container'>
    <section>
    {comments.map((comment) => (
      <div className='comment-box' key={comment.comment_id}>
        <p>Author: {comment.author}</p>
        <p>Votes: {comment.votes}</p>
        <p>Published at: {comment.created_at}</p>
        <p>{comment.body}</p>
      </div>
    ))}
      <div>

      </div>
    </section>
  </div>
    </>
  );
}

export default Comments