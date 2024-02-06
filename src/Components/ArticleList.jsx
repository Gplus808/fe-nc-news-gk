import React from "react";


export default function ArticleList({articles}) {
  return (
    <>
    <section >
    {articles.map((article) => (
      <div key={article.article_id}>
        <img src={article.article_img_url} />
        <p>Article ID: {article.article_id}</p>
        <p>Title: {article.title}</p>
        <p>Author: {article.author}</p>
        <p>Published at: {article.created_at}</p>
        <p>Like: {article.votes}</p>
        {/* {"Comment implinetation pending"} */}
      </div>
    ))}
    </section>
    </>
  )
}