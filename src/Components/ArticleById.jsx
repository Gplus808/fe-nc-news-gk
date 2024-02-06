import React, { useEffect, useState } from 'react';
import './ArticleById.css'
import { useParams } from 'react-router-dom';
import { getArticleById } from './api';

function ArticleById() {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        getArticleById(articleId)
          .then((response) => {
            setArticle(response.data);
          })
          .catch((error) => {
            setError(`Failed to load articles: ${error}`);
          });
      }, [articleId]);
  
    if (error) return <p>Error loading article: {error}</p>;
    if (!article) return <p>Loading article...</p>;

    console.log(article)
  
    return (
      <div className="article-container">
        <h1>{article.article.title}</h1>
        <img className="article-image" src={article.article.article_img_url} />
        <div className="article-content">
        <p>Author: {article.article.author}</p>
        <p>Published at: {article.article.created_at}</p>
        <p>Like: {article.article.votes}</p>
        <p>{article.article.body}</p>
        </div>
      </div>
    );
  }


export default ArticleById