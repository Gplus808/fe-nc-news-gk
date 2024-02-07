// import React from "react";
import { Link } from "react-router-dom";
import './ArticleList.css'


function Home() {
  return (
    <>
      <Link to="/Articles">
        <button>See All Articles</button>
      </Link>
    </>
  );
}

export default Home;