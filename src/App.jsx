import './App.css'
import { Routes, Route } from "react-router-dom";
//------Components--------//
import Header from './Components/Header'
import Articles from './Components/Articles'
import Home from './Components/Home';
import ArticleById from './Components/ArticleById';
import ArticleList from './Components/ArticleList';

function App() {

  return (
    <>
    <div className='app-container'>
    <Header />

    <Routes>
          <Route path="/" element={<Articles />} />
          {/* <Route path="/Articles" element={<Articles />} /> */}
          <Route path="/articles/:articleId" element={<ArticleById />} />
        </Routes>
    </div>  
    </>
  )
}

export default App
