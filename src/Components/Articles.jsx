import React, { useEffect, useState } from "react";
import { getArticles } from "./api";
import ArticleList from "./ArticleList";


function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response.data);
      setIsLoading(false)
    }).catch((error) => {
      setError("Failed to load articles.");
      setIsLoading(false);
  })
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading articles: {error}</p>;
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export default Articles;