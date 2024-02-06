import './App.css'
import { Routes, Route } from "react-router-dom";
//------Components--------//
import Header from './Components/Header'
import Articles from './Components/Articles'
import Home from './Components/Home';
import ArticleById from './Components/ArticleById';

function App() {

  return (
    <>
    <div className='app-container'>
    <Header />

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/article/:articleId" element={<ArticleById />} />
        </Routes>
      </div>
    </>
  )
}

export default App
