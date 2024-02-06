import React from 'react'

const articlesApi = axios.create({
    baseURL: "https://nc-news-gk.onrender.com",
  });

export function getArticles() {
    return articlesApi.get('/api/articles');
  }

export default Api