import axios from "axios";

const articlesApi = axios.create({
    baseURL: "https://nc-news-gk.onrender.com",
  });

export function getArticles() {
    return articlesApi.get(`/api/articles`);
  } 

export function getArticleById(article_Id) {
  console.log(article_Id)
  return articlesApi.get(`/api/articles/${article_Id}`);
}

export default articlesApi