import React, { useEffect, useState } from "react";
import { getArticles } from "./api";
import ArticleList from "./ArticleList";


function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response.data.articles);
    });
  }, []);

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export default Articles;