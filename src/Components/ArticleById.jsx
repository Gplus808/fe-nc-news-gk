import React, { useEffect, useState } from 'react';
import './ArticleById.css'
import { useParams } from 'react-router-dom';
import { getArticleById, getComments } from './Api';
import moment from 'moment';
import Comments from './Comments';

function ArticleById() {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const [showComments, setShowComments] = useState(false);
  
    useEffect(() => {
        getArticleById(articleId)
          .then((response) => {
            setArticle(response.data);
          })
          .catch((error) => {
            setError(`Failed to load articles: ${error}`);
          });
      }, [articleId]);


    const toggleComments = () => setShowComments(!showComments);

  
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
        <p>Like: {article.article.votes}</p>
        <p>{article.article.body}</p>
        <button onClick={toggleComments}>View Comments</button>
                {showComments && <Comments articleId={article.article.article_id} />}
        </div>
      </div>
    );
  }


export default ArticleById