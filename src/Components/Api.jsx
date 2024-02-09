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

export function patchVotes(article_Id, inc_votes) {
  return articlesApi.patch(`/api/articles/${article_Id}`, {inc_votes})
}

export function postComment(article_Id, commentData) {
  return articlesApi.post(`/api/articles/${article_Id}/comments`, {
    body: commentData.body,
  });
}

// export default articlesApi