import './App.css'
import { Routes, Route } from "react-router-dom";

//------Components--------//
import Header from './Components/Header'
import Articles from './Components/Articles'
import Home from './Components/Home';

function App() {

  return (
    <>
    <div >
    <Header />

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
        </Routes>
      </div>
    </>
  )
}

export default App
