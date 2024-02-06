import React from "react";
import { Link } from 'react-router-dom';
import './ArticleList.css'


export default function ArticleList({articles}) {
  return (
    <>
    <section className="article-container">
    {articles.map((article) => (
      <div key={article.article_id} >
        <img className="article-image" src={article.article_img_url} />
        <div className="article-content">
        <Link to={`/article/${article.article_id}`}>
            <button>View Article</button>
          </Link>
        <p>Article ID: {article.article_id}</p>
        <p>Title: {article.title}</p>
        <p>Author: {article.author}</p>
        <p>Published at: {article.created_at}</p>
        <p>Like: {article.votes}</p>
        {/* {"Comment implinetation pending"} */}
        </div>
        </div>
    ))}
    </section>
    </>
  )
}