import React from "react";
import { useEffect, useState } from "react";
import { getArticles } from "./api";


export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((response) => {
      console.log(response.data)
      setArticles(response.data);
    });
  }, [])

  return (
    <>
    <section >
    {articles && 
    articles.map((article) => (
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