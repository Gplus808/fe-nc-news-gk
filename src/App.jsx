import './App.css'
import { Routes, Route } from "react-router-dom";
//------Components--------//
import Header from './Components/Header'
import Articles from './Components/Articles'
import Home from './Components/Home';
import ArticleById from './Components/ArticleById';
import Comments from './Components/Comments';

function App() {

  return (
    <>
    <div className='app-container'>
    <Header />

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/articles/:articleId" element={<ArticleById />} />
          <Route path="/articles/:articleId/comments" element={<Comments />} />
        </Routes>
    </div>  
    </>
  )
}

export default App
