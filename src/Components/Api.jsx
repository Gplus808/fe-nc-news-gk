import axios from "axios";

const articlesApi = axios.create({
    baseURL: "https://nc-news-gk.onrender.com",
  });

export function getArticles() {
    return articlesApi.get(`/api/articles`);
  } 

export function getArticleById(article_Id) {
  return articlesApi.get(`/api/articles/${article_Id}`);
}

export function getComments(article_Id) {
  return articlesApi.get(`/api/articles/${article_Id}/comments`);
}

// export default articlesApi