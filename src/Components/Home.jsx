// import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Welcome to News App!</h1>
      <Link to="/Articles">
        <button>See All Articles</button>
      </Link>
    </>
  );
}

export default Home;