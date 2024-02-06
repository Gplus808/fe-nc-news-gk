import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Articles from './Components/Articles'

function App() {

  return (
    <>
    <Header />
    <Articles />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  )
}

export default App
