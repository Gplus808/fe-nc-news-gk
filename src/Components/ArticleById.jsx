import React, { useEffect, useState } from 'react';
import './ArticleById.css'
import { useParams } from 'react-router-dom';
import { getArticleById, getComments } from './Api';
import moment from 'moment';
import Comments from './Comments';
import Votes from './Votes';
import PostCommentForm from './PostCommentForm';

function ArticleById() {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);
    const [showComments, setShowComments] = useState(false);
    const [error, setError] = useState(null);
    const [showPostCommentForm, setShowPostCommentForm] = useState(false);
  
    useEffect(() => {
        getArticleById(articleId)
          .then((response) => {
            console.log("Article data:", response.data);
            setArticle(response.data);
          })
          .catch((error) => {
            setError(`Failed to load articles: ${error}`);
          });
      }, [articleId]);
      
    const toggleComments = () => {
      setShowComments(!showComments)
    };
    const handleCommentPosted = () => {
      setShowComments(true)
    }

  
    if (error) return <p>Error loading article: {error}</p>;
    if (!article) return <p>Loading article...</p>;

    let dateTime = moment(article.article.created_at);

  
    return (
      <div className="article-container">
        <h1>{article.article.title}</h1>
        <img className="article-image" src={article.article.article_img_url} />
        <div className="article-content">
        <p>Article ID: {article.article.article_id}</p>
        <p>Author: {article.article.author}</p>
        <p>Published at: {dateTime.format('DD-MM-YYYY HH:mm:ss')}</p>
        <Votes initialVotes={article.article.votes} articleId={articleId} />
        <p>{article.article.body}</p>
        <button onClick={() => setShowPostCommentForm(!showPostCommentForm)}>Post a comment</button>
        {showPostCommentForm && <PostCommentForm articleId={articleId} />}
        <button onClick={toggleComments}>View Comments</button>
        {showComments && <Comments articleId={article.article.article_id} />}
        </div>
      </div>
    );
  }


export default ArticleById